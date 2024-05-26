"use client";
import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResultPDF from "./ResultPDF";

const examinationOptions = [
  { value: "SSC/Dakhil/Equivlent", label: "SSC/Dakhil/Equivlent" },
  { value: "JSC/JDC", label: "JSC/JDC" },
  { value: "SSC/Dakhil", label: "SSC/Dakhil" },
  { value: "SSC/Vocational", label: "SSC/Vocational" },
  { value: "HSC/Alim", label: "HSC/Alim" },
  { value: "HSC/Vocational", label: "HSC/Vocational" },
  { value: "HSC/BM", label: "HSC/BM" },
  { value: "Diploma In Commerce", label: "Diploma In Commerce" },
  {
    value: "Diploma In Business Studies",
    label: "Diploma In Business Studies",
  },
];

const yearOptions = [
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
];

const boardOptions = [
  { value: "Barisal", label: "Barisal" },
  { value: "Chattogram", label: "Chattogram" },
  { value: "Comilla", label: "Comilla" },
  { value: "Dhaka", label: "Dhaka" },
  { value: "Dinajpur", label: "Dinajpur" },
  { value: "Jessore", label: "Jessore" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Rajshahi", label: "Rajshahi" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Madrasah", label: "Madrasah" },
  { value: "Technical", label: "Technical" },
  { value: "DIBS(Dhaka)", label: "DIBS(Dhaka)" },
];

const filterOption = (option: any, inputValue: string) => {
  const inputValueLowerCase = inputValue.toLowerCase();
  const optionLabel = option.label.toLowerCase();
  return optionLabel.includes(inputValueLowerCase);
};

const PdfResults: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState<any>(null);
  const [selectedBoard, setSelectedBoard] = useState<any>(null);
  const [roll, setRoll] = useState<string>("");
  const [regNo, setRegNo] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [num1, setNum1] = useState<number>(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState<number>(Math.floor(Math.random() * 10) + 1);
  const [results, setResults] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) === correctAnswer) {
      try {
        const response = await axios.get("http://localhost:4000/api/results", {
          params: {
            examination: selectedExam.value,
            year: selectedYear.value,
            board: selectedBoard.value,
            roll,
            regNo,
          },
        });
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching results", error);
        alert("Error fetching results");
      }
    } else {
      alert("Incorrect answer to the arithmetic question.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Results</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Examination:</label>
          <Select
            options={examinationOptions}
            className="mt-1 text-black"
            filterOption={filterOption}
            value={selectedExam}
            onChange={setSelectedExam}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Year:</label>
          <Select
            options={yearOptions}
            className="mt-1 text-black"
            filterOption={filterOption}
            value={selectedYear}
            onChange={setSelectedYear}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Board:</label>
          <Select
            options={boardOptions}
            className="mt-1 text-black"
            filterOption={filterOption}
            value={selectedBoard}
            onChange={setSelectedBoard}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Roll:</label>
          <input
            type="text"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            className="text-black w-full mt-1 px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Reg No:</label>
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            className="w-full text-black mt-1 px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            What is {num1} + {num2}?
          </label>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full text-black mt-1 px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="reset"
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      {results && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="border px-4 py-2">Roll</th>
                <th className="border px-4 py-2">Reg No</th>
                <th className="border px-4 py-2">Name</th>

                <th className="border px-4 py-2">Fathers Name</th>
                <th className="border px-4 py-2">Mothers Name</th>
                <th className="border px-4 py-2">Date of Birth</th>
                <th className="border px-4 py-2">Gender</th>
                <th className="border px-4 py-2">Examination</th>
                <th className="border px-4 py-2">Year</th>
                <th className="border px-4 py-2">Board</th>
                <th className="border px-4 py-2">Result</th>
                <th className="border px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result: any) => (
                <tr key={result.roll}>
                  <td className="border px-4 py-2">{result.roll}</td>
                  <td className="border px-4 py-2">{result.regNo}</td>
                  <td className="border px-4 py-2">{result.name}</td>
                  <td className="border px-4 py-2">{result.fatherName}</td>
                  <td className="border px-4 py-2">{result.motherName}</td>
                  <td className="border px-4 py-2">{result.dateOfBirth}</td>
                  <td className="border px-4 py-2">{result.gender}</td>
                  <td className="border px-4 py-2">{result.examination}</td>
                  <td className="border px-4 py-2">{result.year}</td>
                  <td className="border px-4 py-2">{result.board}</td>
                  <td className="border px-4 py-2">{result.result}</td>
                  <td className="border px-4 py-2">{result.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <PDFDownloadLink
              document={<ResultPDF results={results} />}
              fileName="result.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfResults;
