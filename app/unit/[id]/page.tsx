import { useState } from "react";
import { getUnitDetails } from '@/lib/units/queries';

export default async function UnitDetailItem({ params }: { params: { id: string } }) {
  //const [mainImage, setMainImage] = useState(0)
  const unit = await getUnitDetails(params.id)

  console.log("UNIT")
  console.log(unit)
  return (
        <div>
            {/* <title>{product.title}</title> */}
            <title>ID {params.id}</title>
            <div className="flex justify-between items-center text-white text-sm p-1 bg-black snap-start cursor-pointer hover:brightness-75 transition-all">
                <p className="mr-8  font-semibold " >Ready to book this stay?</p>
                <p  className="underline underline-offset-2">Start booking</p>
            </div>



            <div className="flex flex-justify-between items-center">
                <div className="space-y-2">
                    {/* <h2 className="text-4xl font-semibold">{product.title}</h2>
                    <p className="text-gray-500">£{product.price}</p> */}
                </div>
                {/* <button className="bg-black text-white py-4 px-16 font-medium rounded-2xl hover:opacity-75 transition-opacity">
                    Buy now
                </button> */}
            </div>
                {/* <div className="space-y-2">
                    <img src={product.images[0]} className="w-full h-95 rounded-3xl border" />
                <div className="flex space-x-2 justify0end rounded-full items-stretch p-2">
                    {
                        product.images.map((image: string, index: number) => (
                            <button key="index">{index + 1}</button>
                        ))
                    }
                </div>
                </div> */}


                
        </div>

  )
}

async function getProduct(id: string) {
    console.log("ID:" + id)
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
