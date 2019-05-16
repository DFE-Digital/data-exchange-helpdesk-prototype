const express = require('express')
const router = express.Router()
const set = require('lodash.set')
const get = require('lodash.set')
const generate = require('./data/generators')

const definedQueries = [
	{
		id: 0,
		number: 1940,
		category: 'error',
		type: 'pupil',
		description: 'Pupils aged 5-15 cannot be shown as having part-time status',
		guide: 'Full-time attendance is mandatory for pupils aged 5-15',
		pupils: generate.pupils(
			generate.randomItemFrom([
				generate.randomNumber(1, 10),
				generate.randomNumber(1, 10),
				generate.randomNumber(10, 20),
				generate.randomNumber(20, 50),
				1,
				1,
				1,
				1,
				1
			])
		)
	},
	{
		id: 1,
		number: 2350,
		category: 'error',
		type: 'pupil',
		description: 'Some address details are missing.',
		guide:
			'Correct records need to be kept for each pupil due for safeguarding reasons as well as parent/guardian contact',
		pupils: generate.pupils(
			generate.randomItemFrom([
				generate.randomNumber(1, 10),
				generate.randomNumber(1, 10),
				generate.randomNumber(10, 20),
				generate.randomNumber(20, 50),
				1,
				1,
				1,
				1,
				1
			])
		)
	},
	{
		id: 2,
		number: 'TonT1B',
		category: 'query',
		type: 'term-on-term',
		description:
			'The number of pupils at your school is much higher than during the last census',
		guide:
			'You need to explain why the number of pupils at your school is much higher than during the last census.',
		confirmationIsAcceptable: false
	},
	{
		id: 3,
		number: '1601Q',
		category: 'query',
		type: 'pupil',
		description: 'The pupil’s age is out of range for this type of school',
		guide:
			'You need to explain why the pupil’s age is out of range for this type of school',
		confirmationIsAcceptable: false,
		pupils: generate.pupils(3)
	},
	{
		id: 4,
		number: '1760Q',
		category: 'query',
		type: 'pupil',
		description:
			'No pupils were eligible for free school meals since the last census.',
		guide:
			'You need to confirm that no pupils were eligible for free school meals since the last census. If this is not accurate you must update the data in your MIS.',
		confirmationIsAcceptable: true
	},
	{
		id: 5,
		number: '1881Q',
		category: 'query',
		type: 'pupil',
		description:
			'The number of possible sessions entered, would mean the pupil started school in a previous term and not on the date shown in your data',
		guide:
			'	You need to explain why there are possible sessions from a previous term. For example, if the pupil left school and was later readmitted this would be acceptable.',
		confirmationIsAcceptable: false,
		pupils: generate.pupils(1)
	}
]

// Generic 'next page' rule
router.post('*', (req, res, next) => {
	if (req.body['next-page']) {
		res.redirect(req.body['next-page'])
	} else {
		next()
	}
})

router.all('*', (req, _, next) => {
	set(req.session.data, 'time', new Date().getTime())
	next()
})

// Generic 'next page' rule
router.all('/handle-query', (req, res) => {
	const schoolIndex = req.session.data['selected-school']
	var school = 'schools[' + schoolIndex + ']'
	if (schoolIndex == 'static') {
		school = req.session.data['school-path']
	}
	const queryIndex = req.session.data['selected-query']
	const response = req.session.data['response']
	const responseNote = req.session.data['response-note']
	const path = school + '.queries[' + queryIndex + ']'
	set(req.session.data, path + 'handled', 'true')
	if (response === 'approved') {
		set(req.session.data, path + 'approved', 'true')
	} else {
		set(req.session.data, path + 'approved', 'false')
		set(req.session.data, path + 'response', responseNote)
	}
	set(req.session.data, path + 'handledOn', new Date().getTime())
	res.redirect(req.headers.referer)
})

router.all('/delete-response', (req, res) => {
	const schoolIndex = req.session.data['selected-school']
	var school = 'schools[' + schoolIndex + ']'
	if (schoolIndex == 'static') {
		school = req.session.data['school-path']
	}
	const queryIndex = req.session.data['selected-query']
	const path = school + '.queries[' + queryIndex + ']'
	set(req.session.data, path + 'handled', 'false')
	set(req.session.data, path + 'approved', '')
	set(req.session.data, path + 'auto', 'false')
	set(req.session.data, path + 'response', '')
	set(req.session.data, path + 'handledOn', '')
	if (req.session.data.schools[schoolIndex].responsesSent == 'true') {
		const schoolPath = 'schools[' + schoolIndex + '].responsesSent'
		set(req.session.data, schoolPath, 'false')
	}
	res.redirect(req.headers.referer)
})

router.all('/add-school-explanation', (req, res) => {
	const school = req.session.data['school-path']
	const queryIndex = req.session.data['selected-query']
	const responseNote = req.session.data['response-note']
	const queryPath = school + '.queries[' + queryIndex + ']'
	const existingNotes = get(req.session.data, queryPath + '.notes')
	const note = {
		type: 'school',
		author: req.session.data['username'],
		text: responseNote,
		date: new Date().getTime()
	}
	var newNotes = [note]
	if (Array.isArray(existingNotes)) {
		existingNotes.push(note)
		newNotes = existingNotes
	}
	set(req.session.data, queryPath + '.notes', newNotes)
	set(req.session.data, queryPath + '.explainedOn', new Date().getTime())
	set(req.session.data, queryPath + '.explained', 'true')
	res.redirect(req.headers.referer)
})

router.all('/add-explanation', (req, res) => {
	const schoolIndex = parseInt(req.session.data['selected-school'])
	const responseNote = req.session.data['response-note']
	const queriesPath = 'schools[' + schoolIndex + '].queries'
	var queries = req.session.data.schools[schoolIndex].queries
	const queryIndex = parseInt(req.session.data['selected-query'])
	queries.map(query => {
		if (query.id === queryIndex) {
			query.notes.push({
				type: 'school',
				author: req.session.data['set-school-user-name'],
				text: responseNote,
				date: new Date().getTime()
			})
			query.explainedOn = new Date().getTime()
			query.explained = 'true'
		}
	})

	set(req.session.data, queriesPath, queries)
	res.redirect(req.headers.referer)
})

router.all('/undo-explanation', (req, res) => {
	const schoolIndex = parseInt(req.session.data['selected-school'])
	const queriesPath = 'schools[' + schoolIndex + '].queries'
	var queries = req.session.data.schools[schoolIndex].queries
	const queryIndex = parseInt(req.session.data['selected-query'])
	queries.map(query => {
		if (query.id === queryIndex) {
			query.notes.pop()
			query.explainedOn = null
			query.explained = 'false'
		}
	})

	set(req.session.data, queriesPath, queries)
	res.redirect(req.headers.referer)
})

router.all('/edit-school-explanation', (req, res) => {
	const school = req.session.data['school-path']
	const queryIndex = req.session.data['selected-query']
	const responseNote = req.session.data['response-note']
	if (!(responseNote == null || responseNote == '')) {
		const queryPath = school + '.queries[' + queryIndex + ']'
		const existingNotes = get(req.session.data, queryPath + '.notes')
		const note = {
			type: 'school',
			author: req.session.data['username'],
			text: responseNote,
			date: new Date().getTime()
		}
		var newNotes = [note]
		if (Array.isArray(existingNotes)) {
			existingNotes.pop()
			existingNotes.push(note)
			newNotes = existingNotes
		}
		set(req.session.data, queryPath + '.notes', newNotes)
		set(req.session.data, queryPath + '.explainedOn', new Date().getTime())
		set(req.session.data, queryPath + '.explained', 'true')
	}
	res.redirect(req.headers.referer)
})

router.all('/undo-school-explanation', (req, res) => {
	const school = req.session.data['school-path']
	const queryIndex = req.session.data['selected-query']
	const queryPath = school + '.queries[' + queryIndex + ']'
	const notesPath = queryPath + '.notes'
	set(req.session.data, queryPath + '.notes', [])
	set(req.session.data, queryPath + '.explainedOn', null)
	set(req.session.data, queryPath + '.explained', 'false')
	res.redirect(req.headers.referer)
})

router.all('/send-slt-school', (req, res) => {
	const path = 'schools[0]'
	var school = req.session.data.sltSchool
	school.hasQueries = 'true'
	school.submittedDate = new Date().getTime()
	set(req.session.data, path, school)
	set(req.session.data, 'sltSchoolSent', 'true')
	res.redirect(req.headers.referer)
})

router.all('/school-send-census', (req, res) => {
	const selectedSchoolIndex = parseInt(req.session.data['selected-school'])
	const path = 'schools[' + selectedSchoolIndex + ']'

	const existingNotes =
		req.session.data.schools[selectedSchoolIndex].returnNotes
	var newNotes = []
	if (req.session.data['add-additional-note'] == 'yes') {
		const note = {
			type: 'school',
			author: req.session.data['username'],
			text: req.session.data['additional-note'],
			date: new Date().getTime()
		}
		if (Array.isArray(existingNotes)) {
			existingNotes.push(note)
			newNotes = existingNotes
		} else {
			newNotes = [note]
		}
	}
	set(req.session.data, path + '.returnNotes', newNotes)
	set(req.session.data, path + '.hasQueries', 'true')
	set(req.session.data, path + '.hasBuilt', 'true')
	set(req.session.data, path + '.explanationsSent', 'true')
	set(req.session.data, path + '.responsesSent', 'false')
	set(req.session.data, path + '.schoolSent', 'true')
	set(req.session.data, path + '.submittedDate', new Date().getTime())
	res.redirect(req.headers.referer)
})

router.all('/respond-slt-school', (req, res) => {
	const path1 = 'sltSchool'
	const path2 = 'schools[0]'
	const queries = req.session.data.schools[0].queries
	var acceptedCount = 0
	queries.forEach(query => {
		if (query.approved == 'true') {
			acceptedCount++
		}
	})
	set(req.session.data, path1 + '.responsesSent', 'true')
	set(req.session.data, path1 + '.approvedCount', acceptedCount)
	set(req.session.data, path1 + '.respondedOn', new Date().getTime())
	set(req.session.data, path2 + '.responsesSent', 'true')
	set(req.session.data, path2 + '.approvedCount', acceptedCount)
	set(req.session.data, path2 + '.respondedOn', new Date().getTime())
	res.redirect(req.headers.referer)
})

router.all('/amend-collector', (req, res) => {
	const selectedCollector = req.session.data['selected-user']
	const firstName = req.session.data['first-name']
	const lastName = req.session.data['last-name']
	const email = req.session.data['email']
	const hours = req.session.data['hours-per-week']
	const path = 'collectors[' + selectedCollector + ']'
	set(req.session.data, path + '.firstName', firstName)
	set(req.session.data, path + '.lastName', lastName)
	set(req.session.data, path + '.email', email)
	set(req.session.data, path + '.weighting', hours / 37)
	res.redirect(
		req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
			'manage'
	)
})

router.all('/allocate-work', (req, res) => {
	const assignLocalAuthorities = (users, localAuthorities) => {
		for (i in localAuthorities) {
			var la = localAuthorities[i]
			if (i < users.length) {
				users[i].las.push(la)
			} else {
				var users = users.sort((a, b) => {
					var aSum = 0
					for (i in a.las) {
						aSum += a.las[i].schoolCount
					}
					var bSum = 0
					for (i in b.las) {
						bSum += b.las[i].schoolCount
					}
					return aSum / a.weighting - bSum / b.weighting
				})
				users[0].las.push(la)
				var schoolSum = 0
				for (i in users[0].las) {
					schoolSum += users[0].las[i].schoolCount
				}
				users[0].laTotal = schoolSum
			}
		}
	}

	const assignAcademies = (users, academiesTotal) => {
		users.forEach(user => {
			if (!user.academiesTotal) {
				user.academiesTotal = 0
			}
		})
		for (var i = 0; i < academiesTotal; i++) {
			var users = users.sort((a, b) => {
				return (
					(a.academiesTotal + a.laTotal) / a.weighting -
					(b.academiesTotal + b.laTotal) / b.weighting
				)
			})
			users[0].academiesTotal++
		}
	}

	var collectors = req.session.data.collectors
	var localAuthorities = req.session.data.localAuthorities
	var academiesTotal = req.session.data.academiesTotal

	assignLocalAuthorities(collectors, localAuthorities)
	assignAcademies(collectors, academiesTotal)

	set(req.session.data, 'collectors', collectors)
	set(req.session.data, 'isAllocated', true)

	res.redirect(
		req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
			'manage'
	)
})

router.all('/select-school', (req, res) => {
	const selectedSchoolIndex = parseInt(req.session.data['selected-school'])
	const selectedSchool = req.session.data.schools.find(school => {
		return school.id == selectedSchoolIndex
	})
	if (selectedSchool.hasBuilt !== 'true') {
		const path = 'schools[' + selectedSchoolIndex + ']'
		const queries = generate.queries(selectedSchool.noOfQueries)
		set(req.session.data, path + '.queries', queries)
		const errors = generate.errors(selectedSchool.noOfErrors)
		set(req.session.data, path + '.errors', errors)
		set(req.session.data, path + '.hasBuilt', 'true')
	}

	res.redirect(req.headers.referer)
})

router.all('/send-responses', (req, res) => {
	const selectedSchoolIndex = parseInt(req.session.data['selected-school'])
	const path = 'schools[' + selectedSchoolIndex + ']'
	const school = req.session.data.schools[selectedSchoolIndex]
	const returnResponse = req.session.data['return-response']
	const queries = school.queries
	const errors = school.errors
	var acceptedCount = 0
	var isApproved = 'false'
	queries.forEach(query => {
		if (query.approved == 'true') {
			acceptedCount++
		}
	})
	queries.map(query => {
		query.notes.push({
			author:
				req.session.data.collectors[0].firstName +
				' ' +
				req.session.data.collectors[0].lastName,
			text: query.response,
			date: query.handledOn,
			type: query.approved == 'false' ? 'reply' : 'approval'
		})
		query.explained = 'false'
		query.explainedOn = null
	})
	if (acceptedCount == queries.length) {
		isApproved = 'true'
	}
	if (isApproved == 'true') {
		set(req.session.data, path + '.isApproved', 'true')
	}
	const existingNotes =
		req.session.data.schools[selectedSchoolIndex].returnNotes
	var newNotes = []
	if (req.session.data['add-additional-note'] == 'yes') {
		const note = {
			type: 'reply',
			author: req.session.data['username'],
			text: req.session.data['additional-note'],
			date: new Date().getTime()
		}
		if (Array.isArray(existingNotes)) {
			existingNotes.push(note)
			newNotes = existingNotes
		} else {
			newNotes = [note]
		}
		set(req.session.data, path + '.newNote', 'true')
	}
	set(req.session.data, path + '.returnNotes', newNotes)
	set(req.session.data, path + '.queries', queries)
	set(req.session.data, path + '.returnResponse', returnResponse)
	set(req.session.data, path + '.responsesSent', 'true')
	set(req.session.data, path + '.explanationsSent', 'false')
	set(req.session.data, path + '.approvedCount', acceptedCount)
	set(req.session.data, path + '.respondedOn', new Date().getTime())
	set(req.session.data, path + '.needsTrimming', 'true')
	res.redirect(
		req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
			'return-sent'
	)
})

router.all('/trim-approved', (req, res) => {
	const selectedSchoolIndex = req.session.data['selected-school']
	const path = 'schools[' + selectedSchoolIndex + ']'
	const school = req.session.data.schools[selectedSchoolIndex]
	const queries = school.queries
	const rejectedQueries = []
	queries.forEach(query => {
		if (query.approved != 'true') {
			rejectedQueries.push(query)
		}
	})
	set(req.session.data, path + '.queries', rejectedQueries)
	set(req.session.data, path + '.isReplying', 'true')
	set(req.session.data, path + '.needsTrimming', 'false')
	res.redirect(req.headers.referer)
})

router.all('/school-send', (req, res) => {
	const school = req.session.data['school-path']
	const path = school
	const queries = req.session.data.schools[selectedSchoolIndex].queries
	var acceptedCount = 0
	queries.forEach(query => {
		if (query.approved == 'true') {
			acceptedCount++
		}
	})
	set(req.session.data, path + '.explanationsSent', 'true')
	set(req.session.data, path + '.approvedCount', acceptedCount)
	set(req.session.data, path + '.respondedOn', new Date().getTime())
	res.redirect(
		req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
			'return-sent'
	)
})

router.all('/load-school', (req, res) => {
	const schoolName = req.session.data['set-school-name']
	const setNoOfQueries = req.session.data['set-no-of-queries']
	const setNoOfErrors = req.session.data['set-no-of-errors']
	const schoolPath = 'schools[0]'
	var school = generate.school(
		schoolName,
		generate.randomCode(3),
		generate.randomItemFrom(['academy', 'maintained', 'maintained']),
		setNoOfQueries
	)
	school.noOfErrors = parseInt(setNoOfErrors)
	school.errors = generate.errors(school.noOfErrors)
	school.queries = generate.schoolQueries(school.noOfQueries)
	school.id = 0
	if (req.session.data['set-use-defined-queries']) {
		school.errors = null
		school.queries = definedQueries
		set(req.session.data, 'set-use-defined-queries', false)
	}
	set(req.session.data, schoolPath, school)
	set(req.session.data, 'selected-school', 0)
	set(req.session.data, schoolPath + '.hasQueries', 'true')
	set(req.session.data, schoolPath + '.hasBuilt', 'true')
	res.redirect(
		req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
			'dph/school/queries'
	)
})

module.exports = router
