"use client";
import React, { useState } from "react";

const AgeCalculator: React.FC = () => {
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      const tempDate = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        birthDate.getDate()
      );
      days = Math.floor(
        (today.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24)
      );
    }

    setAge({ years, months, days });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Age Calculator</h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            Date of Birth:
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight"
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateAge}
        >
          Calculate Age
        </button>

        {age && (
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-500">{age.years}</p>
              <p className="text-sm text-gray-500">Years</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-500">{age.months}</p>
              <p className="text-sm text-gray-500">Months</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-500">{age.days}</p>
              <p className="text-sm text-gray-500">Days</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
