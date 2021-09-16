import React from 'react';
import Header from './component/Header';
import Feature from './component/Feature';
import About from './component/About';
import abutimage from './images/Frame 19.png';
import abutimage1 from './images/download.png';
 


function App() {
  return (
   <div className='App'>
    <Header/>
   <Feature />
   <About image={abutimage} title='معلوماتــــــي' button='get the  App'/>
    
   
   </div>
  );
}

export default App;
