const express = require('express');
const router = express.Router();

const HeroesController = require('../controllers/heroes');

router.post("/create", HeroesController.hero_create);
router.get("/list", HeroesController.heroes_list);
router.get("/:id", HeroesController.hero_get);
router.patch("/edit/:id", HeroesController.hero_edit);
router.delete("/delete/:id", HeroesController.hero_delete);

module.exports = router;