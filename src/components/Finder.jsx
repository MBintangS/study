import { Option } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
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

const TypeOfPrograms = [
  { id: 1, label: "Degree Program" },
  { id: 2, label: "Non-Degree Program" },
];

const LevelsOfStudy = [
  { id: 1, label: "Undergraduate" },
  { id: 2, label: "Postgraduate" },
  { id: 3, label: "Postdoctoral" },
];

const Finder = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedProgramType, setSelectedProgramType] = useState(null);
  const [selectedLevelOfStudy, setSelectedLevelOfStudy] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Parse query string on component mount
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    // Ambil keyword
    const keyword = queryParams.get("keyword") || "";
    setUserInput(keyword);

    // Ambil province
    const provinceLabel = queryParams.get("province");
    if (provinceLabel) {
      const province = Provinsi.find((data) => data.label === provinceLabel);
      setSelectedProvince(province || null);
    }

    // Ambil programType
    const programTypeLabel = queryParams.get("programType");
    if (programTypeLabel) {
      const programType = TypeOfPrograms.find(
        (data) => data.label === programTypeLabel
      );
      setSelectedProgramType(programType || null);
    }

    // Ambil levelOfStudy
    const levelOfStudyLabel = queryParams.get("levelOfStudy");
    if (levelOfStudyLabel) {
      const levelOfStudy = LevelsOfStudy.find(
        (data) => data.label === levelOfStudyLabel
      );
      setSelectedLevelOfStudy(levelOfStudy || null);
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setError("Keyword is required.");
      return;
    }

    setError("");

    // Data id 
    const apiPayload = {
      keyword: userInput,
      provinceId: selectedProvince?.id || null,
      programTypeId: selectedProgramType?.id || null,
      levelOfStudyId: selectedLevelOfStudy?.id || null,
    };

    console.log("Data:", apiPayload);

    const searchParams = new URLSearchParams({
      keyword: userInput,
      province: selectedProvince?.label || "",
      programType: selectedProgramType?.label || "",
      levelOfStudy: selectedLevelOfStudy?.label || "",
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
                options={TypeOfPrograms}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.id}
                value={selectedProgramType}
                onChange={setSelectedProgramType}
                placeholder="Type of Program"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    border: "none", 
                    boxShadow: "none",
                    "&:hover": {
                      border: "none",
                    },
                    backgroundColor: "transparent",
                    fontSize: "14px"
                  }),
                }}
              />
            </div>

            {/* Level of Study */}
            <div className="col-span-1 custom-width-material-tailwind rounded-xl relative flex-row items-center justify-center cursor-pointer focus:outline-none bg-white py-3 w-full">
              <Select
                options={LevelsOfStudy}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.id}
                value={selectedLevelOfStudy}
                onChange={setSelectedLevelOfStudy}
                placeholder="Level of Study"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    border: "none", 
                    boxShadow: "none",
                    "&:hover": {
                      border: "none",
                    },
                    backgroundColor: "transparent",
                    fontSize: "14px"
                  }),
                }}
              />
            </div>

            {/* Location */}
            <div className="col-span-1 custom-width-material-tailwind rounded-xl relative flex-row items-center justify-center cursor-pointer focus:outline-none bg-white py-3 w-full">
              <Select
                options={Provinsi}
                getOptionLabel={(e) => e.label}
                getOptionValue={(e) => e.id}
                value={selectedProvince}
                onChange={setSelectedProvince}
                placeholder="Location"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    border: "none", 
                    boxShadow: "none",
                    "&:hover": {
                      border: "none",
                    },
                    backgroundColor: "transparent",
                    fontSize: "14px"
                  }),
                }}
              />
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
