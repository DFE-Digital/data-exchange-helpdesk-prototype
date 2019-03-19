// @ts-check
const faker = require('faker')
const dummyQueries = require('./dummy-queries')
const dummyErrors = require('./dummy-errors')

const generators = {}

// Generic helpers

/**
 * @param {any[]} array
 */

generators.randomItemFrom = array => {
	return array[Math.floor(Math.random() * array.length)]
}

/**
 * @param {number} length
 */

generators.randomCode = length => {
	var output = ''
	var i = 0
	for (i; i < length; i++) {
		output += generators
			.randomItemFrom([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
			.toString()
	}
	return output
}

/**
 * @param {number} min
 * @param {number} max
 */

generators.randomNumber = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

// Simulated people

generators.firstName = faker.name.firstName
generators.lastName = faker.name.lastName

generators.name = () => {
	return generators.firstName() + ' ' + generators.lastName()
}

/**
 * @param {number} amount
 */

generators.collectors = amount => {
	return new Array(amount).fill(null).map((_, i) => {
		let firstName = generators.firstName()
		let lastName = generators.lastName()
		return {
			id: i,
			firstName: firstName,
			lastName: lastName,
			email:
				firstName.toLowerCase() +
				'.' +
				lastName.toLowerCase() +
				'@education.gov.uk',
			las: [],
			// Start each collector with zero local authorities
			weighting: generators.randomItemFrom([1, 1, 1, 1, 30 / 37, 20 / 37])
			// Simulates full-time or part-time hours
		}
	})
}

/**
 * @param {number} amount
 */

generators.pupils = amount => {
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
	/**
	 * @param {number} length
	 */
	const upnNumber = length => {
		const numberArray = new Array(length)
			.fill(null)
			.map(_ => Math.floor(Math.random() * 9).toString())
		return numberArray.join('')
	}
	return new Array(amount).fill(null).map(_ => {
		return {
			surname: generators.lastName().toUpperCase(),
			firstname: generators.firstName(),
			UPN:
				generators.randomItemFrom(upnPrefixes) +
				upnNumber(10) +
				generators.randomItemFrom(upnSuffixes),
			dob:
				generators.randomItemFrom(days) +
				' ' +
				generators.randomItemFrom(months) +
				' ' +
				generators.randomItemFrom(years)
		}
	})
}

// Simulated schools

generators.schoolName = () => {
	return (
		faker.address.city() +
		' ' +
		generators.randomItemFrom([
			'High School',
			'Primary School',
			'Primary School',
			'Primary School',
			'Primary School',
			'Community Primary School',
			'Infants',
			'Community School',
			'Secondary School',
			'Secondary School',
			'Secondary School',
			'Academy',
			'Grammar School',
			'Technical School',
			'College',
			'College',
			'Institute'
		])
	)
}

/**
 * @param {string} name
 * @param {string} laCode
 * @param {string} type
 * @param {number} noOfQueries
 */

generators.school = (name, laCode, type, noOfQueries) => {
	return {
		name,
		type,
		noOfQueries,
		noOfErrors: generators.randomNumber(0, 20),
		LAESTAB: laCode.toString() + '/' + generators.randomCode(4),
		queries: []
	}
}

/**
 * @param {number} amount
 */

generators.schools = amount => {
	return new Array(amount).fill(null).map((_, i) => {
		const school = generators.school(
			generators.schoolName(),
			generators.randomCode(3),
			generators.randomItemFrom(['academy', 'maintained', 'maintained']),
			generators.randomNumber(8, 75)
		)
		school.id = i
		school.submittedDate = generators.randomDate(5, 1)
		return school
	})
}

// Simulated local authorities

generators.localAuthorities = [
	{
		name: 'Barnfordshire Council',
		schoolCount: 25,
		code: 664
	},
	{
		name: 'Barsetshire City',
		schoolCount: 156,
		code: 492
	},
	{
		name: 'Borsetshire County Council',
		schoolCount: 51,
		code: 893
	},
	{
		name: 'Burton City Council',
		schoolCount: 22,
		code: 875
	},
	{
		name: 'Didminster County Council',
		schoolCount: 32,
		code: 244
	},
	{
		name: 'Downshire City Council',
		schoolCount: 61,
		code: 304
	},
	{
		name: 'Ffhagdiwedd City Council',
		schoolCount: 46,
		code: 480
	},
	{
		name: 'Waliens County Council',
		schoolCount: 96,
		code: 176
	},
	{
		name: 'Gaultshire City',
		schoolCount: 34,
		code: 981
	},
	{
		name: 'Glebeshire Council',
		schoolCount: 36,
		code: 738
	},
	{
		name: 'Glenshire City Council',
		schoolCount: 46,
		code: 148
	},
	{
		name: 'Low Lissingbury Council',
		schoolCount: 68,
		code: 910
	},
	{
		name: 'Loamshire City Council',
		schoolCount: 48,
		code: 813
	},
	{
		name: 'Mangelwurzelshire Council',
		schoolCount: 23,
		code: 874
	},
	{
		name: 'Markshire Council',
		schoolCount: 78,
		code: 957
	},
	{
		name: 'Mallardshire Council',
		schoolCount: 51,
		code: 420
	},
	{
		name: 'Melfordshire City Council',
		schoolCount: 95,
		code: 899
	},
	{
		name: 'Mertonshire County Council',
		schoolCount: 97,
		code: 587
	},
	{
		name: 'Mortshire City Council',
		schoolCount: 188,
		code: 943
	},
	{
		name: 'Midsomer City Council',
		schoolCount: 39,
		code: 443
	},
	{
		name: 'Mummerset County Council',
		schoolCount: 36,
		code: 367
	},
	{
		name: 'Naptonshire City',
		schoolCount: 383,
		code: 326
	},
	{
		name: 'Norbridgeshire Council',
		schoolCount: 103,
		code: 125
	},
	{
		name: 'Oatshire City Council',
		schoolCount: 115,
		code: 294
	},
	{
		name: 'Placefordshire Council',
		schoolCount: 63,
		code: 425
	},
	{
		name: 'Quantumshire City Council',
		schoolCount: 53,
		code: 251
	},
	{
		name: 'Radfordshire City Council',
		schoolCount: 67,
		code: 161
	},
	{
		name: 'Downshire Council',
		schoolCount: 62,
		code: 114
	},
	{
		name: 'Glenshire Council',
		schoolCount: 41,
		code: 846
	},
	{
		name: 'Southshire County Council',
		schoolCount: 73,
		code: 167
	},
	{
		name: 'Middleshire Council',
		schoolCount: 58,
		code: 201
	},
	{
		name: 'Redshire City Council',
		schoolCount: 58,
		code: 246
	},
	{
		name: 'Russetshire Council',
		schoolCount: 51,
		code: 945
	},
	{
		name: 'Rutshire City City Council',
		schoolCount: 75,
		code: 153
	},
	{
		name: 'Shiring County Council',
		schoolCount: 74,
		code: 490
	},
	{
		name: 'Shroudshire Council',
		schoolCount: 53,
		code: 819
	},
	{
		name: 'Slopshire County Council',
		schoolCount: 131,
		code: 840
	},
	{
		name: 'Southmoltonshire',
		schoolCount: 63,
		code: 758
	},
	{
		name: 'Stonyshire City Council',
		schoolCount: 74,
		code: 833
	},
	{
		name: 'Trumlonshire Council',
		schoolCount: 87,
		code: 766
	},
	{
		name: 'Trumbton Council',
		schoolCount: 56,
		code: 537
	},
	{
		name: 'Chigley County Council',
		schoolCount: 109,
		code: 638
	},
	{
		name: 'Wessex City Council',
		schoolCount: 162,
		code: 144
	},
	{
		name: 'Westershire Council',
		schoolCount: 37,
		code: 515
	},
	{
		name: 'Waringham Council',
		schoolCount: 46,
		code: 302
	},
	{
		name: 'Westshire County Council',
		schoolCount: 218,
		code: 477
	},
	{
		name: 'Winshire County Council',
		schoolCount: 68,
		code: 227
	},
	{
		name: 'Wordenshire Council',
		schoolCount: 106,
		code: 391
	},
	{
		name: 'Worfordshire Council',
		schoolCount: 87,
		code: 140
	},
	{
		name: 'Wyvern County Council',
		schoolCount: 39,
		code: 117
	},
	{
		name: 'Nutbridge County Council',
		schoolCount: 79,
		code: 292
	},
	{
		name: 'Crow County Council',
		schoolCount: 61,
		code: 419
	},
	{
		name: 'Mertshire Council',
		schoolCount: 248,
		code: 310
	},
	{
		name: 'Calusa City Council',
		schoolCount: 69,
		code: 557
	},
	{
		name: 'Livermore Council',
		schoolCount: 175,
		code: 240
	},
	{
		name: 'Renard Council',
		schoolCount: 213,
		code: 956
	},
	{
		name: 'Pontrain County Council',
		schoolCount: 194,
		code: 353
	},
	{
		name: 'Belle Reve City Council',
		schoolCount: 65,
		code: 184
	},
	{
		name: 'Ramilly Council',
		schoolCount: 198,
		code: 709
	},
	{
		name: 'Herndon Council',
		schoolCount: 16,
		code: 818
	},
	{
		name: 'Mist County Council',
		schoolCount: 279,
		code: 128
	},
	{
		name: 'Blithe County Council',
		schoolCount: 70,
		code: 939
	},
	{
		name: 'Ford Council',
		schoolCount: 62,
		code: 471
	},
	{
		name: 'Huntington Council',
		schoolCount: 62,
		code: 328
	},
	{
		name: 'Mayberry Council',
		schoolCount: 70,
		code: 200
	},
	{
		name: 'Arlen Council',
		schoolCount: 98,
		code: 807
	},
	{
		name: 'Belken County Council',
		schoolCount: 51,
		code: 383
	},
	{
		name: 'Braddock County Council',
		schoolCount: 238,
		code: 143
	},
	{
		name: 'Blackwood Council',
		schoolCount: 62,
		code: 185
	},
	{
		name: 'Battenhill Council',
		schoolCount: 45,
		code: 450
	},
	{
		name: 'Coldgrass Council',
		schoolCount: 72,
		code: 668
	},
	{
		name: 'Dormarsh City',
		schoolCount: 152,
		code: 636
	},
	{
		name: 'Deepston County Council',
		schoolCount: 65,
		code: 782
	},
	{
		name: 'Fallfay City Council',
		schoolCount: 148,
		code: 518
	},
	{
		name: 'Fairport County Council',
		schoolCount: 49,
		code: 917
	},
	{
		name: 'Wateredge City Council',
		schoolCount: 77,
		code: 797
	},
	{
		name: 'Moorhall City Council',
		schoolCount: 168,
		code: 631
	},
	{
		name: 'Butterness County Council',
		schoolCount: 336,
		code: 934
	},
	{
		name: 'Highburn City',
		schoolCount: 330,
		code: 646
	},
	{
		name: 'Strongby Council',
		schoolCount: 44,
		code: 796
	},
	{
		name: 'Marblepond City Council',
		schoolCount: 255,
		code: 764
	},
	{
		name: 'Low Byfield Council',
		schoolCount: 46,
		code: 960
	},
	{
		name: 'Bushmere City Council',
		schoolCount: 33,
		code: 191
	},
	{
		name: 'Brightlake Council',
		schoolCount: 198,
		code: 584
	},
	{
		name: 'Highfair Council',
		schoolCount: 30,
		code: 682
	},
	{
		name: 'Stoneshade Council',
		schoolCount: 53,
		code: 826
	},
	{
		name: 'Wintermallow City Council',
		schoolCount: 3,
		code: 895
	},
	{
		name: 'Stonewell County Council',
		schoolCount: 64,
		code: 279
	},
	{
		name: 'Rosesea City Council',
		schoolCount: 46,
		code: 421
	},
	{
		name: 'Elfport City Council',
		schoolCount: 57,
		code: 612
	},
	{
		name: 'Shadeborough County Council',
		schoolCount: 44,
		code: 974
	},
	{
		name: 'Grasscliff City',
		schoolCount: 45,
		code: 918
	},
	{
		name: 'Bridgecastle Council',
		schoolCount: 55,
		code: 198
	},
	{
		name: 'Dracwick City Council',
		schoolCount: 54,
		code: 733
	},
	{
		name: 'Pinebridge Council',
		schoolCount: 62,
		code: 245
	},
	{
		name: 'Eastsage City Council',
		schoolCount: 67,
		code: 687
	},
	{
		name: 'Waterton City Council',
		schoolCount: 67,
		code: 605
	},
	{
		name: 'Wildeden Council',
		schoolCount: 65,
		code: 825
	},
	{
		name: 'Lorfort Council',
		schoolCount: 53,
		code: 499
	},
	{
		name: 'Whiteley County Council',
		schoolCount: 36,
		code: 972
	},
	{
		name: 'Mistburn Council',
		schoolCount: 91,
		code: 760
	},
	{
		name: 'Raymill City Council',
		schoolCount: 47,
		code: 976
	},
	{
		name: 'Byley Council',
		schoolCount: 58,
		code: 131
	},
	{
		name: 'Summerbrook City City Council',
		schoolCount: 68,
		code: 248
	},
	{
		name: 'Aldlake County Council',
		schoolCount: 81,
		code: 658
	},
	{
		name: 'Oldston Council',
		schoolCount: 65,
		code: 213
	},
	{
		name: 'Erihall County Council',
		schoolCount: 60,
		code: 542
	},
	{
		name: 'Erimarsh Council',
		schoolCount: 57,
		code: 576
	},
	{
		name: 'Lochacre City Council',
		schoolCount: 42,
		code: 970
	},
	{
		name: 'Freyhurst Council',
		schoolCount: 51,
		code: 155
	},
	{
		name: 'Lochholt Council',
		schoolCount: 62,
		code: 137
	},
	{
		name: 'Newston County Council',
		schoolCount: 52,
		code: 816
	},
	{
		name: 'Cliffholt City Council',
		schoolCount: 36,
		code: 197
	},
	{
		name: 'Belpond Council',
		schoolCount: 41,
		code: 252
	},
	{
		name: 'Falledge Council',
		schoolCount: 52,
		code: 449
	},
	{
		name: 'Applelake County Council',
		schoolCount: 46,
		code: 359
	},
	{
		name: 'Woodedge County Council',
		schoolCount: 39,
		code: 865
	},
	{
		name: 'Redvale Council',
		schoolCount: 48,
		code: 309
	},
	{
		name: 'Verthollow Council',
		schoolCount: 27,
		code: 632
	},
	{
		name: 'Lightmoor County Council',
		schoolCount: 51,
		code: 580
	},
	{
		name: 'Swynhall County Council',
		schoolCount: 150,
		code: 289
	},
	{
		name: 'Swynholt Council',
		schoolCount: 124,
		code: 264
	},
	{
		name: 'Snowwheat City Council',
		schoolCount: 329,
		code: 616
	},
	{
		name: 'Bayedge Council',
		schoolCount: 30,
		code: 857
	},
	{
		name: 'Lochwind Council',
		schoolCount: 373,
		code: 193
	},
	{
		name: 'Ornesse County Council',
		schoolCount: 63,
		code: 698
	},
	{
		name: 'Morlea Well City Council',
		schoolCount: 66,
		code: 516
	},
	{
		name: 'Wildeview Council',
		schoolCount: 196,
		code: 540
	},
	{
		name: 'Waytown Council',
		schoolCount: 39,
		code: 208
	},
	{
		name: 'Pryvale County Council',
		schoolCount: 39,
		code: 211
	},
	{
		name: 'Northby County Council',
		schoolCount: 31,
		code: 337
	},
	{
		name: 'Oakedge Council',
		schoolCount: 47,
		code: 312
	},
	{
		name: 'Oldnesse Council',
		schoolCount: 282,
		code: 565
	},
	{
		name: 'Wayland Council',
		schoolCount: 54,
		code: 170
	},
	{
		name: 'Loredge Council',
		schoolCount: 183,
		code: 940
	},
	{
		name: 'Normoor County Council',
		schoolCount: 48,
		code: 685
	},
	{
		name: 'Aeledge County Council',
		schoolCount: 45,
		code: 544
	},
	{
		name: 'Southlea Council',
		schoolCount: 51,
		code: 517
	},
	{
		name: 'Marblemill Council',
		schoolCount: 27,
		code: 650
	},
	{
		name: 'Snowwheat City Council',
		schoolCount: 96,
		code: 230
	},
	{
		name: 'Bay Council',
		schoolCount: 162,
		code: 417
	},
	{
		name: 'Windacre Council',
		schoolCount: 226,
		code: 896
	},
	{
		name: 'Nopesse County Council',
		schoolCount: 111,
		code: 634
	},
	{
		name: 'Morsset Well City Council',
		schoolCount: 186,
		code: 731
	},
	{
		name: 'Shireview Council',
		schoolCount: 1,
		code: 441
	},
	{
		name: 'Wayye Council',
		schoolCount: 46,
		code: 519
	},
	{
		name: 'Pydde Lyld County Council',
		schoolCount: 58,
		code: 802
	},
	{
		name: 'Addysg Council',
		schoolCount: 26,
		code: 404
	},
	{
		name: 'Bws Ysgol Council',
		schoolCount: 167,
		code: 794
	},
	{
		name: 'Llyfr Testun Council',
		schoolCount: 68,
		code: 127
	},
	{
		name: 'Arholiad Council',
		schoolCount: 46,
		code: 624
	},
	{
		name: 'Bwrdd Gwyn Council',
		schoolCount: 25,
		code: 464
	}
]

// Simulated dates

/**
 * @param {number} fromDaysBack
 * @param {number} toDaysBack
 */

generators.randomDate = (fromDaysBack, toDaysBack) => {
	const secondsInADay = 24 * 60 * 60
	const now = new Date().getTime()
	const maxTime = now - toDaysBack * secondsInADay * 1000
	const minTime = now - fromDaysBack * secondsInADay * 1000
	const randomUNIXSeconds = Math.random() * (maxTime - minTime)
	return minTime + randomUNIXSeconds
}

// Simulated queries and errors

generators.queryArray = dummyQueries(
	generators.name,
	generators.randomDate,
	generators.pupils
)

generators.errorArray = dummyErrors(
	generators.randomNumber,
	generators.randomItemFrom,
	generators.pupils
)

/**
 * @param {number} amount
 */

generators.queries = amount => {
	var output = []
	var i = 0
	for (i; i < amount; i++) {
		var query = generators.randomItemFrom(generators.queryArray)
		while (output.find(obj => obj.number === query.number)) {
			query = generators.randomItemFrom(generators.queryArray)
		}
		query.id = i
		query.handled = 'false'
		output.push(query)
	}
	return output
}

/**
 * @param {number} amount
 */

generators.errors = amount => {
	var output = []
	var i = 0
	for (i; i < amount; i++) {
		var error = generators.randomItemFrom(generators.errorArray)
		while (output.find(obj => obj.number === error.number)) {
			error = generators.randomItemFrom(generators.errorArray)
		}
		error.id = i
		output.push(error)
	}
	return output
}

module.exports = generators
