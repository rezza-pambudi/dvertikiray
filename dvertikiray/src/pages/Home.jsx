import Navbar from "../components/Navbar"
import HomeContent from "../components/HomeContent";
import Course from "../components/Course";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import '../styles/Home.css';
import { homeSection } from "../data/HomeSection";
import parse from 'html-react-parser';

function Home() {
  return (
    <>
     <Navbar />
     
     <div className="wrapper">
        <section id="home">
            <img src={homeSection.image}/>
            <div className="kolom">
                {parse(homeSection.content)}
            </div>
        </section>
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
