import { useState } from "react";
import { getUnitDetails } from '@/lib/units/queries';
import SelfCateringContent from "@/components/selfCatering/selfCateringContent";
import { CheckBadgeIcon, CheckCircleIcon, MapPinIcon} from "@heroicons/react/24/outline";
import Image from "next/image";

export default async function UnitDetailItem({ params }: { params: { id: string } }) {
  //const [mainImage, setMainImage] = useState(0)
  const unit = await getUnitDetails(params.id)
    // console.log(unit)
  return (
        <div>
            {/* <title>{product.title}</title> */}
            <title>{unit.name}</title>
            <div className="flex justify-between items-center rounded-lg text-white text-sm m-1 p-2 bg-black snap-start cursor-pointer hover:brightness-75 transition-all">
                <p className="mr-8  font-semibold " >Ready to book this stay?</p>
                <p  className="underline underline-offset-2">Start booking</p>
            </div>

            <div className="flex justify-center p-2">
                <p className="text-xl font-semibold">{unit.name}</p>

            </div>
            <div className="p-2">
                <SelfCateringContent unit={unit} /> 
            </div>


            <div className="pt-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {
                
                unit.gallery.map((image: string | undefined, index: any) => (
                    <img src={image} key={index} className="sm:w-45 md:w-90 border rounded-2xl" alt=""/>
                ))
              }
            </div>
            <div className="flex justify-center items-center rounded-lg text-white text-sm p-2 mt-2 bg-black snap-start cursor-pointer hover:brightness-75 transition-all">
                <p className="mr-8  font-semibold " >Features</p>
            </div>  

            <div className="pt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                {
                // Array.isArray(unit.features) || !unit.features.length
                unit.features.map((feature : any | undefined, index: any) => (
                    <Feature key={index} feature={feature}/>
                    ))
                }
            </div>

            <Floorplan image={unit.floorPlan} />
            <Description text={unit.longDescription} />
            <ThreeDTour image={unit.floorPlan} />
        </div>

  )
}

async function Feature({key, feature}: {key: any, feature: any}) {

    return (
        <div className="flex justify-start ">
        <CheckCircleIcon className="h-5 w-5 text-sm pr-1 ml-2" />
        <p className=" font-semibold text-gray-600 ml-2" >{feature.name}</p>
        </div>
    )
}

async function Floorplan({image}: {image: any}) {

    return (
        <div>
        <div className="flex justify-center items-center rounded-lg text-sm p-2 mt-2 bg-gray-300  snap-start">
            <p className="mr-8  font-semibold " >Floorplan</p>
        </div>
        <div className="flex justify-center items-center rounded-lg">
            <img src={image} className="w-70 border rounded-lg mt-2" alt=""/>
        </div>
        </div>
    )
}

async function Description({text}: {text: string}) {

    return (
        <div>
        <div className="flex justify-center items-center rounded-lg text-sm p-2 mt-2 bg-gray-300  snap-start">
            <p className="mr-8  font-semibold " >Description</p>
        </div>
        <div className="flex justify-center items-center rounded-lg">
            <p className="p-2 text-gray-600 " >{text}</p>
        </div>
        </div>
    )
}

async function ThreeDTour({image}: {image: any}) {

    return (
        <div>
        <div className="flex justify-center items-center rounded-lg text-sm p-2 mt-2 bg-gray-300  snap-start">
            <p className="mr-8  font-semibold " >3D Tour</p>
        </div>
        <div className="flex justify-center items-center rounded-lg">
            <img src={image} className="w-70 border rounded-lg mt-2" alt=""/>
        </div>
        </div>
    )
}
