const express = require('express')
const router = express.Router()
const set = require('lodash.set')
const generate = require('./data/generators')

// Generic 'next page' rule
router.post('*', (req, res, next) => {
	console.log(req.body)
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
	const queryIndex = req.session.data['selected-query']
	const response = req.body.response || req.session.data.response
	const responseNote = req.session.data['response-note']
	const path = 'schools[' + schoolIndex + ']' + '.queries[' + queryIndex + ']'
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
	const queryIndex = req.session.data['selected-query']
	const path = 'schools[' + schoolIndex + ']' + '.queries[' + queryIndex + ']'
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
	console.log(selectedSchoolIndex)
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
