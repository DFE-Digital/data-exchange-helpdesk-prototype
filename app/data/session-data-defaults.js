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

module.exports = {
	// Insert values here

	username: generate.name(),

	'selected-school': 0,

	collectors: generate.collectors(15),

	localAuthorities: generate.localAuthorities,

	academies: generate.schools(academiesTotal),

	academiesTotal,

	totalNumberOfSchools,

	totalLASchools,

	isAllocated: false,

	schools: [
		{
			name: generate.schoolName(),
			LAESTAB: '456/3204',
			type: 'Academy',
			queries: [
				{
					ref: 0,
					id: '2502',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Zero attendance sessions possible recorded for pupil on roll. Pupil should only be recorded with zero sessions possible if dually registered and spent all of the previous term for which attendance data is being collected at other registration.',
					guide:
						'Confirmation is not acceptable. Acceptable note entry ‘pupil is dually registered and though did not attend this establishment in the previous term, they remain on roll’.',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text:
								'The pupil is dually registered and did not attend school this term.',
							date: generate.randomDate(8, 7)
						},
						{
							type: 'reply',
							author: generate.name(),
							text: 'It is not clear if this refers to all pupils.',
							date: generate.randomDate(6, 5)
						},
						{
							type: 'school',
							author: generate.name(),
							text: 'Yes, this applies to all 14 pupils.',
							date: generate.randomDate(4, 2)
						}
					],
					pupils: generate.pupils(14)
				},
				{
					ref: 1,
					id: '2502',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Zero attendance sessions possible recorded for pupil on roll. Pupil should only be recorded with zero sessions possible if dually registered and spent all of the previous term for which attendance data is being collected at other registration.',
					guide:
						'Confirmation is not acceptable. Acceptable note entry ‘pupil is dually registered and though did not attend this establishment in the previous term, they remain on roll’.',
					pupils: generate.pupils(1),
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text:
								'Pupil was added to this term by mistake, will be off-role on next census.',
							date: generate.randomDate(4, 2)
						}
					]
				},
				{
					ref: 2,
					id: '2695',
					type: 'school',
					handled: 'false',
					response: '',
					description:
						'90% or more of infant pupils have free school meal eligibility.',
					guide:
						'Confirmation is not acceptable. A statement must be included that these infant pupils also meet the FSM criteria and that they have not been recorded as FSM due to receipt of UiFSM. Due to pupil premium funding this is to ensure that schools have not made an error.',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'The school is in an area of high unemployment.',
							date: generate.randomDate(4, 2)
						}
					]
				},
				{
					ref: 3,
					id: '2740',
					type: 'school',
					handled: 'false',
					response: '',
					description: 'Learning start date seems too early.',
					guide: 'Confirmation that the information is correct',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'Early start date agreed by governors.',
							date: generate.randomDate(4, 2)
						}
					]
				},
				{
					ref: 4,
					id: 'TonT1C',
					type: 'term-on-term',
					handled: 'false',
					response: '',
					description:
						'There are significantly fewer pupils than last collection. A reason must be provided for this decrease.',
					guide:
						'A reason will sought if there is significant decrease of pupils. ',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'A new school opened close by.',
							date: generate.randomDate(4, 2)
						}
					]
				},
				{
					ref: 5,
					id: '1633',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Pupil has an exemption for English GCSE funding due to learning difficulties but does not have  an education, health and care plan (EHCP).',
					guide:
						'As this impacts on funding a reason will be sought why a student who does not have an EHC plan would have a funding exemption which states the student has a learning disability which prevents them from studying the qualification',
					pupils: generate.pupils(1),
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text:
								'Special relief agreed by LA, authorised by ' +
								generate.name() +
								'.',
							date: generate.randomDate(4, 2)
						}
					]
				},
				{
					ref: 6,
					id: '1753',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Percentage of pupils in NC Year 7 with periods of free school meal eligibility is high (greater than 50%)',
					guide:
						"Schools will be required to specifically confirm that the FSM information is correct for the year group.  Acceptable note entry 'The school has confirmed that they do have more than 50% of 'Year 7' pupils who are entitled to a FSM'.",
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'This is correct.',
							date: generate.randomDate(4, 2)
						}
					]
				},
				{
					ref: 7,
					id: '1850',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Percentage of pupils where language has not been obtained is high (greater than 10%)',
					guide:
						'Confirmation that information is correct is acceptable, however, additional information would be helpful i.e school still awaiting response from parents.',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'We’re waiting on hearing back from the pupil’s parents.',
							date: generate.randomDate(4, 2)
						}
					]
				},
				{
					ref: 8,
					id: '1850',
					type: 'pupil',
					handled: 'true',
					auto: 'true',
					response: '',
					handledOn: generate.randomDate(8, 7),
					description:
						'Percentage of pupils with a new entry date seems high (greater than 50%)',
					guide:
						'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry confirmed as correct.',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'Confirmed as correct',
							date: generate.randomDate(4, 2)
						}
					]
				}
			]
		},
		{
			name: generate.schoolName(),
			LAESTAB: '456/3204',
			type: 'Academy',
			queries: [
				{
					ref: 0,
					id: '2502',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Zero attendance sessions possible recorded for pupil on roll. Pupil should only be recorded with zero sessions possible if dually registered and spent all of the previous term for which attendance data is being collected at other registration.',
					guide:
						'Confirmation is not acceptable. Acceptable note entry ‘pupil is dually registered and though did not attend this establishment in the previous term, they remain on roll’.',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text:
								'The pupil is dually registered and did not attend school this term.',
							date: generate.randomDate(8, 7)
						},
						{
							type: 'reply',
							author: generate.name(),
							text: 'It is not clear if this refers to all pupils.',
							date: generate.randomDate(6, 5)
						},
						{
							type: 'school',
							author: generate.name(),
							text: 'Yes, this applies to all 14 pupils.',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'approval',
							author: generate.name(),
							date: generate.randomDate(6, 5)
						}
					],
					pupils: generate.pupils(14)
				},
				{
					ref: 1,
					id: '2502',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Zero attendance sessions possible recorded for pupil on roll. Pupil should only be recorded with zero sessions possible if dually registered and spent all of the previous term for which attendance data is being collected at other registration.',
					guide:
						'Confirmation is not acceptable. Acceptable note entry ‘pupil is dually registered and though did not attend this establishment in the previous term, they remain on roll’.',
					pupils: generate.pupils(1),
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text:
								'Pupil was added to this term by mistake, will be off-role on next census.',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'reply',
							text: 'Please fix this data in your MIS correctly.',
							author: generate.name(),
							date: generate.randomDate(2, 1)
						}
					]
				},
				{
					ref: 2,
					id: '2695',
					type: 'school',
					handled: 'false',
					response: '',
					description:
						'90% or more of infant pupils have free school meal eligibility.',
					guide:
						'Confirmation is not acceptable. A statement must be included that these infant pupils also meet the FSM criteria and that they have not been recorded as FSM due to receipt of UiFSM. Due to pupil premium funding this is to ensure that schools have not made an error.',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'The school is in an area of high unemployment.',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'approval',
							author: generate.name(),
							date: generate.randomDate(2, 1)
						}
					]
				},
				{
					ref: 3,
					id: '2740',
					type: 'school',
					handled: 'false',
					response: '',
					description: 'Learning start date seems too early.',
					guide: 'Confirmation that the information is correct',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'Early start date agreed by governors.',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'approval',
							author: generate.name(),
							date: generate.randomDate(2, 1)
						}
					]
				},
				{
					ref: 4,
					id: 'TonT1C',
					type: 'term-on-term',
					handled: 'false',
					response: '',
					description:
						'There are significantly fewer pupils than last collection. A reason must be provided for this decrease.',
					guide:
						'A reason will sought if there is significant decrease of pupils. ',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'A new school opened close by.',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'approval',
							author: generate.name(),
							date: generate.randomDate(2, 1)
						}
					]
				},
				{
					ref: 5,
					id: '1633',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Pupil has an exemption for English GCSE funding due to learning difficulties but does not have  an education, health and care plan (EHCP).',
					guide:
						'As this impacts on funding a reason will be sought why a student who does not have an EHC plan would have a funding exemption which states the student has a learning disability which prevents them from studying the qualification',
					pupils: generate.pupils(1),
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text:
								'Special relief agreed by LA, authorised by ' +
								generate.name() +
								'.',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'approval',
							author: generate.name(),
							date: generate.randomDate(2, 1)
						}
					]
				},
				{
					ref: 6,
					id: '1753',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Percentage of pupils in NC Year 7 with periods of free school meal eligibility is high (greater than 50%)',
					guide:
						"Schools will be required to specifically confirm that the FSM information is correct for the year group.  Acceptable note entry 'The school has confirmed that they do have more than 50% of 'Year 7' pupils who are entitled to a FSM'.",
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'This is correct.',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'approval',
							author: generate.name(),
							date: generate.randomDate(2, 1)
						}
					]
				},
				{
					ref: 7,
					id: '1850',
					type: 'pupil',
					handled: 'false',
					response: '',
					description:
						'Percentage of pupils where language has not been obtained is high (greater than 10%)',
					guide:
						'Confirmation that information is correct is acceptable, however, additional information would be helpful i.e school still awaiting response from parents.',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'We’re waiting on hearing back from the pupil’s parents.',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'approval',
							author: generate.name(),
							date: generate.randomDate(2, 1)
						}
					]
				},
				{
					ref: 8,
					id: '1850',
					type: 'pupil',
					handled: 'true',
					auto: 'true',
					response: '',
					handledOn: generate.randomDate(8, 7),
					description:
						'Percentage of pupils with a new entry date seems high (greater than 50%)',
					guide:
						'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry confirmed as correct.',
					notes: [
						{
							type: 'school',
							author: generate.name(),
							text: 'Confirmed as correct',
							date: generate.randomDate(4, 2)
						},
						{
							type: 'approval',
							author: generate.name(),
							date: generate.randomDate(2, 1)
						}
					]
				}
			]
		}
	]
}
