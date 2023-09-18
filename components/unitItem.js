import Image from "next/image"
import Link from "next/link"

import { MapPinIcon, ChevronDownIcon, UserGroupIcon, FolderIcon, HandThumbDownIcon } from "@heroicons/react/24/outline";

export default function UnitItem({ unit }) {
    // console.log("unit")
    // console.log(unit)
    return (
        <Link href={`/product/${unit.id}`} >
            <div className="bg-gray-100 rounded-tr-2xl rounded-tl-2xl group cursor-pointer space-y-2 hover:brightness-90 transition-all">
            <div className="flex items-center justify-between pl-2 ">
                <img src={unit.featuredImage} className="w-40 border rounded-2xl pt-2" alt=""/>
                <div className="pl-4 mr-4 font font-dancing">
                    <div>
                        <h5 className="text-sm font-semibold line-clamp-1">{unit.name}</h5>
                        <p className="text-sm text-gray-500">{unit.parkName}</p>
                        <p className="text-sm font-bold text-gray-600 bg-gray-200 rounded-2xl p-2 mt-2">Best Price <span className="text-gray-900 text-lg">£ {unit.price? unit.price : 'Call'}</span></p>
                    
                        {/* <p className="text-sm text-gray-400">{product.date}</p> */}
                    </div>

                </div>
            </div>  
            <div className="flex justify-between items-center text-sm  pt-1 pl-2 pr-2 bg-gray-100 ">
                <FolderIcon className="h-5 w-5" />
                <p className="pr-2">{unit.beds} Bed</p>
                <UserGroupIcon className="h-5 w-5" />
                <p className="pr-2">{unit.sleepCapacity}</p>
                <UserGroupIcon className="h-5 w-5" />
                <p className="pr-2">{unit.bathrooms} Baths</p>
                <HandThumbDownIcon className="h-5 w-5" />
                <p className="">Pets</p>
            </div>
           <div className="flex justify-end items-center" >
            <button class="h-8 px-2 m-2 font-semibold rounded-md bg-black text-white" type="submit">
                View & Book
            </button>
            </div>
            </div>
            <div className="flex justify-between items-center text-sm p-1  bg-gray-300  rounded-bl-2xl rounded-br-2xl font-semibold snap-start cursor-pointer hover:brightness-75 transition-all">
                <MapPinIcon className="h-5 w-5 text-sm" />
                <p className="mr-8" >{unit.parkName}</p>
                <p  className="underline underline-offset-2">See more info</p>
                <ChevronDownIcon className="h-4 w-4" />
            </div>

     </Link>
    );
}
