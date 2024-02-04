"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

interface CountryListProps {
  country: string;
  image?: StaticImageData | string;
  bgColor?: string;
  textColor? : string
}

const CountryList: NextPage<CountryListProps> = ({
  country,
  image,
  bgColor,
  textColor
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`flex w-[120px] justify-between py-3 px-3 items-center gap-x-1.5 rounded-full  ${bgColor} px-1 py-1 text-sm font-semibold ${textColor} shadow-sm`}
        >
          {image && (
            <Image
              src={image as StaticImageData}
              width={100}
              height={100}
              alt="CicleVector"
              className="w-8 h-8"
            />
          )}
          {country}
          <ChevronDownIcon className=" h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 lg:w-32 h-32 overflow-y-auto w-36 origin-top-right rounded-md bg-gray-300 shadow-lg ring-1 ring-black ring-opacity-5 outline-none">
          <div className="py-1">
            <Menu.Item>
              <>
              <a href="#" className="block px-4 py-2 text-sm">
                Countries List
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                Countries List
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                Countries List
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                Countries List
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                Countries List
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                Countries List
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                Countries List
              </a>
              <a href="#" className="block px-4 py-2 text-sm">
                Countries List
              </a>
              
              </>
              
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CountryList;