export default {
	name: 'restaurant',
	title: 'Restaurant',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Restaurant Name',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'short_description',
			type: 'string',
			title: 'Short_description',
			validation: (Rule) => Rule.max(200)
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image of the restaurant'
		},
		{
			name: 'lat',
			type: 'number',
			title: 'Latitude of the Restaurant'
		},
		{
			name: 'long',
			type: 'number',
			title: 'Longitude of the Restaurant'
		},
		{
			name: 'genre',
			type: 'string',
			title: 'Restaurant genre',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'address',
			type: 'string',
			title: 'Restaurant address',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'rating',
			type: 'number',
			title: 'Rating',
			validation: (Rule) => Rule.required().min(1).max(5).error('enter a valid number between 1 to 5 ')
		},
		{
			name: 'type',
			title: 'Category',
			validation: (Rule) => Rule.required(),
			type: 'reference',
			to: [ { type: 'category' } ]
		},
		{
			name: 'dishe',
			type: 'array',
			title: 'Dishes',
			of: [ { type: 'reference', to: [ { type: 'dishe' } ] } ]
		}
	]
};
