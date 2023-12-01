import { Route, Routes } from "react-router-dom"
import App from "../container/App";
import BarterAvailable from "../pages/barter/BarterAvailable/BarterAvailable";

const AppRoutes = ()=>{
    return (
        <Routes>
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/" element={<App />} >
            <Route path="/barter-available" element={<BarterAvailable/>} />

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
