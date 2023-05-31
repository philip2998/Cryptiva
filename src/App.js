import "./css/App.css";
import "./css/navbar.css";
import "./css/banner.css";
import "./css/skills.css";
import "./css/companies.css";
import "./css/protection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigationBar/NavBar";
import HomeBanner from "./components/Home/HomeBanner";
import Skills from "./components/CompanyProfiler/Skills";
import Protection from "./components/Protection/Protection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeBanner />
      <Skills />
      <Protection />
    </div>
  );
}

export default App;
