const {Router} = require('express');

const {getBrawls, getBrawl, getMaps, getMap, getGameMode, getGameModes } = require('../controllers/brawls.controller');
const router = Router();


//brawlers
router.get('/brawls', getBrawls);
router.get('/brawls/:id', getBrawl);

//maps
router.get('/maps', getMaps);
router.get('/maps/:id', getMap);

//gamemodes
router.get('/gamemodes', getGameModes);
router.get('/gamemodes/:id', getGameMode);


module.exports = router;

