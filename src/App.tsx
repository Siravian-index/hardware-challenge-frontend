import AppShellMantine from "./components/AppShellMantine";

function App() {

    //This will handle all the routes
    return (
        <div className="App">

            <AppShellMantine/>

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