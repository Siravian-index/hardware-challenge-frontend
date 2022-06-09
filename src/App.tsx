import AppShellMantine from "./pages/dashboard/AppShellMantine";
import {Route, Routes,} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";

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
                    {/*<Route*/}
                    {/*    path="products"*/}
                    {/*    element={<TestComponent/>}*/}
                    {/*/>*/}
                {/*    rest of the routes*/}
                </Route>
            </Routes>
        </div>
    )
}

export default App

