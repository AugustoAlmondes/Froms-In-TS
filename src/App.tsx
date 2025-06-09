import Forms from "./components/Forms"

function App() {

  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-[2rem] text-white">Forms in TypeScript</h1>
      <p className="text-white">Style in Tailwind</p>

      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Forms />
      </div>
      <p className="text-slate-100 text-xs w-96 mt-2 text-center">Essa interface foi feita com React + TypeScript + Vite + Tailwind. Ela foi desenvolvida para fins de treinamento e aprendizado.</p>
    </div>
  )
}

export default App
