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

const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A smooth long journey! Great expectations.", "A truly rich life contains love and art in abundance.", "Any day above ground is a good day.", "Don’t confuse recklessness with confidence.", ]

app.post("/api/fortune", (req, res) => {
  const newFortune = req.body
  fortunes.push(newFortune)
  res.status(200).send('You added a fortune!')
 })

 app.put("/api/fortune/:index", (req, res) => {
   const { index } = req.params
   const changedFortune = req.body 
   fortunes[index] = changedFortune
   res.status(200).send('Fortunes Updated')
 })

 app.delete("/api/fortune/:index", (req, res) => {
   const { index } = req.params
   fortunes.splice(index,1)
   res.status(200).send('Fortune deleted.')
 })

app.get("/api/fortune", (req, res) => {

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});





app.listen(4000, () => console.log("Server running on 4000"));
