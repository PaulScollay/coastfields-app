
import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage
`
const blogFields2 = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
`
// 'coverImage' : coverImage.asset->url
const builder = imageUrlBuilder(client)
const getClient = preview => preview ? previewClient : client

export function urlFor(source) {
  return builder.image(source);
}

//API calls to Sanity

/*
** QUERY "get Units"
** @params: none
** @returns: summary array of units for all locations
** @desc: gets all self catering units by location
*/

export async function getUnits() {
  const results = await client.fetch(
    `
    *[_type == "location"]{
      _id, name, 'logo' : logo.asset->url,
      "selfCaterings": *[_type == "selfCatering" && references(^._id)]
      {_id, name, 'features': Features[]->{name}, 'featuredImage': featuredImage.asset->url,pets, price, beds, sleepCapacity, bathrooms, 'parkName' : ^.name}
    
    }
    `)

  console.log("Cache revalidate - reloading getUnitsByLocation")
  // return results[0];
  return results;
}
/*
** QUERY "get Units By Location"
** @params: locationId
** @returns: summary array of units
** @desc: gets all self catering units by location
*/

export async function getUnitsByLocation(locationId) {
  const results = await client.fetch(
    `
    *[_type == "location" && name == "COASTFIELDS HOLIDAY VILLAGE"]{
      _id, name, 'logo' : logo.asset->url,
      "selfCaterings": *[_type == "selfCatering" && references(^._id)]
      {_id, name, 'features': Features[]->{name}, 'featuredImage': featuredImage.asset->url,pets, price, beds, sleepCapacity, bathrooms, 'parkName' : ^.name}
    
    }
    `)

  console.log("Cache revalidate - reloading getUnitsByLocation")
  return results[0];
}
//








// offset = how many data you want to skip, limit = how many date you want to fetch
export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"] | order(date desc) {${blogFields}}`, { next: { tags: ['collection'] } })
  console.log(results)
  console.log("Cache revalidate - reloading Blogs")
  return results;
}

export async function getPaginatedBlogs({offset = 0, date = 'desc'} = {offset: 0, date: 'desc'}) {
  const results = await client
    .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 3}]`);
  return results;
}

export const onBlogUpdate = (slug) => {
  const client = getClient(true);
  return client.listen(`*[_type == "blog" && slug.current == $slug] {
    ${blogFields}
    content[]{..., "asset": asset->}
  }`, {slug})
}


export async function getBlogBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const result = await currentClient
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields2}
      content[]{..., "asset": asset->}
    }`, {slug})
    .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0])

  return result;

}