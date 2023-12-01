
import { useState } from "react"
import { Link } from "react-router-dom";

export default function LeftSideBar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const handleDropdownClick = (index) => {
        setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
      };
    
    
  return (

<nav className=" w-64  border-2 " style={{borderColor: "rgba(195, 166, 109, 1)", fontWeight:"500", marginTop:"-7.46rem", borderRadius:"0rem 1.5rem "}}>
    <div className="ml-3 mt-5 flex flex-col gap-6 h-screen  ">
    <div className="flex justify-between mr-3"><img src="./src/assets/ogb-logo.svg" alt="" />
    <img src="./src/assets/icon/option.svg" alt="" />
    </div>
    <div className="flex gap-3">
        <img src="./src/assets/icon/deshboard.svg" alt="" />
        <p>Dashboard</p>
    </div>
    <div className="flex flex-col cursor-pointer" onClick={()=> handleDropdownClick(0)}>
        <div className="flex gap-3">
        <img src="./src/assets/icon/barter.svg" alt="" />
        <p>Barter</p>
        </div>
        {activeDropdown===0&& <div className="ml-5 " >
            <li ><Link to="/barter-available">Barter Available</Link></li>
            <li>Barter Given</li>
            <li>Barter History</li>
        </div>}
    </div>
    <div className="flex flex-col cursor-pointer" onClick={()=> handleDropdownClick(1)}>
        <div className="flex gap-3">
        <img src="./src/assets/icon/customer.svg" alt="" />
        <p>Customer Request </p>
        </div>
        {activeDropdown===1&& <div  >
            <p>From App</p>
            <p>Barter Given</p>
        </div>}
    </div>
    <div className="flex flex-col cursor-pointer" onClick={()=> handleDropdownClick(2)}>
        <div className="flex gap-3">
        <img src="./src/assets/icon/Ornaments.svg" alt="" />
        <p>Ornaments</p>
        </div>
        {activeDropdown===2&& <div  >
            <p>Deposited Ornaments</p>
            <p>Display Ornaments</p>
            <p>Sold Ornaments</p>
            <p>Withdraw Ornaments</p>
            <p>Ornament Categories </p>
            <p>Locker Ornaments</p>
            <p>Barter Ornaments</p>
            <p>Exchanged Ornaments</p>
            <p>Surrendered Ornaments</p>
        </div>}
    </div>
    <div className="flex flex-col cursor-pointer" onClick={()=> handleDropdownClick(3)}>
        <div className="flex gap-3">
        <img src="./src/assets/icon/Order.svg" alt="" />
        <p>Orders</p>
        </div>
        {activeDropdown===3&& <div  >
            <p>Buy Orders</p>
            
        </div>}
    </div>
    <div className="flex flex-col cursor-pointer" onClick={()=> handleDropdownClick(4)}>
        <div className="flex gap-3">
        <img src="./src/assets/icon/Privilege.svg" alt="" />
        <p>Privilege </p>
        </div>
        {activeDropdown===4&& <div  >
            <p>Privilege Members</p>
            <p>Loans</p>
        </div>}
    </div>
    <div className="flex flex-col cursor-pointer" onClick={()=> handleDropdownClick(5)}>
        <div className="flex gap-3">
        <img src="./src/assets/icon/Premium.svg" alt="" />
        <p>Premium Collection</p>
        </div>
        {activeDropdown===5&& <div  >
            <p>Add premium collection</p>
            <p>Premium collection list</p>
        </div>}
    </div>
    <div className="flex flex-col cursor-pointer" onClick={()=> handleDropdownClick(6)}>
        <div className="flex gap-3">
        <img src="./src/assets/icon/Register.svg" alt="" />
        <p>Registered Users </p>
        </div>
        {activeDropdown===6&& <div  >
            <p>Add admin</p>
            <p>Agents</p>
            <p>Customers</p>
            <p>Locker Manager</p>
        </div>}
    </div>
    <div className="flex flex-col cursor-pointer" onClick={()=> handleDropdownClick(7)}>
        <div className="flex gap-3">
        <img src="./src/assets/icon/Setting.svg" alt="" />
        <p>Settings</p>
        </div>
        
    </div>
    </div>


  
</nav>
  )
}
