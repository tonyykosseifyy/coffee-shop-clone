import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import Fade from "react-reveal";

const Feature = () => {
  return (
    <FeatureContainer>
      <Fade>
      <h1>Coffee of the Day</h1>
      <p> CAFÉ MOCHA Chocolate Powder, Dark Roasted Coffee Beans, Skimmed Milk, Whipped Cream</p>
      <FeatureButton>Order Now</FeatureButton>
      </Fade>
    </FeatureContainer>
  );
}; 

export default Feature;