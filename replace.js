const fs = require("fs");

// get files names from a directory
let arr = [];
// fs.readdir("./old_databse_models", (err, files) => {
//     files.forEach(file => {
//         // file = file.split(".")[0];
//         arr.push(file.split(".")[0])
//     });
//   });


  fs.readdirSync("./old_databse_models").forEach(file => {
    arr.push(file.split(".")[0])
  });

//   write file names to a file
fs.writeFile("./files.json", JSON.stringify(arr), (err) => {
    if (err) throw err;
    console.log("File created!");
}
);

console.log(arr)