// pages/nid.tsx
"use client";
import React, { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/solid";

const NID = () => {
  const [number, setNumber] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10 ** 13)
      .toString()
      .padStart(13, "0");
    setNumber(randomNumber);
    setMessage(null);
  };

  const copyToClipboard = () => {
    if (number) {
      navigator.clipboard
        .writeText(number)
        .then(() => setMessage("Copied to clipboard!"))
        .catch(() => setMessage("Failed to copy!"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">
        Random 13-Digit Number Generator
      </h1>
      <div className="mb-6">
        <button
          onClick={generateRandomNumber}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate Number
        </button>
      </div>
      {number && (
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-mono">{number}</span>
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            <ClipboardIcon className="h-6 w-6" />
          </button>
        </div>
      )}
      {message && (
        <div
          className={`text-lg ${
            message === "Copied to clipboard!"
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default NID;
