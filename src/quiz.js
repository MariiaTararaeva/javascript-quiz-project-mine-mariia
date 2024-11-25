// YOUR CODE HERE:
//
class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
  }
  correctAnswers = 0;
  currentQuestionIndex = 0;

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = 0; i < this.questions.length; i += 1) {
      let index = Math.floor(Math.random() * this.questions.length);
      this.questions[i] = this.questions[index];
    }
  }

  checkAnswer(answer) {
    if (answer.length > 0) {
      this.correctAnswers++;
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex == this.questions.length) {
      return true;
    }
  }
}
