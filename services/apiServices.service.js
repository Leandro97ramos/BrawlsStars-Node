const axios = require('axios');

const API_URL = 'https://api.brawlapi.com/v1';

const getBrawlers = async() => {
    try {
        const resp = await axios.get(`${API_URL}/brawlers`);
       
        //obtengo solo 5 brawlers
        
        return resp.data;
    } catch (error) {
        throw new Error("Error en la petición");        
    }
}

const getBrawler = async(id) => {
    try{

        const resp = await axios.get(`${API_URL}/brawlers/${id}`);
        return resp.data;
    }catch(error){
        throw new Error("Error en la petición");
    }
}

//maps

const getMaps = async() => {
    try{
        const resp = await axios.get(`${API_URL}/maps`);
        return resp.data;
    }catch(error){
        throw new Error("Error en la petición");
    }
}

const getMap = async(id) => {
    try{
        const resp = await axios.get(`${API_URL}/maps/${id}`)
        return resp.data;

    }catch(error){
        throw new Error("Error en la petición");
    }
}



//GameModes

const getGameModes = async() => {
    try{
        const resp = await axios.get(`${API_URL}/gamemodes`);
        return resp.data;
    }catch(error){
        throw new Error("Error en la petición");
    }
}


const getGameMode = async(id) => {
    try{
        const resp = await axios.get(`${API_URL}/gamemodes/${id}`)
        return resp.data;

    }catch(error){
        throw new Error("Error en la petición");
    }
}





module.exports = {
    getBrawlers,
    getBrawler,
    getMaps,
    getMap,
    getGameModes,
    getGameMode




}
