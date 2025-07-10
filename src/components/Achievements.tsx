import React from 'react';
import { Trophy, Star, Medal, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      title: "Excellence in Pharmaceutical Care Award",
      year: "2023",
      description: "Recognized for outstanding patient care and clinical pharmacy services"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Best Research Paper - Pharmaceutical Conference",
      year: "2023",
      description: "Published research on novel drug delivery systems and patient outcomes"
    },
    {
      icon: <Medal className="h-8 w-8 text-green-600" />,
      title: "Community Service Recognition",
      year: "2022",
      description: "Honored for providing healthcare services to underserved communities"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Professional Development Leadership",
      year: "2022",
      description: "Led training programs for pharmaceutical professionals and students"
    }
  ];

  const programs = [
    {
      title: "Medication Therapy Management Program",
      description: "Comprehensive program for optimizing patient medication regimens",
      participants: "500+ patients",
      outcomes: "95% improvement in medication adherence"
    },
    {
      title: "Pharmaceutical Education Initiative",
      description: "Training program for pharmacy students and professionals",
      participants: "200+ students",
      outcomes: "100% pass rate in certification exams"
    },
    {
      title: "Community Health Outreach",
      description: "Free health screenings and medication counseling services",
      participants: "1000+ community members",
      outcomes: "Early detection of 50+ health conditions"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and impactful programs that showcase my commitment to pharmaceutical excellence 
            and community service.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{achievement.title}</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impact Programs</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h4>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Participants:</span>
                    <span className="text-sm font-semibold text-blue-600">{program.participants}</span>
                  </div>
                  <div className="border-t pt-2">
                    <span className="text-sm font-medium text-gray-500">Key Outcome:</span>
                    <p className="text-sm text-gray-700 mt-1">{program.outcomes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;