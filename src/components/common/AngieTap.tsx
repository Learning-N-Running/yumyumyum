import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import VideoContent from "./VideoContent";
import Image from "next/image";
import { N } from "ethers";

export default function AngieTab({
  activeTab,
  setActiveTab,
  coinClick,
}: {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  coinClick: number;
}) {
  const ColoredLine = () => (
    <hr className="w-full mt-2 h-1 bg-yellow-500 border-none m-0" />
  );

  const tabs = [
    {
      name: "Map",
      icon: "/images/yy_map_icon.svg",
      activeIcon: "/images/yy_clicked_map_icon.svg",
    },
    {
      name: "Visited NFT",
      icon: "/images/yy_nft_icon.svg",
      activeIcon: "/images/yy_clicked_nft_icon.svg",
    },
  ];

  return (
    <>
      <div className="flex justify-center px-6">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={`flex flex-col items-center flex-grow`}
          >
            {" "}
            <div className="flex flex-row items-center justify-center">
              <img
                className="mr-2"
                src={activeTab === tab.name ? tab.activeIcon : tab.icon}
                alt={`${tab.name}_icon`}
                width={24}
                height={24}
              />
              <button
                className={`${
                  activeTab === tab.name ? "text-yellow-500" : "text-gray-500"
                } font-bold text-lg`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            </div>
            {activeTab === tab.name && <ColoredLine />}
          </div>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "Map" && <MapContent />}
        {activeTab === "Visited NFT" && <NFTContent />}
      </div>
    </>
  );
}

const MapContent = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={"/images/yy_angie_map_content.png"}
        alt="map"
        width={721}
        height={759}
        style={{ cursor: "pointer", marginTop: "16px", marginBottom: "50px" }}
      />
    </div>
  );
};

const NFTContent = () => {
  return (
    <div className="flex flex-wrap justify-start max-w-[720px] mx-auto">
      <Image
        className="mr-2 mb-4"
        src="/images/yy_profile_nft_1.svg"
        alt={`nft`}
        width={230}
        height={270}
        style={{ cursor: "pointer" }}
      />
      <Image
        className="mr-2 mb-4"
        src="/images/yy_profile_nft_2.svg"
        alt={`nft`}
        width={230}
        height={270}
        style={{ cursor: "pointer" }}
      />
      <Image
        className="mr-2 mb-4"
        src="/images/yy_profile_nft_3.svg"
        alt={`nft`}
        width={230}
        height={270}
        style={{ cursor: "pointer" }}
      />
      <Image
        className="mr-2 mb-4"
        src="/images/yy_profile_nft_4.svg"
        alt={`nft`}
        width={230}
        height={270}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

// public/images/yy_profile_nft_1.svg