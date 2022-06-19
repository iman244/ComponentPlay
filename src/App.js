import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavbarSocialMedia from "./Components/high-level/Nav/NavbarSocialMedia/NavbarSocialMedia";
import Sidebar from "./Components/high-level/Sidebar/Sidebar";
import Rightbar from "./Components/mid-level/Rightbar/Rightbar";
import FeedSocialMedia from "./Components/high-level/FeedSocialMedia/FeedSocialMedia";

function App() {
  return (
    <BrowserRouter>
      <NavbarSocialMedia />
      <div className="layout">
        <Sidebar className="Sidebar" />
        <FeedSocialMedia className="FeedSocialMedia" />
        <Rightbar className="Rightbar" />
      </div>
    </BrowserRouter>
  );
}

export default App;
