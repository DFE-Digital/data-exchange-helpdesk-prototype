/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

const generate = require('./generators')

var totalLASchools = 0

generate.localAuthorities.forEach(la => {
	totalLASchools += la.schoolCount
})

const totalNumberOfSchools = 21321

const academiesTotal = totalNumberOfSchools - totalLASchools

var misSchool = generate.school(generate.schoolName(), '420', 'maintained', 8)

misSchool.queries = generate.queries(misSchool.noOfQueries)

misSchool.noOfErrors = 2

misSchool.errors = generate.errors(misSchool.noOfErrors)

misSchool.pupils = generate.pupils(50)

misSchool.pupils.map(pupil => {
	pupil.absences = generate.randomNumber(3, 23)
	return pupil
})

var sltSchool = generate.school(generate.schoolName(), '420', 'maintained', 4)

sltSchool.queries = generate.queries(sltSchool.noOfQueries)

sltSchool.noOfErrors = 0

sltSchool.errors = [generate.errors(sltSchool.noOfErrors)]

sltSchool.pupils = generate.pupils(50)

sltSchool.pupils.map(pupil => {
	pupil.absences = generate.randomNumber(3, 23)
	return pupil
})

const laSchools = new Array(174).fill(null).map((_, i) => {
	var school = generate.school(
		generate.schoolName(),
		'844',
		'maintained',
		generate.randomNumber(0, 20)
	)
	school.submittedDate = generate.randomDate(7, 0)
	return school
})

module.exports = {
	// Insert values here

	username: generate.name(),

	'selected-school': 0,

	collectors: generate.collectors(15),

	localAuthorities: generate.localAuthorities,

	academiesTotal,

	totalNumberOfSchools,

	totalLASchools,

	isAllocated: false,

	schools: generate.schools(35),

	misSchool,

	sltSchool,

	laSchools
}
