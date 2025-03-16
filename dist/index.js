"use strict";
// // import path from "path";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogoPath = void 0;
// // const { getLogoPath, getLogos } = require("./getLogo"); 
// // const express =require("express")
// // export { getLogoPath } 
// // const app = express();
// // const PORT = process.env.PORT || 3000;
// // // API to get all available logos
// // app.get("/logos", (req, res) => {
// //   const logos = getLogos();
// //   res.json({ logos });
// // });
// // // API to get a specific logo by index
// // app.get("/logo", (req, res) => {
// //     const logoId = req.query.logo as string;
// //     const logos = getLogos();
// //     console.log("Query logo ID:", logoId); // Debugging
// //     // Validate logo ID
// //     if (!logoId || isNaN(Number(logoId)) || Number(logoId) >= logos.length) {
// //       return res.status(404).json({ error: "Logo not found" });
// //     }
// //     const logoPath = path.join("public/assets/img/logo", logos[Number(logoId)]);
// //     res.json({ logo: logoPath });
// //   });
// // // Start the Express server
// // app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });
// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const app = express();
// const PORT = process.env.PORT || 3000;
// // Middleware to parse JSON bodies
// app.use(express.json());
// // Function to get logos from a specific folder
// const getLogos = (folderPath) => {
//   try {
//     if (!fs.existsSync(folderPath)) {
//       console.error("Folder does not exist:", folderPath);
//       return [];
//     }
//     const files = fs.readdirSync(folderPath);
//     return files.filter(file => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
//   } catch (error) {
//     console.error("Error reading logo directory:", error);
//     return [];
//   }
// };
// // Function to get a specific logo path
// const getLogoPath = (folderPath, logoId) => {
//   if (!logoId || isNaN(Number(logoId))) return null;
//   const logos = getLogos(folderPath);
//   const logoIndex = parseInt(logoId, 10);
//   if (logoIndex >= logos.length) return null;
//   return path.join(folderPath, logos[logoIndex]);
// };
// // ✅ Get all logos from a dynamic folder (using request body)
// app.post("/logos", (req, res) => {
//   const { folder } = req.body; // Get folder path from request body
//   if (!folder) return res.status(400).json({ error: "Folder path is required" });
//   const logos = getLogos(folder);
//   res.json({ logos });
// });
// app.post("/logo", (req, res) => {
//   const { folder, logo } = req.body; // Get folder path and logo index from request body
//   if (!folder) return res.status(400).json({ error: "Folder path is required" });
//   const logoPath = getLogoPath(folder, logo);
//   if (!logoPath) {
//     return res.status(404).json({ error: "Logo not found" });
//   }
//   res.json({ logo: logoPath });
// });
// // Start the Express server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
var getLogo_1 = require("./getLogo");
Object.defineProperty(exports, "getLogoPath", { enumerable: true, get: function () { return getLogo_1.getLogoPath; } });
