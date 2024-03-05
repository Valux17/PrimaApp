
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function Ciao  (){

  return (
    <>
     <div class="grid grid-cols-2 h-screen ">
    <div class="w-full" >
      <h1 class="text-3xl font-bold p-4"><span class="text-blue-600">_</span>zapier</h1>
        <div class = "my-auto mx-auto space-y-2 w-2/3 py-12">
          <strong class="text-3xl">Let's get you started,Apeople</strong>
              <div class="items-center flex">
                  <div class="flex items-center justify-center h-10 w-10 p-7 rounded-full border-black border-2">1</div>
                  <div class="p-3">
                    <h2 class="font-bold">Tell us about yourself</h2>
                    <p>This will help us personalize your Zapier experience</p>
                  </div>
              </div>
              <div class="items-center flex">
                  <div class="flex items-center justify-center h-10 w-10 p-7 rounded-full border-black border-2">2</div>
                  <div class="p-3">
                     <h2 class="font-bold">Dicover your use case</h2>
                     <p>Identify taskd Zapier can automate to simplify 
                        your complex workflows</p>
                   </div>
              </div>
              <div class="flex items-center justify-center items-center flex">
                  <div class="flex items-center justify-center w-10 h-10 p-7 rounded-full border-black border-2">3</div>
                  <div class="p-3">
                      <h2 class="font-bold">Get custom racommendations</h2>
                      <p>Based on your profile,we'll generate a personalized 
                        Zap to kickstart your automation journey</p>
                  </div>
            </div>
        </div>
        <a href = "step"
          
          
          ><button className="text-white bg-blue-400 p-3 rounded-lg float-right" >Get started</button></a> 
        
    </div>
    <div class="flex items-center justify-center w-full p-4 bg-rgb-blue-80">
        <img class="h-full" src = "./mappa.jpeg" alt="immagine da mettere dopo"/>
    </div>
    </div>
    </>
    );
   
}

function Ciao2  (){


  return (
    <>
       <div class="grid grid-cols-2 h-screen ">
      <div class="w-full" >
      <h1 class="text-3xl font-bold p-4"><span class="text-blue-600">_</span>zapier</h1>
        <div class = "my-auto mx-auto space-y-2 w-2/3 py-12">
          <strong class="text-3xl">Let's get you started,Bpeople</strong>
              <div class="items-center flex">
                  <div class="flex items-center justify-center h-10 w-10 p-7 rounded-full border-black border-2">1</div>
                  <div class="p-3">
                    <h2 class="font-bold">Tell us about yourself</h2>
                    <p>This will help us personalize your Zapier experience</p>
                  </div>
              </div>
              <div class="items-center flex">
                  <div class="flex items-center justify-center h-10 w-10 p-7 rounded-full border-black border-2">2</div>
                  <div class="p-3">
                     <h2 class="font-bold">Dicover your use case</h2>
                     <p>Identify taskd Zapier can automate to simplify 
                        your complex workflows</p>
                   </div>
              </div>
              <div class="flex items-center justify-center items-center flex">
                  <div class="flex items-center justify-center w-10 h-10 p-7 rounded-full border-black border-2">3</div>
                  <div class="p-3">
                      <h2 class="font-bold">Get custom racommendations</h2>
                      <p>Based on your profile,we'll generate a personalized 
                        Zap to kickstart your automation journey</p>
                  </div>
            </div>
        </div>
        <a href = "step2"
          
          
          ><button className="text-white bg-blue-400 p-3 rounded-lg float-right" >Get started</button></a> 
        
    </div>
    <div class="flex items-center justify-center w-full p-4 bg-rgb-blue-80">
        <img class="h-full" src = "./mappa.jpeg" alt="immagine da mettere dopo"/>
    </div>
  
    </div>
    </>
    );

}
function Ciao3 (){


  return (
    <>
       <div class="grid grid-cols-2 h-screen ">
      <div class="w-full" >
      <h1 class="text-3xl font-bold p-4"><span class="text-blue-600">_</span>zapier</h1>
        <div class = "my-auto mx-auto space-y-2 w-2/3 py-12">
          <strong class="text-3xl">Let's get you started,Cpeople</strong>
              <div class="items-center flex">
                  <div class="flex items-center justify-center h-10 w-10 p-7 rounded-full border-black border-2">1</div>
                  <div class="p-3">
                    <h2 class="font-bold">Tell us about yourself</h2>
                    <p>This will help us personalize your Zapier experience</p>
                  </div>
              </div>
              <div class="items-center flex">
                  <div class="flex items-center justify-center h-10 w-10 p-7 rounded-full border-black border-2">2</div>
                  <div class="p-3">
                     <h2 class="font-bold">Dicover your use case</h2>
                     <p>Identify taskd Zapier can automate to simplify 
                        your complex workflows</p>
                   </div>
              </div>
              <div class="flex items-center justify-center items-center flex">
                  <div class="flex items-center justify-center w-10 h-10 p-7 rounded-full border-black border-2">3</div>
                  <div class="p-3">
                      <h2 class="font-bold">Get custom racommendations</h2>
                      <p>Based on your profile,we'll generate a personalized 
                        Zap to kickstart your automation journey</p>
                  </div>
            </div>
        </div>
        <a href = "/"
          
          ><button className="text-white bg-blue-400 p-3 rounded-lg float-right" >Get started</button></a> 
        
    </div>
    <div class="flex items-center justify-center w-full p-4 bg-rgb-blue-80">
        <img class="h-full" src = "./mappa.jpeg" alt="immagine da mettere dopo"/>
    </div>
    </div>
    
    </>
    );

}



function App(){


    return (
      <Router>
      <Routes>
        <Route path="step" element={<Ciao2 />} />
        <Route path="step2" element={<Ciao3 />} /> 
        <Route path="/" element={<Ciao />} /> 
      </Routes>
    </Router>


    );


}

export default App;
