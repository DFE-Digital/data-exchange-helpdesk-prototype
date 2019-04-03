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

const misSchool = generate.school(
	generate.schoolName(),
	'420',
	'maintained',
	32
)

misSchool.queries = generate.queries(misSchool.noOfQueries)

misSchool.noOfErrors = 68

misSchool.errors = generate.errors(misSchool.noOfErrors)

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

	misSchool
}
