export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 text-[#02066f]">
        Contact Us
      </h1>

      {/* Contact Information Section */}
      <div className="bg-[#e7e7ad] shadow-md rounded-lg p-4 md:p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-[#02066f]">Get In Touch</h2>

        <p className="mb-6 text-sm md:text-base text-justify">
          I would love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out to me through any of the methods below.
        </p>

        {/* Contact Details */}
        <div className="space-y-5">
          {/* Phone */}
          <div className="flex items-center">
            <img
              src="/whatsapp (1).png"
              alt="WhatsApp Icon"
              className="mr-3 h-7 w-7"
            />
            <p className="text-lg">Phone: +1 (123) 456-7890</p>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <img
              src="/email.png"
              alt="Email Icon"
              className="mr-3 h-7 w-7"
            />
            <p className="text-lg">Email: contact@yourcompany.com</p>
          </div>

          {/* Address */}
          <div className="flex items-center">
            <img
              src="/gps.png"
              alt="Location Icon"
              className="mr-3 h-7 w-7"
            />
            <p className="text-lg">Address: 1234 Elm St, City, Country</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3 text-[#02066f]">Follow Me</h3>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/aneela-tasneem-b770192b7"
              className="text-[#02066f] hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AneelaTasneem"
              className="text-[#02066f] hover:text-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
