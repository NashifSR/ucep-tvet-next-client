// components/FAQSection.js
const FAQSection = () => {
    const faqs = [
      {
        question: "How do I sign up for the platform?",
        answer: "Simply click the 'Get Started' button on the homepage, fill in your details, and you’ll be ready to start learning or teaching!"
      },
      {
        question: "Are the courses free?",
        answer: "Some of our courses are free, while others are paid. You can browse through them to find the best fit for your needs."
      },
      {
        question: "How can I track my progress?",
        answer: "Our platform provides a dashboard where you can track your courses, see your completion status, and earn certificates as you progress."
      },
      {
        question: "Can I become a teacher on the platform?",
        answer: "Yes! If you are an experienced instructor, you can apply to teach courses. Simply sign up as a teacher, submit your credentials, and we will get in touch."
      }
    ];
  
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQSection;
  