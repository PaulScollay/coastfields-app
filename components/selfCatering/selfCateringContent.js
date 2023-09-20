import { UserGroupIcon, FolderIcon, HandThumbDownIcon, CheckCircleIcon} from "@heroicons/react/24/outline";

export default function SelfCateringContent({ unit }) {
    return (
            <div className="flex justify-between rounded-lg items-center text-sm  p-3 bg-gray-100  font-semibold text-gray-600">
                <div className="flex justify-start ">
                    <CheckCircleIcon className="h-5 w-5 text-sm pr-1" />
                    <p className=" ml-1" >{unit.beds} Bed</p>
                </div>
                <div className="flex justify-start ">
                    <CheckCircleIcon className="h-5 w-5 text-sm pr-1" />
                    <p className=" font-semibold  ml-1" >Sleeps {unit.sleepCapacity} </p>
                </div>
                <div className="flex justify-start ">
                    <CheckCircleIcon className="h-5 w-5 text-sm pr-1" />
                    <p className=" font-semibold  ml-1" >{unit.bathrooms} Baths</p>
                </div>
                <div className="flex justify-start ">
                    <CheckCircleIcon className="h-5 w-5 text-sm pr-1" />
                    <p className=" font-semibold  ml-1" >Pets</p> 
                </div>
                {/* <FolderIcon className="h-5 w-5" />
                <p className="pr-2">{unit.beds} Bed</p>
                <UserGroupIcon className="h-5 w-5" />
                <p className="pr-2">{unit.sleepCapacity}</p>
                <UserGroupIcon className="h-5 w-5" />
                <p className="pr-2">{unit.bathrooms} Baths</p>
                <HandThumbDownIcon className="h-5 w-5" />
                <p className="">Pets</p> */}
            </div>
           
    );
}
