import { useState } from "react";

export default async function ProductItem({ params }: { params: { id: string } }) {
  //const [mainImage, setMainImage] = useState(0)
  const product = await getProduct(params.id)

  return (
        <div>
            <title>{product.title}</title>
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <h2 className="text-4xl font-semibold">{product.title}</h2>
                    <p className="text-gray-500">£{product.price}</p>
                </div>
                <button className="bg-black text-white py-4 px-16 font-medium rounded-2xl hover:opacity-75 transition-opacity">
                    Buy now
                </button>
                </div>
                <div className="space-y-2">
                    <img src={product.images[0]} className="w-full h-95 rounded-3xl border" />
                <div className="flex space-x-2 justify0end rounded-full items-stretch p-2">
                    {
                        product.images.map((image: string, index: number) => (
                            <button key="index">{index + 1}</button>
                        ))
                    }
                </div>
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

    // <div className="relative">
    //   <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-3xl"></div>
    //   <div className="relative">
    //     <img src={product.image} alt="" className="rounded-3xl"/>
    //     <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
    //       <button className="bg-black bg-opacity-20 rounded-3xl p-4" onClick={() => setIsHover(!isHover)}>
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    //   <div className={`absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-3xl ${isHover ? 'flex justify-center items-center' : 'hidden'}`}>
    //     <button className="bg-white rounded-3xl p-4">
    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsHover(!isHover)}>
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    //       </svg>
    //     </button>
    //   </div>
    // </div>