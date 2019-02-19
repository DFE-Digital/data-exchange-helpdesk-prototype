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

module.exports = {
	// Insert values here

	schools: [
		{
			name: 'fleethams',
			LAESTAB: '456/3204',
			queries: [
				{
					id: '2502',
					type: 'pupil',
					description:
						'Zero attendance sessions possible recorded for pupil on roll. Pupil should only be recorded with zero sessions possible if dually registered and spent all of the previous term for which attendance data is being collected at other registration.',
					guide:
						'Confirmation is not acceptable. Acceptable note entry ‘pupil is dually registered and though did not attend this establishment in the previous term, they remain on roll’.',
					notes: [
						{
							sender: 'school',
							text:
								'The pupil is dually registered and did not attend school this term.',
							date: '26 January 2019 at 9:43'
						},
						{
							sender: 'dfe',
							text: 'It is not clear if this refers to all pupils.',
							date: '26 January 2019 at 15:43'
						},
						{
							sender: 'school',
							text: 'Yes, this applies to all 3 pupils.',
							date: '27 January 2019 at 8:23'
						}
					],
					pupils: [
						{
							surname: 'CAIN',
							firstname: 'Jaylahs',
							UPN: 'W30433221895A'
						},
						{
							surname: 'ARCHER',
							firstname: 'Allyson',
							UPN: 'W30433221932B',
							dob: '29 August 2009'
						},
						{
							surname: 'ZIMMERMAN',
							firstname: 'Ella',
							UPN: 'W30433221932B',
							dob: '13 February 2008'
						},
						{
							surname: 'GILBERT',
							firstname: 'Andres',
							UPN: 'W30433222132B',
							dob: '2 April 2011'
						},
						{
							surname: 'TRUJILLO',
							firstname: 'Karissa',
							UPN: 'W304332222312A',
							dob: '4 June 2013'
						}
					]
				}
			]
		}
	]
}
