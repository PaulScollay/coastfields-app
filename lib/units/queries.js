
import client from '../sanity';
import imageUrlBuilder from '@sanity/image-url';

const unitSumaryFields = `
  _id, 
  name, 
  'features': Features[]->{name}, 
  'featuredImage': featuredImage.asset->url,
  pets, 
  price, 
  beds, 
  sleepCapacity, 
  bathrooms, 
  'parkName' : ^.name}
`

const unitDetailFields = `
  _id, 
  name, 
  'features': Features[]->{name}, 
  'featuredImage': featuredImage.asset->url,
  pets, 
  price, 
  beds, 
  sleepCapacity, 
  bathrooms, 
  longDescription,
  electricCarCharging,
  'locations' : locations[]->{_id, name},
  'unitType' : unitType->name,
  'gallery' : gallery[].asset->url,
  'parkName' : ^.name
`
const builder = imageUrlBuilder(client)

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

  console.log("Cache revalidate - reloading getUnits")
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

/*
** QUERY "get Units Details
** @params: unitId
** @returns: full details of a unit
** @desc: full details of a unit
*/

export async function getUnitDetails(_id) {

  const results = await client.fetch(
    `
    *[_type == "selfCatering" && _id == "${_id}"]{
      ${unitDetailFields}
    
    }       
    `
    )

  console.log("Cache revalidate - reloading getUnitDetails")
  return results[0];
}

