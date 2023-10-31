import { UserGroupIcon, FolderIcon, HandThumbDownIcon, CheckCircleIcon} from "@heroicons/react/24/outline";

export default function SelfCateringContent({ unit }) {
    return (
            <div className="flex justify-between rounded-lg items-center text-sm  p-3 bg-gray-100  font-semibold text-gray-600">
                <div className="flex justify-start ">
                    <CheckCircleIcon className="h-5 w-5 text-sm pr-1" />
                    <p className=" ml-1" >{unit.optionsTab.selfCateringContent.Beds} Bed</p>
                </div>
                <div className="flex justify-start ">
                    <CheckCircleIcon className="h-5 w-5 text-sm pr-1" />
                    <p className=" font-semibold  ml-1" >Sleeps {unit.optionsTab.selfCateringContent.sleepCapacity} </p>
                </div>
                <div className="flex justify-start ">
                    <CheckCircleIcon className="h-5 w-5 text-sm pr-1" />
                    <p className=" font-semibold  ml-1" >{unit.optionsTab.selfCateringContent.bathrooms} Baths</p>
                </div>
                <div className="flex justify-start ">
                    <CheckCircleIcon className="h-5 w-5 text-sm pr-1" />
                    <p className=" font-semibold  ml-1" >{unit.optionsTab.selfCateringContent.pets}Pets</p> 
                </div>
            </div>
           
    );
}
