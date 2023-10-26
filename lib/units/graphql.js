// query {
//     # Selfcaterings {
//     # Selfcaterings (where: { tabTwo__selfCateringContent__Beds : { equals: 1 } }, sort: "name", page: 1) {
//     SelfCateringUnits (sort: "name", page: 1) {
  
//       docs {
//         id,
//         name
//         unitType {
//           name
//           },
//         locations {
//           name
//         },
//         shortDescription,
//         price,
//         unitFeatures {
//           name
//         },
//         tabTwo {
//           selfCateringOptions {
//             active,
//             accessible,
//             electricCarCharging,
//             carParking,
//             EPmapping,
//           },
//           selfCateringContent {
//             sleepCapacity,
//             bathrooms,
//             bedrooms,
//             Beds,
//             pets,
//           }
  
//         },
//               tabThree {
//           featuredImage {
//             sizes {
//               thumbnail {
//                 url
//               }
//             }
//           }
//           floorPlan {
//             sizes {
//               thumbnail {
//                 url
//               }
//             }
//           }
//         }
//       }
//       totalDocs
//     }
//   }

//Location query
// query {
//     Location(id : "652e938fd01ee8d449fa5350"){
//         name,
//           locationType {
//             name
//           },
//           contactDetails {
//             contact,
//             phone
//           }
//         parkOpeningTimes {
//           parkOpenDate,
//           parkCloseDate,
//           },
//               }
//     }

// # query {
//     #   Locations (where: { id: { equals: "652e938fd01ee8d449fa5350" } }, sort: "id", page: 1){
//     #     docs {
//     #       id,
//     #       name
//     #     }
//     #     totalDocs
//     #   }
//     # }
    
//     query {
//       Locations(id : "652e938fd01ee8d449fa5350"){
//         docs {
//           id,
//           name
//         }
//         totalDocs
//       }
//     }
    
//     # query {
//     #   Locations (where: { name: { like: "Coast" } }, sort: "id", page: 1){
//     #     docs {
//     #       id,
//     #       name
//     #     }
//     #     totalDocs
//     #   }
//     # }
    
//     # query {
//     #   Selfcatering(id: "652ea32bac5a9ee83574dfd5", draft: false): Selfcatering
//       {
//         #     docs {
//         #       id,
//         #       name
//         # }
//       }
//     #}
        
//     # query {
//     #   Selfcaterings (where: { name: { like: "Gold" } }, sort: "id", page: 1){
//     #     docs {
//     #       id,
//     #       name
//     #       unitType {
//     #         name
//     #         },
//     #       locations {
//     #         name
//     #       }
            
          
              
//     #     }
//     #     totalDocs
//     #   }
//     # }
    