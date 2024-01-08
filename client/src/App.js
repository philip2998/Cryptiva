import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './components/sections/navigationBar/navbar.css';
import './components/sections/Home/banner.css';
import './components/sections/CompanyProfiler/companies.css';
import './components/sections/CompanyProfiler/skills.css';
import './components/sections/Protection/protection.css';
import './components/sections/Security/security.css';
import './components/sections/CompanyHighlights/highlights.css';
import './components/sections/ServicesSection/services.css';
import './components/sections/CompanyTrial/trial.css';
import './components/sections/Contact/contact.css';
import './components/sections/Footer/footer.css';

import { Helmet } from 'react-helmet';
import favicon from './assets/img/logo-favicon.png';

import NavBar from './components/sections/navigationBar/NavBar';
import HomeBanner from './components/sections/Home/HomeBanner';
import Skills from './components/sections/CompanyProfiler/Skills';
import Protection from './components/sections/Protection/Protection';
import Security from './components/sections/Security/Security';
// import Highlights from './components/sections/CompanyHighlights/Highlights';
import Services from './components/sections/ServicesSection/Services';
import Trial from './components/sections/CompanyTrial/Trial';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="icon" href={favicon} type="image/png"></link>
        <title>HybridOps - Cyber Security Services</title>
      </Helmet>
      <NavBar />
      <HomeBanner />
      <Skills />
      <Services />
      <Protection />
      <Security />
      {/* <Highlights /> */}
      <Trial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
