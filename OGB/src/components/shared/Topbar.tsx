export default function TopBar() {
  return (
    <header className="pl-56 fixed top-0 bg-white w-full">
      <nav className="flex px-5 py-6 justify-between gap-4">
        <div className="col-16 col-xl-8 mb-4 ml-2 mb-xl-0">
          <h3 className="font-bold text-2xl">
            <span className="text-gray-500 text-2xl">Good afternoon</span>, Raj
            Deep
          </h3>
          <h6 className="font-normal text-gray-500 text-lg mb-0 ">
            Your performance summary
          </h6>
        </div>
        <div className="col-2 col-xl-4 text-right float-left flex items-center">
          <div className="text-center hidden md:block float-left mt-2">
            <p className="text-center statistics-title  text-black font-semibold">
              Today 10 Gram Rate
            </p>
            <button
              type="button"
              className="ml-4 mt-1  flex gap-2 p-1 pl-2 pr-2 border-2 border-gray-100 rounded"
            >
              <span id="rate" className="text-black font-bold">
                ₹ 62,000
              </span>
              <img src="./src/assets/icon/pencil.svg" alt="" />
            </button>
          </div>
          <a href="#" className="ml-9 mr-11">
            <img src="./src/assets/icon/bell.svg" alt="" />
          </a>
          <img
            className="w-14 h-14 mt-2 mr-6 overflow-hidden rounded-full"
            src="..\src\assets\faces\face28.jpg"
            alt="profile"
          />
        </div>
      </nav>
    </header>
  );
}
