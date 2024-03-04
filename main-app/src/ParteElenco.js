
export default function ParteElenco({index,testo1,testo2}){
    return <div class="items-center flex">
    <div class="flex items-center justify-center h-10 w-10 p-7 rounded-full border-black border-2">{index}</div>
    <div class="p-3">
      <h2 class="font-bold">{testo1}</h2>
      <p>{testo2}</p>
    </div>
  </div>
  }