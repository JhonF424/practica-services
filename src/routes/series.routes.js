const SerieService = require('../services/serie.service');
const service = new SerieService();
const express = require('express');
const serieModel = require('../models/serie.model');
const serieRoutes = express.Router();

serieRoutes.post('/serie', async (req, res) => {
    try {
        const serie = serieModel(req.body);
        await service.createSerie(serie);
        res.status(201).json({ data })
    } catch (error) {
        res.status(404).json({ message: error })
    }
});

serieRoutes.get('/', async (req, res) => {
    try {
        const data = await service.listSeries()
        res.status(200).json({ data });
    } catch (error) {
        res.status(404).json({ message: error })
    }
});

serieRoutes.get('/:serieId', (req, res) => {
    try {
        const { serieId } = req.params;
        const data = await service.showSerie(serieId);
        res.status(201).json({ data });
    } catch (error) {
        res.status(404).json({ message: error });
    }
})

serieRoutes.put('/:serieId', async (req, res) => {
    const { serieId } = req.params;
    const { serie, number_episodes, number_seasons, description } = req.body;
    await service.editSerie(serieId, serie, number_episodes, number_seasons, description)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(204).json({ message: err }));
});

serieRoutes.delete('/:serieId', async (req, res) => {
    const { serieId } = req.params;
    await service.removeSerie(serieId)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(204).json({ message: err }));
});