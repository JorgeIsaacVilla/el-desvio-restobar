import React from "react";
import "./Body.css";
import { Slider } from "./SliderCategory/Slider";
import { Menu1 } from "./ArrayMenu/Menu1";
import { Menu2 } from "./ArrayMenu/Menu2";
import { Menu3 } from "./ArrayMenu/Menu3";
import { Menu4 } from "./ArrayMenu/Menu4";
import { Menu5 } from "./ArrayMenu/Menu5";
import { Menu6 } from "./ArrayMenu/Menu6";
import { Menu7 } from "./ArrayMenu/Menu7";
import { Menu8 } from "./ArrayMenu/Menu8";
import { Menu9 } from "./ArrayMenu/Menu9";
import { Menu10 } from "./ArrayMenu/Menu10";
import { Menu11 } from "./ArrayMenu/Menu11";
import { Menu12 } from "./ArrayMenu/Menu12";
import { Menu13 } from "./ArrayMenu/Menu13";
function Body() {

  return (
    <>
      <Slider 
      targetSection1="section1" 
      targetSection2="section2" 
      targetSection3="section3" 
      targetSection4="section4" 
      targetSection5="section5"
      targetSection6="section6"
      targetSection7="section7"
      targetSection8="section8"
      targetSection9="section9"
      targetSection10="section10"
      targetSection11="section11"
      targetSection12="section12"
      targetSection13="section13"
      />
      <div className="component-body">
        <Menu1 sectionId="section1" />
        <Menu2 sectionId="section2"/>
        <Menu3 sectionId="section3"/>
        <Menu4 sectionId="section4"/>
        <Menu5 sectionId="section5"/>
        <Menu6 sectionId="section6" />
        <Menu7 sectionId="section7" />
        <Menu8 sectionId="section8" />
        <Menu9 sectionId="section9" />
        <Menu10 sectionId="section10" />
        <Menu11 sectionId="section11"/>
        <Menu12 sectionId="section12" />
        <Menu13 sectionId="section13" />
      </div>
    </>
  );
}

export { Body };
