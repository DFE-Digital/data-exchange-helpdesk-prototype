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
			name: 'Feetham’s High School',
			LAESTAB: '456/3204',
			queries: [
				{
					id: '2502',
					type: 'pupil',
					handled: 'false',
					description:
						'Zero attendance sessions possible recorded for pupil on roll. Pupil should only be recorded with zero sessions possible if dually registered and spent all of the previous term for which attendance data is being collected at other registration.',
					guide:
						'Confirmation is not acceptable. Acceptable note entry ‘pupil is dually registered and though did not attend this establishment in the previous term, they remain on roll’.',
					notes: [
						{
							type: 'school',
							author: 'Nilda Roger',
							text:
								'The pupil is dually registered and did not attend school this term.',
							date: '26 January 2019 at 9:43'
						},
						{
							type: 'reply',
							author: 'Shantell Heister',
							text: 'It is not clear if this refers to all pupils.',
							date: '26 January 2019 at 15:43'
						},
						{
							type: 'school',
							author: 'Lonnie Marbury',
							text: 'Yes, this applies to all 3 pupils.',
							date: '27 January 2019 at 8:23'
						},
						{
							type: 'approval',
							author: 'Alexandra Moon',
							date: '27 January 2019 at 09:32'
						},
						{
							type: 'reply',
							author: 'Carisa Sipple',
							text:
								'This should not have been approved, we need an explanation as to why.',
							date: '27 January 2019 at 11:45'
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
				},
				{
					id: '2502',
					type: 'pupil',
					handled: 'false',
					description:
						'Zero attendance sessions possible recorded for pupil on roll. Pupil should only be recorded with zero sessions possible if dually registered and spent all of the previous term for which attendance data is being collected at other registration.',
					guide:
						'Confirmation is not acceptable. Acceptable note entry ‘pupil is dually registered and though did not attend this establishment in the previous term, they remain on roll’.',
					pupils: [
						{
							surname: 'CAIN',
							firstname: 'Jaylahs',
							UPN: 'W30433221895A'
						}
					],
					notes: [
						{
							type: 'school',
							author: 'Elden Brown',
							text:
								'Pupil was added to this term by mistake, will be off-role on next census.',
							date: '26 January 2019 at 9:45'
						}
					]
				},
				{
					id: '2695',
					type: 'school',
					handled: 'false',
					description:
						'90% or more of infant pupils have free school meal eligibility.',
					guide:
						'Confirmation is not acceptable. A statement must be included that these infant pupils also meet the FSM criteria and that they have not been recorded as FSM due to receipt of UiFSM. Due to pupil premium funding this is to ensure that schools have not made an error.',
					notes: [
						{
							type: 'school',
							author: 'Velva Panton',
							text: 'The school is in an area of high unemployment.',
							date: '26 January 2019 at 9:51'
						}
					]
				},
				{
					id: '2740',
					type: 'school',
					handled: 'false',
					description: 'Learning start date seems too early.',
					guide: 'Confirmation that the information is correct',
					notes: [
						{
							type: 'school',
							author: 'Lilian Mahi',
							text: 'Early start date agreed by governors.',
							date: '26 January 2019 at 10:03'
						}
					]
				},
				{
					id: 'TonT1C',
					type: 'term-on-term',
					handled: 'false',
					description:
						'There are significantly fewer pupils than last collection. A reason must be provided for this decrease.',
					guide:
						'A reason will sought if there is significant decrease of pupils. ',
					notes: [
						{
							type: 'school',
							author: 'Alyce Belden',
							text: 'A new school opened close by.',
							date: '26 January 2019 at 11:00'
						}
					]
				}
			]
		}
	]
}
