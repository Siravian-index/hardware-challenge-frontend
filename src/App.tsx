import AppShellMantine from "./pages/dashboard/AppShellMantine";
import {Route, Routes,} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ProvidersPage from "./pages/dashboard/providers/ProvidersPage";
import AddProviderPage from "./pages/dashboard/providers/AddProviderPage";
import ReceiptsPage from "./pages/dashboard/receipts/ReceiptsPage";

function App() {

    //This will handle all the routes
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/dashboard"  element={<AppShellMantine/>}>
                    {/*<Route*/}
                    {/*    index*/}
                    {/*    element={<DefaultIndexComp/>}*/}
                    {/*/>*/}
                    <Route
                        path="providers"
                        element={<ProvidersPage/>}
                    />
                    <Route
                        path="provider"
                        element={<AddProviderPage/>}
                    />
                    <Route path='receipts' element={<ReceiptsPage/>}/>
                {/*    rest of the routes*/}
                </Route>
            </Routes>
        </div>
    )
}

export default App

