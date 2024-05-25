"use client";
import React, { useState } from "react";

const RandomNameGenerator: React.FC = () => {
  const [randomNames, setRandomNames] = useState<string[]>([]);
  const [newName, setNewName] = useState<string>("");

  const generateRandomText = (): string => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = Math.floor(Math.random() * 20) + 1; // Random length between 1 and 20
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const handleGenerate = (): void => {
    const newName = generateRandomText();
    setRandomNames([...randomNames, newName]);
  };

  const handleCopy = (name: string): void => {
    navigator.clipboard.writeText(name);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewName(e.target.value);
  };

  const handleAdd = (): void => {
    if (newName.trim() !== "") {
      setRandomNames([...randomNames, newName]);
      setNewName("");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full mb-4">
        <input
          type="text"
          value={newName}
          onChange={handleChange}
          placeholder="Enter custom name"
          className="p-2 mr-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleAdd}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
        <button
          onClick={handleGenerate}
          className="p-2 ml-2 bg-blue-500 text-white rounded"
        >
          <p className="text-xl" />
        </button>
      </div>
      <div className="flex flex-wrap">
        {randomNames.map((name, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-gray-200 rounded mr-2 mb-2"
            onClick={() => handleCopy(name)}
            style={{ cursor: "pointer" }}
          >
            <span className="mr-2">{name}</span>
            <p className="text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomNameGenerator;
