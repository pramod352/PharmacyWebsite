import React from 'react';
import { BookOpen, Microscope, Heart, Users } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate pharmacist dedicated to advancing pharmaceutical care through clinical excellence, 
            research innovation, and educational leadership in the healthcare community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-4xl font-bold">Dr</span>
                </div>
                <p className="text-gray-600">Professional Pharmacist</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Professional Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              With extensive experience in pharmaceutical practice, I have dedicated my career to 
              improving patient outcomes through evidence-based medication management and innovative 
              healthcare solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My expertise spans clinical pharmacy, research methodologies, and educational program 
              development, with a focus on advancing pharmaceutical care standards and training the 
              next generation of healthcare professionals.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Years of Experience</h4>
                <p className="text-2xl font-bold text-blue-600">10+</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900">Patients Served</h4>
                <p className="text-2xl font-bold text-green-600">5000+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-50 p-3 rounded-lg w-fit mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;