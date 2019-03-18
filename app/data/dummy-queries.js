/**
 * @param {function} randomName
 * @param {function} getRandomDate
 * @param {function} createPupils
 */

module.exports = (randomName, getRandomDate, createPupils) => {
	return [
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
					text:
						'This is correct, pupil is twin with the same name as her sister',
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
						'This has been approved by ' +
						randomName() +
						' from local authority',
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
					text:
						'We have had a new influx of students and information has yet to be requested from parents',
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
					text: 'This is correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1853',
			type: 'pupil',
			description:
				'Pupil aged 3 or 4 eligible for early years pupil premium and recorded as FSM on census would be expected to have a reason of ‘RE’ or ‘RB’',
			guide:
				'Confirmation will not be acceptable, a reason must be provided why the basis for funding is not recorded as RO or RB if the pupil is recorded as FSM eligible',
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
			number: '1870',
			type: 'pupil',
			description:
				'Percentage of pupils with sole registrations at the school is low (fewer than 95%)',
			guide:
				'As the enrolment status affects funding a reason for low percentage of sole registrations must be provided.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'Our school admits many children from military families so are mostly dually-registered ',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1872',
			type: 'pupil',
			description:
				'Percentage of pupils on roll on census day reported as having ceased to be looked after through adoption, a special guardianship order, residence order or child arrangement order is high (greater than 5%)',
			guide:
				'Schools will be required to specifically confirm that the number of pupils ceased to be looked after through adoption, a special guardianship order or a residence order is high. Acceptable note entry "The school has confirmed that more than 5% of their pupils were post looked after from local authority care in England or Wales."',
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
			number: '1877',
			type: 'pupil',
			description:
				'Take up of school lunches for pupils in reception, year 1 and year 2 (plus pupils aged 4 to 6 in year X) greater than 95%. Please confirm more than 95% of infant pupils took a school lunch on census day',
			guide: 'Confirmation will be acceptable',
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
			number: '1878',
			type: 'pupil',
			description:
				'No infant pupils are recorded as having a school lunch on census day?',
			guide:
				'Confirmation will not be acceptable.  A reason must be provided. Do not record aggregated pupil numbers in the notepad as these will not be actioned and may result in loss of funding.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Our school doesn’t have any free school meal eligible pupils',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1881',
			type: 'pupil',
			description:
				'Please check the entry date as the sessions possible indicate that the pupil attended the school during the first half of the summer term. If the pupil left and was subsequently readmitted, the query will be accepted by DfE on condition that a suitable explanatory notepad entry is provided.',
			guide:
				'Confirmation will not be acceptable.  Acceptable note entry should provide details that the pupil left in x term and then returned in x term.',
			pupils: createPupils(1),
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
			number: '1883',
			type: 'pupil',
			description:
				'Please check entry date as the sessions possible indicate that the pupil attended the school during the second half of the summer term. If the pupil left and was subsequently readmitted, the query will be accepted by DfE on condition that a suitable explanatory notepad entry is provided.',
			guide:
				'Confirmation will not be acceptable.  Acceptable note entry should provide details that the pupil left in x term and then returned in x term.',
			pupils: createPupils(1),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'This pupil left 2 terms ago as the pupil was visiting family abroad and has returned to school this term',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1885',
			type: 'pupil',
			description:
				'Percentage of pupils with a new entry date seems high (greater than 50%)',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry confirmed as correct',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'There has been a large influx of pupils registering at the school due to us opening a new extension',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1960',
			type: 'pupil',
			description:
				'Percentage of part-time pupils in school seems high (at greater than 35%)',
			guide:
				'It is only expected that a Nursery school would have a high proportion of part time pupils therefore for other school types a reason would be sought.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'Many of our pupils are from military families and study part-time at another site',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1980',
			type: 'pupil',
			description: 'School has reported boarding pupils',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
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
			number: '1990',
			type: 'pupil',
			description:
				'Pupil is in receipt of top-up funding but is not classed as having an EHCP?',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'Correct, we were given guidance by ' +
						randomName() +
						' from local authority to allow funding.',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1998',
			type: 'pupil',
			description:
				'The pupil has  planned employability, enrichment and pastoral hours but no planned learning hours',
			guide:
				'As this information is used to calculate funding, confirmation alone is not acceptable. A reason should be provided why a student on a post 16 study programme does not have any qualification hours.',
			pupils: createPupils(1),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'Pupil is dually registered and attends our school only for work experience and life skills sessions',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1998',
			type: 'pupil',
			description:
				'The pupil has  planned employability, enrichment and pastoral hours but no planned learning hours',
			guide:
				'As this information is used to calculate funding, confirmation alone is not acceptable. A reason should be provided why a student on a post 16 study programme does not have any qualification hours.',
			pupils: createPupils(23),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1999',
			type: 'pupil',
			description:
				'No pupils have planned employability, enrichment and pastoral hours',
			guide:
				'As this information is used to calculate funding, confirmation alone is not acceptable. A reason should be provided why a student on a post 16 study programme does not have any planned employability, enrichment and pastoral hours.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Due to exams all extra times have been suspended this term',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2010',
			type: 'pupil',
			description: '10% or more pupils’ year group differing from their age',
			guide:
				'Though confirmation would be acceptable a reason would be advisable. DfE may query at a later date if data looks ‘odd’ in additional analysis.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2010',
			type: 'pupil',
			description: '10% or more pupils’ year group differing from their age',
			guide:
				'Though confirmation would be acceptable a reason would be advisable. DfE may query at a later date if data looks ‘odd’ in additional analysis.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'Our school takes in pupils who have been disruptive at other schools, many of these pupils must re-sit previous year exams',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2020',
			type: 'pupil',
			description: 'Pupil year group and age inconsistent',
			guide:
				'Reason will be sought why the pupil is two years outside their expected NC year.  For example an acceptable note entry is that pupil has severe SEN or language difficulties or pupil is academically gifted',
			pupils: createPupils(3),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2020',
			type: 'pupil',
			description: 'Pupil year group and age inconsistent',
			guide:
				'Reason will be sought why the pupil is two years outside their expected NC year.  For example an acceptable note entry is that pupil has severe SEN or language difficulties or pupil is academically gifted',
			pupils: createPupils(5),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'Pupils have been identified as gifted by external board and have been accelerated forward to year 10',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2030',
			type: 'pupil',
			description: 'Pupil in unexpected year group for this school',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry ‘confirmed as correct’',
			pupils: createPupils(5),
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
			number: '2040',
			type: 'pupil',
			description: 'Expected year group with no pupils (apart from year 14)',
			guide:
				'Confirmation with reason i.e school is newly opened and is staggering intake of year groups. Or school is due to close',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'We have a staffing issue for some year groups so have needed to stagger ',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2050',
			type: 'pupil',
			description:
				'Is school type correct? Some pupils are outside the expected age range for this type.',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			pupils: createPupils(4),
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
			number: '2070',
			type: 'pupil',
			description: 'Pupil’s class type and year group incompatible',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			pupils: createPupils(14),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2090',
			type: 'pupil',
			description: 'Nursery pupils reported but no nursery class records',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2110',
			type: 'pupil',
			description: 'More pupils in nursery classes than nursery pupils',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2190',
			type: 'pupil',
			description:
				'Percentage of pupils in school with  EHCPs seems high (greater than 10%)',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2200',
			type: 'pupil',
			description: 'There are no pupils in the school with SEN provision',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2205',
			type: 'pupil',
			description:
				'Percentage of pupils in school with SEN provision of SEN support seems high (greater than 40%)',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2210',
			type: 'pupil',
			description:
				'Percentage of pupils in school with  an EHCP seems low for a special school (less than 70%)',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2320',
			type: 'pupil',
			description: 'Number of sessions excluded is greater than 90',
			guide:
				'Reason should be provided why the pupil has been excluded for more than 90 sessions.',
			pupils: createPupils(2),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'It was deemed necessary by headteacher in response to a child protection issue',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2355',
			type: 'pupil',
			description: 'Pupil record with no address details',
			guide: 'Reason will be sought why no address details have been provided ',
			pupils: createPupils(4),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Pupils had temporary living arrangements for short term',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1634',
			type: 'pupil',
			description:
				'Pupil has an exemption for Maths GCSE funding due to learning difficulties but does not have an education, health and care plan (EHCP)',
			guide:
				'As this impacts on funding a reason will be sought why a student who does not have an EHC plan would have a funding exemption which states the student has a learning disability which prevents them from studying the qualification',
			pupils: createPupils(2),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2070',
			type: 'pupil',
			description: 'Pupil’s class type and year group incompatible',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			pupils: createPupils(1),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'There is a reason for this issue',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2560',
			type: 'pupil',
			description:
				'Percentage of authorised absence is greater than 30% - are you sure?',
			guide:
				'The school must confirm that the information is correct. Acceptable note entry "school confirm that authorised absence in x term was more than 30%"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'This is due to circumstances beyond our control',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '2560',
			type: 'pupil',
			description: 'Day school with a majority of boarding pupils',
			guide:
				'The school must confirm that the information is correct. Acceptable note entry "school confirm that authorised absence in x term was more than 30%"',
			pupils: createPupils(1),
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '270',
			type: 'school',
			description: 'School email address is missing',
			guide: 'Confirmation that the school does not have an email address',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'School does not have an active email address at present',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '290',
			type: 'school',
			description: 'School email address is missing',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
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
			number: '300',
			type: 'school',
			description: 'Boarding school with a majority of day pupils',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '330',
			type: 'school',
			description: 'More day pupils on roll than the approved maximum',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
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
			number: '340',
			type: 'school',
			description: 'More boarding pupils on roll than the approved maximum',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '564',
			type: 'school',
			description:
				'Primary admission appeals figures should be provided and and are expected to be greater than zero',
			guide:
				'Confirmation that your school did not have any Primary admission appeals.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'We did not receive any admission appeals',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '565',
			type: 'school',
			description:
				'Secondary admission appeals figures should be provided and are expected to be greater than zero',
			guide:
				'Confirmation that your school did not have any Secondary admission appeals.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'No appeals received',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '566',
			type: 'school',
			description:
				'Infant admissions appeals figures should be provided and are expected to be greater than zero',
			guide:
				'Confirmation that your school did not have any infant admission appeals.',
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
			number: '1010',
			type: 'school',
			description: '10% or more of pupils not in class at selected time',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'No support staff employed',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1070',
			type: 'school',
			description: 'Number of teachers in class is missing or invalid',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1110',
			type: 'school',
			description: 'No support staff reported for any class',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1150',
			type: 'school',
			description: 'Class type and class year group different',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1155',
			type: 'school',
			description: 'Class type and class year group different',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct. Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1180',
			type: 'school',
			description: 'Activity shown as other for all classes',
			guide:
				'Reason why all classes are only doing activity equal to (OT) Other.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'This is due to an online safety week arranged by local police',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: '1240',
			type: 'school',
			description:
				'Please check the number of guest pupils in the class is equal to or greater than the number of home pupils',
			guide:
				'A reason must be provided as to why a schools "guest pupils" is equal to the number of pupils they have on roll. Confirmation will not be acceptable.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'This is accurate to our records',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT1B',
			type: 'term-on-term',
			description:
				'There are significantly more pupils than last collection (this collection xx, last collection  xx). A reason must be provided for this increase.',
			guide: 'A reason will sought if there is significant increase of pupils.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'We have moved from a single-form entry school to a two-form entry school',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT1C',
			type: 'term-on-term',
			description:
				'There are significantly fewer pupils than last collection (this collection xx, last collection xx). A reason must be provided for this decrease.',
			guide: 'A reason will sought if there is significant decrease of pupils.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'We did not take on new admissions this year as the school is due to close',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT1D',
			type: 'term-on-term',
			description:
				'Previous Collection’s Total Number of Pupils(headcount) is zero(this collection  xx, last collection 0).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT3B',
			type: 'term-on-term',
			description:
				'There are significantly more Infant pupils eligible for a FSM than last collection (this collection  xx, last collection xx). A reason must be provided for this increase.',
			guide:
				'Confirmation alone is not sufficient, a reason must be provided.  Please ensure that the school have not mistakenly included infant pupils who are entitled to UIFSM only.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'One of the biggest employers in the area has closed down which has led to a large increase in unemployment amongst parents',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT3C',
			type: 'term-on-term',
			description:
				'There are significantly fewer Infant pupils eligible for a FSM than last collection (this collection  xx, last collection xx). A reason must be provided for this decrease.',
			guide:
				'Confirmation alone is not sufficient, a reason must be provided.  ',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'An increase in local employment due to new shopping centre now means less pupils ae eligible',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT3D',
			type: 'term-on-term',
			description:
				'Previous Collection’s % of Infant pupils eligible for FSM is zero(this collection  xx, last collection 0).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct. Acceptable note entry the school confirms that there were no infant pupils eligible for FSM last term.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'No infants were eligible for FSM last term',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT3D',
			type: 'term-on-term',
			description:
				'Previous Collection’s % of Infant pupils eligible for FSM is zero(this collection  xx, last collection 0).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct. Acceptable note entry the school confirms that there were no infant pupils eligible for FSM last term.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'No infants were eligible for FSM last term',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT4B',
			type: 'term-on-term',
			description:
				'There are significantly more pupils eligible for a FSM than last collection (this collection  xx, last collection xx). A reason must be provided for this increase.',
			guide: 'Confirmation alone is not sufficient, a reason must be provided.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'This is due to an increase in local unemployment',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT4C',
			type: 'term-on-term',
			description:
				'There are significantly fewer pupils eligible for a FSM than last collection (this collection  xx, last collection xx).A reason must be provided for this decrease.',
			guide:
				'Confirmation alone is not sufficient, a reason must be provided. ',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'A change in legislation has led to this reduction',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT4D',
			type: 'term-on-term',
			description:
				'Previous Collection’s % of Pupils eligible for FSM is zero(this collection  xx, last collection 0).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry school confirms that no pupils were eligible for FSM last term ',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'No pupils were eligible for FSM last term at the school',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT5B',
			type: 'term-on-term',
			description:
				'There are significantly more pupils with an EHCP than last collection (this collection  xx, last collection xx).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT5C',
			type: 'term-on-term',
			description:
				'There are significantly fewer pupils with an EHCP than last collection (this collection  xx, last collection xx).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'This is true',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT5D',
			type: 'term-on-term',
			description:
				'Previous Collection’s % of Pupils with an EHCP is zero(this collection  xx, last collection 0).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT6B',
			type: 'term-on-term',
			description:
				'There are significantly more pupils with SEN without an EHCP than last collection (this collection xx, last collection xx).’',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
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
			number: 'TonT6C',
			type: 'term-on-term',
			description:
				'There are significantly fewer pupils with SEN without an EHCP than last collection (this collection xx, last collection xx).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT6D',
			type: 'term-on-term',
			description:
				'Previous Collection’s % of Pupils with SEN without an EHCP is zero(this collection  xx, last collection 0).',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Information correct to our knowledge',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT7B',
			type: 'term-on-term',
			description:
				'There are significantly more pupils whose language is not English than last collection (this collection xx, last collection xx).’',
			guide:
				'A reason would be sought for this increase.  Unless there has been significant changes to overall pupil numbers it is not expected that this figure will change much from one term to the next.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'This is due to a local faith school closing down and we have taken a portion of pupils',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT7C',
			type: 'term-on-term',
			description:
				'There are significantly fewer pupils whose language is not English than last collection (this collection xx, last collection xx).’',
			guide:
				'A reason would be sought for this decrease.  Unless there has been significant changes to overall pupil numbers it is not expected that this figure will change much from one term to the next.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'More children are now fluent in English as a result of a year schooling and a extra-curricular language tuition programme',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT7D',
			type: 'term-on-term',
			description:
				'Previous collections % of pupils with language code not English is zero (this collection xx, last collection 0).',
			guide:
				'A reason would be sought, unless there has been significant changes to overall pupil numbers or in the previous term the school had a high percentage of not obtained, it is not expected that this figure will change much from one term to the next.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'The area has an increase in population by EU citizens',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT7D',
			type: 'term-on-term',
			description:
				'There are significantly more service children than last collection (this collection xx, last collection xx).',
			guide:
				'Confirmation alone is not acceptable.  A reason should be provided for this increase in service children.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'An increase in service men and women following a sustained local recruitment campaign',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT7D',
			type: 'term-on-term',
			description:
				'There are significantly more service children than last collection (this collection xx, last collection xx).',
			guide:
				'Confirmation alone is not acceptable.  A reason should be provided for this increase in service children.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'An increase in service men and women following a sustained local recruitment campaign',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT8C',
			type: 'term-on-term',
			description:
				'There are significantly fewer service children than last collection (this collection xx, last collection xx).',
			guide:
				'Confirmation alone is not acceptable.  A reason should be provided for this decrease in service children.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text:
						'The local barracks have closed so many service men and women have been redeployed',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT9B',
			type: 'term-on-term',
			description:
				'There are significantly more pupils whose ethnicity is not obtained than last collection (this collection xx, last collection xx).’',
			guide:
				'A reason will be sought as to why significantly more pupils have an ethnicity not known from last term.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Instructed that collecting ethnicity no longer required',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT9C',
			type: 'term-on-term',
			description:
				'There are significantly fewer pupils whose ethnicity is not obtained than last collection (this collection xx, last collection xx).’',
			guide:
				'Confirmation that the information has been confirmed by the school as being correct.  Acceptable note entry "confirmed as correct"',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Confirmed as correct',
					date: getRandomDate(3, 2)
				}
			]
		},
		{
			number: 'TonT13B',
			type: 'term-on-term',
			description:
				'There are significantly more infants taking a school lunch than last collection (this collection xx, last collection xx). A reason must be provided for this increase.',
			guide:
				'As this data will be used in funding calculations a reason must be provided for this increase.',
			notes: [
				{
					type: 'school',
					author: randomName(),
					text: 'Children prefer new lunch menu options',
					date: getRandomDate(3, 2)
				}
			]
		}
	]
}
