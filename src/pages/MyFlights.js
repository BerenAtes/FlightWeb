import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { PiLineVerticalBold } from "react-icons/pi";
import { GiMoebiusTriangle } from "react-icons/gi";
import { BiShapeTriangle } from "react-icons/bi";
import { GiShatteredHeart } from "react-icons/gi";
import { GiRoundShield } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { RiFlightLandLine } from "react-icons/ri";
import { MdFlightTakeoff } from "react-icons/md";

const MyFlights = ({ selectedFlights = [] }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const flights = [
    {
      logo: (
        <GiMoebiusTriangle className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4" />
      ),
      time: "7:40 AM - 9:12 AM",
      airline: "Delta Air Lines",
      flightNumber: "DL 1443",
      route: "SFO to LAX",
      duration: "1h 32m",
      prices: {
        main: "$156",
        comfort: "$204",
        deltaOne: "$386",
      },
    },
    {
      logo: (
        <BiShapeTriangle className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4" />
      ),
      time: "7:00 AM - 8:52 AM",
      airline: "American Airlines",
      flightNumber: "AA 166",
      route: "SFO to LAX",
      duration: "1h 52m",
      prices: {
        main: "$182",
        first: "$400",
      },
    },
    {
      logo: (
        <GiShatteredHeart className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-4" />
      ),
      time: "8:15 AM - 9:50 AM",
      airline: "Southwest Airlines",
      flightNumber: "WN 2234",
      route: "SFO to LAX",
      duration: "1h 35m",
      prices: {
        anytime: "$225",
        businessSelect: "$253",
      },
    },
    {
      logo: (
        <GiRoundShield className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4" />
      ),
      time: "8:00 AM - 9:46 AM",
      airline: "United",
      flightNumber: "UA 613",
      route: "SFO to LAX",
      duration: "1h 46m",
      prices: {
        economy: "$183",
        economyFlexible: "$449",
        first: "$407",
      },
    },
  ];

  return (
    <div className=" shadow-lg rounded-lg mt-4 ">
      <div className="flex flex-col justify-between items-start mb-4">
        <div className="flex flex-wrap justify-start space-x-4 p-4 bg-white">
          <button className="flex-1 min-w-[100px] px-4 py-2 text-gray-600 font-bold rounded-lg border border-gray-300 text-sm hover:bg-gray-200 hover:text-gray-800">
            Times
          </button>

          <button className="flex-1 min-w-[100px] px-4 py-2 hover:bg-gray-200 text-gray-600 font-bold rounded-lg border border-gray-300 text-sm">
            Stops
          </button>
          <button className="flex-1 min-w-[100px] px-4 py-2 hover:bg-gray-200 text-gray-600 font-bold rounded-lg border border-gray-300 text-sm">
            Airlines
          </button>
          <button className="flex-1 min-w-[100px] px-4 py-2 hover:bg-gray-200 text-gray-600 font-bold rounded-lg border border-gray-300 text-sm">
            Airports
          </button>
          <button className="flex-1 min-w-[100px] px-4 py-2 hover:bg-gray-200 text-gray-600 font-bold rounded-lg border border-gray-300 text-sm">
            Amenities
          </button>
          <button className="flex-1 min-w-[100px] px-4 py-2 hover:bg-blue-200 text-purple-500 font-bold rounded-lg flex items-center text-sm">
            Edit Search
            <MdOutlineArrowDropDown className="ml-1" />{" "}
          </button>

          <div className="flex items-center pl-12">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              value={rating}
              isHalf={true}
            />
            <PiLineVerticalBold className="text-gray-400" />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              value={rating}
              isHalf={true}
            />
            <PiLineVerticalBold className="text-gray-400" />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              value={rating}
              isHalf={true}
            />
            <PiLineVerticalBold className="text-gray-400" />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              value={rating}
              isHalf={true}
            />
            <PiLineVerticalBold className="text-gray-400" />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              value={rating}
              isHalf={true}
            />
            <button
              onClick={() => navigate("/")} // Ana sayfaya yönlendir
              className="px-4 py-2 ml-4 mt-4 text-sm mb-4 text-white bg-purple-500 rounded-lg hover:bg-purple-600"
            >
              Back to Home Page
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen p-9 flex flex-col">
        <div className="bg-gray-100">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700">
              Sort By:{" "}
              <span className="font-bold">
                Recommended <MdOutlineArrowDropDown />
              </span>
            </p>
            <p className="text-gray-700 flex items-center">
              <IoIosInformationCircleOutline className="text-blue-600 font-bold mr-1" />
              Avg Fare: <span className="font-bold">$225</span>
            </p>
          </div>
        </div>

        <div className="bg-white">
          {selectedFlights.length === 0 ? (
            <p className="text-center text-gray-500">No flights selected</p>
          ) : (
            selectedFlights.map((flight, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-4 mb-4 shadow-lg rounded-lg"
              >
                <div className="flex flex-col p-4">
                  {/* Uçuş Başlığı */}
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {`${flight.prefixICAO || "Bilinmiyor"} - ${
                      flight.route.destinations[0] || "Bilinmiyor"
                    }`}
                  </h2>
                  <div className="flex p-4 space-x-4 ">
                    {" "}
                    <div className="text-sm text-gray-500 mb-1">
                      <MdFlightTakeoff className="text-purple-600" />
                      {` ${new Date(flight.scheduleDateTime).toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}`}
                    </div>
                    <div className="text-sm text-gray-600 mb-2 flex items-center justify-between mb-2 font-bold">{`Airline Code: ${
                      flight.prefixIATA || flight.prefixICAO || "Bilinmiyor"
                    }`}</div>
                    <div className="text-sm text-gray-500 mb-4">
                      <RiFlightLandLine className="text-purple-600" />
                      {` ${new Date(
                        flight.estimatedLandingTime
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}`}
                    </div>
                    {/* Uçuş Numarası ve Durumu */}
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-gray-700">{`Flight number: ${
                        flight.flightNumber || "Bilinmiyor"
                      }`}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 font-bold">{`Date: ${new Date(
                    flight.scheduleDateTime
                  ).toLocaleDateString()}`}</p>
                  <p className="text-lg font-medium text-purple-600">
                    {`Price: $${flight.airlineCode || "Bilinmiyor"}`}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFlights;
