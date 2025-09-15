import photo from "./assets/photo (2).png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <div className=" h-[93.7vh] flex bg-black">
        <div className="h-full w-1/2 bg-black text-white m-8 flex flex-col gap-20 p-16 ">
          <div className="text-7xl">Build Your Awesome Platform</div>
          <div className="text-xl text-gray-400">
            Enver Studio is digital studio that offers sevral services such as
            UI/UX Design to devlopers, we will provide you best services for
            those of you who use our services{" "}
          </div>
          <div>
            <button className=" bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-300">
              Our Services
              <span className="-rotate-45 text-2xl">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
        </div>
        <div className=" relative h-full w-1/2 bg-black flex flex-col gap-10 text-white items-center justify-center">
          {/* <img src={photo} className="w-2/3 h-2/3" /> */}

          <div className=" absolute top-[200px] left-[200px] bg-transparent border-white border-[2px] h-[400px] w-[400px] rotate-45 rounded-3xl m-8 bg-red-500"></div>
          <div className=" absolute bottom-[180px] left-[235px] bg-blue-600  border-white border-[2px] h-[400px] w-[400px] rotate-45 rounded-3xl flex items-center justify-center">
            <img src={photo} className="-rotate-45 h-[550px] w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
