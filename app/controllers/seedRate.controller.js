const db=require('../models');
const Crop_varities=db.crop_varieties;
const Crop_varieties_sub=db.crop_varieties_sub;
const Crop_sowing_methods=db.crop_sowing_methods;
const Op=db.Sequelize.Op;


exports.crop_details= (req,res)=>{
    Crop_sowing_methods.findAll({ attributes: ['crop', 'row_distance', 'plant_distance'] })
        .then(data => {
            res.json({
                "success":true,
                "code":200,
                "message":"Get Crops details Successfully",
                "data": data
                });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

}



exports.variety_details= (req,res)=>{
    Crop_varieties_sub.findAll({ attributes: ['seed_weight', 'germination', 'maturity'] })
    .then(data => {
        res.json({
            "success":true,
            "code":200,
            "message":"Get variety details  Successfully",
            "data": data
            });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    });


}


exports.getVarities= (req,res)=>{
    
Crop_varities.findAll({ where: { 
        source_of_irrigation:req.query.source,  crop_name: req.query.crop    }})
        .then((data) => {
                // res.send(data)
            if ( data.length == 0    ) {
                res.send("No variety found for this crop")
            }
            else {
                var varie = []
                // res.send("data")
                data.forEach(({ varieties }) => {
                    if(varieties!==null){

                           var split = varieties.split(',')
                        split.forEach(o=>{

                            Crop_varieties_sub.findAll({  where: { varieties_eng: { [Op.eq]: o } } })
                            .then(data2=>{  varie.push(data2[0]);
                                if(varie.length===data2.length){
                                    res.send(varie)
                                }    
                            })
                            .catch(err=> varie.push(err))
                            
                        })
                    }
                    

                });
            
            }
        })
        .catch(err=> res.send(err))

}




const cmtom = (cm) => {
    return cm / 100
}

const plantdensity_cm = (row, col) => {

    var row_m = cmtom(row)
    var col_m = cmtom(col)

    var number_of_rows_plants_in_1_meter = 1 / row_m
    var number_of_cols_plants_in_1_meter = 1 / col_m

    var total_plants = number_of_rows_plants_in_1_meter * number_of_cols_plants_in_1_meter

    return total_plants

}

const acres_to_sqm = (acres) => {
    return acres * 4046.86
}



exports.getcalculate= (req,res)=>{

    var rowdistance = req.query.rowdistance
    var plantdistance = req.query.plantdistance
    var germination_percentage = req.query.germination_percentage
    var maturity_percentage = req.query.maturity_percentage
    var pods_per_plant = req.query.number_of_pods_per_plant
    var grins_per_pod = req.query.average_grins_per_pod

    if( rowdistance == undefined || plantdistance == undefined || germination_percentage == undefined || maturity_percentage == undefined || pods_per_plant == undefined || grins_per_pod == undefined){
        res.send("Please provide all the required parameters")
    }else{
     var average_weight_per_seed = result[0].seed_weight
     var seeds_per_kg = (1000 / average_weight_per_seed) * 1000

     var target_plants_density_per_sqm = plantdensity_cm(rowdistance,plantdistance) // input: sowing method
     var germination_percent = germination_percentage      // %
     var plant_vegetation = (target_plants_density_per_sqm * germination_percent) / 100
     var seed_weight_per_sqm = ((target_plants_density_per_sqm * average_weight_per_seed) / germination_percent) * 100    // mg

     var sqm_per_acre = 4046.86   //sqm
     var seed_weight_per_acre = seed_weight_per_sqm * sqm_per_acre     // mg
     var seed_weight_per_acre_kg = seed_weight_per_acre / 1000 / 1000     //KG

     var maturity_percent = maturity_percentage // %

     var number_of_pods_per_plant = pods_per_plant
     var number_of_pods_per_sqm = (plant_vegetation * number_of_pods_per_plant) * maturity_percent / 100
     var average_grins_per_pod = grins_per_pod
     var number_of_grains_per_sqm = number_of_pods_per_sqm * average_grins_per_pod
     var yield_per_sqm = average_weight_per_seed * number_of_grains_per_sqm      // mg
     var yield_per_sqm_gms = yield_per_sqm / 1000   //gms
     var yield_per_acre = yield_per_sqm_gms * sqm_per_acre
     var yield_per_acre_kgs = yield_per_acre / 1000
     var yield_per_acre_maund = yield_per_acre_kgs / 40 // per 40kg  

        res.send((yield_per_acre_maund.toFixed(2)).toString()).json({
            "success":true,
            "code":200,
            "message":"Seed Rate Calculated Successfully",
            });
    


    }
}

