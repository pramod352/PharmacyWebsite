import React from 'react';
import { BookOpen, Clock, Users, ChevronRight, GraduationCap, Award } from 'lucide-react';

const Courses = () => {
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
        "Stereochemistry in Drug Action",
        "Analytical Methods in Pharmaceutical Chemistry",
        "Quality Control and Assurance"
      ],
      duration: "120 hours",
      credits: 8,
      prerequisites: "Basic Chemistry, Organic Chemistry",
      objectives: [
        "Understand the relationship between chemical structure and biological activity",
        "Learn drug design and development principles",
        "Master analytical techniques for pharmaceutical analysis"
      ]
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
        "Chemotherapy and Antimicrobials",
        "Endocrine Pharmacology",
        "Toxicology and Adverse Drug Reactions"
      ],
      duration: "150 hours",
      credits: 10,
      prerequisites: "Physiology, Biochemistry, Pharmaceutical Chemistry",
      objectives: [
        "Understand mechanisms of drug action",
        "Learn therapeutic applications of drugs",
        "Master principles of rational drug therapy"
      ]
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
        "Industrial Pharmacy",
        "Novel Drug Delivery Systems",
        "Regulatory Affairs"
      ],
      duration: "100 hours",
      credits: 6,
      prerequisites: "Mathematics, Physics, Chemistry",
      objectives: [
        "Master principles of drug formulation",
        "Understand drug delivery mechanisms",
        "Learn industrial pharmacy practices"
      ]
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
        "Patient Counseling",
        "Therapeutic Drug Monitoring",
        "Clinical Research Methods"
      ],
      duration: "80 hours",
      credits: 5,
      prerequisites: "Pharmacology, Pathophysiology, Therapeutics",
      objectives: [
        "Apply pharmaceutical care principles",
        "Develop clinical decision-making skills",
        "Master patient counseling techniques"
      ]
    },
    {
      id: 5,
      title: "Pharmacy Practice",
      semester: "3rd & 4th Year",
      description: "Professional pharmacy practice including community and hospital pharmacy",
      modules: [
        "Community Pharmacy Practice",
        "Hospital Pharmacy Practice",
        "Pharmacy Management",
        "Professional Ethics",
        "Pharmacy Law and Regulations",
        "Health Economics",
        "Public Health Pharmacy"
      ],
      duration: "90 hours",
      credits: 6,
      prerequisites: "Clinical Pharmacy, Pharmacology",
      objectives: [
        "Understand pharmacy practice settings",
        "Learn professional responsibilities",
        "Master pharmacy management principles"
      ]
    },
    {
      id: 6,
      title: "Pharmacognosy",
      semester: "2nd Year",
      description: "Study of natural products and their pharmaceutical applications",
      modules: [
        "Introduction to Pharmacognosy",
        "Plant Secondary Metabolites",
        "Medicinal Plant Identification",
        "Extraction and Isolation Techniques",
        "Quality Control of Natural Products",
        "Herbal Drug Development",
        "Traditional Medicine Systems"
      ],
      duration: "75 hours",
      credits: 5,
      prerequisites: "Botany, Chemistry",
      objectives: [
        "Understand natural product chemistry",
        "Learn medicinal plant identification",
        "Master extraction and analysis techniques"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Purbanchal University Curriculum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pharmaceutical education curriculum designed to prepare future pharmacists 
            for professional practice and healthcare leadership following international standards.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
            <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4-Year Program</h3>
            <p className="text-gray-600">Comprehensive Bachelor of Pharmacy degree</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
            <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">40+ Courses</h3>
            <p className="text-gray-600">Diverse curriculum covering all pharmacy aspects</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
            <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Ready</h3>
            <p className="text-gray-600">Practical training and internship programs</p>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
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

              <div className="space-y-3 mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Prerequisites:</h4>
                  <p className="text-sm text-gray-600">{course.prerequisites}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Learning Objectives:</h4>
                  <ul className="space-y-1">
                    {course.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Course Modules:</h4>
                  <ul className="space-y-1">
                    {course.modules.slice(0, 4).map((module, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                        <span>{module}</span>
                      </li>
                    ))}
                    {course.modules.length > 4 && (
                      <li className="text-sm text-gray-500 pl-6">
                        +{course.modules.length - 4} more modules
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Interactive Learning</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                <h4 className="font-semibold text-gray-900">Practical Training</h4>
              </div>
              <p className="text-sm text-gray-600">Hands-on laboratory experience</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                <h4 className="font-semibold text-gray-900">Industry Exposure</h4>
              </div>
              <p className="text-sm text-gray-600">Internships and field visits</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                <h4 className="font-semibold text-gray-900">Research Projects</h4>
              </div>
              <p className="text-sm text-gray-600">Final year research thesis</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                <h4 className="font-semibold text-gray-900">Professional Development</h4>
              </div>
              <p className="text-sm text-gray-600">Seminars and workshops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;