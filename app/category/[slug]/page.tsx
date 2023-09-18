import ProductItem from "@/components/productItem"
import { productTypes } from "@/data/products"
import { Key } from "react"


export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData()
    const productType = productTypes.find((p) => p.slug === params.slug)

    const poductsFiltered = data.products.filter((p: any) => p.category === productType?.slug)
    return (
      <div>
        <title>{productType?.name}</title>
        <div className={`${productType?.background} text-white p-16 font-semibold text-center text-4xl rounded-3xl `}>
          <h2>{productType?.name}</h2>
        </div>
        <div className="space-y-4">
          <h3 className="text-x1 mt-5 font-semibold">featured products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4">
            {
              poductsFiltered.map((p: any, index: Key) => (
                <ProductItem key={index} product={p}/>
              ))
            }
          </div>
        </div>
    </div>
    )
  }

  async function getData() {
    const res = await fetch('https://dummyjson.com/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }