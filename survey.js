const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

const ask = (question, next = null) => {
  rl.question(question, (answer) => {
    answers.push(answer);
    if (next === null) {
      rl.close();

      console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
    } else {
      next();
    }
  });
};

const question1 = () => {
  ask("What's your name? Nicknames are also acceptable :) ", question2)
}
const question2 = () => {
  ask("What's an activity you like doing? ", question3)
}
const question3 = () => {
  ask("What do you listen to while doing that? ", question4)
}
const question4 = () => {
  ask("Which meal is your favourite (eg: dinner, brunch, etc.) ", question5)
}
const question5 = () => {
  ask("What's your favourite thing to eat for that meal? ", question6)
}
const question6 = () => {
  ask("Which sport is your absolute favourite? ", question7)
}
const question7 = () => {
  ask("What is your superpower? In a few words, tell us what you are amazing at! ", null)
}

question1();