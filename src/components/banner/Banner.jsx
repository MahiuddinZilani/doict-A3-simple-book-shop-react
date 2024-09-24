const Banner = () => {
  return (
    <div className="lg:flex flex-row lg:h-[24rem]">
      {/* large device */}
      <div className="hidden lg:flex items-center justify-center w-full h-full bg-gradient-to-r from-slate-700 to-slate-400">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">
            Unlock a World of Stories <br /> Find Your Next Favorite Book at{" "}
            <br />
            <span className="text-orange-500"> Book Store</span>
          </h1>
          <button className="w-auto px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md  hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Buy Book
          </button>
        </div>
      </div>
      <div
        className="h-[20rem] w-full bg-contain lg:h-[24rem]"
        style={{
          backgroundImage: 'url("../images/carousel-1.jpg")',
        }}
      >
        {/* small and medium device */}
        <div className="lg:hidden flex items-center justify-center w-full h-full bg-slate-900/60">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-white lg:text-3xl">
              Unlock a World of Stories <br /> Find Your Next Favorite Book at
              <span className="text-blue-400"> Book Store</span>
            </h1>
            <button className="w-auto px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md  hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Buy Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
