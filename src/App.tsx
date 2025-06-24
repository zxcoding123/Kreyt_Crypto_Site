import Navbar from './components/Navbar';
import Header from './components/Header'
import './App.css'
import ScrollVelocityText from './components/VelocityText'
import FeatureSection from './components/FeaturesSection'
import AboutUs from './components/AboutUs'
import InvestorTab from './components/Investors'
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {


  return (
    <>
      <div>
        <Navbar></Navbar>
        <Header></Header>
        <ScrollVelocityText></ScrollVelocityText>
        <AboutUs></AboutUs>
        <FeatureSection></FeatureSection>
        <InvestorTab></InvestorTab>
        <FAQ></FAQ>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
