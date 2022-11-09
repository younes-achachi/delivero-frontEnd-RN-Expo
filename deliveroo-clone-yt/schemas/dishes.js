export default {
	name: 'dishe',
	title: 'Dishe',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name of dish',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'short_description',
			title: 'Short description',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'price',
			title: 'Price of the dish in GBP',
			type: 'number'
		},
		{
			name: 'image',
			title: 'image',
			type: 'image'
		}
	]
};
