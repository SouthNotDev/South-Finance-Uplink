import React, { useRef } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import sampleData from "../utils/sampleData";

const FileUpload = () => {
  const fileInputRef = useRef(null);
  const { setData } = useContext(DataContext);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        setData(json);
      } catch (err) {
        alert("Invalid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  const handleSampleClick = () => {
    setData(sampleData);
  };

  return (
    <div className="my-4">
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSampleClick}
      >
        Load Sample Data
      </button>
    </div>
  );
};

export default FileUpload;
