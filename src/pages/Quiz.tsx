import React, { useState } from 'react';
import { Brain, Plus, Edit, Trash2, Play, Trophy, Clock, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: "Pharmaceutical Chemistry Basics",
      description: "Test your knowledge of fundamental pharmaceutical chemistry concepts",
      questions: [
        {
          question: "What is the primary functional group in aspirin?",
          options: ["Carboxylic acid", "Ester", "Phenol", "Amine"],
          correct: 1,
          explanation: "Aspirin contains an ester functional group formed by acetylation of salicylic acid."
        },
        {
          question: "Which concept explains the different biological activities of drug enantiomers?",
          options: ["Stereochemistry", "Pharmacokinetics", "Metabolism", "Excretion"],
          correct: 0,
          explanation: "Stereochemistry is crucial as different enantiomers can have vastly different biological effects."
        }
      ],
      category: "Chemistry",
      difficulty: "Beginner",
      timeLimit: 10
    },
    {
      id: 2,
      title: "Clinical Pharmacology",
      description: "Advanced concepts in clinical pharmacology and therapeutics",
      questions: [
        {
          question: "What is the mechanism of action of ACE inhibitors?",
          options: ["Block calcium channels", "Inhibit angiotensin-converting enzyme", "Block beta receptors", "Inhibit sodium channels"],
          correct: 1,
          explanation: "ACE inhibitors block the conversion of angiotensin I to angiotensin II, reducing blood pressure."
        },
        {
          question: "Which neurotransmitter is primarily affected by SSRIs?",
          options: ["Dopamine", "GABA", "Serotonin", "Acetylcholine"],
          correct: 2,
          explanation: "SSRIs (Selective Serotonin Reuptake Inhibitors) increase serotonin levels in the brain."
        }
      ],
      category: "Pharmacology",
      difficulty: "Advanced",
      timeLimit: 15
    }
  ]);

  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState(null);

  // Quiz Creation/Editing Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    difficulty: 'Beginner',
    timeLimit: 10,
    questions: [
      {
        question: '',
        options: ['', '', '', ''],
        correct: 0,
        explanation: ''
      }
    ]
  });

  const startQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < activeQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === activeQuiz.questions[index].correct) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const handleCreateQuiz = () => {
    setShowCreateForm(true);
    setEditingQuiz(null);
    setFormData({
      title: '',
      description: '',
      category: '',
      difficulty: 'Beginner',
      timeLimit: 10,
      questions: [
        {
          question: '',
          options: ['', '', '', ''],
          correct: 0,
          explanation: ''
        }
      ]
    });
  };

  const handleEditQuiz = (quiz) => {
    setEditingQuiz(quiz);
    setShowCreateForm(true);
    setFormData({
      title: quiz.title,
      description: quiz.description,
      category: quiz.category,
      difficulty: quiz.difficulty,
      timeLimit: quiz.timeLimit,
      questions: [...quiz.questions]
    });
  };

  const handleDeleteQuiz = (quizId) => {
    if (window.confirm('Are you sure you want to delete this quiz?')) {
      setQuizzes(quizzes.filter(quiz => quiz.id !== quizId));
    }
  };

  const handleSaveQuiz = () => {
    if (editingQuiz) {
      setQuizzes(quizzes.map(quiz => 
        quiz.id === editingQuiz.id 
          ? { ...editingQuiz, ...formData }
          : quiz
      ));
    } else {
      const newQuiz = {
        id: Date.now(),
        ...formData
      };
      setQuizzes([...quizzes, newQuiz]);
    }
    setShowCreateForm(false);
    setEditingQuiz(null);
  };

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          question: '',
          options: ['', '', '', ''],
          correct: 0,
          explanation: ''
        }
      ]
    });
  };

  const updateQuestion = (index, field, value) => {
    const updatedQuestions = [...formData.questions];
    if (field === 'options') {
      updatedQuestions[index].options = value;
    } else {
      updatedQuestions[index][field] = value;
    }
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const removeQuestion = (index) => {
    if (formData.questions.length > 1) {
      const updatedQuestions = formData.questions.filter((_, i) => i !== index);
      setFormData({ ...formData, questions: updatedQuestions });
    }
  };

  // Quiz Taking Interface
  if (activeQuiz && !showResults) {
    return (
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{activeQuiz.title}</h2>
                <p className="text-gray-600">Question {currentQuestion + 1} of {activeQuiz.questions.length}</p>
              </div>
              <button onClick={resetQuiz} className="text-gray-500 hover:text-gray-700">
                <RotateCcw className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-6">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / activeQuiz.questions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {activeQuiz.questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {activeQuiz.questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-colors duration-200 ${
                      selectedAnswer === index
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedAnswer === index ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                      }`}>
                        {selectedAnswer === index && (
                          <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={resetQuiz}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Exit Quiz
              </button>
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedAnswer !== null
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === activeQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Results Interface
  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / activeQuiz.questions.length) * 100);

    return (
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <Trophy className={`h-16 w-16 mx-auto mb-4 ${
                percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`} />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
              <p className="text-xl text-gray-600">You scored {score} out of {activeQuiz.questions.length}</p>
              <p className={`text-2xl font-bold ${
                percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {percentage}%
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {activeQuiz.questions.map((question, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {answers[index] === question.correct ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-2">{question.question}</p>
                      <p className="text-sm text-gray-600 mb-1">
                        Your answer: {question.options[answers[index]]}
                      </p>
                      {answers[index] !== question.correct && (
                        <p className="text-sm text-green-600 mb-1">
                          Correct answer: {question.options[question.correct]}
                        </p>
                      )}
                      <p className="text-sm text-gray-500">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => startQuiz(activeQuiz)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Retake Quiz
              </button>
              <button
                onClick={resetQuiz}
                className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Back to Quizzes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Creation/Editing Form
  if (showCreateForm) {
    return (
      <div className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingQuiz ? 'Edit Quiz' : 'Create New Quiz'}
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quiz Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter quiz title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Pharmacology, Chemistry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter quiz description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Limit (minutes)</label>
                  <input
                    type="number"
                    value={formData.timeLimit}
                    onChange={(e) => setFormData({ ...formData, timeLimit: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Questions</h3>
                  <button
                    onClick={addQuestion}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Question</span>
                  </button>
                </div>

                {formData.questions.map((question, qIndex) => (
                  <div key={qIndex} className="bg-gray-50 p-6 rounded-lg mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">Question {qIndex + 1}</h4>
                      {formData.questions.length > 1 && (
                        <button
                          onClick={() => removeQuestion(qIndex)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                        <input
                          type="text"
                          value={question.question}
                          onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your question"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
                        {question.options.map((option, oIndex) => (
                          <div key={oIndex} className="flex items-center space-x-2 mb-2">
                            <input
                              type="radio"
                              name={`correct-${qIndex}`}
                              checked={question.correct === oIndex}
                              onChange={() => updateQuestion(qIndex, 'correct', oIndex)}
                              className="text-blue-600"
                            />
                            <input
                              type="text"
                              value={option}
                              onChange={(e) => {
                                const newOptions = [...question.options];
                                newOptions[oIndex] = e.target.value;
                                updateQuestion(qIndex, 'options', newOptions);
                              }}
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder={`Option ${oIndex + 1}`}
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Explanation</label>
                        <textarea
                          value={question.explanation}
                          onChange={(e) => updateQuestion(qIndex, 'explanation', e.target.value)}
                          rows={2}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Explain the correct answer"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleSaveQuiz}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {editingQuiz ? 'Update Quiz' : 'Create Quiz'}
                </button>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Quiz Dashboard
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Quiz Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your pharmaceutical knowledge with our comprehensive quiz collection. 
            Create custom quizzes and track your learning progress.
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Available Quizzes</h2>
          <button
            onClick={handleCreateQuiz}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Create Quiz</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditQuiz(quiz)}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteQuiz(quiz.id)}
                    className="text-gray-500 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Category:</span>
                  <span className="font-medium text-blue-600">{quiz.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Difficulty:</span>
                  <span className={`font-medium ${
                    quiz.difficulty === 'Beginner' ? 'text-green-600' :
                    quiz.difficulty === 'Intermediate' ? 'text-yellow-600' : 'text-red-600'
                  }`}>{quiz.difficulty}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Questions:</span>
                  <span className="font-medium">{quiz.questions.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Time Limit:</span>
                  <span className="font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {quiz.timeLimit} min
                  </span>
                </div>
              </div>

              <button
                onClick={() => startQuiz(quiz)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Start Quiz</span>
              </button>
            </div>
          ))}
        </div>

        {quizzes.length === 0 && (
          <div className="text-center py-12">
            <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Quizzes Available</h3>
            <p className="text-gray-600 mb-6">Create your first quiz to get started!</p>
            <button
              onClick={handleCreateQuiz}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Create Your First Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;