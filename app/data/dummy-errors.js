/**
 * @param {function} randomNumber
 * @param {function} randomItemFrom
 * @param {function} createPupils
 */

module.exports = (randomNumber, randomItemFrom, createPupils) => {
	return [
		{
			number: 100,
			type: 'school',
			description: 'Reference date must be present and valid for the term'
		},
		{
			number: 110,
			type: 'school',
			description: 'School name missing'
		},
		{
			number: 120,
			type: 'school',
			description: 'Phase is missing or invalid'
		},
		{
			number: 130,
			type: 'school',
			description: 'DfE number and phase are not consistent'
		},
		{
			number: 140,
			type: 'school',
			description: 'School type is missing'
		},
		{
			number: 150,
			type: 'school',
			description: 'School type and phase not consistent'
		},
		{
			number: 160,
			type: 'school',
			description:
				"The establishment's GIAS URN is missing or URN recorded on COLLECT does not match URN recorded on GIAS"
		},
		{
			number: 165,
			type: 'school',
			description: 'No school details have been recorded'
		},
		{
			number: 210,
			type: 'school',
			description:
				'School’s highest national curriculum year group is missing or invalid'
		},
		{
			number: 220,
			type: 'school',
			description:
				'School’s lowest national curriculum year group is missing or invalid'
		},
		{
			number: 221,
			type: 'school',
			description:
				'Intake Type is missing or invalid. Intake type must be `COMP’'
		},
		{
			number: 222,
			type: 'school',
			description:
				"Governance is missing or invalid. Governance must be `CO’ or 'CA'"
		},
		{
			number: 223,
			type: 'school',
			description:
				"Intake of 'SPEC' (special) or HOSP (hospital special) can only be returned for schools with a Phase of SP (special)"
		},
		{
			number: 224,
			type: 'school',
			description:
				"Intake type is missing or invalid. Intake type must be `SPEC’ or 'HOSP'"
		},
		{
			number: 230,
			type: 'school',
			description:
				'School’s lowest national curriculum year group cannot be greater than school’s highest national curriculum year group'
		},
		{
			number: 240,
			type: 'school',
			description: 'Intake type is missing or invalid'
		},
		{
			number: 260,
			type: 'school',
			description:
				"Governance is missing or invalid. Governance must not be 'IN'"
		},
		{
			number: 261,
			type: 'school',
			description:
				"If school type is recorded as an academy (49) then the school governance must also be recorded as an academy with code 'CA'"
		},
		{
			number: 262,
			type: 'school',
			description:
				'If school governance is recorded as an academy (CA) then school type must also be recorded as an academy with code 49'
		},
		{
			number: 263,
			type: 'school',
			description:
				"If school type is recorded as a CTC (47) then governance must also be recorded as a CTC with code 'CT'"
		},
		{
			number: 264,
			type: 'school',
			description:
				'If governance is recorded as a CTC (CT) then school type must also be recorded as a CTC with code 47'
		},
		{
			number: 280,
			type: 'school',
			description:
				'School organisation (day, boarding or hospital) is missing or invalid'
		},
		{
			number: 310,
			type: 'school',
			description: 'Approved maximum for day pupils is missing'
		},
		{
			number: 320,
			type: 'school',
			description:
				'Approved maximum for boarding pupils is missing (or, for hospital special schools, is provided when it is not required)'
		},
		{
			number: 350,
			type: 'school',
			description: 'Boys on roll not provided, or age not in range 2 to 27'
		},
		{
			number: 360,
			type: 'school',
			description: 'Girls on roll not provided, or age not in range 2 to 27'
		},
		{
			number: 370,
			type: 'school',
			description:
				'Approved maximum age (boys) is shown but there is no minimum, or vice versa'
		},
		{
			number: 380,
			type: 'school',
			description:
				'Approved maximum age (girls) is shown but there is no minimum, or vice versa'
		},
		{
			number: 390,
			type: 'school',
			description:
				'Approved maximum age (boys) must be equal to or greater than minimum'
		},
		{
			number: 400,
			type: 'school',
			description:
				'Approved maximum age (girls) must be equal to or greater than minimum'
		},
		{
			number: 410,
			type: 'school',
			description:
				'Information on SEN school types for which school is approved is missing or invalid '
		},
		{
			number: 420,
			type: 'school',
			description: 'School telephone number is missing'
		},
		{
			number: 540,
			type: 'school',
			description: 'Child mothers indicator is missing or invalid'
		},
		{
			number: 541,
			type: 'school',
			description: 'Count of places for teenage mothers is missing'
		},
		{
			number: 542,
			type: 'school',
			description: 'Childcare facilities indicator is missing or invalid'
		},
		{
			number: 560,
			type: 'school',
			description:
				'Primary admissions appeals withdrawn plus heard do not equal those lodged'
		},
		{
			number: 570,
			type: 'school',
			description:
				'Primary admission appeals upheld plus appeals rejected should match the number of appeals heard'
		},
		{
			number: 5013,
			type: 'school',
			description:
				"Data items in the Primary admission appeals module are only required from schools with governance type of 'VA', 'FO' or 'CA'"
		},
		{
			number: 5014,
			type: 'school',
			description:
				"Data items in the Primary admission appeals module are not required from schools with a phase of 'NS', 'SP' or 'PR'"
		},
		{
			number: 561,
			type: 'school',
			description:
				'There were more Secondary admission appeals withdrawn and / or plus heard than were actually do not equal those lodged'
		},
		{
			number: 571,
			type: 'school',
			description:
				'Secondary admission appeals upheld plus appeals rejected should match the number of appeals heard'
		},
		{
			number: 5125,
			type: 'school',
			description:
				"Data items in the Secondary admission appeals module are only required from schools with governance type of 'VA', 'FO' or 'CA'"
		},
		{
			number: 5126,
			type: 'school',
			description:
				"Data items in the Secondary admission appeals module are not required from schools with a phase of 'NS', 'SP' or 'PR'"
		},
		{
			number: 580,
			type: 'school',
			description: 'Overall appeals lodged is less than infant appeals lodged'
		},
		{
			number: 590,
			type: 'school',
			description:
				'Overall appeals withdrawn is less than infant appeals withdrawn'
		},
		{
			number: 600,
			type: 'school',
			description: 'Overall appeals heard is less than infant appeals heard'
		},
		{
			number: 610,
			type: 'school',
			description: 'Overall appeals upheld is less than infant appeals upheld '
		},
		{
			number: 620,
			type: 'school',
			description:
				'Overall appeals rejected is less than infant appeals rejected'
		},
		{
			number: 630,
			type: 'school',
			description:
				'More Number of appeals withdrawn plus or heard do not equal those than were lodged for infant classes'
		},
		{
			number: 640,
			type: 'school',
			description:
				'Infant appeals upheld plus infant appeals rejected should match the number of infant appeals heard'
		},
		{
			number: 5018,
			type: 'school',
			description:
				"Data items in the infant admission appeals module are only required from schools with governance type of 'VA', 'FO' or 'CA'"
		},
		{
			number: 5019,
			type: 'school',
			description:
				"Data items in the Infant admission appeals module are only required from schools with a phase of 'PS' or 'AT'"
		},
		{
			number: 920,
			type: 'pupil',
			description: 'Number of part-time pupils not at school is missing'
		},
		{
			number: 930,
			type: 'pupil',
			description:
				'More part-time pupils not in school than total part-time pupils registered'
		},
		{
			number: 940,
			type: 'pupil',
			description: 'Number of  private study pupils is missing'
		},
		{
			number: 950,
			type: 'pupil',
			description: 'Number of  pupils at another school is missing'
		},
		{
			number: 953,
			type: 'pupil',
			description: 'Number of  pupils on work experience is missing'
		},
		{
			number: 957,
			type: 'pupil',
			description: 'Number of  pupils at FE colleges is missing'
		},
		{
			number: 1000,
			type: 'pupil',
			description:
				'Pupil reconciliation does not match number of pupils on roll'
		},
		{
			number: 5023,
			type: 'pupil',
			description:
				"Data items in the pupil reconciliation module are only required from schools with a phase of 'PS', 'MP', 'MS', 'SS' or 'AT'"
		},
		{
			number: 5026,
			type: 'pupil',
			description:
				"Pupils can only be on work experience if the census return is from a school with a phase of 'MS', 'SS' or 'AT'"
		},
		{
			number: 5027,
			type: 'pupil',
			description:
				"Pupils can only be attending an FE college if the census return is from a school with a phase of 'MS', 'SS' or 'AT'"
		},
		{
			number: 1050,
			type: 'class',
			description: 'Class name is missing'
		},
		{
			number: 1060,
			type: 'class',
			description: 'Two (or more) classes have the same name'
		},
		{
			number: 1090,
			type: 'class',
			description: 'Number of support staff in class is missing'
		},
		{
			number: 1100,
			type: 'class',
			description: 'Class with no staff'
		},
		{
			number: 1130,
			type: 'class',
			description: 'Class Type is missing or invalid'
		},
		{
			number: 1140,
			type: 'class',
			description:
				'Class year group is missing, or invalid for this phase of school\n'
		},
		{
			number: 1160,
			type: 'class',
			description: 'Class key stage not present or invalid'
		},
		{
			number: 1170,
			type: 'class',
			description: 'Class activity is missing or invalid'
		},
		{
			number: 1190,
			type: 'class',
			description: 'Class year group and key stage not consistent'
		},
		{
			number: 1200,
			type: 'class',
			description: 'Number of home pupils in class is missing'
		},
		{
			number: 1210,
			type: 'class',
			description: 'Number of guest pupils in class is missing'
		},
		{
			number: 1220,
			type: 'class',
			description: 'Class with no pupils'
		},
		{
			number: 1235,
			type: 'class',
			description:
				'For KS1 or Reception classes class activity must reflect an “academic” activity '
		},
		{
			number: 5032,
			type: 'class',
			description:
				"Data items in the class information module are only required from schools with a phase of 'PS', 'MP', 'MS', 'SS' or 'AT'"
		},
		{
			number: 5036,
			type: 'class',
			description:
				"Class type can only be returned from schools with a phase of 'PS' or 'AT', and may be present only for year groups 'E1', 'E2', 'N1', 'N2', 'R', 1-7, or 'M'"
		},
		{
			number: 5037,
			type: 'class',
			description:
				"Class key stage can only be returned from schools with a phase of 'PS' or 'AT', and may be present only for year groups 'E1', 'E2', 'N1', 'N2', 'R', 1-7, or 'M'"
		},
		{
			number: 5038,
			type: 'class',
			description:
				"Class activity can only be returned from schools with a phase of 'PS' or 'AT', and may be present only for year groups 'E1', 'E2', 'N1', 'N2', 'R', 1-7, or 'M'"
		},
		{
			number: 5039,
			type: 'class',
			description:
				"The number of home pupils is only required from schools with a phase of 'PS', 'MP', 'MS', 'SS' or 'AT'"
		},
		{
			number: 5040,
			type: 'class',
			description:
				"The number of guest pupils is only required from schools with a phase of 'PS', 'MP', 'MS', 'SS' or 'AT'"
		},
		{
			number: 5160,
			type: 'class',
			description: 'Class information is missing'
		},
		{
			number: 1310,
			type: 'school',
			description: 'Number of free school meals taken is missing'
		},
		{
			number: 1320,
			type: 'school',
			description:
				'Please check: Free meals taken exceeds total eligible pupils '
		},
		{
			number: 2900,
			type: 'school',
			description: 'Details of whether Childcare is provided on site is missing'
		},
		{
			number: 2910,
			type: 'school',
			description:
				'Signposting or promotion of off-site childcare is missing or invalid'
		},
		{
			number: 2915,
			type: 'school',
			description:
				'Opening time must be provided in the format HH:MM for on site childcare'
		},
		{
			number: 2920,
			type: 'school',
			description:
				'Closing time must be provided in the format HH:MM for on site childcare'
		},
		{
			number: 2925,
			type: 'school',
			description: 'Number of childcare place for on site childcare missing'
		},
		{
			number: 2930,
			type: 'school',
			description:
				'The Service Provider of childcare for on site childcare missing'
		},
		{
			number: 2935,
			type: 'school',
			description: 'Ability to accept pupils from other schools is missing'
		},
		{
			number: 2940,
			type: 'school',
			description:
				'Number of weeks which regular childcare provision is open is missing or out of the range 1 to 38'
		},
		{
			number: 2945,
			type: 'school',
			description:
				'Only details on the Type of Childcare and Childcare Signposting are required.  Other childcare details are not required where childcare is not provided on site'
		},
		{
			number: 2950,
			type: 'school',
			description:
				"Childcare Type '?' has not been provided (the error message should indicate which <TypeOfChildcare> is missing)"
		},
		{
			number: 2955,
			type: 'school',
			description: 'The type of childcare has been reported more than once'
		},
		{
			number: 2970,
			type: 'school',
			description:
				'If the school has under 5 childcare, the number of hour for this provision must be equal to or greater than 9'
		},
		{
			number: 2975,
			type: 'school',
			description:
				'Number of weeks which regular childcare provision is open is missing or out of the range 1 to 15'
		},
		{
			number: 5005,
			type: 'school',
			description:
				"Data items in the Special School module are only required from schools with a phase of 'SP'"
		},
		{
			number: 2165,
			type: 'pupil',
			description:
				'Each SEN type must have a different ranking - two needs cannot both be ranked as the primary need',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1500,
			type: 'pupil',
			description: 'UPN missing',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1510,
			type: 'pupil',
			description:
				'UPN invalid (wrong check letter at character 1)\nOR\nFormer UPN invalid (wrong check letter at character 1)\n',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1520,
			type: 'pupil',
			description: 'More than one pupil record with the same UPN',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1530,
			type: 'pupil',
			description:
				'UPN invalid (characters 2-4 not a recognised LA code)\nOR\nFormer UPN invalid (characters 2-4 not a recognised LA code)\n',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1540,
			type: 'pupil',
			description:
				'UPN invalid (characters 5-12 not all numeric)\nOR\nFormer UPN invalid (characters 5-12 not all numeric)\n',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1550,
			type: 'pupil',
			description:
				'UPN invalid (character 13 not a recognised value or is missing)\nOR\nFormer UPN invalid (character 13 not a recognised value or is missing)\n',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1570,
			type: 'pupil',
			description:
				'Unique learner number must be provided for pupils aged 14 and over on census day',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1573,
			type: 'pupil',
			description:
				'Unique learner number must be provided for pupils aged 14 and over at date of leaving',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1575,
			type: 'pupil',
			description:
				'ULN format incorrect. Either number is less than 10 digits or the check digit is incorrect  - please check',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1578,
			type: 'pupil',
			description: 'More than one pupil record with the same ULN',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1580,
			type: 'pupil',
			description: 'Pupil with surname missing',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1590,
			type: 'pupil',
			description: 'Pupil with forename missing',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1600,
			type: 'pupil',
			description: 'Pupil’s date of birth is missing',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1610,
			type: 'pupil',
			description: 'Pupil’s gender is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5065,
			type: 'pupil',
			description:
				"Schools with a phase of 'NS' should not submit any records for pupils no longer on roll",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1630,
			type: 'pupil',
			description: "Pupil's ethnicity is missing or invalid",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1635,
			type: 'pupil',
			description:
				"Where the learner has not achieved grade 'A*'-'C' / '9'-'4'  in Maths GCSE the stage that the learner achieved this must not be equal to '1' or '2'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1636,
			type: 'pupil',
			description:
				"Where learner has achieved grade 'A*'-'C' / '9'-'4' in maths the prior attainment stage must be equal to '1' or '2'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1637,
			type: 'pupil',
			description:
				"Where the learner has not achieved grade 'A*'-'C' / '9'-'4'  in English GCSE the stage that the learner achieved this must not be equal to '1' or '2'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1638,
			type: 'pupil',
			description:
				"Where learner has achieved grade 'A*'-'C' / '9'-'4' in English the prior attainment stage must be equal to '1' or '2'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1741,
			type: 'pupil',
			description:
				'Based on Ministry of Defence criteria, Service Children (parents designated as personnel category 1 or 2) are not eligible for free school meals',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1761,
			type: 'pupil',
			description:
				'A start date must be provided for each period of free school meal eligibility',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1762,
			type: 'pupil',
			description:
				'Periods of free school meal eligibility that started after the census day should not be included in the return.',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1763,
			type: 'pupil',
			description:
				'Periods of free school meal eligibility that ended before or on the previous census day or after the current census day should not be included in the return.',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1764,
			type: 'pupil',
			description:
				'The country code associated with the period of free school meal eligibility is not a valid value',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1765,
			type: 'pupil',
			description:
				"Any period of FSM eligibility outside of England, that is, Country of UK equals 'NIR', 'SCT' or 'WLS', must have an FSM eligibility end date before census day",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1766,
			type: 'pupil',
			description: 'The FSM end date is prior to the FSM start date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1768,
			type: 'pupil',
			description: 'Pupil cannot have multiple open FSM periods',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1770,
			type: 'pupil',
			description:
				'Youth support services (previously known as connexions) agreement is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1840,
			type: 'pupil',
			description: 'Language is missing or invalid value',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1843,
			type: 'pupil',
			description:
				'Early years pupil premium basis for funding is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1844,
			type: 'pupil',
			description:
				"Early years pupil premium basis for funding is only required where early years pupil premium eligibility is 'Y'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1846,
			type: 'pupil',
			description:
				'Early years pupil premium must be recorded for all 3 year olds',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1847,
			type: 'pupil',
			description:
				'Early years pupil premium must be recorded for 4 year olds in Nursery provision',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1848,
			type: 'pupil',
			description:
				"Early years pupil premium must be recorded for 4 year olds in 'E1', 'E2', 'N1' or 'N2'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1861,
			type: 'pupil',
			description:
				"Early years pupil premium must only be recorded for 3 or for 4 year olds that are in Nursery provision, 'E1', 'E2', 'N1' or 'N2'\n\nEarly years pupil premium only required for pupils aged 3 and 4",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1862,
			type: 'pupil',
			description:
				'Early years pupil premium not required for pupils aged 4 in reception or above',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1851,
			type: 'pupil',
			description:
				'Child’s funded hours must not be provided for pupil aged 5 and over or aged under 12',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1852,
			type: 'pupil',
			description:
				'Child’s funded hours not provided or out of the range 0 to 15 to two decimal places for pupils aged 2 or 3',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1854,
			type: 'pupil',
			description:
				'Childs hours at setting must not be provided for pupil aged 5 and over or pupils aged under 12 and under',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1855,
			type: 'pupil',
			description:
				'Hours at setting is missing or invalid for 2 and, 3  year olds',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1856,
			type: 'pupil',
			description:
				'Service child in education indicator missing or invalid: This item is required for all pupils except those whose enrolment status is `S’ - current subsidiary (dual registration). ',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1859,
			type: 'pupil',
			description:
				'Funded hours plus any extended hours cannot be more than the hours at setting ',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1864,
			type: 'pupil',
			description:
				'Learner support code should not be provided for subsidiary pupils',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1865,
			type: 'pupil',
			description: 'Learner support code is invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1866,
			type: 'pupil',
			description:
				'The same learner support code should not appear more than once for the same pupil',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1867,
			type: 'pupil',
			description:
				'Learner is aged under 16 years as at 31 August 2018 and not eligible for bursary funding',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1868,
			type: 'pupil',
			description:
				'Learner is aged 20 years or over as at 31 August 2018 and not eligible for bursary funding',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1869,
			type: 'pupil',
			description: 'Top Up Funding indicator is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1871,
			type: 'pupil',
			description:
				'Post looked after arrangements indicator is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1875,
			type: 'pupil',
			description: 'School lunch taken is missing or invalid.',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1876,
			type: 'pupil',
			description:
				"School lunch taken only required from pupils in reception, year 1 or year 2 or from pupils aged 4 to 6 in year 'X'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1992,
			type: 'pupil',
			description:
				'Pupil has at least one learning aim which has been active during the current year but there are no planned learning hours recorded for the current academic year',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1993,
			type: 'pupil',
			description:
				'Pupil does not have at least one learning aim recorded therefore planned learning hours and/or planned employability, enrichment and pastoral hours should not be present',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1997,
			type: 'pupil',
			description:
				'The sum of planned learning hours and planned employability, enrichment and pastoral hours must not be greater than 4,000 hours',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2690,
			type: 'pupil',
			description: 'Unit contact time is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3000,
			type: 'pupil',
			description: 'Maths GCSE attainment grade is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3005,
			type: 'pupil',
			description:
				"The stage at which the learner achieved a Maths GCSE at grade 'A*'-'C' / '9' - '4' or not is missing or invalid",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3010,
			type: 'pupil',
			description: 'English GCSE attainment grade  is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3015,
			type: 'pupil',
			description:
				"The stage at which the learner achieved a English GCSE at grade 'A*'-'C' / '9' - '4' or not is missing or invalid",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3040,
			type: 'pupil',
			description: 'Maths GCSE funding exemption is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3045,
			type: 'pupil',
			description: 'English GCSE funding exemption is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3100,
			type: 'pupil',
			description:
				"Extended childcare hours have been entered where pupil is not in the eligible age range or year groups 'E1', 'E2', 'N1' or 'N2', or does not have a valid 30-hour code",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3105,
			type: 'pupil',
			description:
				'The 30-hour code must be 11 digits long and contain numerical characters only',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3110,
			type: 'pupil',
			description:
				"A 30-hour code has been entered where pupil is not in the eligible age range or in year groups 'E1', 'E2', 'N1' or 'N2', or extended hours is missing",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3120,
			type: 'pupil',
			description:
				'The disability access fund indicator should only be recorded for all pupils aged 3 and those aged 4 who are in nursery provision',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3130,
			type: 'pupil',
			description:
				'30-hour eligibility code missing for pupil aged 3 or 4 with extended hours present',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3140,
			type: 'pupil',
			description:
				'Child’s extended hours not provided or out of the range of 0 to 15 hours',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3150,
			type: 'pupil',
			description:
				'Child with extended hours greater than zero cannot have more than 15 funded hours',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3160,
			type: 'pupil',
			description: 'More than one pupil is recorded with the same 30hour code',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5046,
			type: 'pupil',
			description:
				"Youth support services indicator is not required from schools with a phase of 'NS' or 'PS'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5094,
			type: 'pupil',
			description:
				'Hours at setting is not required from CTCs  or non-maintained special schools ',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5095,
			type: 'pupil',
			description:
				'Funded hours are not required from CTCs  or non-maintained special schools ',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5096,
			type: 'pupil',
			description:
				'30-hour code is  not required from CTCs  or non-maintained special schools ',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5140,
			type: 'pupil',
			description:
				"Proficiency in English is missing or invalid for child in reception and above with language not equal to 'ENG' (English), 'ENB' (believed to be English) or 'BSL' (British sign language)",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5170,
			type: 'pupil',
			description:
				'Child’s funded hours must not be provided for pupil aged 4 in reception or above',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5180,
			type: 'pupil',
			description:
				'Child’s funded hours not provided or out of the range 0 to 25 to two decimal places for pupils aged 4 not in reception or above',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5190,
			type: 'pupil',
			description:
				'Child’s hours at setting must not be provided for pupils aged 4 in reception or above',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5200,
			type: 'pupil',
			description:
				'Child’s hours at setting is missing for pupils aged 4 in nursery provision',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5210,
			type: 'pupil',
			description:
				'Extended hours are not required from CTCs or non-maintained special schools',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5215,
			type: 'pupil',
			description:
				'Disability access fund information is  not required from CTCs  or non-maintained special schools ',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5220,
			type: 'pupil',
			description:
				'The disability access fund indicator is only available for pupils with funded or extended hours',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5225,
			type: 'pupil',
			description:
				'Child’s funded hours is out of the range 0 to 15 to two decimal places for pupils with a valid 30-hour code',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5230,
			type: 'pupil',
			description:
				'The disability access fund indicator is missing or not a valid value for pupils aged 3 or 4 (in nursery provision)',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5235,
			type: 'pupil',
			description:
				'2-year-old basis for funding is missing or an invalid value for a two year old with funded hours  or 2-year-old basis for funding has been provided without any funded hours being present',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3200,
			type: 'pupil',
			description:
				'The basis for funding should only be recorded for pupils aged 2 with funded hours greater than zero',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 3210,
			type: 'pupil',
			description:
				'Each reason for funding code must be unique and used only once',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 200,
			type: 'pupil',
			description:
				'The school has indicated that it does not follow the national curriculum (year ‘X’) but the pupil has a national curriculum year group other than ‘X’',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1860,
			type: 'pupil',
			description: 'Enrolment status is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1880,
			type: 'pupil',
			description: 'Pupil’s entry date to school missing or after census date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1882,
			type: 'pupil',
			description:
				'A new entry date should not be given for pupils moving directly from nursery to reception or entering year 12 directly from within the same school. Sessions possible indicate that the pupil attended the school during the summer second half term. If the pupil left and was subsequently readmitted, the error will be accepted by DfE on condition that a suitable explanatory notepad entry is provided. ',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1920,
			type: 'pupil',
			description:
				'Pupils leaving date is either missing, is either before entry date or equal to or after census date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1930,
			type: 'pupil',
			description: 'Pupil part-time indicator is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1940,
			type: 'pupil',
			description:
				'Pupils aged 5-15 cannot be shown as having part-time status',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1950,
			type: 'pupil',
			description: 'Part-time pupil shown as boarder',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 1970,
			type: 'pupil',
			description: 'Pupil boarder indicator is invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2000,
			type: 'pupil',
			description: 'Pupil actual year group is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2002,
			type: 'pupil',
			description:
				"Pupil's NC year is not within the range of the school’s lowest and highest NC year",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2005,
			type: 'pupil',
			description:
				'Pupil’s NC year on leaving is not a valid value should be present for pupils who have learning aims or is missing',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2060,
			type: 'pupil',
			description:
				"Pupil’s type of class is missing or invalid for pupils in primary classes with phase 'PS' or 'AT'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2080,
			type: 'pupil',
			description: 'Pupil aged 6 or over is shown as being in a nursery class',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2112,
			type: 'pupil',
			description:
				"School is not following the national curriculum (year 'X') yet pupil has an NC year group The school has indicated that it does not follow the national curriculum (year ‘X’) therefore the pupil’s national curriculum year group must be 'X' ",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5048,
			type: 'pupil',
			description:
				"Pupil's type of class can only be returned from schools with a phase of  'PS' or 'AT' and may be present only for pupils in NC Year 'E1', 'E2', 'N1', 'N2', 'R', or 1-7",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2120,
			type: 'pupil',
			description: 'Pupil with missing SEN provision or invalid value  ',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2125,
			type: 'pupil',
			description: 'Pupil shows SEN information where provision is none',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2130,
			type: 'pupil',
			description:
				'Pupil SEN type code required where SEN type ranking provided',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2140,
			type: 'pupil',
			description: 'Ranking of special educational need is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2160,
			type: 'pupil',
			description:
				'If only one SEN type is present it must be the primary need',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2166,
			type: 'pupil',
			description:
				'A maximum of two types of SEN need should be included in the return',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2170,
			type: 'pupil',
			description:
				"A valid SEN type must be provided for pupils where with a SEN provision equals 'K', 'S' or 'E'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2175,
			type: 'pupil',
			description:
				'SEN type code ‘NSA’ (SEN support but no specialist assessment of type of need) can only be used where SEN provision is code ‘K’ (SEN support)',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2180,
			type: 'pupil',
			description: 'Pupil in special school with no SEN',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2230,
			type: 'pupil',
			description:
				"Special provision (SEN Unit) indicator must be provided if SEN provision is equal to 'E' or 'K' or 'S'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2250,
			type: 'pupil',
			description:
				"Special provision (Resourced provision) indicator must be provided if SEN Pprovision is equal to 'E' or 'K' or 'S' ",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5049,
			type: 'pupil',
			description:
				"SEN unit indicator is not required from schools with a phase of 'SP' or 'PR'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5050,
			type: 'pupil',
			description:
				"Resourced provision indicator is not required from schools with a phase of 'SP' or 'PR'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2115,
			type: 'pupil',
			description:
				"Code 'S' (statement of SEN) has been discontinued and is no longer in use. Please re-code this as code 'E' and carry out a review of the pupil's SEN",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2270,
			type: 'pupil',
			description:
				'Start date, SEN provision or category is missing from exclusion record',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2275,
			type: 'pupil',
			description: 'Exclusion Category is invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2280,
			type: 'pupil',
			description:
				'Where exclusion category is present a valid exclusion reason must also be provided',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2285,
			type: 'pupil',
			description: 'Pupil has more than one permanent exclusion record',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2290,
			type: 'pupil',
			description: 'Exclusion start date invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2300,
			type: 'pupil',
			description:
				'Where exclusion category is fixed or lunch the number of sessions must also be provided',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2303,
			type: 'pupil',
			description:
				'Pupil’s leaving date suggests they left the school prior to the start of their exclusion',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2310,
			type: 'pupil',
			description: 'SEN Provision is not a valid value',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2330,
			type: 'pupil',
			description:
				'Where exclusion category is permanent the number of sessions is not applicable',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2335,
			type: 'pupil',
			description: 'Permanent exclusion appears for pupil still on roll',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5051,
			type: 'pupil',
			description: 'Exclusions must not be present for Nursery schools',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2340,
			type: 'pupil',
			description: 'Postcode is missing or provided in an invalid format',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2341,
			type: 'pupil',
			description:
				'Postcode is missing or invalid for an off roll pupil for whom learning aims data are being submitted',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2350,
			type: 'pupil',
			description: 'Insufficient address information provided.',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2380,
			type: 'pupil',
			description:
				'Where dwelling is present at least one of:  street, locality, town, administrative area or post town must be shown',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2400,
			type: 'pupil',
			description:
				'Where address line 1 is present, at least one other address line must also be present.',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2445,
			type: 'pupil',
			description: 'Address information drawn from two conflicting formats',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5155,
			type: 'pupil',
			description: 'UPRN is incorrect format',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2470,
			type: 'pupil',
			description:
				'Attendance information is not required for this pupil as they are either aged less than 4, over 15 or are a boarder',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2475,
			type: 'pupil',
			description: 'Attendance code is invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2480,
			type: 'pupil',
			description:
				'Pupil reporting zero sessions missed with attendance code. This should be provided and be greater than zero.\n\nWhere a reason for absence is provided the number of sessions missed should be greater than zero.\n',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2490,
			type: 'pupil',
			description:
				'Pupil reporting number of sessions missed with no corresponding reason (attendance code)',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2500,
			type: 'pupil',
			description:
				'For autumn:\n\nFor pupil on roll in the first summer half term the attendance sessions possible is missing must be greater than or equal to zero\n\nFor spring and summer:\n\nFor pupil on roll the attendance sessions possible is missing must be greater than or equal to zero',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2505,
			type: 'pupil',
			description: 'Pupil with double-reporting of termly absences',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2510,
			type: 'pupil',
			description:
				'For autumn:\n\nFor pupil no longer on roll in the first summer half term the attendance sessions possible is missing or invalid must be greater than or equal to zero\n\nFor spring and summer:\n\nFor pupil no longer on roll the attendance sessions possible is missing or invalid must be greater than or equal to zero',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2530,
			type: 'pupil',
			description:
				'Total sessions missed must be less than or equal to sessions possible',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5057,
			type: 'pupil',
			description:
				"Attendance information is not required from schools with a phase of 'NS'\n",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5080,
			type: 'pupil',
			description:
				'Summer half term 2 attendance not required if nursery school',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2571,
			type: 'pupil',
			description:
				'Attendance data for the second half of the summer term is not required for this pupil as they are either aged less than 4, over 15 or are a boarder',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2572,
			type: 'pupil',
			description:
				'Attendance code is invalid for absence reported for the second half of the summer term',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2573,
			type: 'pupil',
			description:
				'Pupil reporting zero sessions missed with attendance code. This should be provided and be greater than zero.\n\nWhere a reason for absence is provided the number of sessions missed should be greater than zero.\n',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2574,
			type: 'pupil',
			description:
				'Pupil reporting number of sessions missed with no corresponding reason (attendance code) for the second half of the summer term',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2575,
			type: 'pupil',
			description:
				'For pupils on roll the attendance sessions possible must be greater than or equal to zero is missing or invalid for the second half of the summer term',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2577,
			type: 'pupil',
			description:
				'Pupil with double-reporting of termly absences in the second half of the summer term',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2579,
			type: 'pupil',
			description:
				'For pupils no longer on roll the attendance sessions possible must be greater than or equal to zero is missing or invalid for the second half of the summer term',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2582,
			type: 'pupil',
			description:
				'Total sessions missed must be less than or equal to sessions possible for the second half of the summer term',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2700,
			type: 'pupil',
			description: 'Qualification number is missing',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2701,
			type: 'pupil',
			description:
				"A learning aim withdrawal reason is only required where the learner has withdrawn and the learning aim status is recorded as '3'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2705,
			type: 'pupil',
			description: 'Learning aims are only required for schools with 6th forms',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2710,
			type: 'pupil',
			description:
				'Qualification number has invalid characters or incorrectly formatted',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2712,
			type: 'pupil',
			description: 'Full-time employment indicator is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2720,
			type: 'pupil',
			description: 'Qualification number is not a recognised value',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2721,
			type: 'pupil',
			description:
				'The core aim must not be ‘true’ if the student is studying an academic programme.',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2722,
			type: 'pupil',
			description: 'Subject classification code is missing',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2724,
			type: 'pupil',
			description: 'Subject classification code is not a recognised value',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2730,
			type: 'pupil',
			description: 'Learning start date is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2735,
			type: 'pupil',
			description: 'Learning start date is after the census date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2750,
			type: 'pupil',
			description: 'Learning planned end date is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2760,
			type: 'pupil',
			description:
				'Learning aim - the planned end date must be on or after the start date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2761,
			type: 'pupil',
			description:
				'Learning aim - the actual end date must be on or after the start date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2765,
			type: 'pupil',
			description:
				'Learning planned end date is more than 5 years after census date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2766,
			type: 'pupil',
			description:
				'Learning planned end date must be on or before the 31st July of the academic year the learner is due to finish',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2770,
			type: 'pupil',
			description: 'Learning aim end date is not a valid date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2780,
			type: 'pupil',
			description:
				"Learning aim actual end date has incorrectly been provided for a learning aim which is continuing that is, for which learning aim status equals '1'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2785,
			type: 'pupil',
			description: 'Learning aim withdrawal reason is missing or invalid value',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2790,
			type: 'pupil',
			description:
				"Learning aim actual end date must be provided where the learning aim status is '2' (completed), '3' (withdrawn) or '4' (transferred)",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2795,
			type: 'pupil',
			description:
				"For pupils no longer on roll the learning aim status must be '2' (completed), '3' (withdrawn) or '4' (transferred) ",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2805,
			type: 'pupil',
			description:
				'Please check: Learning aim actual end date must be the same as, or earlier than the census date',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2820,
			type: 'pupil',
			description: 'Learning aim status is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2850,
			type: 'pupil',
			description:
				'The learning aim start date is after the date that certification for this qualification closed',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 2870,
			type: 'pupil',
			description:
				'Learning aims for the current academic year should must be submitted for a pupil in year 12 or above with single or main registration at the school',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5106,
			type: 'pupil',
			description:
				"Learning aims are only required for schools with a <Phase> of 'SS', 'AT' or 'PR'",
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5130,
			type: 'pupil',
			description:
				'Postcode is not required for off roll pupils without learning aims',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		},
		{
			number: 5165,
			type: 'pupil',
			description: 'Traineeship is missing or invalid',
			pupils: createPupils(
				randomItemFrom([
					randomNumber(1, 10),
					randomNumber(1, 10),
					randomNumber(10, 20),
					randomNumber(20, 50),
					1,
					1,
					1,
					1,
					1
				])
			)
		}
	]
}
