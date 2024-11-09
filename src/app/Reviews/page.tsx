import Image from 'next/image';  // Import Image component from Next.js

export default function Reviews() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 text-[#02066f]">
        Clients Reviews
      </h1>

      {/* Review Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Review 1 */}
        <div className="bg-[#e7e7ad] shadow-md rounded-lg p-4 md:p-6">
          <Image
            src="/user.png"
            alt="Reviewer 1"
            width={80}  // Set width for optimization
            height={80} // Set height for optimization
            className="rounded-full mx-auto"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-center mt-4 text-[#02066f]">
            John Doe
          </h3>
          <p className="mt-2 text-center text-lg">⭐⭐⭐⭐⭐</p>
          <p className="mt-4 text-sm md:text-base text-justify">
            “This service is amazing! It has completely transformed the way we do business.”
          </p>
        </div>

        {/* Review 2 */}
        <div className="bg-[#e7e7ad] shadow-md rounded-lg p-4 md:p-6">
          <Image
            src="/user.png"
            alt="Reviewer 2"
            width={80}  // Set width for optimization
            height={80} // Set height for optimization
            className="rounded-full mx-auto"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-center mt-4 text-[#02066f]">
            Jane Smith
          </h3>
          <p className="mt-2 text-center text-lg">⭐⭐⭐⭐</p>
          <p className="mt-4 text-sm md:text-base text-justify">
            “The team is very professional, and the service exceeded my expectations.”
          </p>
        </div>

        {/* Review 3 */}
        <div className="bg-[#e7e7ad] shadow-md rounded-lg p-4 md:p-6">
          <Image
            src="/user.png"
            alt="Reviewer 3"
            width={80}  // Set width for optimization
            height={80} // Set height for optimization
            className="rounded-full mx-auto"
          />
          <h3 className="text-xl md:text-2xl font-semibold text-center mt-4 text-[#02066f]">
            Alex Johnson
          </h3>
          <p className="mt-2 text-center text-lg">⭐⭐⭐⭐⭐</p>
          <p className="mt-4 text-sm md:text-base text-justify">
            “I highly recommend this service. Great quality and excellent support.”
          </p>
        </div>
      </div>
    </div>
  );
}
