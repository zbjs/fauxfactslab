"use client";
import React, { useState } from "react";

const massConversions: Record<string, (value: number) => number> = {
  "ounces-to-grams": (value) => value * 28.3495,
  "grams-to-ounces": (value) => value * 0.03527396,
  "pounds-to-kilograms": (value) => value * 0.4535924,
  "kilograms-to-pounds": (value) => value * 2.2046223,
  "short-tons-to-metric-tons": (value) => value * 0.892857,
  "metric-tons-to-short-tons": (value) => value * 1.12,
  "long-tons-to-metric-tons": (value) => value * 1.01605,
};

const MassConverter = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>("grams");
  const [toUnit, setToUnit] = useState<string>("ounces");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const key = `${fromUnit}-to-${toUnit}`;
    const convert = massConversions[key];
    if (convert) {
      setResult(convert(value));
    } else {
      setResult(null);
    }
  };

  const massUnits = [
    "ounces",
    "grams",
    "pounds",
    "kilograms",
    "short-tons",
    "metric-tons",
    "long-tons",
  ];

  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-2xl font-bold mb-4">Mass Converter</h2>
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
          {massUnits.map((unit) => (
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
          {massUnits.map((unit) => (
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

export default MassConverter;
