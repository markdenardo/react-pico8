import React from 'react'
import Pico8 from 'react-pico-8'
import { Controls,
         Reset,
         Pause,
         Sound,
         Carts,
         Fullscreen } from 'react-pico-8/buttons'

         
 
const App = () => (
  <Pico8 src="jelpi.js"
         autoPlay={true}
         legacyButtons={false}
         hideCursor={true}
         center={true}
         blockKeys={true}
         usePointer={true}
         placeholder="placeholder.png"
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