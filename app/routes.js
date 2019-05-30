const express = require('express')
const router = express.Router()
const set = require('lodash.set')
const get = require('lodash.set')
const generate = require('./data/generators')

function setUrlParameter(url, key, value) {
	var key = encodeURIComponent(key),
		value = encodeURIComponent(value)

	var baseUrl = url.split('?')[0],
		newParam = key + '=' + value,
		params = '?' + newParam

	if (url.split('?')[1] == undefined) {
		// if there are no query strings, make urlQueryString empty
		urlQueryString = ''
	} else {
		urlQueryString = '?' + url.split('?')[1]
	}

	// If the "search" string exists, then build params from it
	if (urlQueryString) {
		var updateRegex = new RegExp('([?&])' + key + '[^&]*')
		var removeRegex = new RegExp('([?&])' + key + '=[^&;]+[&;]?')

		if (typeof value === 'undefined' || value === null || value === '') {
			// Remove param if value is empty
			params = urlQueryString.replace(removeRegex, '$1')
			params = params.replace(/[&;]$/, '')
		} else if (urlQueryString.match(updateRegex) !== null) {
			// If param exists already, update it
			params = urlQueryString.replace(updateRegex, '$1' + newParam)
		} else if (urlQueryString == '') {
			// If there are no query strings
			params = '?' + newParam
		} else {
			// Otherwise, add it to end of query string
			params = urlQueryString + '&' + newParam
		}
	}

	// no parameter was set so we don't need the question mark
	params = params === '?' ? '' : params

	return baseUrl + params
}

const definedQueries = [
	{
		id: generate.uuid(),
		number: 160,
		category: 'error',
		type: 'school',
		description:
			'The school’s URN is either missing or doesn’t match the URN recorded on Get information about schools (GIAS)'
	},
	{
		id: generate.uuid(),
		number: 1940,
		category: 'error',
		type: 'pupil',
		description: 'Pupils aged 5-15 cannot be shown as having part-time status',
		guide: 'All pupils aged 5-15 should be registered as full-time.',
		highlights: [
			{
				item: 'Part-time indicator',
				content: 'True'
			},
			{
				item: 'Date of birth',
				content: '23 February 2011'
			}
		],
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
		id: generate.uuid(),
		number: 2350,
		category: 'error',
		type: 'pupil',
		description: 'Some address details are missing.',
		guide: 'Address records need to be complete for safeguarding reasons.',
		highlights: [
			{
				item: 'Address line 1',
				content: '-'
			}
		],
		pupils: generate.pupils(
			generate.randomItemFrom([
				generate.randomNumber(1, 10),
				generate.randomNumber(1, 10),
				generate.randomNumber(10, 20),
				generate.randomNumber(20, 50),
				1
			])
		)
	},
	{
		id: generate.uuid(),
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
		id: generate.uuid(),
		number: '1601Q',
		category: 'query',
		type: 'pupil',
		description: 'The pupil’s age is out of range for this type of school',
		guide:
			'You need to explain why the pupil’s age is out of range for this type of school.',
		highlights: [
			{
				item: 'Date of birth',
				content: '10 April 1994'
			},
			{
				item: 'School type',
				content: '49 - Academies'
			}
		],
		confirmationIsAcceptable: false,
		pupils: generate.pupils(3)
	},
	{
		id: generate.uuid(),
		number: '1760Q',
		category: 'query',
		type: 'pupil',
		description:
			'No pupils were eligible for free school meals since the last census.',
		guide:
			'You need to confirm that no pupils were eligible for free school meals since the last census.',
		confirmationIsAcceptable: true
	},
	{
		id: generate.uuid(),
		number: '1881Q',
		category: 'query',
		type: 'pupil',
		description:
			'The number of possible sessions entered, would mean the pupil started school in a previous term and not on the date shown in your data',
		guide:
			'You need to explain why there are possible sessions from a previous term. For example, if the pupil left school and was later readmitted this would be acceptable.',
		highlights: [
			{
				item: 'Possible sessions',
				content: '49'
			}
		],
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
	const queryId = req.session.data['selected-query']
	const existingQuery = req.session.data.schools[schoolIndex].queries.find(
		query => {
			return query.id == queryId
		}
	)

	const note = {
		type: 'school',
		author: req.session.data['set-school-user-name'],
		text: responseNote,
		date: new Date().getTime()
	}

	var newNotes = [note]
	if (Array.isArray(existingQuery.notes)) {
		existingQuery.notes.push(note)
		newNotes = existingQuery.notes
	}

	queries.map(query => {
		if (query.id === queryId) {
			query.notes = newNotes
			query.explainedOn = new Date().getTime()
			query.explained = 'true'
		}
	})

	set(req.session.data, queriesPath, queries)
	if (req.headers.referer.includes('single-query')) {
		res.redirect(
			req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
				'queries'
		)
	} else {
		res.redirect(req.headers.referer)
	}
})

router.all('/add-selected-explanation', (req, res) => {
	const schoolIndex = parseInt(req.session.data['selected-school'])
	const responseNote = req.session.data['response-note']
	const queriesPath = 'schools[' + schoolIndex + '].queries'
	var queries = req.session.data.schools[schoolIndex].queries
	const queryId = req.session.data['selected-query']
	const existingQuery = req.session.data.schools[schoolIndex].queries.find(
		query => {
			return query.id == queryId
		}
	)
	var remainingPupils = []
	var leavingPupils = []
	existingQuery.pupils.forEach(pupil => {
		if (req.session.data['selected-pupils'].includes(pupil.id)) {
			leavingPupils.push(pupil)
		} else {
			remainingPupils.push(pupil)
		}
	})
	queries.map(query => {
		if (query.id === queryId) {
			query.pupils = remainingPupils
		}
	})

	const note = {
		type: 'school',
		author: req.session.data['set-school-user-name'],
		text: responseNote,
		date: new Date().getTime()
	}

	var newNotes = [note]
	if (Array.isArray(existingQuery.notes)) {
		existingQuery.notes.push(note)
		newNotes = existingQuery.notes
	}

	var newQuery = {
		id: generate.uuid(),
		number: existingQuery.number,
		category: existingQuery.category,
		type: existingQuery.type,
		description: existingQuery.description,
		guide: existingQuery.guide,
		pupils: leavingPupils,
		notes: newNotes,
		explainedOn: new Date().getTime(),
		explained: 'true'
	}

	queries.push(newQuery)

	set(req.session.data, queriesPath, queries)

	res.redirect(
		setUrlParameter(
			req.headers.referer,
			'numberOfPupilsMoved',
			leavingPupils.length
		)
	)
})

router.all('/undo-explanation', (req, res) => {
	const schoolIndex = parseInt(req.session.data['selected-school'])
	const queriesPath = 'schools[' + schoolIndex + '].queries'
	var queries = req.session.data.schools[schoolIndex].queries
	const queryId = req.session.data['selected-query']
	const currentQuery = queries.find(query => {
		return query.id == queryId
	})
	const currentQueryPupils = currentQuery.pupils
	var outputQueries = []
	var unexplainedQueryExists = false
	queries.forEach(query => {
		if (query.explained != 'true' && query.number == currentQuery.number) {
			unexplainedQueryExists = true
			return
		}
	})

	if (unexplainedQueryExists) {
		queries.forEach(query => {
			if (query.explained != 'true' && query.number == currentQuery.number) {
				if (Array.isArray(query.pupils)) {
					query.pupils = query.pupils.concat(currentQueryPupils)
				} else {
					query.pupils = currentQueryPupils
				}
			}
			if (query.id != currentQuery.id) {
				outputQueries.push(query)
			}
		})
	} else {
		queries.forEach(query => {
			if (query.id == currentQuery.id) {
				var outputNotes = currentQuery.notes
				if (Array.isArray(outputNotes)) {
					outputNotes.pop()
				}
				query.explained = false
				query.explainedOn = null
				query.notes = outputNotes
				outputQueries.push(query)
			} else {
				outputQueries.push(query)
			}
		})
	}

	set(req.session.data, queriesPath, outputQueries)
	res.redirect(req.headers.referer)
})

router.all('/undo-selected-explanation', (req, res) => {
	const schoolIndex = parseInt(req.session.data['selected-school'])
	const queriesPath = 'schools[' + schoolIndex + '].queries'
	var queries = req.session.data.schools[schoolIndex].queries
	const queryId = req.session.data['selected-query']
	const currentQuery = queries.find(query => {
		return query.id == queryId
	})
	const currentQueryPupils = currentQuery.pupils
	var outputQueries = []
	var remainingPupils = []
	var leavingPupils = []
	currentQueryPupils.forEach(pupil => {
		if (req.session.data['selected-pupils'].includes(pupil.id)) {
			leavingPupils.push(pupil)
		} else {
			remainingPupils.push(pupil)
		}
	})
	var unexplainedQueryExists = false
	queries.forEach(query => {
		if (query.explained != 'true' && query.number == currentQuery.number) {
			unexplainedQueryExists = true
			return
		}
	})
	if (unexplainedQueryExists) {
		queries.forEach(query => {
			if (query.explained != 'true' && query.number == currentQuery.number) {
				if (Array.isArray(query.pupils)) {
					query.pupils = query.pupils.concat(leavingPupils)
				} else {
					query.pupils = leavingPupils
				}
				outputQueries.push(query)
			} else {
				if (query.id == currentQuery.id) {
					query.pupils = remainingPupils
					if (remainingPupils.length != 0) {
						outputQueries.push(query)
					}
				} else {
					outputQueries.push(query)
				}
			}
		})
	} else {
		queries.forEach(query => {
			if (query.id == currentQuery.id) {
				// Save remaining pupils to old query if any
				if (remainingPupils.length != 0) {
					query.pupils = remainingPupils
					outputQueries.push(query)
				}

				// create new unexplained query
				var outputNotes = currentQuery.notes
				if (Array.isArray(outputNotes)) {
					outputNotes.pop()
				} else {
					outputNotes = []
				}
				var newQuery = {
					id: generate.uuid(),
					number: currentQuery.number,
					category: currentQuery.category,
					type: currentQuery.type,
					description: currentQuery.description,
					guide: currentQuery.guide,
					pupils: leavingPupils,
					notes: outputNotes,
					explainedOn: null,
					explained: false
				}
				outputQueries.push(newQuery)
			} else {
				outputQueries.push(query)
			}
		})
	}

	set(req.session.data, queriesPath, outputQueries)
	if (remainingPupils.length == 0) {
		res.redirect(
			req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
				'handled'
		)
	} else {
		res.redirect(
			setUrlParameter(
				req.headers.referer,
				'numberOfPupilsMoved',
				leavingPupils.length
			)
		)
	}
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
