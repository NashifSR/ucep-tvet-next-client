// components/TestimonialSection.js
const TestimonialSection = () => {
    const testimonials = [
      {
        name: "John Doe",
        role: "Student",
        quote: "This platform made learning so much easier and more accessible. The courses are detailed, and the flexibility to learn at my own pace was a game changer!",
        image: "/images/john-doe.jpg"
      },
      {
        name: "Jane Smith",
        role: "Teacher",
        quote: "As a teacher, I find this platform incredibly useful for managing my courses and tracking student progress. The tools and resources available make teaching so much easier.",
        image: "/images/jane-smith.jpg"
      },
      {
        name: "Mohammad Ali",
        role: "Student",
        quote: "The certifications I earned helped me land my first job in the industry. I’m grateful for the skills I gained through the platform.",
        image: "/images/mohammad-ali.jpg"
      }
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Users Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;
  