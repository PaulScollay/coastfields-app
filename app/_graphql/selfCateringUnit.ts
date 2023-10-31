const SELF_CATERING_UNIT = `
  id
  name
`

// export const SELF_CATERING_UNITS_QUERY = `
// query SelfCateringUnit {
//   SelfCateringUnits(sort: "name", limit:5) {
//     docs {
//       id
//       name
//       unitType {
//           name
//         }
//     }
//     totalDocs
//   }
// }
//`
export const SELF_CATERING_UNITS_QUERY = `
query SelfCateringUnit {
  SelfCateringUnits(sort: "name", limit:5) {
    docs {
      id
      name
      price
      locations {
          id
          name
      }
      imagesTab {
        featuredImage {
          sizes {
            thumbnail {
              url
            }
          }
        }
      }
      shortDescription,
      longDescription,
      unitType {
          id
          name
        }
      optionsTab {
          selfCateringOptions {
            active,
            accessible,
            electricCarCharging,
            carParking,
            EPmapping,
          },
          selfCateringContent {
            sleepCapacity,
            bathrooms,
            bedrooms,
            Beds,
            pets,
          }
        }
    }
    totalDocs
  }
}
`
// export const SELF_CATERING_UNITS_QUERY = `
// query SelfCateringUnit {
//   SelfCateringUnits(sort: "name", limit:5) {
//     docs {
//       id
//       name 
// 			NoTab {
//         sizes {
//         thumbnail {
//           url
//         }
//       }      
//       }
//       optionsTab {
//         selfCateringOptions {
//           active,
//           accessible,
//           electricCarCharging,
//           carParking,
//           EPmapping,
//         },
//         selfCateringContent {
//           sleepCapacity,
//           bathrooms,
//           bedrooms,
//           Beds,
//           pets,
//         }

//       },
//       shortDescription,
//       longDescription,
//       unitType {
//           id
//         }
//       unitFeatures
//           {
//             name
//           }
//       locations {
//         name
//       },
//       price
//     }
//     totalDocs
//   }
// }
// `

export const SELF_CATERING_UNIT_QUERY = `
query Project($teamID: String, $projectSlug: String) {
  Projects(where: { AND: [{ slug: { equals: $projectSlug }}, { team: { equals: $teamID }} ] }, limit: 1) {
    docs {
      ${SELF_CATERING_UNIT}
    }
  }
}
`
// export const SELF_CATERING_UNIT_QUERY = `
// query Project($teamID: String, $projectSlug: String) {
//   Projects(where: { AND: [{ slug: { equals: $projectSlug }}, { team: { equals: $teamID }} ] }, limit: 1) {
//     docs {
//       ${SELF_CATERING_UNIT}
//     }
//   }
// }