import { Link } from "react-router-dom";
import { depositRequestColumn } from "./column";
import DataTable from "../../../../components/common/DataTable";

export default function FromApp() {
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

      <div className="flex gap-36 justify-center mt-6 active:text-[#C3A66D]">
        <h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group active   ">
          Deposit Request
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
        </h2>
        <Link to="/withdraw-request"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group">
          Withdraw Request
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
        </h2></Link>
        <Link to="/order"><h2 className="text-black hover:text-[#C3A66D] cursor-pointer relative group">
          Orders
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#C3A66D] transition-all"></span>
        </h2></Link>
      </div>

      <div className="border border-input rounded-2xl mt-3 bg-ornament-bg">
  {/* <table className="w-full table-auto ">
    <thead>
      <tr className=" text-black" style={{backgroundColor:"#EDE6D8"}}>
        
        <th className="py-2 px-4">Customer Name</th>
        <th className="py-2 px-4">Address</th>
        <th className="py-2 px-4">Mobile</th>
        <th className="py-2 px-4">Date</th>
        <th className="py-2 px-4">Time</th>
        <th className="py-2 px-4">Status</th>
        <th className="py-2 px-4">Request Type</th>
        <th className="py-2 px-4">Action</th>
      </tr>
    </thead>
    Your table body content goes here
  </table> */}
  <DataTable columns={depositRequestColumn} data={[]}/>
</div>


    </div>
  );
}
