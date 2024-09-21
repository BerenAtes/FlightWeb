import React from "react";
import { MdFlight } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdOutlineDiscount } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import car from "../assets/car.jpg";
import hotel from "../assets/hotel.jpg";
import travel from "../assets/travel.jpeg";
import { FaCarSide } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { RiFlightLandFill } from "react-icons/ri";
import { useState } from "react";
import { MdOutlineFace3 } from "react-icons/md";

function Home() {
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedStops, setSelectedStops] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <div className="min-h-screen bg-purple-200 p-8 flex">
      <div className="max-w-full mx-auto bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <div className="flex items-center mb-6">
            <div className="flex items-center w-10 h-10 bg-purple-600 rounded-full p-3 m-1">
              <MdFlight color="white" size={24} />
            </div>
            <h1 className="text-xl font-bold text-gray-800 ml-2">
              PLANE SCAPE
            </h1>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <div className="flex items-center space-x-2">
              <MdOutlineDiscount className="text-purple-600" />
              <button className="px-4 py-2 text-gray-600 font-bold  rounded-lg">
                Deals
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <FaEarthAfrica className="text-purple-600" />
              <button className="px-4 py-2 text-gray-600 font-bold rounded-lg">
                Discover
              </button>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  <MdOutlineFace3 className="text-purple-600 text-ml" />
                </div>
                <span className="font-bold text-gray-600">Joanne Smith</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-gray-100 p-4 rounded-lg mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative w-1/4">
                  <RiFlightTakeoffFill className="absolute left-3 top-2.5 text-purple-600" />
                  <input
                    type="text"
                    placeholder="From"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="relative w-1/4">
                  <RiFlightLandFill className="absolute left-3 top-2.5 text-purple-600" />
                  <input
                    type="text"
                    placeholder="To"
                    className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
                  />
                </div>

                <input
                  type="date"
                  className="w-1/4 p-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="date"
                  className="w-1/4 p-2 border border-gray-300 rounded-lg"
                />
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                  Show flights
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <label className="flex items-center">
                  <input type="radio" name="trip" className="mr-2" />
                  Round trip
                </label>
                <label className="flex items-center">
                  <input type="radio" name="trip" className="mr-2" />
                  One way
                </label>
              </div>
            </div>
            <div className="flex flex-row justify-start  ">
              <div className="flex-col mr-10">
                <div className="bg-white rounded-lg shadow-lg p-20  flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-2/3">
                      <h2 className="text-xl font-bold">Milano - Madrid</h2>
                      <p>Departure: 7:30 AM (MXP) - Arrival: 9:55 AM (MAD)</p>
                      <p>
                        Price:{" "}
                        <span className="text-purple-600 font-bold">$200</span>{" "}
                        Round Trip
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                      Book Flight
                    </button>
                  </div>
                  <div className="flex justify-between  items-center ">
                    <div className="">
                      <h2 className="text-xl font-bold">Milano - Madrid</h2>
                      <p>Departure: 8:30 PM (MXP) - Arrival: 10:25 PM (MAD)</p>
                      <p>
                        Price:{" "}
                        <span className="text-purple-600 font-bold">$234</span>{" "}
                        Round Trip
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end ">
                <div className=" text-xs flex flex-col items-end ">
                  <div className="bg-gray-200 w-40">
                    <h3 className="font-bold text-lg mb-4">Sort by:</h3>
                    <div className="relative">
                      <button
                        className="w-full text-left p-2 bg-white border border-gray-300 rounded-lg"
                        onClick={toggleDropdown}
                      >
                        {selectedSort || "Select..."}
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-1 z-10">
                          <div
                            onClick={() => {
                              setSelectedSort("Lowest Price");
                              setIsDropdownOpen(false);
                            }}
                            className={`p-2 cursor-pointer ${
                              selectedSort === "Lowest Price"
                                ? "bg-purple-500 text-white"
                                : ""
                            }`}
                          >
                            Lowest Price
                          </div>
                          <div
                            onClick={() => {
                              setSelectedSort("Arrival Time");
                              setIsDropdownOpen(false);
                            }}
                            className={`p-2 cursor-pointer ${
                              selectedSort === "Arrival Time"
                                ? "bg-purple-500 text-white"
                                : ""
                            }`}
                          >
                            Arrival Time
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-200 w-40 text-xs">
                    <h3 className="font-bold text-lg mb-4">Stops</h3>
                    <div className="flex flex-col space-y-2">
                      {["Nonstop", "1 Stop", "2+ Stops"].map((stop) => (
                        <label
                          key={stop}
                          className={`flex items-center p-2 cursor-pointer rounded-lg ${
                            selectedStops === stop
                              ? "bg-purple-500 text-white"
                              : ""
                          }`}
                          onClick={() => setSelectedStops(stop)}
                        >
                          <input
                            type="radio"
                            name="stops"
                            className="mr-2"
                            checked={selectedStops === stop}
                            readOnly
                          />
                          {stop}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-200 p-2 w-40 text-xs">
                    <h3 className="font-bold text-lg mb-4">Arrival Time</h3>
                    <div className="flex flex-col space-y-2">
                      {["5:00 AM - 11:59 AM", "12:00 PM - 5:59 PM"].map(
                        (time) => (
                          <label
                            key={time}
                            className={`flex items-center p-2 cursor-pointer rounded-lg ${
                              selectedStops === time
                                ? "bg-purple-500 text-white"
                                : ""
                            }`}
                            onClick={() => setSelectedStops(time)}
                          >
                            <input
                              type="radio"
                              name="arrivalTime"
                              className="mr-2"
                              checked={selectedStops === time}
                              readOnly
                            />
                            {time}
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-200 p-2 w-40 text-xs">
                    <h3 className="font-bold text-lg mb-4">
                      Airlines Included
                    </h3>
                    <div className="flex flex-col space-y-2">
                      {[
                        "Alitalia",
                        "Lufthansa",
                        "Air France",
                        "Brussels Airlines",
                        "Air Italy",
                      ].map((airline) => (
                        <label key={airline} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          {airline}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20">
          {/* Car Rentals */}
          <div className="relative w-64 h-64 m-4 rounded-lg shadow-lg overflow-hidden group">
            <img src={car} alt="Car" className="w-full h-full object-cover" />
            <a
              href="#"
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 group-hover:bg-opacity-70 transition-all duration-300"
            >
              <FaCarSide className="inline-block mr-2" />
              CAR RENTALS
            </a>
          </div>

          {/* Hotels */}
          <div className="relative w-64 h-64 m-4 rounded-lg shadow-lg overflow-hidden group">
            <img
              src={hotel}
              alt="Hotel"
              className="w-full h-full object-cover"
            />
            <a
              href="#"
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 group-hover:bg-opacity-70 transition-all duration-300"
            >
              <FaHotel className="inline-block mr-2" />
              HOTELS
            </a>
          </div>

          <div className="relative w-64 h-64 m-4 rounded-lg shadow-lg overflow-hidden group">
            <img
              src={travel}
              alt="Travel"
              className="w-full h-full object-cover"
            />
            <a
              href="#"
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 group-hover:bg-opacity-70 transition-all duration-300"
            >
              <FaUmbrellaBeach className="inline-block mr-2" />
              TRAVEL PACKAGES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
