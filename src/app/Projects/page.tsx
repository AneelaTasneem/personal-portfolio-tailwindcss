import Image from 'next/image';  // Import Image component from Next.js

export default function Projects() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-10">
      {/* Projects Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 mt-6 md:mt-9 text-[#02066f]">
        Projects
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-[#e7e7ad] shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#02066f]">Project 1</h2>
          <Image
            src="/countdown timer.jpg"  // Path to the image
            alt="Countdown Timer Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-[#02066f] font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            A Next.js, Tailwind CSS project to calculate fixed time.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-[#e7e7ad] shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#02066f]">Project 2</h2>
          <Image
            src="/Weather wedget.jpg"  // Path to the image
            alt="Weather Widget Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-[#02066f] font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            A Next.js, Tailwind CSS project to search for weather updates.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-[#e7e7ad] shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#02066f]">Project 3</h2>
          <Image
            src="/admission form.jpg"  // Path to the image
            alt="Admission Form Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-[#02066f] font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            An HTML, CSS-based form project to help keep student data.
          </p>
        </div>
      </div>
    </div>
  );
}
