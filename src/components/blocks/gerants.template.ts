import type { Template } from 'tinacms';

export const gerantsBlockSchema: Template = {
	name: 'gerants',
	label: 'Section Gérants Épicerie',
	fields: [
		{
			type: 'string',
			name: 'titre',
			label: 'Titre de la section',
		},
		{
			type: 'string',
			name: 'texte',
			label: 'Histoire / Présentation des gérants',
			ui: {
				component: 'textarea',
			},
		},
		{
			type: 'image',
			name: 'photo',
			label: 'Photo des gérants',
		},
	],
};
