

import { ShoppingCartIcon, UserIcon, FunnelIcon, PuzzlePieceIcon} from "@heroicons/react/24/outline";
import { productTypes } from "../data/products";
import { getUnits, getUnitsByLocation } from '@/lib/units/queries';
import Link from "next/link"
import UnitItem from "../components/unitItem";
import { revalidatePath } from 'next/cache'
// export const revalidate = 60

export default async function Page() {
  const unitsByLocation = await getUnits();

  console.log(unitsByLocation[0].selfCaterings)
  return (
        <div>
          <hr className="mt-2"/>
          <div className="space-y-4">
            {/* <h3 className="text-x1  mt-5 font-semibold">view categories</h3> */}
            <div className="flex flex-wrap justify-start items-center">
            {/* <div className="flex flex-wrap justify-start items-center space-x-2 overflow-x-scroll snap-x"> */}
              {
                // eslint-disable-next-line react/display-name
                productTypes.map((p, index) => (<ProductTypePill data={p} key={index} />)  )
              }
            </div>
          </div>
          <div className="space-y-4">
            {/* <h3 className="text-x1 mt-5 font-semibold">Filter resu  lts</h3> */}
            <div className="flex justify-start items-center text-sm pt-2 m-1 w-3/6 rounded-full font-semibold snap-start cursor-pointer hover:brightness-75 transition-all">
            <FunnelIcon className="h-5 w-5" />
            <span>Filter results</span>
          </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-4 gap-4">
              {
                unitsByLocation.map((units, index) => (
                  units.selfCaterings.map((sc, index) => (
                    <UnitItem key={index} unit={sc}/>
                  ))
                ))
              }
            </div>


          </div>
        </div>
       );
}

function ProductTypePill({data, key, products})
{
  const puzzle = `PuzzlePieceIcon`
  return (

    <Link href={`/category/${data.slug}`} >
    <div className="flex justify-start items-center text-sm p-3 m-1 bg-gray-100 rounded-full font-semibold snap-start cursor-pointer hover:brightness-75 transition-all">
      <PuzzlePieceIcon className="h-5 w-5" />
      <span>{data.name}</span>
    </div>
    </Link>
  )
}
//<div className={`${classes} added-classname`}

async function getData() {
  const res = await fetch('https://dummyjson.com/products', { next: { revalidate: 60 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // console.log("revalidate")

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}