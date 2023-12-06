import { Route, Routes } from "react-router-dom"
import App from "../container/App";
import BarterAvailable from "../pages/barter/BarterAvailable/BarterAvailable";
import BarterGiven from "../pages/barter/barterGiven/BarterGiven";
import BarterHistory from "../pages/barter/BarterHistory/BarterHistory";
import Dashboard from "../pages/Dashboard/Dashboard";
import CustomerRequest from "../components/form/CustomerRequest";
import CustomerOTP from "../components/form/CustomerOTP";
import FromApp from "../pages/customer/FromApp/DepositRequest/FromApp";
import WithdrawRequest from "../pages/customer/FromApp/WithdrawRequest/WithdrawRequest";
import Orders from "../pages/customer/FromApp/Orders/Orders";
import OverTheCustomer from "../pages/customer/overTheCustomer/home/OverTheCustomer";
import Deposit from "../pages/customer/overTheCustomer/Deposit";
import Withdraw from "../pages/customer/overTheCustomer/Withdraw/Withdraw";
import BarterCustomer from "../pages/customer/overTheCustomer/Barter/Barter";
import DisplayCustomer from "../pages/customer/overTheCustomer/Display/Display";
import ImmediateSellCustomer from "../pages/customer/overTheCustomer/immediate/imeadiate";
import BarterListCustomer from "../pages/customer/overTheCustomer/BarterList/BarterList";
import DepositOrnaments from "../pages/Ornaments/DepositeOrnaments/DepositeOrnament";
import DisplayOrnaments from "../pages/Ornaments/DisplayOrnaments/DisplayOrnaments";
import SoldOrnaments from "../pages/Ornaments/SoldOrnaments/SoldOrnaments";

const AppRoutes = ()=>{
    return (
        <Routes>
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/" element={<App />} >
            <Route path="/dashboard" element={<Dashboard/>}/>

            {/* barter */}
            <Route path="/barter-available" element={<BarterAvailable/>} />
            <Route path="/barter-given" element={<BarterGiven/>}/>
            <Route path="/barter-history" element={<BarterHistory/>}/>

            {/* Customer-Request */}
            <Route path="/customer-request" element={<CustomerRequest/>} />
            <Route path="/customer-otp" element={<CustomerOTP/>}/>
            <Route path="/customer-form" element={<FromApp/>}/>
            <Route path="/withdraw-request" element={<WithdrawRequest/>}/>
            <Route path="/order" element={<Orders/>}/>
            <Route path="/OverThe-Customer" element={<OverTheCustomer/>}/>
            <Route path="/deposit" element={<Deposit/>}/>
            <Route path="/withdraw" element={<Withdraw/>}/>
            <Route path="/barter-customer" element={<BarterCustomer/>}/>
            <Route path="/display-customer" element={<DisplayCustomer/>}/>
            <Route path="/immediate-sell" element={<ImmediateSellCustomer/>}/>
            <Route path="/barter-list" element={<BarterListCustomer/>}/>

            {/* Ornaments  */}
            <Route path="/deposit-ornaments" element={<DepositOrnaments/>}/>
            <Route path="/display-ornaments" element={<DisplayOrnaments/>}/>
            <Route path="/sold-ornaments" element={<SoldOrnaments/>}/>





               
            </Route>
        </Routes>
    )
  
}

export default AppRoutes;
