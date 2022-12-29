import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Fade from "react-reveal" ;
import { 
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
}   from './HeroElements';
 
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Fade clear>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                <HeroH1>Greatest Coffee Ever </HeroH1>
                <HeroP>Ready in 60 Seconds </HeroP>
                <HeroBtn>Place Order </HeroBtn>
                </HeroItems>
            </HeroContent>
            </Fade>
        </HeroContainer>
    );
};

export default Hero;
