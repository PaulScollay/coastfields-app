import { UserGroupIcon, FolderIcon, HandThumbDownIcon } from "@heroicons/react/24/outline";

export default function SelfCateringContent({ unit }) {
    return (
            <div className="flex justify-between rounded-lg items-center text-sm  pt-1 pl-2 pr-2 bg-gray-100 ">
                <FolderIcon className="h-5 w-5" />
                <p className="pr-2">{unit.beds} Bed</p>
                <UserGroupIcon className="h-5 w-5" />
                <p className="pr-2">{unit.sleepCapacity}</p>
                <UserGroupIcon className="h-5 w-5" />
                <p className="pr-2">{unit.bathrooms} Baths</p>
                <HandThumbDownIcon className="h-5 w-5" />
                <p className="">Pets</p>
            </div>
           
    );
}
