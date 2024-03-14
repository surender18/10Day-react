import { useState } from "react"


function App() {
  const [color,setColor]=useState("lightgreen")

  return (
   
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>
   
    <div className="fixed flex flex-wrap justify-center  bottom-10 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-4 shadow-lg px-2 py-1 rounded-2xl bg-white">
        <button onClick={()=>setColor("red")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("green")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=>setColor("blue")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
        <button onClick={()=>setColor("gray")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"Gray"}}>Gray</button>
        <button onClick={()=>setColor("Orange")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"Orange"}}>Orange</button>
        <button onClick={()=>setColor("Black")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}}>Black</button>
        <button onClick={()=>setColor("Brown")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"Brown"}}>Brown</button>
        <button onClick={()=>setColor("purple")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>purple</button>
        <button onClick={()=>setColor("Magenta")} className="outline-none px-4 py-2 rounded-full text-white shadow-lg" style={{backgroundColor:"Magenta"}}>Magenta</button>
      </div>
      </div>
   </div>
   
  )
}

export default App
