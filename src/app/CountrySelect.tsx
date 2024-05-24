"use client";

import React from "react";
import Select from "react-select";
import countryNamesAndFlags from "@/contexts/country-flag";

const CountrySelect: React.FC = () => {
  const options = countryNamesAndFlags.map(({ code, country, flag }) => ({
    value: code,
    label: (
      <div className="flex items-center">
        <img className="w-8 h-8 mr-2" src={flag} alt={country} />
        <samp className="text-3xl text-black">{country}</samp>
      </div>
    ),
  }));

  const filterOption = (option: any, inputValue: string) => {
    const inputValueLowerCase = inputValue.toLowerCase();
    const countryName =
      option.label.props.children[1].props.children.toLowerCase();

    return countryName.includes(inputValueLowerCase);
  };

  return (
    <Select
      options={options}
      className="ml-2 text-4xl p-7 "
      formatOptionLabel={(option: any) => option.label}
      filterOption={filterOption}
      placeholder="Select a country"
      isSearchable
    />
  );
};

export default CountrySelect;
