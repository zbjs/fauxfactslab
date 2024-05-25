import RandomLinkGenerator from "@/components/FakeDataGenerator/NameGenerator/FullName/RandomLinkGenerator";
import RandomNumberGenerator from "@/components/FakeDataGenerator/NameGenerator/FullName/RandomNumberGenerator";
import React from "react";
import CountrySelect from "../CountrySelect";

const FakeDataPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <RandomNumberGenerator />

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <RandomLinkGenerator />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <CountrySelect />
      </div>
    </div>
  );
};

export default FakeDataPage;
