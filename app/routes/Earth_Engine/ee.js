const express = require("express")
const router = express.Router()
const ee = require('@google/earthengine');
const privateKey = require('../../config/earthEngineKey.json');

const EE_MAP_PATH = 'https://earthengine.googleapis.com/map';



ee.data.authenticateViaPrivateKey(
    privateKey,
    () => {
        console.log('Authentication successful.');
        ee.initialize(
            null, null,
            () => {
                //////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////

                console.log('Earth Engine client library initialized.');

                var sentineljson = {};

                const getsentinel = async () => {



                    function maskS2clouds(image) {
                        var qa = image.select('QA60');

                        // Bits 10 and 11 are clouds and cirrus, respectively.
                        var cloudBitMask = 1 << 10;
                        var cirrusBitMask = 1 << 11;

                        // Both flags should be set to zero, indicating clear conditions.
                        var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
                            .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

                        return image.updateMask(mask).divide(10000);
                    }
                    var geometry = new ee.Geometry.Polygon(
                        [[[61.3622610350399, 24.957582216480517],
                        [62.3730032225399, 24.967542242875933],
                        [62.7025930662899, 25.067098132060313],
                        [63.2189504881649, 25.067098132060313],
                        [63.7462942381649, 25.18645846202203],
                        [64.0099661131649, 25.206340503536374],
                        [64.4054739256649, 25.017330278525318],
                        [64.7350637694149, 25.15662931584688],
                        [64.9438040037899, 25.196399888528198],
                        [66.2292043944149, 25.285836181743694],
                        [66.5478079100399, 25.206340503536374],
                        [66.5368215819149, 24.818057337863998],
                        [66.8773977537899, 24.67837515801434],
                        [66.8773977537899, 24.45855835102276],
                        [67.6903860350399, 23.676129276323053],
                        [68.1298391600399, 23.630844197187695],
                        [68.2012502928524, 23.691220817511386],
                        [68.2946340819149, 23.842040169895252],
                        [68.4319631834774, 23.937468506826693],
                        [68.7725393553524, 23.95252969940474],
                        [68.8329641600399, 24.113072831025427],
                        [68.8769094725399, 24.16320136666671],
                        [68.9648000975399, 24.16320136666671],
                        [69.1405813475399, 24.193269048923263],
                        [69.2559377928524, 24.218320037076012],
                        [69.3822805662899, 24.218320037076012],
                        [69.5800344725399, 24.233348265901597],
                        [69.7063772459774, 24.13813955554775],
                        [69.9151174803524, 24.12310011019738],
                        [70.0469534178524, 24.12310011019738],
                        [70.1513235350399, 24.283429544722164],
                        [70.5193655272274, 24.343501016875845],
                        [70.5303518553524, 24.233348265901597],
                        [70.6237356444149, 24.15818939769913],
                        [70.9203665037899, 24.203290035017517],
                        [70.9478323241024, 24.26339940055639],
                        [71.0137502928524, 24.29845008001766],
                        [71.1785452147274, 24.328485816915663],
                        [71.0357229491024, 24.553526535084305],
                        [71.1291067381649, 24.623457121318875],
                        [71.0961477537899, 24.818057337863998],
                        [71.0137502928524, 25.042216729893386],
                        [70.7500784178524, 25.419867004887756],
                        [70.7500784178524, 25.598343134184674],
                        [70.6292288084774, 25.786446053414455],
                        [70.3325979491024, 25.756765356329357],
                        [70.1787893553524, 26.063106960842006],
                        [70.2776663084774, 26.40801587165101],
                        [70.2117483397274, 26.663568990567605],
                        [69.8162405272274, 26.73227433621733],
                        [69.5855276366024, 26.849958408116766],
                        [69.6734182616024, 27.13385620519417],
                        [70.0579397459774, 27.495025984301364],
                        [70.3216116209774, 27.816154283881794],
                        [70.5633108397274, 27.88415093401944],
                        [70.5633108397274, 27.602173501535773],
                        [71.2334768553524, 27.728667430308644],
                        [71.7498342772274, 27.845300925968026],
                        [71.9366018553524, 27.9909165735093],
                        [72.0684377928524, 28.09757657538554],
                        [72.2881643553524, 28.262206362180923],
                        [72.5738088866024, 28.667848205598244],
                        [73.05260534088525, 29.116477558980076],
                        [73.40416784088525, 29.518801915743357],
                        [73.42614049713525, 29.84332675499157],
                        [73.77770299713525, 29.93857550618679],
                        [74.07433385651025, 30.100289202715256],
                        [74.01940221588525, 30.385021401766547],
                        [74.51378698151025, 30.87659490192954],
                        [74.71154088776025, 31.036758561607698],
                        [74.74449987213525, 31.299970854404613],
                        [74.77745885651025, 31.553088414185996],
                        [74.78844518463525, 31.758826167653293],
                        [75.52452916901025, 32.03864196811661],
                        [76.09581823151025, 32.42895085201181],
                        [76.18370885651025, 32.780638446132414],
                        [76.57921666901025, 32.92830362509629],
                        [76.99669713776025, 32.799110030282456],
                        [77.61193151276025, 32.799110030282456],
                        [77.52404088776025, 32.55868057330809],
                        [78.49083776276025, 32.41040276931161],
                        [78.93029088776025, 32.0200140614864],
                        [79.52355260651025, 32.29903424351812],
                        [79.43566198151025, 32.799110030282456],
                        [78.97423620026025, 33.86386145213221],
                        [78.44689245026025, 35.14939193369224],
                        [77.28234166901025, 35.936044984290724],
                        [76.79894323151025, 36.55625978977662],
                        [74.97521276276025, 37.17153619810397],
                        [73.04161901276025, 37.06641234612427],
                        [71.30577916901025, 36.46795926932822],
                        [71.12999791901025, 35.97161829009128],
                        [71.41564245026025, 35.41843556122598],
                        [71.21788854401025, 34.933514306309796],
                        [70.78942174713525, 34.18255629954641],
                        [69.93248815338525, 34.164377425107894],
                        [69.76769323151025, 33.91857980493183],
                        [70.10826940338525, 33.32393299195736],
                        [69.53698034088525, 33.17693036725949],
                        [69.16344518463525, 32.56793982020544],
                        [69.16344518463525, 31.945464566057744],
                        [68.74596471588525, 31.945464566057744],
                        [68.07579870026025, 31.880184099397514],
                        [67.25186964672211, 31.459722014509968],
                        [66.15323683422211, 30.89575457938894],
                        [65.80167433422211, 29.910316472268654],
                        [63.42862745922212, 29.681502024730893],
                        [61.75870558422212, 29.910316472268654],
                        [60.57218214672212, 29.98647152737231],
                        [61.45108839672212, 28.645413456603894],
                        [62.50577589672212, 28.18159742144378],
                        [62.46183058422212, 27.560036967729847],
                        [62.81339308422212, 26.97410879799739],
                        [61.67081495922212, 26.660357378959535],
                        [61.18741652172212, 24.799836629089082]]]);
                    const today = new Date()
                    var yesterday = new Date(Date.now() - 86400000 * 7)

                    var S2_SR = await ee.ImageCollection('COPERNICUS/S2_SR')
                        .filterBounds(geometry)
                        .filterDate(
                            yesterday.getFullYear() + '-' + yesterday.getMonth() + '-' + yesterday.getDate(),
                            today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate()
                        )
                        .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                        .map(maskS2clouds)
                        .mean()
                        .getMap(
                            { min: 0.0, max: 0.3, bands: ['B4', 'B3', 'B2'] },
                            (map, ERR) => {

                                if (ERR) sentineljson.url = ERR
                                else {
                                    sentineljson.url = {
                                        url: `https://earthengine.googleapis.com/v1beta/${map.mapid}/tiles/{z}/{x}/{y}`,


                                    }
                                    console.log('sentinel tiles loaded')
                                }

                            });

                }

                getsentinel()

                setInterval(() => {
                    getsentinel()
                }, 459200000)


                router.post('/ndvi', (request, response) => {

                    const body = request.body
                    response.set('Content-Type', 'text/plain')


                    var geometry = new ee.Geometry.Polygon(
                        [JSON.parse(body.landgeom)]);
                    const today = new Date(Date.now())
                    var yesterday = new Date(Date.now() - 86400000 * 10)

                    var S2_SR = ee.ImageCollection('COPERNICUS/S2_SR').filterBounds(geometry).filterDate(
                        yesterday.getFullYear() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getDate(),
                        today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
                    );
                    var addNDVI = function (image) {
                        var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
                        return image.addBands(ndvi);
                    };
                    var S2_NDVI = S2_SR.map(addNDVI);
                    var recent_S2 = ee.Image(S2_NDVI.sort('system:time_start', false).first());

                    var ndvi = recent_S2.normalizedDifference(['B8', 'B4']);
                    ndvi = ndvi.clip(geometry)
                    var NDVIpalette = ['FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901', '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01', '012E01', '011D01', '011301'];

                    var maxReducer = ee.Reducer.max();
                    var minReducer = ee.Reducer.min();
                    var meanReducer = ee.Reducer.mean();

                    var theMax = ndvi.reduceRegion(maxReducer, geometry).getInfo();
                    var theMin = ndvi.reduceRegion(minReducer, geometry).getInfo()
                    var theMean = ndvi.reduceRegion(meanReducer, geometry).getInfo()

                    var maxlist = [theMax.nd]
                    var minlist = [theMin.nd]
                    var meanlist = [theMean.nd]


                    async function GETDATA(i) {


                        var sdate = new Date(Date.now() - 86400000 * ((i * 20) - 10))
                        var edate = new Date(Date.now() - (86400000 * (i * 20)))

                        var S2_SR_TEMP = ee.ImageCollection('COPERNICUS/S2_SR').filterBounds(geometry).filterDate(
                            edate.getFullYear() + '-' + (edate.getMonth() + 1) + '-' + edate.getDate(),
                            sdate.getFullYear() + '-' + (sdate.getMonth() + 1) + '-' + sdate.getDate()
                        );

                        var S2_NDVI_TEMP = S2_SR_TEMP.map(addNDVI);
                        var recent_S2TEMP = ee.Image(S2_NDVI_TEMP.sort('system:time_start', false).first());

                        var ndviTEMP = recent_S2TEMP.normalizedDifference(['B8', 'B4']);
                        ndviTEMP = ndviTEMP.clip(geometry)

                        var max = await ndviTEMP.reduceRegion(maxReducer, geometry).getInfo()
                        maxlist.push(max.nd)
                        var min = await ndviTEMP.reduceRegion(minReducer, geometry).getInfo()
                        minlist.push(min.nd)
                        var mean = await ndviTEMP.reduceRegion(meanReducer, geometry).getInfo()
                        meanlist.push(mean.nd)

                    }

                    for (var i = 1; i < 5; i++) {
                        (async function () {
                            var ii = i;

                            await GETDATA(ii)

                        })();


                    }

                    ndvi.getMap(
                        { min: 0, max: 1, palette: NDVIpalette },
                        (map, ERR) => {

                            if (ERR) response.send(ERR)
                            else response.send({
                                url: `https://earthengine.googleapis.com/v1beta/${map.mapid}/tiles/{z}/{x}/{y}`,
                                max: theMax,
                                min: theMin,
                                mean: theMean,
                                maxlist: maxlist.reverse(),
                                minlist: minlist.reverse(),
                                meanlist: meanlist.reverse()
                            })

                        });





                    ////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////
                })


                router.post('/sentinel2latest', (request, response) => {

                    response.send(sentineljson.url)




                    ////////////////////////////////////////////////////////////////////////////////////////
                    ////////////////////////////////////////////////////////////////////////////////////////
                })

                router.get('/rgbsrtm', (req, response) => {
                    var dataset = ee.Image("USGS/SRTMGL1_003");
                    var elevation = dataset.select('elevation').add(32768);
                    var elevationVis = {
                        min: -50.0,
                        max: 3000.0,
                        gamma: 2.0,
                    };

                    var red = elevation.divide(256).floor()
                    var green = elevation.mod(256).floor()
                    var blue = (elevation.subtract(elevation.floor())).multiply(256)
                    red.addBands(green).addBands(blue)
                        .getMap(
                            { min: -50, max: 3000, gamma: 2.0 },
                            (map, ERR) => {
                                // https://earthengine.googleapis.com/v1beta/projects/earthengine-legacy/maps/cdc4dd94fa220c715563239a71ea9b2e-357b0057bfab9b351a5062d0eb11d469/tiles/{z}/{x}/{y}
                                if (ERR) response.send(ERR)
                                else response.send({
                                    url: `https://earthengine.googleapis.com/v1beta/${map.mapid}/tiles/{z}/{x}/{y}`,


                                })

                            })


                })

                router.get('/test', (req, response) => {

                    response.send("EE TESTED")

                })


            },
            (err) => {
                console.log(err);
                console.log(
                    `Please make sure you have created a service account and have been approved.
  Visit https://developers.google.com/earth-engine/service_account#how-do-i-create-a-service-account to learn more.`);
            });
    },
    (err) => {
        console.log(err);
    });

module.exports = router