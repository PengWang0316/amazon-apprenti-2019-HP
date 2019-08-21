// Import the JSON text from the data file
const quizData = require('./QuizData');

// Parse the JSON text to an object
const quiz = JSON.parse(quizData);

// Get the question from q1 under the sport topic
console.log(quiz.sport.q1.question);
// Get the options from q1 under the sport topic
console.log('You can choose from: ', quiz.sport.q1.options.join(', '));
// Get the answer from q1 under the sport topic
console.log('The correct answer is: ', quiz.sport.q1.answer);

console.log('maths q2 question before changing: ', quiz.maths.q2.question);
console.log('maths q2 options before changing: ', quiz.maths.q2.options.join(', '));
console.log('maths q2 answer before changing: ', quiz.maths.q2.answer);
quiz.maths.q2.question = '14 - 10 = ?'; // Change the question
quiz.maths.q2.options.push('5'); // Add one more option in the options array
delete quiz.maths.q2.answer; // Delete the answer
console.log('maths q2 question after changing: ', quiz.maths.q2.question);
console.log('maths q2 options after changing: ', quiz.maths.q2.options.join(', '));
console.log('maths q2 answer after changing: ', quiz.maths.q2.answer);


