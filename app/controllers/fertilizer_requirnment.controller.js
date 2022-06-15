const db=require('../models');
const Op=db.Sequelize.Op;
const Fertilizer_requirnments=db.fertilizer_requirnments;
exports.getfertilizer_requirnment= (req,res)=>{
    // const data={}
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const distance = 50;
    const crop = req.query.crop;

    const haversine = `(
    6371 * acos(
        cos(radians(${latitude}))
        * cos(radians(latitude))
        * cos(radians(longitude) - radians(${longitude}))
        + sin(radians(${latitude})) * sin(radians(latitude))
    )
)`;
Fertilizer_requirnments.findAll({
        attributes: ['Texture',
            'id', 'Lat', 'Long', 'N', 'P', 'K', 'pH',
            'source_of_irrigation',
            [sequelize.literal(haversine), 'distance_in_km'],
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
        order: [[sequelize.literal(haversine), 'ASC']],
        limit: 1

    })
        .then(data => {
            res.send(data)
        }
        )


}