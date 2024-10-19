// src/app/components/HealthcareBlogs.js

const HealthcareBlogs = () => {
    const blogs = [
      {
        title: "The Importance of Regular Check-ups",
        description: "Regular check-ups help detect health issues early.",
        
      },
      {
        title: "Healthy Eating Habits",
        description: "Learn about balanced diets and nutrition.",
        
      },
      {
        title: "Mental Health Awareness",
        description: "Understanding mental health is crucial for well-being.",
        
      },
      {
        title: "Benefits of Physical Exercise",
        description: "Stay active to improve your overall health.",
    
      },
    ];
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-teal-600 border-b-2 border-teal-200 pb-2">
          Healthcare Blogs
        </h2>
        <div>
          {blogs.map((blog, index) => (
            <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
              <h3 className="text-xl font-medium text-gray-800 hover:text-teal-500 transition duration-200">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-2">{blog.description}</p>
              <a
                href={blog.link}
                className="text-teal-500 hover:underline font-semibold transition duration-200"
              >
                {/* Read More */}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HealthcareBlogs;
  