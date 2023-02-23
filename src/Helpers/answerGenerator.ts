import words from './words.json'
export default function answerGenerator(){
    return words[Math.round(Math.random()*words.length-1)]
}