import React, { useState } from 'react';
import { X, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

const Quiz = ({ course, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const quizData = {
    1: { // Pharmaceutical Chemistry
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
        },
        {
          question: "What is the main principle behind prodrug design?",
          options: ["Increase toxicity", "Improve bioavailability", "Reduce cost", "Change color"],
          correct: 1,
          explanation: "Prodrugs are designed to improve drug properties like bioavailability, targeting, or reducing side effects."
        },
        {
          question: "Which phase of drug metabolism typically involves conjugation reactions?",
          options: ["Phase 0", "Phase I", "Phase II", "Phase III"],
          correct: 2,
          explanation: "Phase II metabolism involves conjugation reactions that make drugs more water-soluble for excretion."
        },
        {
          question: "What is the significance of the partition coefficient in drug design?",
          options: ["Color determination", "Lipophilicity measurement", "Taste enhancement", "Stability testing"],
          correct: 1,
          explanation: "The partition coefficient measures lipophilicity, which affects drug absorption and distribution."
        }
      ]
    },
    2: { // Pharmacology & Therapeutics
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
        },
        {
          question: "What is the first-line treatment for Type 2 diabetes?",
          options: ["Insulin", "Metformin", "Sulfonylureas", "Thiazolidinediones"],
          correct: 1,
          explanation: "Metformin is the first-line treatment for Type 2 diabetes due to its efficacy and safety profile."
        },
        {
          question: "Which class of drugs is used to treat bacterial infections?",
          options: ["Antivirals", "Antifungals", "Antibiotics", "Antiparasitics"],
          correct: 2,
          explanation: "Antibiotics are specifically designed to treat bacterial infections."
        },
        {
          question: "What is the therapeutic index?",
          options: ["Efficacy measure", "Safety margin", "Absorption rate", "Elimination half-life"],
          correct: 1,
          explanation: "Therapeutic index is the ratio between toxic and therapeutic doses, indicating safety margin."
        }
      ]
    },
    3: { // Pharmaceutics
      questions: [
        {
          question: "What is the main advantage of sustained-release formulations?",
          options: ["Faster onset", "Reduced dosing frequency", "Lower cost", "Better taste"],
          correct: 1,
          explanation: "Sustained-release formulations reduce dosing frequency and maintain therapeutic levels longer."
        },
        {
          question: "Which factor most affects tablet dissolution?",
          options: ["Color", "Shape", "Surface area", "Weight"],
          correct: 2,
          explanation: "Surface area significantly affects dissolution rate according to the Noyes-Whitney equation."
        },
        {
          question: "What is bioavailability?",
          options: ["Drug stability", "Fraction of drug reaching systemic circulation", "Drug solubility", "Manufacturing cost"],
          correct: 1,
          explanation: "Bioavailability is the fraction of administered drug that reaches the systemic circulation."
        },
        {
          question: "Which excipient is commonly used as a disintegrant?",
          options: ["Lactose", "Starch", "Magnesium stearate", "Talc"],
          correct: 1,
          explanation: "Starch is commonly used as a disintegrant to help tablets break apart in the GI tract."
        },
        {
          question: "What is the purpose of enteric coating?",
          options: ["Improve taste", "Protect from stomach acid", "Increase hardness", "Change color"],
          correct: 1,
          explanation: "Enteric coating protects drugs from stomach acid and prevents gastric irritation."
        }
      ]
    },
    4: { // Clinical Pharmacy
      questions: [
        {
          question: "What is pharmaceutical care?",
          options: ["Drug manufacturing", "Patient-centered practice", "Drug research", "Regulatory affairs"],
          correct: 1,
          explanation: "Pharmaceutical care is patient-centered practice focused on optimizing drug therapy outcomes."
        },
        {
          question: "Which parameter is most important in therapeutic drug monitoring?",
          options: ["Drug color", "Plasma concentration", "Tablet size", "Manufacturing date"],
          correct: 1,
          explanation: "Plasma concentration is crucial for therapeutic drug monitoring to ensure efficacy and safety."
        },
        {
          question: "What is a major cause of medication errors?",
          options: ["High drug cost", "Poor communication", "Drug color", "Packaging size"],
          correct: 1,
          explanation: "Poor communication between healthcare providers is a major cause of medication errors."
        },
        {
          question: "What is the primary goal of medication reconciliation?",
          options: ["Reduce costs", "Prevent medication errors", "Improve taste", "Increase sales"],
          correct: 1,
          explanation: "Medication reconciliation aims to prevent medication errors during care transitions."
        },
        {
          question: "Which factor is most important in patient counseling?",
          options: ["Speaking loudly", "Using medical jargon", "Clear communication", "Talking quickly"],
          correct: 2,
          explanation: "Clear, understandable communication is essential for effective patient counseling."
        }
      ]
    }
  };

  const currentQuiz = quizData[course.id];
  const questions = currentQuiz.questions;

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreColor = (score) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score) => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent! You have a strong understanding of the material.';
    if (percentage >= 60) return 'Good job! Consider reviewing some concepts for better mastery.';
    return 'Keep studying! Review the material and try again.';
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Quiz Results</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="text-center mb-8">
              <div className="bg-gray-50 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <Trophy className={`h-16 w-16 ${getScoreColor(score)}`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {score}/{questions.length}
              </h3>
              <p className={`text-xl font-semibold ${getScoreColor(score)}`}>
                {percentage}% Score
              </p>
              <p className="text-gray-600 mt-2">{getScoreMessage(score)}</p>
            </div>

            <div className="space-y-4 mb-6">
              {questions.map((question, index) => (
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
                onClick={handleRestartQuiz}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Retake Quiz</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{course.title} Quiz</h2>
              <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-6">
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
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
              onClick={onClose}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              Cancel
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
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;