// components/HeroSection.js
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center md:flex-row px-4">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Unlock Your Potential with TVET Learning
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Prepare for your future with comprehensive training and certifications in technical and vocational education.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            Start Your Journey
          </button>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/hero-image.jpg" // Replace with your actual image path
            alt="Hero Section Image"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
