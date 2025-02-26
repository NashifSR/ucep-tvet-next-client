// components/CTASection.js
const CTASection = () => {
    return (
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg mb-6">Join thousands of students and teachers who are mastering essential skills for the future of work. Start learning or teaching today</p>
          <a href="/login" className="bg-yellow-500 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Get Started
          </a>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  