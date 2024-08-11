"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Profile from "./Profile";
import Profile2 from "./Profile2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Profile {
  Name: string;
  Skill: string[];
  Gender: string;
  Github: string;
  Role: string;
  Branch: string;
  College: string;
}

const FindTeamMates: React.FC = () => {
  const [value, setValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [customCollege, setCustomCollege] = useState("");
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const options = ["Gender", "Year", "College", "Branch", "Status"];

  const subOptions: { [key: string]: string[] } = {
    Gender: ["Male", "Female"],
    Year: ["2025", "2026", "2027", "2028"],
    Branch: ["CSE", "ECE", "IT", "AIML"],
    Status: ["Available", "Unavailable"],
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  const handleSubOptionClick = (option: string, subOption: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [option]: subOption,
    }));
    setShowOptions(false);
    setSelectedOption(null);
  };

  const handleCustomCollegeSubmit = () => {
    setSelectedFilters((prev) => ({
      ...prev,
      College: customCollege,
    }));
    setShowOptions(false);
    setSelectedOption(null);
  };

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams({ Text: value, ...selectedFilters }).toString();
      const response = await fetch(`http://localhost:3000/api/user/findUsers?${params}`, {
        credentials: 'include', // Include credentials (cookies)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProfiles(data); // Update profiles state with the fetched data
      } else {
        console.error("Failed to fetch profiles",response);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="w-full h-screen px-4 md:px-[250px] bg-black">
        {/* Find */}
        <div className="w-full h-[15%] p-4">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-white">
            FIND YOUR TEAM MATES
          </h1>
          <h3 className="text-center text-lg md:text-xl mt-4 text-yellow-500">
            Search the role / skill / name you want in your team
          </h3>
        </div>

        {/* Search and Filter Section */}
        <div className="w-full h-[10%] md:mt-[60px] mt-[10px] mb-3 p-3">
          <div className="w-full h-full border-4 border-zinc-100 flex rounded-xl">
            <div className="h-full w-[10%] md:w-[5%] flex justify-center items-center">
              <SearchIcon className="text-white" />
            </div>
            <div className="h-full w-[50%] md:w-[75%]">
              <input
                type="text"
                className="bg-transparent text-white w-full p-2 h-full focus:outline-none text-sm md:text-xl border-none"
                placeholder="Enter your future teammate details/skills"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="h-full w-[20%] md:w-[10%] flex justify-center bg-white items-center">
              <button
                className="bg-green-600 w-full h-full text-lg md:text-2xl font-semibold px-3 text-white rounded"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="h-full w-[20%] md:w-[10%] flex justify-center bg-white items-center">
              <button
                className="bg-white w-full h-full text-lg md:text-2xl font-semibold px-3 text-black rounded-r-xl"
                onClick={() => setShowOptions(!showOptions)}
              >
                Filter
              </button>
            </div>
          </div>
          {showOptions && (
            <div
              className="absolute right-4 md:right-[100px] mt-2 text-sm md:text-xl font-medium bg-white rounded-xl px-4 py-2 shadow-lg"
              style={{
                width: "250px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
            >
              {options.map((option, index) => (
                <div key={index}>
                  <div
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                  {selectedOption === option && option === "College" ? (
                    <div className="ml-4 mt-2">
                      <input
                        type="text"
                        className="bg-white text-black p-2 rounded border-2 border-red-700 focus:outline w-full"
                        placeholder="Enter College Name"
                        value={customCollege}
                        onChange={(e) => setCustomCollege(e.target.value)}
                      />
                      <button
                        className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
                        onClick={handleCustomCollegeSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    selectedOption === option &&
                    subOptions[option]?.map((subOption, subIndex) => (
                      <div
                        key={subIndex}
                        className="ml-4 p-2 bg-blue-100 hover:bg-gray-200 cursor-pointer rounded"
                        onClick={() => handleSubOptionClick(option, subOption)}
                      >
                        {subOption}
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Display Profiles */}
        <div className="w-full h-[75%] bg-black px-2 md:px-8 overflow-y-auto">
          <Accordion type="single" collapsible className="w-full">
            {profiles.map((profile, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>
                  <Profile
                    name={profile.Name}
                    year="Unknown" // Replace with actual year if available
                    skills={profile.Skill}
                    gender={profile.Gender}
                    imageSrc={`https://avatars.githubusercontent.com/${profile.Github}`} // Replace with actual image URL
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <Profile2
                    role={profile.Role}
                    branch={profile.Branch}
                    college={profile.College}
                    project="nil"
                  />
                </AccordionContent>
                <br />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FindTeamMates;
