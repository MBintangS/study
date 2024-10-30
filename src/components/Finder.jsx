import { Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Provinsi = [
  { id: 1, label: "Aceh" },
  { id: 2, label: "Sumatera Utara" },
  { id: 3, label: "Sumatera Selatan" },
  { id: 4, label: "Sumatera Barat" },
  { id: 5, label: "Bengkulu" },
  { id: 6, label: "Riau" },
  { id: 7, label: "Kepulauan Riau" },
  { id: 8, label: "Jambi" },
  { id: 9, label: "Lampung" },
  { id: 10, label: "Bangka Belitung" },
  { id: 11, label: "Kalimantan Barat" },
  { id: 12, label: "Kalimantan Timur" },
  { id: 13, label: "Kalimantan Selatan" },
  { id: 14, label: "Kalimantan Tengah" },
  { id: 15, label: "Kalimantan Utara" },
  { id: 16, label: "Banten" },
  { id: 17, label: "D.K.I. Jakarta" },
  { id: 18, label: "Jawa Barat" },
  { id: 19, label: "Jawa Tengah" },
  { id: 20, label: "D.I. Yogyakarta" },
  { id: 21, label: "Jawa Timur" },
  { id: 22, label: "Bali" },
  { id: 23, label: "Nusa Tenggara Timur" },
  { id: 24, label: "Nusa Tenggara Barat" },
  { id: 25, label: "Gorontalo" },
  { id: 26, label: "Sulawesi Barat" },
  { id: 27, label: "Sulawesi Tengah" },
  { id: 28, label: "Sulawesi Utara" },
  { id: 29, label: "Sulawesi Tenggara" },
  { id: 30, label: "Sulawesi Selatan" },
  { id: 31, label: "Maluku Utara" },
  { id: 32, label: "Maluku" },
  { id: 33, label: "Papua Barat" },
  { id: 34, label: "Papua" },
  { id: 35, label: "Papua Tengah" },
];

const Finder = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProgramType, setSelectedProgramType] = useState("");
  const [selectedLevelOfStudy, setSelectedLevelOfStudy] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
  };

  const handleProgramTypeChange = (value) => {
    setSelectedProgramType(value);
  };

  const handleLevelOfStudyChange = (value) => {
    setSelectedLevelOfStudy(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setError("Keyword is required.");
      return;
    }

    setError("");

    const searchParams = new URLSearchParams({
      keyword: userInput,
      province: selectedProvince,
      programType: selectedProgramType,
      levelOfStudy: selectedLevelOfStudy,
    });

    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <div className="max-w-6xl w-full mx-auto my-8 px-5">
      <div className="relative mb-12 inline-block">
        <h1 className="text-xl lg:text-2xl font-semibold">Program Finder</h1>
        <div className="absolute left-0 right-0 h-1 bg-[#1F86FF] mt-3"></div>
      </div>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
          {/* Input Text */}
            <input
              type="text"
              className="col-span-1 lg:col-span-2 bg-white px-5 py-5 rounded-xl focus:outline-none w-full"
              placeholder="Keyword"
              value={userInput}
              onChange={handleInputChange}
            />
          
          <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 lg:col-span-3 gap-4">
            {/* Type of Program */}
            <div className="col-span-1 custom-width-material-tailwind rounded-xl relative flex-row items-center justify-center cursor-pointer focus:outline-none bg-white py-3 w-full">
              <Select
                aria-label="Type of Program"
                className="font-medium border-none focus:border-none active:border-none cursor-pointer outline-none w-full"
                labelProps={{
                  className: "after:border-none before:border-none",
                }}
                label={selectedProgramType ? "" : "Type of Program"}
                value={selectedProgramType}
                onChange={handleProgramTypeChange}
              >
                <Option
                  className="custom-select-material-tailwind rounded-md leading-none bg-white"
                  value="Degree"
                >
                  Degree Program
                </Option>
                <Option
                  className="custom-select-material-tailwind rounded-md leading-none bg-white"
                  value="Non-Degree"
                >
                  Non-Degree Program
                </Option>
              </Select>
            </div>

            {/* Level of Study */}
            <div className="col-span-1 custom-width-material-tailwind rounded-xl relative flex-row items-center justify-center cursor-pointer focus:outline-none bg-white py-3 w-full">
              <Select
                aria-label="Level of Study"
                className="font-medium border-none focus:border-none active:border-none cursor-pointer outline-none w-full"
                labelProps={{
                  className: "after:border-none before:border-none",
                }}
                label={selectedLevelOfStudy ? "" : "Level of Study"}
                value={selectedLevelOfStudy}
                onChange={handleLevelOfStudyChange}
              >
                <Option
                  className="custom-select-material-tailwind rounded-md leading-none bg-white"
                  value="Undergraduate"
                >
                  Undergraduate
                </Option>
                <Option
                  className="custom-select-material-tailwind rounded-md leading-none bg-white"
                  value="Postgraduate"
                >
                  Postgraduate
                </Option>
                <Option
                  className="custom-select-material-tailwind rounded-md leading-none bg-white"
                  value="Postdoctoral"
                >
                  Postdoctoral
                </Option>
              </Select>
            </div>

            {/* Location */}
            <div className="col-span-1 custom-width-material-tailwind rounded-xl relative flex-row items-center justify-center cursor-pointer focus:outline-none bg-white py-3 w-full">
              <Select
                aria-label="Location"
                className="font-medium border-none focus:border-none active:border-none cursor-pointer outline-none w-full"
                labelProps={{
                  className: `after:border-none before:border-none`,
                }}
                label={selectedProvince ? "" : "location"}
                value={selectedProvince}
                onChange={handleProvinceChange}
              >
                {Provinsi.map((data) => (
                  <Option
                    className="custom-select-material-tailwind rounded-md leading-none bg-white"
                    value={data.label}
                    key={data.id}
                  >
                    {data.label}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="col-span-1 bg-[#1F86FF] hover:bg-[#1f71ff] text-white px-5 py-3 lg:py-5 rounded-xl font-medium w-full"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Finder;
