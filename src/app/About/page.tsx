export default function About() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-10">
      {/* About Me Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 text-[#02066f] pt-[80px] md:pt-[100px]">
        About Me
      </h1>

      {/* Introduction Text */}
      <p className="text-base md:text-lg text-center mb-8 md:mb-10">
        Hello! I'm <span className="text-[#02066f] font-extrabold">ANEELA TASNEEM</span>,<br />
        It's is my first project using Next.js and Tailwind css. I'm excited to share a little about myself.
      </p>

      {/* Qualification Section */}
      <div className="max-w-lg mx-auto bg-[#e7e7ad] shadow-lg rounded-lg p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#02066f]">
          My Qualification
        </h2>
        <ul className="list-disc pl-4 md:pl-5 space-y-2 text-sm md:text-base">
          <li>Bachelor's Degree in Micro-Biology</li>
          <li>Certificate in CIT</li>
          <li>Currently learning web development with Next.js and Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}
