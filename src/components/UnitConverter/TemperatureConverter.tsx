"use client";

import React, { useState } from "react";

const temperatureConversions: Record<string, (value: number) => number> = {
  "fahrenheit-to-celsius": (value) => ((value - 32) * 5) / 9,
  "celsius-to-fahrenheit": (value) => (value * 9) / 5 + 32,
};

const TemperatureConverter = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>("fahrenheit");
  const [toUnit, setToUnit] = useState<string>("celsius");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const key = `${fromUnit}-to-${toUnit}`;
    const convert = temperatureConversions[key];
    if (convert) {
      setResult(convert(value));
    } else {
      setResult(null);
    }
  };

  const temperatureUnits = ["fahrenheit", "celsius"];

  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-2xl font-bold mb-4">Temperature Converter</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        className="border border-gray-300 text-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
      />
      <div className="flex space-x-4 mb-2">
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="border border-gray-300 text-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {temperatureUnits.map((unit) => (
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
          {temperatureUnits.map((unit) => (
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

export default TemperatureConverter;
