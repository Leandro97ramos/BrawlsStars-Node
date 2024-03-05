
const apiService = require('../services/apiServices.service');
const { response } = require('express');

const getBrawls = async (req, res= response) => {
    try {
        const brawls = await apiService.getBrawlers();
        res.json(brawls);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error en la petición'
        });
    }
}

const getBrawl = async (req, res=response) => {
    try{
        const {id} = req.params;
        const brawl = await apiService.getBrawler(id);
        res.json(brawl);

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Error en la petición'
        });
    }

}

const getMaps = async (req, res=response) => {
    try{
        const maps = await apiService.getMaps();
        res.json(maps);

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Error en la petición'
        });
    }
}

const getMap = async (req, res=response) => {
    try{
        const {id} = req.params;
        const map = await apiService.getMap(id);
        res.json(map);

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Error en la petición'
        });
    }
}


const getGameModes = async (req, res=response) => {
    try{
        const gameModes = await apiService.getGameModes();
        res.json(gameModes);

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Error en la petición'
        });
    }
}

const getGameMode = async (req, res=response) => {
    try{
        const {id} = req.params;
        const gameMode = await apiService.getGameMode(id);
        res.json(gameMode);

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'Error en la petición'
        });
    }
}



module.exports = {
    getBrawls,
    getBrawl,
    getMaps,
    getMap,
    getGameModes,
    getGameMode


}
