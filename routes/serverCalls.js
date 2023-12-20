const { sequelize, Scores } = require('../models')
const { ValidationError } = require('sequelize')
const express = require("express");
const router = express.Router();


router.post("/register", async (req, res) =>{
    try {
      const [participant, created] = await Scores.findOrCreate({ where: { email: req.body.email }});
      let msg = created ?
      "You have been signed in as " + participant.email + "\nPlease scroll down to start with the trivia" :
      "You were already signed in as " + participant.email + "\nPlease scroll down to start with the trivia";

      res.send({ 
        message: msg
      });
    } catch (e) { 
      res.status(500).send(e)
    }
})

router.post("/logos-scores", async (req, res) =>{
    try {
      await Scores.update({ logos_score: req.body.score }, {
        where: { email: req.body.email }
      });
      
      res.send({ msg: "Your final score: " + req.body.score });
    } catch (e) { 
        res.status(500).send(e); 
    }
})
  
  router.post("/gibberish-scores", async (req, res) =>{
    try {
      await Scores.update({ gibberish_score: req.body.score }, {
        where: { email: req.body.email }
      });
  
      res.send({ msg: "Your final score: " + req.body.score });
    } catch (e) { 
      res.status(500).send(e); 
    }
  })

  module.exports = router