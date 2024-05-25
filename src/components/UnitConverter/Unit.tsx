"use client";
import React, { useState } from "react";

const conversions: Record<string, (value: number) => number> = {
  // Length conversions
  "inches-to-centimeters": (value) => value * 2.54,
  "centimeters-to-inches": (value) => value * 0.3937,
  "millimeters-to-inches": (value) => value * 0.03937,
  "feet-to-centimeters": (value) => value * 30.4878,
  "centimeters-to-feet": (value) => value * 0.03281,
  "yards-to-meters": (value) => value * 0.9144028,
  "meters-to-yards": (value) => value * 1.09361,
  "miles-to-kilometers": (value) => value * 1.6093419,
  "kilometers-to-miles": (value) => value * 0.621372,

  // Area conversions
  "sq-inches-to-sq-centimeters": (value) => value * 6.4516,
  "sq-centimeters-to-sq-inches": (value) => value * 0.155,
  "sq-feet-to-sq-meters": (value) => value * 0.0929,
  "sq-meters-to-sq-yards": (value) => value * 1.195986,
  "sq-yards-to-sq-meters": (value) => value * 0.83613,
  "sq-kilometers-to-sq-miles": (value) => value * 0.386101,
  "sq-miles-to-sq-kilometers": (value) => value * 2.589999,
  "hectares-to-acres": (value) => value * 2.471044,
  "acres-to-hectares": (value) => value * 0.404687,

  // Mass (Weight) conversions
  "ounces-to-grams": (value) => value * 28.3495,
  "grams-to-ounces": (value) => value * 0.03527396,
  "pounds-to-kilograms": (value) => value * 0.4535924,
  "kilograms-to-pounds": (value) => value * 2.2046223,
  "short-tons-to-metric-tons": (value) => value * 0.892857,
  "metric-tons-to-short-tons": (value) => value * 1.12,
  "long-tons-to-metric-tons": (value) => value * 1.01605,

  // Volume conversions
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

  // Temperature conversions
  "fahrenheit-to-celsius": (value) => ((value - 32) * 5) / 9,
  "celsius-to-fahrenheit": (value) => (value * 9) / 5 + 32,
};

const Unit = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>("meters");
  const [toUnit, setToUnit] = useState<string>("feet");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const key = `${fromUnit}-to-${toUnit}`;
    const convert = conversions[key];
    if (convert) {
      setResult(convert(value));
    } else {
      setResult(null);
    }
  };

  const unitOptions: Record<string, string[]> = {
    length: [
      "inches",
      "centimeters",
      "millimeters",
      "feet",
      "meters",
      "yards",
      "miles",
      "kilometers",
    ],
    area: [
      "sq-inches",
      "sq-centimeters",
      "sq-feet",
      "sq-meters",
      "sq-yards",
      "sq-kilometers",
      "sq-miles",
      "hectares",
      "acres",
    ],
    mass: [
      "ounces",
      "grams",
      "pounds",
      "kilograms",
      "short-tons",
      "metric-tons",
      "long-tons",
    ],
    volume: [
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
    ],
    temperature: ["fahrenheit", "celsius"],
  };

  const allUnits = Object.values(unitOptions).flat();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">Unit Converter</h1>
      <div className="mb-4">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border text-black border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {allUnits.map((unit) => (
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
          {allUnits.map((unit) => (
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

export default Unit;
