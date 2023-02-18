
import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export default sanityClient({
    projectId: "g5f155up",
    dataset: "production",
    apiVersion: '2023-01-13',
    useCdn: true
  });

  
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);