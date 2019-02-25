const express = require('express')
const router = express.Router()
const set = require('lodash.set')

// Generic 'next page' rule
router.post('*', function(req, res, next) {
	console.log(req.body)
	if (req.body['next-page']) {
		res.redirect(req.body['next-page'])
	} else {
		next()
	}
})

// Generic 'next page' rule
router.all('/handle-query', function(req, res, next) {
	const schoolIndex = req.session.data['selected-school']
	const queryIndex = req.session.data['selected-query']
	const response = req.body['response'] || req.session.data['response']
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

router.all('/delete-response', function(req, res, next) {
	const schoolIndex = req.session.data['selected-school']
	const queryIndex = req.session.data['selected-query']
	const path = 'schools[' + schoolIndex + ']' + '.queries[' + queryIndex + ']'
	set(req.session.data, path + 'handled', 'false')
	set(req.session.data, path + 'approved', '')
	set(req.session.data, path + 'response', '')
	set(req.session.data, path + 'handledOn', '')
	res.redirect(req.headers.referer)
})

module.exports = router
