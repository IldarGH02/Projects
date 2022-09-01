import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Weather from "./Pages/Weather/weather"
import Clock from "./Pages/Clock/clock"
import App from "./App"

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/weather" element={<Weather />} />
        <Route path="/clock" element={<Clock />} />
    </Routes>
  </BrowserRouter>
);

