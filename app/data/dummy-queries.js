;[
	{
		number: '1601',
		type: 'pupil',
		description: 'Pupil’s age is out of range for school type',
		guide:
			'Confirmation that the information is correct, however a reason will be sought if the pupil’s age is significantly out of range for the school type.',
		pupils: createPupils(3),
		notes: [
			{
				type: 'school',
				author: randomName(),
				text: 'This is correct',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1601',
		type: 'pupil',
		description: 'Pupil’s age is out of range for school type',
		guide:
			'Confirmation that the information is correct, however a reason will be sought if the pupil’s age is significantly out of range for the school type.',
		pupils: createPupils(1),
		notes: [
			{
				type: 'school',
				author: randomName(),
				text:
					'Pupil is SEN and has learning to catch up with from previous years',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1620',
		type: 'pupil',
		description:
			'Duplicate pupil records with the same Surname, Forename, Gender and Date of birth',
		guide:
			'Reason will be requested to ensure that pupils are different.  For example pupils could be twins where the same name etc is shared',
		pupils: createPupils(1),
		notes: [
			{
				type: 'school',
				author: randomName(),
				text: 'This is correct, pupil is twin with the same name as her sister',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1633',
		type: 'pupil',
		description:
			'Pupil has an exemption for English GCSE funding due to learning difficulties but does not have  an education, health and care plan (EHCP)',
		guide:
			'As this impacts on funding a reason will be sought why a student who does not have an EHC plan would have a funding exemption which states the student has a learning disability which prevents them from studying the qualification',
		pupils: createPupils(1),
		notes: [
			{
				type: 'school',
				author: randomName(),
				text:
					'This has been approved by ' + randomName() + ' from local authority',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1633',
		type: 'pupil',
		description:
			'Pupil has an exemption for English GCSE funding due to learning difficulties but does not have  an education, health and care plan (EHCP)',
		guide:
			'As this impacts on funding a reason will be sought why a student who does not have an EHC plan would have a funding exemption which states the student has a learning disability which prevents them from studying the qualification',
		pupils: createPupils(2),
		notes: [
			{
				type: 'school',
				author: randomName(),
				text:
					'Pupils have recently been enrolled and EHCP has not been established yet.',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1640',
		type: 'pupil',
		description: '100% of pupils are from a White ethnic background ',
		guide:
			'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry ‘confirmed as correct’',
		notes: [
			{
				type: 'school',
				author: randomName(),
				text: 'Correct',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1700',
		type: 'pupil',
		description:
			'Percentage of pupils on roll for whom ethnicity has not been obtained is high (greater than 10%)',
		guide:
			'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry ’confirmed as correct‘',
		notes: [
			{
				type: 'school',
				author: randomName(),
				text:
					'We have had a new influx of students and information has yet to be requested from parents',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1745',
		type: 'pupil',
		description:
			'The start date and end date are the same within a single Free School Meal period',
		guide:
			'Reason will be requested why a pupil only has one day FSM.  Due to pupil premium funding this is to ensure that schools have not made an error',
		pupils: createPupils(3),
		notes: [
			{
				type: 'school',
				author: randomName(),
				text: 'This is correct',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1700',
		type: 'pupil',
		description:
			'Percentage of pupils on roll for whom ethnicity has not been obtained is high (greater than 10%)',
		guide:
			'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry ’confirmed as correct‘',
		notes: [
			{
				type: 'school',
				author: randomName(),
				text:
					'We have had a new influx of students and information has yet to be requested from parents',
				date: getRandomDate(3, 2)
			}
		]
	}
]
