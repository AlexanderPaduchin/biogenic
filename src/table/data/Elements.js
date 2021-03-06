import React from 'react';

import H from './H/H';
import C from './C/C';

const elements = {
	H: {
		color: 'Red',
		num: 1,
		weight: 1.00797,
		name: 'Водород',
		description: H
	},
	He: {
		color: 'Red',
		num: 2,
		weight: 4.0026,
		name: 'Гелий',
	},
	Li: {
		num: 3,
		color: 'Red',
		weight: 6.939,
		name: 'Литий',

	},
	Be: {
		num: 4,
		color: 'Red',
		weight: 9.0122,
		name: 'Бериллий',

	},
	B: {
		num: 5,
		color: 'Yellow',
		weight: 10.811,
		name: 'Бор',
	},
	C: {
		num: 6,
		color: 'Yellow',
		weight: 12.01115,
		name: 'Углерод',
		description: C
	},
	N: {
		num: 7,
		color: 'Yellow',
		weight: 14.0067,
		name: 'Азот',
		description: () => <div>111</div>
	},
	O: {
		num: 8,
		color: 'Yellow',
		weight: 15.9994,
		name: 'Кислород',
	},
	F: {
		num: 9,
		color: 'Yellow',
		weight: 18.9984,
		name: 'Фтор',
	},
	Ne: {
		num: 10,
		color: 'Yellow',
		weight: 20.183,
		name: 'Неон',
	},

	Na: {
		num: 11,
		color: 'Red',
		weight: 22.9898,
		name: 'Натрий',
	},
	Mg: {
		num: 12,
		color: 'Red',
		weight: 24.312,
		name: 'Магниц',
	},
	Al: {
		num: 13,
		color: 'Yellow',
		weight: 26.9815,
		name: 'Алюминий',
	},
	Si: {
		num: 14,
		color: 'Yellow',
		weight: 28.086,
		name: 'Кремний',
	},
	P: {
		num: 15,
		color: 'Yellow',
		weight: 30.9738,
		name: 'Фосфор',
	},
	S: {
		num: 16,
		color: 'Yellow',
		weight: 32.064,
		name: 'Сера',
	},
	Cl: {
		num: 17,
		color: 'Yellow',
		weight: 35.453,
		name: 'Хлор',
	},
	Ar: {
		num: 18,
		color: 'Yellow',
		weight: 39.948,
		name: 'Аргон',
	},

	K: {
		num: 19,
		color: 'Red',
		weight: 39.102,
		name: 'Калий',
	},
	Ca: {
		num: 20,
		color: 'Red',
		weight: 40.08,
		name: 'Кальций',
	},
	Sc: {
		num: 21,
		color: 'Green',
		weight: 44.956,
		name: 'Скандий',
	},
	Ti: {
		num: 22,
		color: 'Green',
		weight: 47.9,
		name: 'Титан',
	},
	V: {
		num: 23,
		color: 'Green',
		weight: 50.942,
		name: 'Ванадий',
	},
	Cr: {
		num: 24,
		color: 'Green',
		weight: 51.996,
		name: 'Хром',
	},
	Mn: {
		num: 25,
		color: 'Green',
		weight: 54.938,
		name: 'Марганец',
	},
	Fe: {
		num: 26,
		color: 'Green',
		weight: 55.847,
		name: 'Железо',
	},
	Co: {
		num: 27,
		color: 'Green',
		weight: 58.9332,
		name: 'Кобальт',
	},
	Ni: {
		num: 28,
		color: 'Green',
		weight: 58.71,
		name: 'Никель',
	},
	Cu: {
		num: 29,
		color: 'Green',
		weight: 63.546,
		name: 'Медь',
	},
	Zn: {
		num: 30,
		color: 'Green',
		weight: 65.39,
		name: 'Цинк',
	},
	Ga: {
		num: 31,
		color: 'Yellow',
		weight: 69.72,
		name: 'Галлий',
	},
	Ge: {
		num: 32,
		color: 'Yellow',
		weight: 72.59,
		name: 'Германий',
	},
	As: {
		num: 33,
		color: 'Yellow',
		weight: 0.0,
		name: 'Мышьяк',
	},
	Se: {
		num: 34,
		color: 'Yellow',
		weight: 0.0,
		name: 'Селен',
	},
	Br: {
		num: 35,
		color: 'Yellow',
		weight: 0.0,
		name: 'Бром',
	},
	Kr: {
		num: 36,
		color: 'Yellow',
		weight: 0.0,
		name: 'Криптон',
	},
	Rb: {
		num: 37,
		color: 'Red',
		weight: 0.0,
		name: 'Рубидий',
	},
	Sr: {
		num: 38,
		color: 'Red',
		weight: 0.0,
		name: 'Стронций',
	},
	Y: {
		num: 39,
		color: 'Green',
		weight: 0.0,
		name: 'Иттрий',
	},
	Zr: {
		num: 40,
		color: 'Green',
		weight: 0.0,
		name: 'Цирконий',
	},
	Nb: {
		num: 41,
		color: 'Green',
		weight: 0.0,
		name: 'Ниобий',
	},
	Mo: {
		num: 42,
		color: 'Green',
		weight: 0.0,
		name: 'Молибден',
	},
	Tc: {
		num: 43,
		color: 'Green',
		weight: 0.0,
		name: 'Технеций',
	},
	Ru: {
		num: 44,
		color: 'Green',
		weight: 0.0,
		name: 'Рутений',
	},
	Rh: {
		num: 45,
		color: 'Green',
		weight: 0.0,
		name: 'Родий',
	},
	Pd: {
		num: 46,
		color: 'Green',
		weight: 0.0,
		name: 'Палладий',
	},
	Ag: {
		num: 47,
		color: 'Green',
		weight: 0.0,
		name: 'Серебро',
	},
	Cd: {
		num: 48,
		color: 'Green',
		weight: 0.0,
		name: 'Кадмий',
	},
	In: {
		num: 49,
		color: 'Yellow',
		weight: 0.0,
		name: 'Индий',
	},
	Sn: {
		num: 50,
		color: 'Yellow',
		weight: 0.0,
		name: 'Олово',
	},
	Sb: {
		num: 51,
		color: 'Yellow',
		weight: 0.0,
		name: 'Сурьма',
	},
	Te: {
		num: 52,
		color: 'Yellow',
		weight: 0.0,
		name: 'Теллур',
	},
	I: {
		num: 53,
		color: 'Yellow',
		weight: 0.0,
		name: 'Йод',
	},
	Xe: {
		num: 54,
		color: 'Yellow',
		weight: 0.0,
		name: 'Ксенон',
	},
	Cs: {
		num: 55,
		color: 'Red',
		weight: 0.0,
		name: 'Цезий',
	},
	Ba: {
		num: 56,
		color: 'Red',
		weight: 0.0,
		name: 'Барий',
	},
	'La*': {
		num: 57,
		color: 'Green',
		weight: 0.0,
		name: 'Лантан',
	},

	Hf: {
		num: 72,
		color: 'Green',
		weight: 0.0,
		name: 'Гафний',
	},

	Ta: {
		num: 73,
		color: 'Green',
		weight: 0.0,
		name: 'Тантал',
	},
	W: {
		num: 74,
		color: 'Green',
		weight: 0.0,
		name: 'Вольфрам',
	},
	Re: {
		num: 75,
		color: 'Green',
		weight: 0.0,
		name: 'Рений',
	},
	Os: {
		num: 76,
		color: 'Green',
		weight: 0.0,
		name: 'Осмий',
	},
	Ir: {
		num: 77,
		color: 'Green',
		weight: 0.0,
		name: 'Иридий',
	},
	Pt: {
		num: 78,
		color: 'Green',
		weight: 0.0,
		name: 'Платина',
	},
	Au: {
		num: 79,
		color: 'Green',
		weight: 0.0,
		name: 'Золото',
	},
	Hg: {
		num: 80,
		color: 'Green',
		weight: 0.0,
		name: 'Ртуть',
	},
	Tl: {
		num: 81,
		color: 'Yellow',
		weight: 0.0,
		name: 'Таллий',
	},
	Pb: {
		num: 82,
		color: 'Yellow',
		weight: 0.0,
		name: 'Свинец',
	},
	Bi: {
		num: 83,
		color: 'Yellow',
		weight: 0.0,
		name: 'Висмут',
	},
	Po: {
		num: 84,
		color: 'Yellow',
		weight: 0.0,
		name: 'Полоний',
	},
	At: {
		num: 85,
		color: 'Yellow',
		weight: 0.0,
		name: 'Астат',
	},
	Rn: {
		num: 86,
		color: 'Yellow',
		weight: 0.0,
		name: 'Радон',
	},

	Fr: {
		num: 87,
		color: 'Red',
		weight: 0.0,
		name: 'Франций',
	},
	Ra: {
		num: 88,
		color: 'Red',
		weight: 0.0,
		name: 'Радий',
	},
	'Ac**': {
		num: 89,
		color: 'Green',
		weight: 0.0,
		name: 'Актиний',
	},

	Rf: {
		num: 104,
		color: 'Green',
		weight: 0.0,
		name: 'Резерфордий',
	},
	Db: {
		num: 105,
		color: 'Green',
		weight: 0.0,
		name: 'Дубний',
	},
	Sg: {
		num: 106,
		color: 'Green',
		weight: 0.0,
		name: 'Сиборгий',
	},
	Bh: {
		num: 107,
		color: 'Green',
		weight: 0.0,
		name: 'Борий',
	},
	Hs: {
		num: 108,
		color: 'Green',
		weight: 0.0,
		name: 'Хассий',
	},
	Mt: {
		num: 109,
		color: 'Green',
		weight: 0.0,
		name: 'Мейтнерий',
	},
	Ds: {
		num: 110,
		color: 'Green',
		weight: 0.0,
		name: 'Дармштадтий',
	},
	Rg: {
		num: 111,
		color: 'Green',
		weight: 0.0,
		name: 'Рентгений',
	},
};

export default elements;
