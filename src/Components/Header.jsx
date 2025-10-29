import search from "../assets/Images/search.png";
import Light from "../assets/Images/Light.png";
import Dark from "../assets/Images/Dark.png";
import Profile from "../assets/Images/Profile.png";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center mt-8 mr-2.5 ml-40">
        {/* Left: Greeting */}
        <div className="text-lg font-medium text-white">
          Hi, Yash <br /> <span className="text-white text-sm">Good Morning</span>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-6">
          {/* Search box */}
          <div className="flex items-center bg-[rgba(30,30,30,1)] rounded-full px-3 py-2 w-[250px]">
            <img src={search} alt="search" className="w-5 h-5 mr-2 opacity-70" />
            <p className="text-sm text-gray-500">Search your location</p>
          </div>

          {/* Theme toggle (Light & Dark) */}
          <div className="flex items-center gap-1 ">
            <img src={Light} alt="Light" className="w-7 h-7 cursor-pointer" />
            <img src={Dark} alt="Dark" className="w-7 h-7 cursor-pointer" />
          </div>

          {/* Profile */}
          <img src={Profile} alt="Profile" className="w-8 h-8 rounded-full cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Header;
