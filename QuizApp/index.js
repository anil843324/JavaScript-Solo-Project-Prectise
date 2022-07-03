
const quizData = [

    {
        question: "How old is Florin?",
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'

    },
    {
        question: "What is the most used programming language in 2019",
        a: 'Java',
        b: 'c',
        c: 'Python',
        d: 'javaScript',
        correct: 'd'
    },
    {
        question: "Who is he president of US?",
        a: 'Florian Pop',
        b: 'Donland Trump',
        c: 'Invan Saldano',
        d: 'Joe biden',
        correct: 'd'

    },
    {
        question: "What does HTML stand for ?",
        a: 'Hypertext Markup Language',
        b: 'Coascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicoper Terminals Motobats Lamborigins',
        correct: 'a'

    },
    {
        question: "What is year was JavaScript lanuched ?",
        a: '2020',
        b: '2019',
        c: '2000',
        d: 'none of the above',
        correct: 'd'
    },
    {
        question: "What is year was JavaScript lanuched ?",
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    },




]

const questionEl=document.getElementById('question')

 const  a =document.getElementById('a_text')
 const  b =document.getElementById('b_text')
 const  c =document.getElementById('c_text')
 const  d =document.getElementById('d_text')

let currentQuiz=0;




loadQuiz();

function  loadQuiz(){

      const currentQuizData=quizData[currentQuiz]

       questionEl.innerText=currentQuizData.question;

       a.innerText=currentQuizData.a
       b.innerText=currentQuizData.b
       c.innerText=currentQuizData.c
       d.innerText=currentQuizData.d
        
      
    
}

