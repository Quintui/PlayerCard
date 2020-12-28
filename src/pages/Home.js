import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import { 
    homeObjOne, 
    homeObjTwo, 
    homeObjThree
         } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Services from '../components/Services'
import Footer from '../components/Footer/index'
import ContactSection from '../components/ContactSection/ContactSection'
 
const Home = () => {

    const [isOpen, setIsOpen ] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen = {isOpen} toggle = {toggle}/>
           <Navbar toggle = {toggle}/>
           <HeroSection />
           <InfoSection {...homeObjOne} />
           <InfoSection {...homeObjTwo} />
            <Services/> 
           <ContactSection {...homeObjThree}/>
            <Footer/>
        </>
    );
};                                                                             

export default Home
