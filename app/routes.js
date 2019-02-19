const express = require('express')
const router = express.Router()

// Generic 'next page' rule
router.post('*', function(req, res, next) {
	console.log(req.body)
	if (req.body['next-page']) {
		res.redirect(req.body['next-page'])
	} else {
		next()
	}
})

module.exports = router
