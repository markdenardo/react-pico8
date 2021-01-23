import React from 'react'
import Pico8 from 'react-pico-8'
import { Controls,
         Reset,
         Pause,
         Sound,
         Carts,
         Fullscreen } from 'react-pico-8/buttons'

         
 
const App = () => (
  <Pico8 src="gol.js"
         autoPlay={true}
         legacyButtons={false}
         hideCursor={true}
         center={true}
         blockKeys={true}
         usePointer={true}
         placeholder="logo512.png"
  >
    <Controls/>
    <Reset/>
    <Pause/>
    <Sound/>
    <Carts/>
    <Fullscreen/> 
  </Pico8>

  
)

export default App