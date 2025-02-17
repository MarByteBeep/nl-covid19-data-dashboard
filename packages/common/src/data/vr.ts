export interface SafetyRegionInfo {
	name: string;
	code: string;
	id: number;
	searchTerms?: string[];
}

export const vrData: SafetyRegionInfo[] = [
	{ name: 'Groningen', code: 'VR01', id: 1 },
	{ name: 'Fryslân', code: 'VR02', id: 2, searchTerms: ['Friesland'] },
	{ name: 'Drenthe', code: 'VR03', id: 3 },
	{ name: 'IJsselland', code: 'VR04', id: 4 },
	{ name: 'Twente', code: 'VR05', id: 5 },
	{ name: 'Noord- en Oost-Gelderland', code: 'VR06', id: 6 },
	{ name: 'Gelderland-Midden', code: 'VR07', id: 7 },
	{ name: 'Gelderland-Zuid', code: 'VR08', id: 8 },
	{ name: 'Utrecht', code: 'VR09', id: 9 },
	{ name: 'Noord-Holland Noord', code: 'VR10', id: 10 },
	{ name: 'Zaanstreek-Waterland', code: 'VR11', id: 11 },
	{ name: 'Kennemerland', code: 'VR12', id: 12 },
	{ name: 'Amsterdam-Amstelland', code: 'VR13', id: 13 },
	{ name: 'Gooi en Vechtstreek', code: 'VR14', id: 14 },
	{ name: 'Haaglanden', code: 'VR15', id: 15 },
	{ name: 'Hollands Midden', code: 'VR16', id: 16 },
	{ name: 'Rotterdam-Rijnmond', code: 'VR17', id: 17 },
	{ name: 'Zuid-Holland Zuid', code: 'VR18', id: 18 },
	{ name: 'Zeeland', code: 'VR19', id: 19 },
	{ name: 'Midden- en West-Brabant', code: 'VR20', id: 20 },
	{ name: 'Brabant-Noord', code: 'VR21', id: 21 },
	{ name: 'Brabant-Zuidoost', code: 'VR22', id: 22 },
	{ name: 'Limburg-Noord', code: 'VR23', id: 23 },
	{ name: 'Zuid-Limburg', code: 'VR24', id: 24 },
	{ name: 'Flevoland', code: 'VR25', id: 25 },
];
