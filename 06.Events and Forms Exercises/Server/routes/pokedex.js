const express = require('express')

const router = new express.Router()

const pokemons = require('./../data/pokemons')

router.post('/create', (req, res, next) => {

    pokemons.addPokem((req.body))
    return res.status(200).json({ pokemon: req.body });
})

router.get('/all', (req, res, next) => {
    let pokemonColection = (pokemons.retrivePokemons())
    return res.status(200).json({
        pokemonColection
    })
})

module.exports = router