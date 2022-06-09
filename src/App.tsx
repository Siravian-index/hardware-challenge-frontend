import AppShellMantine from "./pages/dashboard/AppShellMantine";
import {Route, Routes,} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ProvidersPage from "./pages/dashboard/providers/ProvidersPage";

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
                {/*    rest of the routes*/}
                </Route>
            </Routes>
        </div>
    )
}

export default App

