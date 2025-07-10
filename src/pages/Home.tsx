import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, Users, BookOpen, Brain, Phone } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Education Excellence",
      description: "Advanced pharmaceutical education and training programs",
      link: "/courses"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Professional Recognition",
      description: "Multiple awards and certifications in pharmaceutical care",
      link: "/achievements"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Community Impact",
      description: "Serving healthcare community with dedication",
      link: "/about"
    },
    {
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      title: "Interactive Learning",
      description: "Test your pharmaceutical knowledge with our quizzes",
      link: "/quiz"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to
                <span className="text-blue-600 block">PharmaCare</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Your comprehensive resource for pharmaceutical education, professional development, 
                and interactive learning experiences in the field of pharmacy.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
                <Link
                  to="/quiz"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 border-2 border-blue-600 text-center"
                >
                  Take Quiz
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <BookOpen className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Comprehensive Curriculum</h3>
                      <p className="text-gray-600">Purbanchal University standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Brain className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Interactive Quizzes</h3>
                      <p className="text-gray-600">Test your knowledge</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Award className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Professional Excellence</h3>
                      <p className="text-gray-600">Industry recognition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover comprehensive pharmaceutical education resources, professional achievements, 
              and interactive learning tools designed for pharmacy students and professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-gray-50 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of pharmacy students and professionals who trust our platform 
            for their educational and professional development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Courses
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;