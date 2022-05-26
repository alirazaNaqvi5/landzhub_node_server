const fs = require('fs')

exports.getAll = (req, res) => {
    filenames = fs.readdirSync('./Agri_reports');
    
    
    let temp = filenames.map(file => {
        return {
            link: "https://www.greenageservices.pk/api/Agri_reports/" + file,
            name: file.split(".")[0]
        };
    });

    res.send(temp);
};