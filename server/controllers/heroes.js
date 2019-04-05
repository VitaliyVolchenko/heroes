const mongoose = require('mongoose');

const Heroes = require('../models/heroes');

exports.hero_create = (req, res, next) => {
  const name = req.body.name;

  console.log('NAME', name);
  hero = new Heroes({    
    name: name      
  });
  hero
    .save()    
    .then(doc => { 
      console.log('DOCCC', doc);
      res.status(200).json({
        hero: doc,
        message: 'Successfuly create hero'
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
        message: 'Error create'
      })
    })
}

exports.heroes_list = (req, res, next) => {
  Heroes.find({})    
  .exec()
  .then(doc => {
    if (doc) {
      res.status(200).json({
        heroes: doc
      });      
    } else {
      res.status(500).json({
        error: 'Not exist heroes'
      });
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
}

exports.hero_get = (req, res, next) => {
  const id = req.params.id;

  Heroes.findOne({_id: id})
    .exec()
    .then(doc => {
      if(!doc){
        res.status(404).json({
          error: 'This hero not exist'
        })
      }
      res.status(200).json({
        hero: doc
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    })
}

exports.hero_edit = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;

  Heroes.findOneAndUpdate({_id: id},
    {
      name: name
    },
    {
      new: true
  })
  .then(updatedHero => {
    if (!updatedHero){
      console.log(updatedHero);
      res.status(500).json({
        message: 'This hero not exist'
      });
    }
    res.status(200).json({
      hero: updatedHero,
      message: 'Successfuly updated hero'
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ error: err });
  });
}

exports.hero_delete = (req, res, next) => {
  const id = req.params.id;

  Heroes.findOneAndDelete({_id: id})
    .exec()
    .then(deletedHero => {
      if(!deletedHero){
        res.status(500).json({
          error: 'This hero not exist'          
        })
      }
      res.status(200).json({
        message: "Successfuly hero deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    })
}