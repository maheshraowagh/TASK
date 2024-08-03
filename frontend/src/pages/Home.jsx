import Hero from "./Hero"

const Home = () => {
  return (
    <div 
      className="w-full h-[92vh] bg-zinc-900 text-white px-10 py-8"
      style={{
        backgroundImage: "url('hero1.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",

      }}
    >
      <Hero/>
    </div>
  )
}

export default Home
