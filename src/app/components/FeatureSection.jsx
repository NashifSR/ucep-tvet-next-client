// components/FeaturesSection.js
const FeaturesSection = () => {
    const studentFeatures = [
      {
        title: "Comprehensive Courses",
        description: "Explore a wide range of courses designed to equip students with the technical skills needed to succeed in the workforce.",
        icon: "fas fa-book"
      },
      {
        title: "Flexible Learning",
        description: "Study at your own pace with materials that fit your schedule, whether you’re learning full-time or part-time.",
        icon: "fas fa-clock"
      },
      {
        title: "Certification Upon Completion",
        description: "Earn official certifications that are recognized in the industry, increasing job prospects and career advancement opportunities.",
        icon: "fas fa-certificate"
      }
    ];
  
    const teacherFeatures = [
      {
        title: "Industry Expertise",
        description: "Collaborate with experienced educators who bring real-world knowledge to the classroom, helping students succeed.",
        icon: "fas fa-chalkboard-teacher"
      },
      {
        title: "Easy Course Management",
        description: "Effortlessly manage, track, and grade student progress through our user-friendly platform, allowing for more focus on teaching.",
        icon: "fas fa-cogs"
      },
      {
        title: "Accessible Resources",
        description: "Access a variety of teaching materials, quizzes, and resources to enrich your lessons and enhance student learning.",
        icon: "fas fa-tools"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why TVET Students and Teachers Should Use This Platform</h2>
  
          {/* Student Features */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">For Students</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studentFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <div className="text-4xl text-blue-600 mb-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
  
          {/* Teacher Features */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">For Teachers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teacherFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <div className="text-4xl text-blue-600 mb-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  