import React from 'react';
import { Trophy, Star, Medal, Award, Users, Target, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      title: "Excellence in Pharmaceutical Care Award",
      year: "2023",
      description: "Recognized for outstanding patient care and clinical pharmacy services",
      category: "Professional Recognition"
    },
    {
      icon: <Star className="h-8 w-8 text-blue-600" />,
      title: "Best Research Paper - Pharmaceutical Conference",
      year: "2023",
      description: "Published research on novel drug delivery systems and patient outcomes",
      category: "Research Excellence"
    },
    {
      icon: <Medal className="h-8 w-8 text-green-600" />,
      title: "Community Service Recognition",
      year: "2022",
      description: "Honored for providing healthcare services to underserved communities",
      category: "Community Impact"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Professional Development Leadership",
      year: "2022",
      description: "Led training programs for pharmaceutical professionals and students",
      category: "Education Leadership"
    },
    {
      icon: <Star className="h-8 w-8 text-indigo-600" />,
      title: "Innovation in Pharmaceutical Education",
      year: "2021",
      description: "Developed interactive learning modules for pharmacy curriculum",
      category: "Educational Innovation"
    },
    {
      icon: <Trophy className="h-8 w-8 text-red-600" />,
      title: "Outstanding Mentor Award",
      year: "2021",
      description: "Recognized for exceptional mentorship of pharmacy students",
      category: "Mentorship"
    }
  ];

  const programs = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Medication Therapy Management Program",
      description: "Comprehensive program for optimizing patient medication regimens",
      participants: "500+ patients",
      outcomes: "95% improvement in medication adherence",
      impact: "Reduced hospital readmissions by 30%"
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Pharmaceutical Education Initiative",
      description: "Training program for pharmacy students and professionals",
      participants: "200+ students",
      outcomes: "100% pass rate in certification exams",
      impact: "Enhanced clinical competency scores"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Community Health Outreach",
      description: "Free health screenings and medication counseling services",
      participants: "1000+ community members",
      outcomes: "Early detection of 50+ health conditions",
      impact: "Improved community health awareness"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", color: "text-blue-600" },
    { number: "25+", label: "Awards Received", color: "text-green-600" },
    { number: "2000+", label: "Students Trained", color: "text-purple-600" },
    { number: "50+", label: "Research Papers", color: "text-orange-600" }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of professional accomplishments, awards, and impactful programs 
            that demonstrate our commitment to pharmaceutical excellence and community service.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Programs */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impact Programs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">Participants:</span>
                    <span className="text-sm font-semibold text-blue-600">{program.participants}</span>
                  </div>
                  <div className="border-t pt-2">
                    <span className="text-sm font-medium text-gray-500">Key Outcome:</span>
                    <p className="text-sm text-gray-700 mt-1">{program.outcomes}</p>
                  </div>
                  <div className="border-t pt-2">
                    <span className="text-sm font-medium text-gray-500">Impact:</span>
                    <p className="text-sm text-green-600 mt-1 font-medium">{program.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Timeline */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recognition Timeline</h2>
          <div className="space-y-6">
            {achievements.slice(0, 4).map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                    <span className="text-sm text-blue-600 font-medium">{achievement.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;