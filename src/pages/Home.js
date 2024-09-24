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
import { useState, useEffect } from "react";
import { MdOutlineFace3 } from "react-icons/md";
import { BsPass } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import MyFlights from "./MyFlights";
import { RiFlightLandLine } from "react-icons/ri";
import { MdFlightTakeoff } from "react-icons/md";

function Home({ selectedFlights, setSelectedFlights }) {
  const [flights, setFlights] = useState([]);
  const [allFlights, setAllFlights] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const [selectedSort, setSelectedSort] = useState("");
  const [selectedStops, setSelectedStops] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchFlights = async () => {
      const response = await fetch(`http://localhost:5001/api/flights`);
      const data = await response.json();
      setAllFlights(data);
      setFlights(data);
    };

    fetchFlights();
  }, []);

  const handleSearch = () => {
    if (!from && !to && !departureDate) {
      setFlights(allFlights); // Tüm uçuşları geri getir
      return;
    }

    // Uçuşları filtrele
    const filteredFlights = allFlights.filter((flight) => {
      const flightFrom = flight.prefixICAO
        ? flight.prefixICAO.toLowerCase()
        : "";
      const flightTo = flight.route.destinations[0]
        ? flight.route.destinations[0].toLowerCase()
        : "";
      const flightDate = flight.scheduleDate ? flight.scheduleDate : "";

      const matchesFrom = from ? flightFrom.includes(from.toLowerCase()) : true;
      const matchesTo = to ? flightTo.includes(to.toLowerCase()) : true;
      const matchesDate = departureDate ? flightDate === departureDate : true;

      return matchesFrom && matchesTo && matchesDate;
    });

    // Sıralama işlemi
    const sortedFlights = [...filteredFlights]; // Filtrelenmiş uçuşları kopyala

    if (selectedSort === "Lowest Price") {
      sortedFlights.sort((a, b) => {
        const priceA = a.flight.airlineCode
          ? parseFloat(a.flight.airlineCode)
          : Infinity; // Uçuş fiyatını kontrol et
        const priceB = b.flight.airlineCode
          ? parseFloat(b.flight.airlineCode)
          : Infinity;
        return priceA - priceB;
      });
    } else if (selectedSort === "Arrival Time") {
      sortedFlights.sort((a, b) => {
        const arrivalA = new Date(a.scheduleDateTime).getTime(); // Varış zamanını timestamp olarak al
        const arrivalB = new Date(b.scheduleDateTime).getTime();
        return arrivalA - arrivalB;
      });
    }

    setFlights(sortedFlights); // Sıralanmış uçuşları set et
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    handleSearch(); // Sıralama seçildiğinde arama fonksiyonunu çağır
  };

  const handleSelectFlight = (flight) => {
    setSelectedFlights((prev) => [...prev, flight]);
    alert("Uçuşunuz kaydedildi");
    navigate("/my-flights");
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <div className="min-h-screen bg-purple-200 p-4 md:p-8 flex">
      <div className="max-w-full mx-auto bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center w-10 h-10 bg-purple-600 rounded-full p-3">
                <MdFlight color="white" size={24} />
              </div>
              <h1 className="text-xl font-bold text-gray-800 ml-2">
                PLANE SCAPE
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <MdOutlineDiscount className="text-purple-600" />
              <button className="px-4 py-2 text-gray-600 font-bold rounded-lg">
                Deals
              </button>
              <FaEarthAfrica className="text-purple-600" />
              <button className="px-4 py-2 text-gray-600 font-bold rounded-lg">
                Discover
              </button>
              <BsPass className="text-purple-600 font-bold" />
              <Link
                to="/my-flights"
                className="text-gray-700 font-bold underline px-4 py-2"
              >
                My Flights
              </Link>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                  <MdOutlineFace3 className="text-purple-600" />
                </div>
                <span className="font-bold text-gray-600">Joanne Smith</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <div className="flex items-center space-x-4">
              <div className="relative w-1/4">
                <RiFlightTakeoffFill className="absolute left-3 top-2.5 text-purple-600 " />
                <input
                  type="text"
                  placeholder="From"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full p-2 pl-8  border border-gray-300 rounded-lg"
                />
              </div>
              <div className="relative w-1/4">
                <RiFlightLandFill className="absolute left-3 top-2.5 text-purple-600" />
                <input
                  type="text"
                  placeholder="To"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full pl-8 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-1/4 p-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                Show Flights
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
          <div className=" m-8 flex-row ">
            <div className="flex flex-wrap justify-start space-x-3">
              <div className="flex flex-col">
                <div className="bg-gray-200 w-40 mb-4 mr-9">
                  <h3 className="font-bold text-s mb-4">Sort by:</h3>
                  <div className="relative">
                    <button
                      className="w-full text-left text-xs p-2 bg-white border border-gray-300 rounded-lg"
                      onClick={toggleDropdown}
                    >
                      {selectedSort || "Select..."}
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-1 z-10">
                        <div
                          onClick={() => handleSortChange("Lowest Price")}
                          className={`p-2 cursor-pointer ${
                            selectedSort === "Lowest Price"
                              ? "bg-purple-500 text-white"
                              : ""
                          }`}
                        >
                          Lowest Price
                        </div>
                        <div
                          onClick={() => handleSortChange("Arrival Time")}
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
                <div className="bg-gray-200 w-40 text-xs mb-4">
                  <div className="bg-gray-200 w-40 text-xs mb-4">
                    <h3 className="font-bold text-sm mb-4">Arrival Time</h3>
                    <div className="flex flex-col space-y-2">
                      {["5:00 AM- 11.59 AM", "12.00 PM- 5.59 PM"].map(
                        (stop) => (
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
                        )
                      )}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm mb-4">Stops</h3>
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
                <div className="bg-gray-200 w-40 text-xs mb-4">
                  <h3 className="font-bold text-sm mb-4">Airlines Included</h3>
                  <div className="flex flex-col space-y-2">
                    {[
                      "Alitallia",
                      "Lufthansa",
                      "Air France",
                      "Brussels Airlines",
                      "Air Italy",
                      "Siberia",
                    ].map((stop) => (
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
              </div>
              <div className="flex flex-col w-2/3">
                {flights.map((flight) => (
                  <div
                    key={flight.id}
                    className="bg-white rounded-xl shadow-lg p-4 mb-8 mx-4 w-full "
                  >
                    {/* Uçuş Bilgileri */}
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
                          {` ${new Date(
                            flight.scheduleDateTime
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}`}
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
                      <div className="flex justify-end mt-4">
                        <button
                          onClick={() => handleSelectFlight(flight)}
                          className="px-6 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                        >
                          Book Flight
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20">
          <div className="flex flex-col justify-center">
            <div className="relative w-64 h-64 m-4 rounded-lg shadow-lg overflow-hidden group">
              <img
                src={car}
                alt="Car"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <a
                href="#"
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 group-hover:bg-opacity-70 transition-all duration-300"
              >
                <FaCarSide className="inline-block mr-2" />
                CAR RENTALS
              </a>
            </div>

            <div className="relative w-64 h-64 m-4 rounded-lg shadow-lg overflow-hidden group">
              <img
                src={hotel}
                alt="Hotel"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
    </div>
  );
}

export default Home;
