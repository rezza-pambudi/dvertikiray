import Navbar from "../components/Navbar"
import HomeContent from "../components/HomeContent";
import Course from "../components/Course";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import '../styles/Home.css';

function Home() {
  return (
    <>
     <Navbar />
     <HomeContent />
     <div className="wrapper">
        <Course />
        <Tutors />
        <Partners />
     </div>
     <Contact />
     <Footer />
     
    </>
  )
}

export default Home
