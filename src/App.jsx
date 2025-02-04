import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/navbar.component"
import '@fontsource/poppins'
import Home from "./routes/home/home.component"
import AboutUs from "./routes/about-us/about-us.component"

function App() {

  return (
    <div className="app-div">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path="about-us" element={<AboutUs/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
