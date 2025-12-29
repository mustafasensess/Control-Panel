import './index.css';
import {ServiceProvider} from "./contexts/ServiceContext.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import {DateProvider} from "./contexts/DateContext.jsx";
import ServerServicesPage from "./pages/ServerServicesPage.jsx";
import MainLayout from "./components/MainLayout.jsx";
import IntegrationServicesPage from "./pages/IntegrationServicesPage.jsx";
import ThirdPartyServicesPage from "./pages/ThirdPartyServicesPage.jsx";


function App() {
    return (
        <ServiceProvider>
            <DateProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<MainLayout/>}>
                            <Route index element={<Homepage/>}/>
                            <Route path="/server" element={<ServerServicesPage/>}/>
                            <Route path="/integration" element={<IntegrationServicesPage/>}/>
                            <Route path="/third-party" element={<ThirdPartyServicesPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </DateProvider>
        </ServiceProvider>

    );
}

export default App;