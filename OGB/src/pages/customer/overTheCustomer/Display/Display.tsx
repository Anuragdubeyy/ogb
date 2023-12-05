import { Link } from "react-router-dom";
import { displayColumn } from "./column";
import DataTable from "../../../../components/common/DataTable";

export default function DisplayCustomer() {
    return (
      <div
        className="border-2 p-3"
        style={{
          fontWeight: "500",
          border: "1px solid rgba(195, 166, 109, 0.5)",
          borderRadius: "1.5rem ",
        }}
      >
        <div className="flex gap-4 ">
          <img className="w-5" src="./src/assets/icon/backbutton.svg" alt="" />
          <p className="text-[#C3A66D]">Switch Customer</p>
        </div>
        <div className="flex gap-36 mt-8">
          <div className="flex gap-4  ">
            <img
              className="w-11 h-11 overflow-hidden rounded-full"
              src="./src/assets/faces/face1.jpg"
              alt=""
            />
            <h2 className="mt-2">Satyam Mishra</h2>
          </div>
  
          <div className="flex gap-36 mt-2">
            <h2>Customer Mobile No: 9875564689</h2>
            <h2>Customer Email: ratsasan7@gmail.com</h2>
          </div>
        </div>
  
        <div className="flex gap-20 justify-center mt-6 active:text-[#C3A66D]">
          <Link to="/overThe-Customer"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group active   ">
            Home
            <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
          </h2></Link>
          <Link to="/deposit"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group">
            Deposit
            <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
          </h2></Link>
          <Link to="/withdraw"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group">
            withdraw
            <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
          </h2></Link>
          <Link to="/barter-customer"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group">
            Barter
            <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
          </h2></Link>
          <Link to="/display-customer"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group">
            Display
            <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
          </h2></Link>
          <Link to="/immediate-sell"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group">
            Immediate Sell
            <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
          </h2></Link>
          <Link to="/barter-list"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group">
            Barter List
            <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
          </h2></Link>
        </div>
  
        <div className="border border-input rounded-2xl mt-3 bg-ornament-bg">
    {/* <table className="w-full table-auto ">
      <thead>
        <tr className=" text-black" style={{backgroundColor:"#EDE6D8"}}>
        
        <th className="py-2 px-4">Ornament Image</th>
          <th className="py-2 px-4">Ornament Name</th>
          <th className="py-2 px-4">Category</th>
          <th className="py-2 px-4">Weight</th>
          <th className="py-2 px-4">Customer Name</th>
          <th className="py-2 px-4">Mobile</th>
          <th className="py-2 px-4">Booking Date</th>
          <th className="py-2 px-4">Days</th>
          <th className="py-2 px-4">Status</th>
        </tr>
      </thead>
      Your table body content goes here
    </table> */}
    <DataTable columns={displayColumn} data={[]}/>
  </div>
  
  
      </div>
    );
  }
  