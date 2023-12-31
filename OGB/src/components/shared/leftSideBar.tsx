import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftSideBar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeChild, setActiveChild] = useState<number | null>(null);

  const handleDropdownClick = (index:number) => {
    // setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));

    if (activeDropdown === index) {
      setActiveChild((prevChild) => (prevChild === null ? index : null));
    } else {
      setActiveDropdown(index);
      setActiveChild(null);
    }
  };

  return (
    <nav
      className=" w-56 overflow-auto  z-20 fixed min-w-fit bg-white"
      style={{
        fontWeight: "500",
        border: "1px solid rgba(195, 166, 109, 1)",
        // marginTop: "-6.23rem",
        borderRadius: "0rem 1.5rem 0rem 0rem",
      }}
    >
      <div className="ml-3 mt-5 flex flex-col gap-6 h-screen  ">
        <div className="flex justify-between mr-3">
          <img src="./src/assets/ogb-logo.svg" alt="" />
          <img src="./src/assets/icon/option.svg" alt="" />
        </div>
        <div className="flex gap-3 cursor-pointer">
          <img src="./src/assets/icon/deshboard.svg" alt="" />
          <p>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </p>
        </div>

        <div
          className="flex flex-col cursor-pointer "
          onClick={() => handleDropdownClick(0)}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-primary-gradient  mr-3 rounded"
                : "bg-white text-black"
            }
            to="/barter-available"
          >
            <div className="flex gap-3 ">
              <img src="./src/assets/icon/barter.svg" alt="" />
              <p>Barter</p>
            </div>
            {activeDropdown === 0 && (
              <div className="ml-5 text-sm mt-2 flex flex-col gap-2 ">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#C3A66D]" : "text-black"
                    }
                    to="/barter-available"
                  >
                    Barter Available
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive && activeChild === 0
                        ? "text-[#C3A66D]"
                        : "text-black"
                    }
                    to="/barter-given"
                  >
                    Barter Given
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/barter-history"
                    className={({ isActive }) =>
                      isActive && activeChild === 0
                        ? "text-[#C3A66D]"
                        : "text-black"
                    }
                  >
                    Barter History
                  </NavLink>
                </li>
              </div>
            )}{" "}
          </NavLink>
        </div>

          {/* customer Request start*/}
        
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => handleDropdownClick(1)}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-primary-gradient  mr-3 rounded"
                : "bg-white text-black"
            }
            to="/customer-request"
          >
          <div className="flex   gap-3">
            <img src="./src/assets/icon/customer.svg" alt="" />
            <p className="text-sm mt-1 ">Customer Request </p>
          </div>
          {activeDropdown === 1 && (
            <div className="ml-5 text-sm mt-2 flex flex-col gap-2">
              <li>
                <NavLink
                  to="/customer-request"
                  className={({ isActive }) =>
                    isActive && activeChild === 1
                      ? "text-[#C3A66D]"
                      : "text-black"
                  }
                >
                  From App
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/OverThe-Customer"
                  className={({ isActive }) =>
                    isActive && activeChild === 1
                      ? "text-[#C3A66D]"
                      : "text-black"
                  }
                >
                  Over The Customer
                </NavLink>
              </li>
            </div>
          )}</NavLink>
        </div>


        {/* Ornaments start */}

        <div
          className="flex flex-col cursor-pointer"
          onClick={() => handleDropdownClick(2)}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " bg-primary-gradient  mr-3 rounded"
                : "bg-white text-black"
            }
            to="/deposit-ornaments"
          >
          <div className="flex gap-3">
            <img src="./src/assets/icon/Ornaments.svg" alt="" />
            <p>Ornaments</p>
          </div>
          {activeDropdown === 2 && (
            <div className="ml-5 text-sm mt-2 flex flex-col gap-2">
              <NavLink className={({ isActive }) =>
                    isActive && activeChild === 2
                      ? "text-[#C3A66D]"
                      : "text-black"
                  } to='/deposit-ornaments'><li>Deposited Ornaments</li></NavLink>
              <NavLink className={({ isActive }) =>
                    isActive && activeChild === 2
                      ? "text-[#C3A66D]"
                      : "text-black"
                  } to='/display-ornaments'><li>Display Ornaments</li></NavLink>
              <NavLink className={({ isActive }) =>
                    isActive && activeChild === 2
                      ? "text-[#C3A66D]"
                      : "text-black"
                  } to='/sold-ornaments'><li>Sold Ornaments</li></NavLink>
              <li>Withdraw Ornaments</li>
              <li>Ornament Categories </li>
              <li>Locker Ornaments</li>
              <li>Barter Ornaments</li>
              <li>Exchanged Ornaments</li>
              <li>Surrendered Ornaments</li>
            </div>
          )}
          </NavLink>
        </div>

        {/* Order Start */}

        <div
          className="flex flex-col cursor-pointer"
          onClick={() => handleDropdownClick(3)}
        >
          <div className="flex gap-3">
            <img src="./src/assets/icon/Order.svg" alt="" />
            <p>Orders</p>
          </div>
          {activeDropdown === 3 && (
            <div>
              <p>Buy Orders</p>
            </div>
          )}
          
        </div>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => handleDropdownClick(4)}
        >
          <div className="flex gap-3">
            <img src="./src/assets/icon/Privilege.svg" alt="" />
            <p>Privilege </p>
          </div>
          {activeDropdown === 4 && (
            <div>
              <p>Privilege Members</p>
              <p>Loans</p>
            </div>
          )}
        </div>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => handleDropdownClick(5)}
        >
          <div className="flex gap-3">
            <img src="./src/assets/icon/Premium.svg" alt="" />
            <p>Premium Collection</p>
          </div>
          {activeDropdown === 5 && (
            <div>
              <p>Add premium collection</p>
              <p>Premium collection list</p>
            </div>
          )}
        </div>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => handleDropdownClick(6)}
        >
          <div className="flex gap-3">
            <img src="./src/assets/icon/Register.svg" alt="" />
            <p>Registered Users </p>
          </div>
          {activeDropdown === 6 && (
            <div>
              <p>Add admin</p>
              <p>Agents</p>
              <p>Customers</p>
              <p>Locker Manager</p>
            </div>
          )}
        </div>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => handleDropdownClick(7)}
        >
          <div className="flex gap-3">
            <img src="./src/assets/icon/Setting.svg" alt="" />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
