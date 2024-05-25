// pages/city.tsx
"use client";
import React, { useState, useEffect } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";

const City = () => {
  const [city, setCity] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 2000); // Clear the message after 2 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [message]);

  const copyToClipboard = () => {
    if (city) {
      navigator.clipboard
        .writeText(city)
        .then(() => setMessage("Copied to clipboard!"))
        .catch(() => setMessage("Failed to copy!"));
    } else {
      setMessage("Please enter a city name.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-6">City Name Copier</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
        />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={copyToClipboard}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Copy
          <ClipboardIcon className="h-5 w-5 inline-block ml-2" />
        </button>
      </div>
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

export default City;
