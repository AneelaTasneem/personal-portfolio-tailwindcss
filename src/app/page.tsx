export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-10 md:p-20 bg-white">
      {/* Image Section */}
      <div className="flex-1 text-center mb-6 md:mb-0">
        <img 
          src="/fun.png" 
          alt="Image" 
          width={500} 
          height={500} 
          className="w-full max-w-xs md:max-w-md mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 pr-5 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#02066f]">
          Hi, I am ANEELA TASNEEM
        </h1>
        <p className="text-base md:text-lg">
          I am a <span className="text-[#02066f] font-extrabold">FRONTEND DEVELOPER</span>
        </p>
      </div>
    </div>
  );
}
