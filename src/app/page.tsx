import NID from "@/components/AdditionalTools/NID/NID";
import City from "@/components/FakeDataGenerator/AddressGenerator/CityState/City";
import Unit from "@/components/UnitConverter/Unit";
import React from "react";

import LengthConverter from "@/components/UnitConverter/LengthConverter";
import AreaConverter from "@/components/UnitConverter/AreaConverter";
import MassConverter from "@/components/UnitConverter/MassConverter";
import VolumeConverter from "@/components/UnitConverter/VolumeConverter";
import TemperatureConverter from "@/components/UnitConverter/TemperatureConverter";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NID />

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <City />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Unit />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <LengthConverter />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <MassConverter />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <VolumeConverter />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <TemperatureConverter />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <AreaConverter />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <p>Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
