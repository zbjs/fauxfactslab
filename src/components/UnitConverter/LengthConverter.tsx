"use client";
import React, { useState } from "react";

const lengthConversions: Record<string, (value: number) => number> = {
  "inches-to-centimeters": (value) => value * 2.54,
  "centimeters-to-inches": (value) => value * 0.3937,
  "millimeters-to-inches": (value) => value * 0.03937,
  "feet-to-centimeters": (value) => value * 30.4878,
  "centimeters-to-feet": (value) => value * 0.03281,
  "yards-to-meters": (value) => value * 0.9144028,
  "meters-to-yards": (value) => value * 1.09361,
  "miles-to-kilometers": (value) => value * 1.6093419,
  "kilometers-to-miles": (value) => value * 0.621372,
};

const LengthConverter = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>("meters");
  const [toUnit, setToUnit] = useState<string>("feet");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const key = `${fromUnit}-to-${toUnit}`;
    const convert = lengthConversions[key];
    if (convert) {
      setResult(convert(value));
    } else {
      setResult(null);
    }
  };

  const lengthUnits = [
    "inches",
    "centimeters",
    "millimeters",
    "feet",
    "meters",
    "yards",
    "miles",
    "kilometers",
  ];

  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-2xl font-bold mb-4">Length Converter</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2 text-black"
      />
      <div className="flex space-x-4 mb-2">
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
        >
          {lengthUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
        >
          {lengthUnits.map((unit) => (
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

export default LengthConverter;
