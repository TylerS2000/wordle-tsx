export default function answerGenerator(){
    const answers = [
        "House"
    ]
    return answers[Math.round(Math.random()*answers.length-1)]
}