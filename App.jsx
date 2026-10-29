import ICardGallery from "./component/ICardGallery";
import React, {useState} from 'react';
import ImdbCard from "./component/ImdbCard";

import Imagemanipulation from "./component/Imagemanipulation";
import StateHandling from "./component/StateHandling";
import SampleUseEffect from "./component/SampleUseEffect";


function App() {

   return (

    <div style={{border:'2px solid black'}}>
      {/* <ICardGallery /> */}
      {/* <ImdbCard/> */}
      {/* <StateHandling/> */}
      {/* <Imagemanipulation/> */}
      <SampleUseEffect/>
    </div>
  )
}

export default App