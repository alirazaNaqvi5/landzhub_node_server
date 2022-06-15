// const { sequelize, soil_sample_punjab } = require('../models');
const db=require('../models');
const Op=db.Sequelize.Op;
const Sequelize = db.Sequelize;
const Soil_sample_punjab=db.soil_sample_punjab;
exports.getNearestSoilSample = (req,res)=>{
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const distance = 50;
    const crop = req.query.crop;

    const haversine = `(
    6371 * acos(
        cos(radians(${latitude}))
        * cos(radians(Lat))
        * cos(radians(Long) - radians(${longitude}))
        + sin(radians(${latitude})) * sin(radians(Lat))
    )
)`;
    Soil_sample_punjab.findAll({
        attributes: ['Texture',
            'id', 'Lat', 'Long', 'N', 'P', 'K', 'pH',
            'source_of_irrigation',
            [Sequelize.literal(haversine), 'distance_in_km'],
        ],
        where: {
            Lat: {
                [Op.between]: [latitude - distance, latitude + distance]
            },
            Long: {
                [Op.between]: [longitude - distance, longitude + distance]
            },
            OM: {
                [Op.gt]: 0
            },
            OM: {
                [Op.lt]: 5
            },
            Crop: crop

        },
        order: [[Sequelize.literal(haversine), 'ASC']],
        limit: 1

    })
        .then(data => {
            res.send(data)
        }
        )

}