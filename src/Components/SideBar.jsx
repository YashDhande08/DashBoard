import Vector from "../assets/Images/Vector.png";
import Reactangle from "../assets/Images/Reactangle.png";
import Square from "../assets/Images/Square.png";
import Frame from "../assets/Images/Frame.png";
import Question from "../assets/Images/Question.png";

function SideBar() {
  return (
    <>
      <div
        className="flex flex-col justify-between items-center bg-[rgba(30,30,30,1)] w-[84px] h-[670px] opacity-100  rounded-3xl absolute  top-11 left-11 "
      >
        {/* Top section */}
        <div
          className="flex flex-col items-center space-y-6 mt-8"
        >
          <img
            src={Vector}
            alt="Dashboard icon"
            className="w-8 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
          <img
            src={Reactangle}
            alt="Rectangle icon"
            className="w-5 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
          <img
            src={Square}
            alt="Square icon"
            className="w-6 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
          <img
            src={Frame}
            alt="Frame icon"
            className="w-6 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
        </div>

        {/* Bottom section */}
        <div
          className="flex flex-col items-center space-y-4 mb-4"
        >
          <img
            src={Reactangle}
            alt="Settings icon"
            className="w-5 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
          <img
            src={Question}
            alt="Help icon"
            className="w-6 mb-8 hover:scale-110 transition-transform duration-200 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default SideBar;
