import { useState } from "react";
import { getUnitDetails } from '@/lib/units/queries';
import SelfCateringContent from "@/components/selfCatering/selfCateringContent";

export default async function UnitDetailItem({ params }: { params: { id: string } }) {
  //const [mainImage, setMainImage] = useState(0)
  const unit = await getUnitDetails(params.id)

//   console.log(unit)
  return (
        <div>
            {/* <title>{product.title}</title> */}
            <title>{unit.name}</title>
            <div className="flex justify-between items-center text-white text-sm p-1 bg-black snap-start cursor-pointer hover:brightness-75 transition-all">
                <p className="mr-8  font-semibold " >Ready to book this stay?</p>
                <p  className="underline underline-offset-2">Start booking</p>
            </div>

            <div className="flex justify-center p-2">
                <p className="text-xl font-semibold">{unit.name}</p>

            </div>
            <div className="p-2">
                <SelfCateringContent unit={unit} /> 
            </div>

            <div className="flex justify-center p-2">
                <p className="text-xl font-semibold">More information</p>
            </div>
        </div>

  )
}

async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const product = await res.json()
    return product
  }

function InfoBlock({title, description}: {title: string, description: string}) {
    return( 
        <div className="space-y-1 by-gray-100 rounded-3xl p-6 flex flex-col items-stretch justify-center">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    )
}
