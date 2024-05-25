# fauxfactslab


```
"use client";
import React, { useState } from "react";

const areaConversions: Record<string, (value: number) => number> = {
  "sq-inches-to-sq-centimeters": (value) => value * 6.4516,
  "sq-centimeters-to-sq-inches": (value) => value * 0.155,
  "sq-feet-to-sq-meters": (value) => value * 0.0929,
  "sq-meters-to-sq-yards": (value) => value * 1.195986,
  "sq-yards-to-sq-meters": (value) => value * 0.83613,
  "sq-kilometers-to-sq-miles": (value) => value * 0.386101,
  "sq-miles-to-sq-kilometers": (value) => value * 2.589999,
  "hectares-to-acres": (value) => value * 2.471044,
  "acres-to-hectares": (value) => value * 0.404687,
};

const AreaConverter = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>("sq-meters");
  const [toUnit, setToUnit] = useState<string>("sq-feet");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const key = `${fromUnit}-to-${toUnit}`;
    console.log("Conversion key:", key); // Debugging log
    const convert = areaConversions[key];
    if (convert) {
      const convertedValue = convert(value);
      console.log("Converted value:", convertedValue); // Debugging log
      setResult(convertedValue);
    } else {
      setResult(null);
    }
  };

  const areaUnits = [
    "sq-inches",
    "sq-centimeters",
    "sq-feet",
    "sq-meters",
    "sq-yards",
    "sq-kilometers",
    "sq-miles",
    "hectares",
    "acres",
  ];

  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-2xl font-bold mb-4">Area Converter</h2>
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
          {areaUnits.map((unit) => (
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
          {areaUnits.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Convert
      </button>
      {result !== null && <div className="mt-4 text-2xl">Result: {result}</div>}
    </div>
  );
};

export default AreaConverter;

```
