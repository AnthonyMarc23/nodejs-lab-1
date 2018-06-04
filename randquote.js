"use strict";

const randomQuotes = [
  "Perhaps.",
  "I don't know, maybe?",
  "Definitely not.",
  "The ocean is bl-- er, yes. Absolutely yes.",
  "I have no opinion on the subject.",
  "Maybe you should ask your friends.",
  "I'm guessing that somehow, you are hoping for a miracle from me.",
  "What?",
  "IMPOSSIBLE.",
  "Let me ask you a question... You think I have all the answers?",
  "The answer is 42.",
  "LOL, NO.",
  "Maybe you should try again. Next year.",
  "Listen, I'm just a randomly generated string posting to a page. I don't know what you want from me.",
  "WOOP!",
  "I don't think so, Tim.",
  "I really want to say yes, but at the rate you're going, definitely no.",
  "Shake harder.",
  "The answer is unclear at the moment... LOL, just kidding, try again.",
  "Sometimes my little random number generator brain wanders. So for the sake of conversation, yes. Now what was the question again?",
  "If you are asking me life questions, you are probably doing it wrong.",
  "Ask Adam.",
  "Ask Cana.",
  "Ask Yasmine.",
  "Seriously, I DON'T KNOW. STOP ASKING ME.",
  "Bring me a cookie, and I'll give you a proper answer.",
  "let answer = wrong;",
  "When in Rome...",
  "Hmmmmmm. Let me think abo- NOPE.",
  "HAHAHAHAHAHAHAHHAHAHAHAHAhaskdj;aklsjfa;khah... you wish!",
  "Where is the soap? You will find the answer there.",
  "If you write a program about it, you will definitely come across the truth of that question you just asked.",
  "I'm not even a smart robot. I'm just a bunch of random responses. Seriously, there is no intelligent response you are going to get here. Stop. Stop yourself. Stop everything. Re-evaluate why you are asking me a question.",
  "I am your maker, and the answer to your question, is yes.",
  "I had a dream that I was flying with the eagles, then dove into the ocean and swam with the dolphins. That means good things are coming, so yes.",
  "Do you ask questions about that to your mother?",
  "Oooooh, I don't know.",
  "Okay, maybe ask me one more time, and I'll give you a legitimate answer."
]

const getRandomQuotes = () => {
  return randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
};

module.exports = getRandomQuotes;