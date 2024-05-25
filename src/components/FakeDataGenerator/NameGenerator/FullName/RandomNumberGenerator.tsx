// components/RandomNumberGenerator.tsx
"use client";
import { useState } from "react";

const RandomNumberGenerator = () => {
  const [generatedNumber, setGeneratedNumber] =
    useState<string>("+8801XXXXXXX");
  const [copyMessageVisible, setCopyMessageVisible] = useState<boolean>(false);

  const generateNumber = () => {
    const prefixOptions: string[] = [
      "+88013",
      "+88017",
      "+88018",
      "+88019",
      "+88014",
      "+88015",
    ];
    const prefix: string =
      prefixOptions[Math.floor(Math.random() * prefixOptions.length)];
    const remainingDigits: string = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
    return prefix + remainingDigits;
  };

  const generateAndDisplayNumber = () => {
    const number: string = generateNumber();
    setGeneratedNumber(number);
    setCopyMessageVisible(false); // Hide copy message when generating a new number
  };

  const copyNumber = () => {
    navigator.clipboard
      .writeText(generatedNumber)
      .then(() => {
        setCopyMessageVisible(true); // Show copy message when copying is successful
        setTimeout(() => {
          setCopyMessageVisible(false); // Hide the message after 3 seconds
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-blue-300 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Random 11-Digit Number Generator
        </h1>

        <div className="flex items-center justify-between mb-4">
          <p id="generatedNumber" className="text-center text-xl font-semibold">
            {generatedNumber}
          </p>
          <button
            onClick={copyNumber}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Copy
          </button>
        </div>

        {copyMessageVisible && (
          <p className="text-center text-green-500 font-semibold mb-4">
            Number copied to clipboard!
          </p>
        )}

        <button
          onClick={generateAndDisplayNumber}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate Number
        </button>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
