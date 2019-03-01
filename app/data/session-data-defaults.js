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

const faker = require('faker')

const randomFirstName = faker.name.firstName

const randomLastName = faker.name.lastName

const randomName = _ => {
	return randomFirstName() + ' ' + randomLastName()
}

const randomItemFrom = array => {
	return array[Math.floor(Math.random() * array.length)]
}

const createPupils = amount => {
	const upnPrefixes = ['W', 'X', 'P']
	const upnSuffixes = ['B', 'D', 'M']
	const days = new Array(28).fill(null).map((_, i) => i + 1)
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	]
	const years = new Array(8).fill(null).map((_, i) => i + 2009)
	const upnNumber = length => {
		const numberArray = new Array(length)
			.fill(null)
			.map(_ => Math.floor(Math.random() * 9).toString())
		return numberArray.join('')
	}
	return new Array(amount).fill(null).map(_ => {
		return {
			surname: randomLastName().toUpperCase(),
			firstname: randomFirstName(),
			UPN:
				randomItemFrom(upnPrefixes) +
				upnNumber(10) +
				randomItemFrom(upnSuffixes),
			dob:
				randomItemFrom(days) +
				' ' +
				randomItemFrom(months) +
				' ' +
				randomItemFrom(years)
		}
	})
}

const createCollectors = amount => {
	return new Array(amount).fill(null).map(_ => {
		return {
			name: randomName(),
			las: [],
			weighting: randomItemFrom([1, 1, 1, 1, 0.75, 0.5])
		}
	})
}

const councils = [
	'Barnfordshire Council',
	'Barsetshire City',
	'Borsetshire County Council',
	'Burton City Council',
	'Didminster County Council',
	'Downshire City Council',
	'Ffhagdiwedd City Council',
	'Waliens County Council',
	'Gaultshire City',
	'Glebeshire Council',
	'Glenshire City Council',
	'Low Lissingbury Council',
	'Loamshire City Council',
	'Mangelwurzelshire Council',
	'Markshire Council',
	'Mallardshire Council',
	'Melfordshire City Council',
	'Mertonshire County Council',
	'Mortshire City Council',
	'Midsomer City Council',
	'Mummerset County Council',
	'Naptonshire City',
	'Norbridgeshire Council',
	'Oatshire City Council',
	'Placefordshire Council',
	'Quantumshire City Council',
	'Radfordshire City Council',
	'Downshire Council',
	'Glenshire Council',
	'Southshire County Council',
	'Middleshire Council',
	'Redshire City Council',
	'Russetshire Council',
	'Rutshire City City Council',
	'Shiring County Council',
	'Shroudshire Council',
	'Slopshire County Council',
	'Southmoltonshire',
	'Stonyshire City Council',
	'Trumlonshire Council',
	'Trumbton Council',
	'Chigley County Council',
	'Wessex City Council',
	'Westershire Council',
	'Waringham Council',
	'Westshire County Council',
	'Winshire County Council',
	'Wordenshire Council',
	'Worfordshire Council',
	'Wyvern County Council',
	'Crow County Council',
	'Mertshire Council',
	'Calusa City Council',
	'Livermore Council',
	'Renard Council',
	'Pontrain County Council',
	'Belle Reve City Council',
	'Ramilly Council',
	'Herndon Council',
	'Mist County Council',
	'Blithe County Council',
	'Ford Council',
	'Huntington Council',
	'Mayberry Council',
	'Arlen Council',
	'Belken County Council',
	'Braddock County Council',
	'Blackwood Council',
	'Battenhill Council',
	'Coldgrass Council',
	'Dormarsh City',
	'Deepston County Council',
	'Fallfay City Council',
	'Fairport County Council',
	'Wateredge City Council',
	'Moorhall City Council',
	'Butterness County Council',
	'Highburn City',
	'Strongby Council',
	'Marblepond City Council',
	'Low Byfield Council',
	'Bushmere City Council',
	'Brightlake Council',
	'Highfair Council',
	'Stoneshade Council',
	'Wintermallow City Council',
	'Stonewell County Council',
	'Rosesea City Council',
	'Elfport City Council',
	'Shadeborough County Council',
	'Grasscliff City',
	'Bridgecastle Council',
	'Dracwick City Council',
	'Pinebridge Council',
	'Eastsage City Council',
	'Waterton City Council',
	'Wildeden Council',
	'Lorfort Council',
	'Whiteley County Council',
	'Mistburn Council',
	'Raymill City Council',
	'Byley Council',
	'Summerbrook City City Council',
	'Aldlake County Council',
	'Oldston Council',
	'Erihall County Council',
	'Erimarsh Council',
	'Lochacre City Council',
	'Freyhurst Council',
	'Lochholt Council',
	'Newston County Council',
	'Cliffholt City Council',
	'Belpond Council',
	'Falledge Council',
	'Applelake County Council',
	'Woodedge County Council',
	'Redvale Council',
	'Verthollow Council',
	'Lightmoor County Council',
	'Swynhall County Council',
	'Swynholt Council',
	'Snowwheat City Council',
	'Bayedge Council',
	'Lochwind Council',
	'Ornesse County Council',
	'Morlea Well City Council',
	'Wildeview Council',
	'Waytown Council',
	'Pryvale County Council',
	'Northby County Council',
	'Oakedge Council',
	'Oldnesse Council',
	'Wayland Council',
	'Loredge Council',
	'Normoor County Council',
	'Aeledge County Council',
	'Southlea Council',
	'Marblemill Council'
]

const createLAs = (minSchools, maxSchools) => {
	return new Array(councils.length()).fill(null).map((_, i) => {
		return {
			name: councils[i],
			schoolCount: Math.floor(Math.random() * maxSchools) + minSchools
		}
	})
}

module.exports = {
	// Insert values here

	username: randomName(),

	'selected-school': 0,

	collectors: createCollectors(15),

	localAuthorities: createLAs(1, 600),

	schools: [
		{
			name: 'Feetham’s High School',
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
							author: randomName(),
							text:
								'The pupil is dually registered and did not attend school this term.',
							date: '26 January 2019 at 9:43'
						},
						{
							type: 'reply',
							author: randomName(),
							text: 'It is not clear if this refers to all pupils.',
							date: '26 January 2019 at 15:43'
						},
						{
							type: 'school',
							author: randomName(),
							text: 'Yes, this applies to all 3 pupils.',
							date: '27 January 2019 at 8:23'
						}
					],
					pupils: createPupils(14)
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
					pupils: [
						{
							surname: 'CAIN',
							firstname: 'Jaylahs',
							UPN: 'W30433221895A',
							dob: '2 April 2011'
						}
					],
					notes: [
						{
							type: 'school',
							author: randomName(),
							text:
								'Pupil was added to this term by mistake, will be off-role on next census.',
							date: '26 January 2019 at 9:45'
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
							author: randomName(),
							text: 'The school is in an area of high unemployment.',
							date: '26 January 2019 at 9:51'
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
							author: randomName(),
							text: 'Early start date agreed by governors.',
							date: '26 January 2019 at 10:03'
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
							author: randomName(),
							text: 'A new school opened close by.',
							date: '26 January 2019 at 11:00'
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
					pupils: createPupils(1),
					notes: [
						{
							type: 'school',
							author: randomName(),
							text:
								'Special relief agreed by LA, authorised by Arnold Calderon.',
							date: '26 January 2019 at 11:31'
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
							author: randomName(),
							text: 'This is correct.',
							date: '26 January 2019 at 11:22'
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
							author: randomName(),
							text: 'We’re waiting on hearing back from the pupil’s parents.',
							date: '26 January 2019 at 11:22'
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
					handledOn: 1546300800,
					description:
						'Percentage of pupils with a new entry date seems high (greater than 50%)',
					guide:
						'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry confirmed as correct.',
					notes: [
						{
							type: 'school',
							author: randomName(),
							text: 'Confirmed as correct',
							date: '25 January 2019 at 11:22'
						}
					]
				}
			]
		}
	]
}
