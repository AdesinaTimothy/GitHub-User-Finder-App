import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Rootlayout from "./RootLayout.jsx"
import Income from "./Income.jsx"
import Investments from "./Investment.jsx"
import Settings from "./Settings.jsx"
import Expenses from "./Expenses.jsx"
import Sms from "./Sms.jsx"
import IncomeLayout from "./IncomeLayout.jsx"
import FiatIncome from "./FiatIncome.jsx"
import CryptoIncome from "./CryptoIncome.jsx"
import TotalIncome from "./TotalIncome.jsx"



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>

      <Route path="/" element={<IncomeLayout />}>

        <Route index  element={<FiatIncome />}/>  
        <Route path="fiat" element={<FiatIncome />}/>
        <Route path="crypto" element={<CryptoIncome />}/>
        <Route path="total" element={<TotalIncome />}/>
      </Route>

      <Route path="expenses" element={<Expenses />}/>
      <Route path="investments" element={<Investments />}/>
      <Route path="settings" element={<Settings />}/>
      <Route path="sms" element={<Sms />}/>
    </Route>
  ))

  return (
    
      <RouterProvider router={router}/>
   
  )
}

export default App
