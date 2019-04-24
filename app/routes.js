const express = require('express')
const router = express.Router()
const set = require('lodash.set')
const get = require('lodash.set')
const generate = require('./data/generators')

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
	const queryIndex = req.session.data['selected-query'].trim()
	const response = req.session.data['response'].trim()
	const responseNote = req.session.data['response-note'].trim()
	const path = school + '.queries[' + queryIndex + ']'
	console.log(path)
	console.log(response)
	console.log(responseNote)
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
	const schoolIndex = req.session.data['selected-school'].trim()
	var school = 'schools[' + schoolIndex + ']'
	if (schoolIndex == 'static') {
		school = req.session.data['school-path']
	}
	const queryIndex = req.session.data['selected-query'].trim()
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
	const school = req.session.data['school-path'].trim()
	const queryIndex = req.session.data['selected-query'].trim()
	const responseNote = req.session.data['response-note'].trim()
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
		newNotes = existingNotes.push(note)
	}
	set(req.session.data, queryPath + '.notes', newNotes)
	set(req.session.data, queryPath + '.explainedOn', new Date().getTime())
	set(req.session.data, queryPath + '.explained', 'true')
	res.redirect(req.headers.referer)
})

router.all('/edit-school-explanation', (req, res) => {
	const school = req.session.data['school-path'].trim()
	const queryIndex = req.session.data['selected-query'].trim()
	const responseNote = req.session.data['response-note'].trim()
	if (!(responseNote == null || responseNote == '')) {
		const queryPath = school + '.queries[' + queryIndex + ']'
		const existingNotes = get(req.session.data, queryPath + '.notes')
		const note = {
			type: 'school',
			author: req.session.data['username'],
			text: responseNote,
			date: new Date().getTime()
		}
		console.log(responseNote)
		console.log(queryPath)
		var newNotes = [note]
		if (Array.isArray(existingNotes)) {
			existingNotes.pop()
			newNotes = existingNotes.push(note)
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
	const selectedSchoolIndex = req.session.data['selected-school']
	const selectedSchool = req.session.data['schools'][selectedSchoolIndex]
	const path = 'schools[' + selectedSchoolIndex + ']'
	if (selectedSchool.hasQueries != 'true') {
		const queries = generate.queries(selectedSchool.noOfQueries)
		set(req.session.data, path + '.hasQueries', 'true')
		set(req.session.data, path + '.queries', queries)
	}
	if (selectedSchool.hasErrors != 'true') {
		const errors = generate.errors(selectedSchool.noOfErrors)
		set(req.session.data, path + '.hasErrors', 'true')
		set(req.session.data, path + '.errors', errors)
	}
	res.redirect(req.headers.referer)
})

router.all('/send-responses', (req, res) => {
	const selectedSchoolIndex = req.session.data['selected-school']
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
	if (errors == null || errors.length == 0) {
		if (acceptedCount == queries.length) {
			isApproved = 'true'
		}
	} else {
		const returnAcceptance = req.session.data['accept-errors'] == 'yes'
		if (returnAcceptance) {
			isApproved = 'true'
		}
	}
	if (isApproved) {
		set(req.session.data, path + '.isApproved', 'true')
	}
	set(req.session.data, path + '.returnResponse', returnResponse)
	set(req.session.data, path + '.responsesSent', 'true')
	set(req.session.data, path + '.approvedCount', acceptedCount)
	set(req.session.data, path + '.respondedOn', new Date().getTime())
	res.redirect(
		req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
			'return-sent'
	)
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
	set(req.session.data, path + '.responsesSent', 'true')
	set(req.session.data, path + '.approvedCount', acceptedCount)
	set(req.session.data, path + '.respondedOn', new Date().getTime())
	res.redirect(
		req.headers.referer.substr(0, req.headers.referer.lastIndexOf('/') + 1) +
			'return-sent'
	)
})

module.exports = router
