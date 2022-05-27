const turf = require('turf')
const mauza = require('./mauzabounds.json')


mauza.features.map(obj => obj.properties.props = JSON.stringify(obj.properties))

const tag = require('@turf/tag')
exports.geoCodeForward = (req, res) => {
    
  const lat = req.param("lat");
  const lng = req.param("lng");

  if (lat && lng) {
    var point = turf.point([lat, lng]);
    var tagged = tag(point, mauza, 'props', 'Geocoded');
    if (tagged.properties.hasOwnProperty('Geocoded')) {
      var geocoded = {
        "Geocoded": JSON.parse(tagged.properties.Geocoded)
      }

      var sender = {
        District: geocoded.Geocoded.District,
        Mouza: geocoded.Geocoded.Mouza,
        Tehsil: geocoded.Geocoded.Tehsil,
        Locality: geocoded.Geocoded.Locality,
        Division: geocoded.Geocoded.Division
      }

      res.send(sender)
    } else {

      var sender = {
        District: null,
        Mouza: null,
        Tehsil: null,
        Locality: null,
        Division: null
      }

      res.send(sender)

    }

  } else {

    res.send('Invalid Parameters')
  }

}