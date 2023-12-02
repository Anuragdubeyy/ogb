import { Route, Routes } from "react-router-dom"
import App from "../container/App";
import BarterAvailable from "../pages/barter/BarterAvailable/BarterAvailable";
import BarterGiven from "../pages/barter/barterGiven/BarterGiven";
import BarterHistory from "../pages/barter/BarterHistory/BarterHistory";
import Dashboard from "../pages/Dashboard/Dashboard";
import CustomerRequest from "../components/form/CustomerRequest";
import CustomerOTP from "../components/form/CustomerOTP";
import FromApp from "../pages/customer/FromApp/FromApp";

const AppRoutes = ()=>{
    return (
        <Routes>
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/" element={<App />} >
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/barter-available" element={<BarterAvailable/>} />
            <Route path="/barter-given" element={<BarterGiven/>}/>
            <Route path="/barter-history" element={<BarterHistory/>}/>
            <Route path="/customer-request" element={<CustomerRequest/>} />
            <Route path="/customer-otp" element={<CustomerOTP/>}/>
            <Route path="/customer-form" element={<FromApp/>}/>


                {/* <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/masterOtp" element={<MasterOtpPage/>} />
                <Route path="/agent" element={<AgentPage/>} />
                <Route path="/cases" element={<CasesPage/>}  />
                <Route path="/customer" element={<CustomerPage/>} />
                <Route path="/loan" element={<LoanPage/>} /> */}
            </Route>
        </Routes>
    )
  
}

export default AppRoutes;
