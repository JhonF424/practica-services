const mongoose = require('mongoose')
const serieSchema = mongoose.Schema({
    serie:{
        type: String,
        require: true, 
        unique: true
    },
    num_episodes:{
        type: String,
        require: true,
    },
    num_seasons:{
        type: String,
        require: true,
    },
    description: {

    }
});

module.exports = mongoose.model('SerieCollection', serieSchema)