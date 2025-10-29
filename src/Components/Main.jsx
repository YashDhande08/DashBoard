import React from "react";
import RainCloud  from '../assets/Images/RainCloud.png'
import Frame29 from '../assets/Images/Frame29.png'

import Frame30 from '../assets/Images/Frame30.png'

function WeatherDashboard() {
  return (
    <div className=" text-white min-h-screen p-8 ml-30">
      {/* Grid layout for entire dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Current Weather Card */}
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg text-gray-300 flex items-center gap-2">
                  📍 Dhaka, Bangladesh
                </h2>
                <p className="text-4xl font-semibold mt-3">Sunday</p>
                <p className="text-gray-400 text-sm mt-1">04 Aug, 2024</p>
                <p className="text-5xl font-bold mt-6">28°C</p>
                <p className="text-gray-400">Feels like 31° — Heavy Rain 🌧️</p>
              </div>
              <img
                src={RainCloud}
                alt="Weather"
                className="w-32 h-32"
              />
            </div>
          </div>

          {/* Other Countries */}
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Other Countries</h3>
              <p className="text-sm text-gray-400 cursor-pointer">See All</p>
            </div>
            <div className="space-y-4">
              {/* Country card */}
              <div className="flex justify-between items-center bg-[#1F1F1F] p-4 rounded-xl">
                <div>
                  <p className="text-sm text-gray-400">Australia</p>
                  <h4 className="text-lg font-medium">Canberra</h4>
                  <p className="text-gray-400">Sunny ☀️</p>
                </div>
                <img src={Frame29} alt="" />
                <p className="text-2xl font-semibold">32° / 24°</p>
              </div>

              <div className="flex justify-between items-center bg-[#1F1F1F] p-4 rounded-xl">
                <div>
                  <p className="text-sm text-gray-400">Japan</p>
                  <h4 className="text-lg font-medium">Tokyo</h4>
                  <p className="text-gray-400">Mostly Sunny 🌤️</p>
                </div>
                <img src={Frame30} alt="" />
                <p className="text-2xl font-semibold">30° / 19°</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Today’s Highlights */}
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Today's Highlight</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1F1F1F] p-4 rounded-xl">
                <p className="text-gray-400 text-sm">Wind Status</p>
                <p className="text-2xl font-semibold">7.9 km/h</p>
              </div>
              <div className="bg-[#1F1F1F] p-4 rounded-xl">
                <p className="text-gray-400 text-sm">Humidity</p>
                <p className="text-2xl font-semibold">85%</p>
              </div>
              <div className="bg-[#1F1F1F] p-4 rounded-xl">
                <p className="text-gray-400 text-sm">UV Index</p>
                <p className="text-2xl font-semibold">4 UV</p>
              </div>
              <div className="bg-[#1F1F1F] p-4 rounded-xl">
                <p className="text-gray-400 text-sm">Visibility</p>
                <p className="text-2xl font-semibold">5 km</p>
              </div>
            </div>
          </div>

          {/* 10 Day Forecast */}
          <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">10 Day Forecast</h3>
            <div className="grid grid-cols-5 gap-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu"].map((day, i) => (
                <div
                  key={i}
                  className="bg-[#1F1F1F] p-4 rounded-xl text-center"
                >
                  <p className="text-gray-400">{day}</p>
                  <img
                    src="/Images/cloud.png"
                    alt="Weather"
                    className="w-10 mx-auto my-2"
                  />
                  <p className="text-lg font-semibold">28°C</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;
