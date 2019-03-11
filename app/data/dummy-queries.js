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
		number: '1745',
		type: 'pupil',
		description:
			'The start date and end date are the same within a single Free School Meal period',
		guide:
			'Reason will be requested why a pupil only has one day FSM.  Due to pupil premium funding this is to ensure that schools have not made an error',
		pupils: createPupils(1),
		notes: [
			{
				type: 'school',
				author: randomName(),
				text:
					'This pupil had free school meals confirmed but was revoked by council the following day',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1750',
		type: 'pupil',
		description:
			'Percentage of pupils with periods of free school meal eligibility is high (greater than 45%)',
		guide:
			'Schools will be required to specifically confirm that the FSM information is correct.  Acceptable note entry "The school has confirmed that they do have more than 45%  of pupils who are entitled to a FSM".',
		notes: [
			{
				type: 'school',
				author: randomName(),
				text:
					'This is correct, our school is in an area of very high unemployment',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1760',
		type: 'pupil',
		description:
			'No pupils in the school eligible for free school meals during the period since the last census',
		guide:
			'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry “No pupils qualify for FSM”',
		notes: [
			{
				type: 'school',
				author: randomName(),
				text: 'None of our pupils claim free school meals',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1767',
		type: 'pupil',
		description:
			'Due to FSM protection we would not expect FSM periods to have an end date. Please provide a reason.',
		guide:
			'Confirmation will not be acceptable, a reason must be provided as to why FSM period has an end date.',
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
		number: '1767',
		type: 'pupil',
		description:
			'Due to FSM protection we would not expect FSM periods to have an end date. Please provide a reason.',
		guide:
			'Confirmation will not be acceptable, a reason must be provided as to why FSM period has an end date.',
		notes: [
			{
				type: 'school',
				author: randomName(),
				text:
					'This has been authorised by the local authority as mistake was made in initial assessment of parent’s means.',
				date: getRandomDate(3, 2)
			}
		]
	},
	{
		number: '1849',
		type: 'pupil',
		description:
			'Pupil aged 3 or 4 eligible for early years pupil premium and recorded as post looked after arrangements would be expected to have reason ‘RO’ or ‘RB’',
		guide:
			'Confirmation will not be acceptable, a reason must be provided why the basis for funding is not recorded as RO or RB if the pupil is recorded with "post looked after arrangements"',
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
		number: '1850',
		type: 'pupil',
		description:
			'Percentage of pupils where language has not been obtained is high (greater than 10%)',
		guide:
			'Confirmation will not be acceptable, a reason must be provided why the basis for funding is not recorded as RO or RB if the pupil is recorded with "post looked after arrangements"',
		notes: [
			{
				type: 'school',
				author: randomName(),
				text: 'Correct',
				date: getRandomDate(3, 2)
			}
		]
	}
]
