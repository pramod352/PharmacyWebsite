import React from 'react';
import { BookOpen, Microscope, Heart, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Clinical Pharmacy",
      description: "Comprehensive medication therapy management and patient care optimization"
    },
    {
      icon: <Microscope className="h-8 w-8 text-green-600" />,
      title: "Research & Development",
      description: "Advanced pharmaceutical research and drug development methodologies"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Patient Care",
      description: "Compassionate patient counseling and healthcare service delivery"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Education & Training",
      description: "Pharmaceutical education and professional development programs"
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: "Excellence",
      description: "Committed to the highest standards in pharmaceutical practice and education"
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: "Compassion",
      description: "Patient-centered approach with empathy and understanding"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
      title: "Innovation",
      description: "Embracing new technologies and methodologies in healthcare"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About PharmaCare</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to advancing pharmaceutical care through clinical excellence, 
            research innovation, and educational leadership in the healthcare community.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-4xl font-bold">Rx</span>
                </div>
                <p className="text-gray-600 font-medium">Professional Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide comprehensive pharmaceutical education and resources that empower 
              healthcare professionals to deliver exceptional patient care while advancing 
              the field of pharmacy through innovation and evidence-based practice.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in fostering a learning environment that combines theoretical knowledge 
              with practical application, preparing the next generation of pharmacists to meet 
              the evolving challenges of modern healthcare.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Years of Experience</h4>
                <p className="text-2xl font-bold text-blue-600">15+</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">Students Trained</h4>
                <p className="text-2xl font-bold text-green-600">2000+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-gray-50 p-3 rounded-lg w-fit mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            To be the leading platform for pharmaceutical education and professional development, 
            bridging the gap between academic learning and real-world practice while fostering 
            innovation in healthcare delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;