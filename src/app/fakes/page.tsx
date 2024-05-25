import RandomLinkGenerator from "@/components/FakeDataGenerator/NameGenerator/FullName/RandomLinkGenerator";
import RandomNumberGenerator from "@/components/FakeDataGenerator/NameGenerator/FullName/RandomNumberGenerator";
import React from "react";

const FakeDataPage = () => {
  return (
    <div className="p-4">
      <RandomNumberGenerator />
    </div>
  );
};

export default FakeDataPage;
