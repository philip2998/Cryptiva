import './css/App.css';
import './css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './components/navigationBar/navbar.css';
import './components/Home/banner.css';
import './components/CompanyProfiler/skills.css';
import './components/CompanyProfiler/companies.css';
import './components/Protection/protection.css';
import './components/Security/security.css';
import './components/CompanyHighlights/highlights.css';
import './components/ServicesSection/services.css';
import './components/CompanyTrial/trial.css';
import './components/Contact/contact.css';
import './components/Footer/footer.css';

import NavBar from './components/navigationBar/NavBar';
import HomeBanner from './components/Home/HomeBanner';
import Skills from './components/CompanyProfiler/Skills';
import Protection from './components/Protection/Protection';
import Security from './components/Security/Security';
import Highlights from './components/CompanyHighlights/Highlights';
import Services from './components/ServicesSection/Services';
import Trial from './components/CompanyTrial/Trial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeBanner />
      <Skills />
      <Protection />
      <Security />
      <Highlights />
      <Services />
      <Trial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
