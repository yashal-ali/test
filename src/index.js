// import path from "path";
// const { getLogoPath, getLogos } = require("./getLogo"); 
// const express =require("express")
// export { getLogoPath } 
// const app = express();
// const PORT = process.env.PORT || 3000;
// // API to get all available logos
// app.get("/logos", (req, res) => {
//   const logos = getLogos();
//   res.json({ logos });
// });
// // API to get a specific logo by index
// app.get("/logo", (req, res) => {
//     const logoId = req.query.logo as string;
//     const logos = getLogos();
//     console.log("Query logo ID:", logoId); // Debugging
//     // Validate logo ID
//     if (!logoId || isNaN(Number(logoId)) || Number(logoId) >= logos.length) {
//       return res.status(404).json({ error: "Logo not found" });
//     }
//     const logoPath = path.join("public/assets/img/logo", logos[Number(logoId)]);
//     res.json({ logo: logoPath });
//   });
// // Start the Express server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express.json());
// Function to get logos from a specific folder
var getLogos = function (folderPath) {
    try {
        if (!fs.existsSync(folderPath)) {
            console.error("Folder does not exist:", folderPath);
            return [];
        }
        var files = fs.readdirSync(folderPath);
        return files.filter(function (file) { return /\.(png|jpg|jpeg|svg|webp)$/i.test(file); });
    }
    catch (error) {
        console.error("Error reading logo directory:", error);
        return [];
    }
};
// Function to get a specific logo path
var getLogoPath = function (folderPath, logoId) {
    if (!logoId || isNaN(Number(logoId)))
        return null;
    var logos = getLogos(folderPath);
    var logoIndex = parseInt(logoId, 10);
    if (logoIndex >= logos.length)
        return null;
    return path.join(folderPath, logos[logoIndex]);
};
// ✅ Get all logos from a dynamic folder (using request body)
app.post("/logos", function (req, res) {
    var folder = req.body.folder; // Get folder path from request body
    if (!folder)
        return res.status(400).json({ error: "Folder path is required" });
    var logos = getLogos(folder);
    res.json({ logos: logos });
});
// ✅ Get a specific logo by index from a dynamic folder (using request body)
app.post("/logo", function (req, res) {
    var _a = req.body, folder = _a.folder, logo = _a.logo; // Get folder path and logo index from request body
    if (!folder)
        return res.status(400).json({ error: "Folder path is required" });
    var logoPath = getLogoPath(folder, logo);
    if (!logoPath) {
        return res.status(404).json({ error: "Logo not found" });
    }
    res.json({ logo: logoPath });
});
// Start the Express server
app.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT));
});
