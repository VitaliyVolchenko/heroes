const express = require('express');
const router = express.Router();

const HeroesController = require('../controllers/heroes');

router.post("/", HeroesController.hero_create);
router.get("/", HeroesController.heroes_list);
router.get("/:id", HeroesController.hero_get);
router.patch("/:id", HeroesController.hero_edit);
router.delete("/:id", HeroesController.hero_delete);

module.exports = router;