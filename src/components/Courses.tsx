import React, { useState } from 'react';
import { BookOpen, Play, Clock, Users, ChevronRight } from 'lucide-react';
import Quiz from './Quiz';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Pharmaceutical Chemistry",
      semester: "1st & 2nd Year",
      description: "Comprehensive study of drug molecules, their structure, properties, and chemical behavior",
      modules: [
        "General Principles of Pharmaceutical Chemistry",
        "Organic Chemistry for Pharmacy",
        "Medicinal Chemistry",
        "Drug Design and Development",
        "Stereochemistry in Drug Action"
      ],
      duration: "120 hours",
      credits: 8
    },
    {
      id: 2,
      title: "Pharmacology & Therapeutics",
      semester: "2nd & 3rd Year",
      description: "Study of drug action, mechanisms, and therapeutic applications in clinical practice",
      modules: [
        "General Pharmacology",
        "Autonomic Nervous System Pharmacology",
        "Cardiovascular Pharmacology",
        "Central Nervous System Pharmacology",
        "Chemotherapy and Antimicrobials"
      ],
      duration: "150 hours",
      credits: 10
    },
    {
      id: 3,
      title: "Pharmaceutics",
      semester: "1st & 2nd Year",
      description: "Formulation science and drug delivery systems for optimal therapeutic outcomes",
      modules: [
        "Physical Pharmacy",
        "Dosage Form Design",
        "Biopharmaceutics",
        "Drug Delivery Systems",
        "Industrial Pharmacy"
      ],
      duration: "100 hours",
      credits: 6
    },
    {
      id: 4,
      title: "Clinical Pharmacy",
      semester: "4th Year",
      description: "Application of pharmaceutical care principles in clinical settings",
      modules: [
        "Pharmaceutical Care",
        "Clinical Pharmacokinetics",
        "Drug Information Services",
        "Adverse Drug Reactions",
        "Patient Counseling"
      ],
      duration: "80 hours",
      credits: 5
    }
  ];

  const handleStartQuiz = (course) => {
    setSelectedCourse(course);
    setShowQuiz(true);
  };

  const handleQuizClose = () => {
    setShowQuiz(false);
    setSelectedCourse(null);
  };

  if (showQuiz) {
    return <Quiz course={selectedCourse} onClose={handleQuizClose} />;
  }

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Purbanchal University Curriculum</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pharmaceutical education curriculum designed to prepare future pharmacists 
            for professional practice and healthcare leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{course.semester}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Credits</p>
                  <p className="text-lg font-bold text-gray-900">{course.credits}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="space-y-2 mb-4">
                <h4 className="font-medium text-gray-900">Course Modules:</h4>
                <ul className="space-y-1">
                  {course.modules.slice(0, 3).map((module, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <ChevronRight className="h-4 w-4 text-blue-600" />
                      <span>{module}</span>
                    </li>
                  ))}
                  {course.modules.length > 3 && (
                    <li className="text-sm text-gray-500 pl-6">
                      +{course.modules.length - 3} more modules
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Active Learning</span>
                  </div>
                </div>
                <button
                  onClick={() => handleStartQuiz(course)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Play className="h-4 w-4" />
                  <span>Take Quiz</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Learning Experience</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Test your knowledge with our interactive quizzes designed to reinforce learning 
            and assess understanding of key pharmaceutical concepts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Multiple Choice Questions</h4>
              <p className="text-sm text-gray-600">Comprehensive assessment format</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Instant Feedback</h4>
              <p className="text-sm text-gray-600">Immediate results and explanations</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Progress Tracking</h4>
              <p className="text-sm text-gray-600">Monitor your learning journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;