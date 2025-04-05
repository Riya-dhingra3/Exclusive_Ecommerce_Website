import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LiaCameraSolid } from "react-icons/lia";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";

export const categories = [
    {
      id: 1,
      name:"Phones",
      image: <IoIosPhonePortrait className="text-4xl"/>
    },
    {
      id: 2,
      name:"Computers",
      image: <HiOutlineComputerDesktop className="text-4xl"/>
    },
    {
      id: 3,
      name:"SmartWatch",
      image: <BsSmartwatch className="text-4xl"/>
    },
    {
      id: 4,
      name:"Cameras",
      image: <LiaCameraSolid className="text-4xl"/>
    },
    {
      id: 5,
      name:"HeadPhones",
      image: <CiHeadphones className="text-4xl"/>
    },
    {
      id: 6,
      name:"Gaming",
      image: <SiYoutubegaming className="text-4xl" />
    },
  ];