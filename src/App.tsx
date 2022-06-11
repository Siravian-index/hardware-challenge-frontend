import AppShellMantine from "./pages/dashboard/AppShellMantine";
import {Route, Routes,} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ProvidersPage from "./pages/dashboard/providers/ProvidersPage";
import AddProviderPage from "./pages/dashboard/providers/AddProviderPage";
import ReceiptsPage from "./pages/dashboard/receipts/ReceiptsPage";
import ProductsPage from "./pages/dashboard/products/ProductsPage";
import BillsPage from "./pages/dashboard/bills/BillsPage";
import AddReceiptPage from "./pages/dashboard/receipts/AddReceiptPage";
import CreateNewBillPage from "./pages/dashboard/bills/CreateNewBillPage";
import AddProductPage from "./pages/dashboard/products/AddProductPage";

function App() {

    //This will handle all the routes
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/dashboard"  element={<AppShellMantine/>}>
                    <Route
                        index
                        element={<ProductsPage/>}
                    />
                    <Route path='product' element={<AddProductPage/>} />
                    <Route
                        path="providers"
                        element={<ProvidersPage/>}
                    />
                    <Route
                        path="provider"
                        element={<AddProviderPage/>}
                    />
                    <Route path='receipts' element={<ReceiptsPage/>}/>
                    <Route path='receipt' element={<AddReceiptPage/>}/>
                    <Route path='bills' element={<BillsPage/>}/>
                    <Route path='/dashboard/bill' element={<CreateNewBillPage/>}/>
                {/*    rest of the routes*/}
                </Route>
            </Routes>
        </div>
    )
}

export default App

