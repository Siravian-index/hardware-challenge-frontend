import AppShellMantine from "./pages/dashboard/AppShellMantine";
import {Route, Routes,} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import TestComponent from "./components/TestComponent";

function App() {

    //This will handle all the routes
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/dashboard"  element={<AppShellMantine/>}>
                    <Route
                        path="test"
                        element={<TestComponent/>}
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default App

/* like this
*     <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
    </Routes>
* */