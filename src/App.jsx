import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/navbar.component"
import '@fontsource/poppins'
import Home from "./routes/home/home.component"
import ScanNow from "./routes/scan-now/scan-now.component"

function App() {

  return (
    <div className="app-div">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path="scan-now" element={<ScanNow/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
