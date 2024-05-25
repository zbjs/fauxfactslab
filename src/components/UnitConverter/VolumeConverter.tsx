"use client";
import React, { useState } from "react";

const volumeConversions: Record<string, (value: number) => number> = {
  "teaspoons-to-milliliters": (value) => value * 5,
  "milliliters-to-fluid-ounces": (value) => value * 0.0338147,
  "tablespoons-to-milliliters": (value) => value * 15,
  "liters-to-pints": (value) => value * 2.11342,
  "fluid-ounces-to-milliliters": (value) => value * 30,
  "liters-to-quarts": (value) => value * 1.05671,
  "liters-to-gallons": (value) => value * 0.264178,
  "gallons-to-liters": (value) => value * 3.785332,
  "cups-to-liters": (value) => value * 0.23658,
  "pints-to-liters": (value) => value * 0.473167,
  "cubic-meters-to-cubic-feet": (value) => value * 35.3144,
  "cubic-feet-to-cubic-meters": (value) => value * 0.028317,
  "cubic-yards-to-cubic-meters": (value) => value * 0.764559,
};

const VolumeConverter = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>("liters");
  const [toUnit, setToUnit] = useState<string>("gallons");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const key = `${fromUnit}-to-${toUnit}`;
    const convert = volumeConversions[key];
    if (convert) {
      setResult(convert(value));
    } else {
      setResult(null);
    }
  };

  const volumeUnits = [
    "teaspoons",
    "milliliters",
    "tablespoons",
    "liters",
    "fluid-ounces",
    "gallons",
    "cups",
    "pints",
    "cubic-meters",
    "cubic-feet",
    "cubic-yards",
  ];

  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-2xl font-bold mb-4">Volume Converter</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        className="border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
      />
      <div className="flex space-x-4 mb-2">
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {volumeUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {volumeUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Convert
      </button>
      {result !== null && <div className="mt-4 text-2xl">Result: {result}</div>}
    </div>
  );
};

export default VolumeConverter;
