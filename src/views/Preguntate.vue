<script setup>
import { ref, computed } from 'vue'

const questions = ref([
{
  question: "What is the name of the hill?",
  answer: 0,
  options: [
  "A hill",
  "A dog",
  "A cat",
  "A person"
  ],
  selected: null
},
{
  question: "What is the name of that?",
  answer: 1,
  options: [
  "An apple",
  "A dog",
  "A cat",
  "A person"
  ],
  selected: null
},
{
  question: "What is the name of that?",
  answer: 2,
  options: [
  "A hill",
  "A vase",
  "A cat",
  "A person"
  ],
  selected: null
},

])

const quizCompleted = ref(false)
const currentQuestion = ref(0)


// Tracking points
const score = computed(() => {
  let temp = 0
  questions.value.map(q => {
    if (q.selected != null && q.answer == q.selected) {
      console.log('correct');
      temp++
    }
  })
  return temp
})

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const setAnswer = (e) => {
  questions.value[currentQuestion.value].selected = e.target.value
  e.target.value = null
}

const nextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
  } else {
    quizCompleted.value = true
  }
}


</script>

<template>
  <main>
    <h1>The Quiz</h1>
    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score {{ score }} / {{ questions.length }}</span>
      </div>
      
      <div class="options">
        <label 
        v-for="(option, index) in getCurrentQuestion.options" 
        :key="index" 
        :class="`option ${
          getCurrentQuestion.selected == index
          ? index == getCurrentQuestion.answer
          ? 'correct'
          : 'wrong'
          : ''
        } ${
          getCurrentQuestion.selected != null &&
          index != getCurrentQuestion.selected
          ? 'disabled'
          : ''
        }`">
        <input 
        type="radio" 
        :name="getCurrentQuestion.index"
        :value="index"
        v-model="getCurrentQuestion.selected"
        :disabled="getCurrentQuestion.selected !== null"
        @change="setAnswer">
        <span>{{ option }}</span>
      </label>
    </div>
    
    <button
    @click="nextQuestion"
    :disabled="!getCurrentQuestion.selected">
    {{ 
      
      getCurrentQuestion.index == questions.length - 1
      ? 'Finish'
      : getCurrentQuestion.selected == null
      ? 'Select an option'
      : 'Next Question'
    }}
  </button>
</section>
<section v-else>
  <h2>You have finished the quiz!</h2>
  <p>Your score is {{ score }} / {{ questions.length }}</p>
</section>
</main>

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: blue;
  color:#fff;
}

</style>
