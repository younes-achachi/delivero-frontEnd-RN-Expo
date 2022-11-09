import react from 'react';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
const client = sanityClient({
	projectId: '4jof81e8',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21'
});
const builder = imageUrlBuilder(client);
export function urlFor(source) {
	return builder.image(source);
}
// RUN THIS TO ADD EXCEPTION FOR LOCALHOST 3000 CORS POLICY
//SANITY CORS ADD http://localhost:3000
export default client;
