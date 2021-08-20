const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];


  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortunes = ["A good time to finish up old tasks.", "A soft voice may be awfully persuasive.", "All your hard work will soon pay off.",
  "An important person will offer you support.", "Curiosity kills boredom. Nothing can kill curiosity."];

  let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
  let randonFortune = fortunes[randomFortuneIndex]

  res.status(200).send(randonFortune)
});

app.get('/api/feels', (req, res) => {
  let sadIndex = ['You will get through this!', 'Reach out, someone loves you!', 'You are the best!',
  'Take a deep breath!', 'Take some time for yourself', 'Better days will come!',
  'Keep going!', "Spread your happiness!", "Use your happiness to bring someone else up!"
]


  let randomSad = Math.floor(Math.random() * sadIndex.length);
  let randomSadAnswer = sadIndex[randomSad]

  

  res.status(200).send(randomSadAnswer)
  

})





app.listen(4000, () => console.log("Server running on 4000"));
