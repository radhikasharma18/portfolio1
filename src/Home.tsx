import photo from "./assets/photo.png";
const Home = () => {
  return (
    <div>
      <div className=" h-[93.7vh] flex">
        <div className="h-full w-1/2 bg-red-900">hiii</div>
        <div className=" relative h-full w-1/2  m-4 bg-black flex flex-col gap-10 text-white items-center justify-center">
          {/* <img src={photo} className="w-2/3 h-2/3" /> */}

          <div className=" absolute top-[200px] left-[200px] bg-transparent border-white border-[2px] h-[400px] w-[400px] rotate-45 rounded-3xl m-8 bg-red-500"></div>
          <div className=" absolute bottom-[180px] left-[235px] bg-transparent  border-white border-[2px] h-[400px] w-[400px] rotate-45 rounded-3xl bg-green-500 ">
            <img src={photo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
