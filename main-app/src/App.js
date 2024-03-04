import React from "react"
import "./input.css"
import ParteElenco from "./ParteElenco"

let cognome = "Losi"

function CambioPagina(){
  document.getElementById("CambioImmagine").setAttribute("src","./gattino.png")
}

function App() {
  return (
    <>
    <div class="w-4/6" >
      <h1 class="text-3xl font-bold p-4"><span class="text-rgb-orange-206-228-225">_</span>zapier</h1>
        <div class = "my-auto mx-auto space-y-2 w-2/3 py-12">
          <strong class="text-3xl">Let's get you started,{cognome}</strong>
          <ParteElenco index = {1} testo1 = "Tell us about yourself"  
          testo2 = "This will help us personalize your Zapier experience" />
          <ParteElenco index = {2} testo1 = "Dicover your use case"  
          testo2 = "Identify taskd Zapier can automate to simplify your complex workflows" />
          <ParteElenco index = {3} testo1 = "Get custom racommendations"  
          testo2 = "Based on your profile,we'll generate a personalized Zap to kickstart your automation journey" />
        </div>
        <button class="text-white bg-blue-400 p-3 rounded-lg float-right" onClick={() => CambioPagina()}>Get started</button>
    </div>
    <div class="flex items-center justify-center w-2/6 p-4 bg-rgb-blue-206-228-225">
        <img id="CambioImmagine" class="h-full" src = "./mappa.jpeg" alt="immagine da mettere dopo"/>
    </div>
    </>
  );
}

export default App;
