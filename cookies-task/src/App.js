import "./App.css";
import CookiesList from "./components/CookiesList";
import Home from "./components/Home";
import cookiesData from "./Cookies";

function App() {
  return (
    <div>
      <Home />
      <CookiesList cookies={cookiesData} />
    </div>
  );
}

export default App;
