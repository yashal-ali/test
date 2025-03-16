"use strict";
// import fs from "fs";
// import path from "path";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogos = void 0;
exports.getLogoPath = getLogoPath;
// export const getLogos = (): string[] => {
//   const folderPath = path.join(process.cwd(), "public/assets/img/logo");
//   try {
//     const files = fs.readdirSync(folderPath);
//     return files.filter(file => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
//   } catch (error) {
//     console.error("Error reading logo directory:", error);
//     return [];
//   }
// };
// export function getLogoPath(): string | null {
//   let logoId: string | null = null;
//   // ✅ If running in a browser, get query param from URL
//   if (typeof window !== "undefined") {
//     const params = new URLSearchParams(window.location.search);
//     logoId = params.get("logo");
//   } 
//   // ✅ If running in Node.js (backend), get query from process args
//   else {
//     const args = process.argv.slice(2);
//     const param = args.find(arg => arg.startsWith("logo="));
//     logoId = param ? param.split("=")[1] : null;
//   }
//   // Convert logoId to a number
//   const logoIndex = logoId ? parseInt(logoId, 10) : null;
//   const logos = getLogos();
//   // ✅ Return full logo path if valid, otherwise return null
//   return logoIndex !== null && !isNaN(logoIndex) && logoIndex < logos.length
//     ? path.join("public/assets/img/logo", logos[logoIndex])
//     : null;
// }
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var getLogos = function () {
    var folderPath = path_1.default.join(process.cwd(), "public/assets/img/logo");
    try {
        var files = fs_1.default.readdirSync(folderPath);
        console.log("Logos found:", files); // Debugging
        return files.filter(function (file) { return /\.(png|jpg|jpeg|svg|webp)$/i.test(file); });
    }
    catch (error) {
        console.error("Error reading logo directory:", error);
        return [];
    }
};
exports.getLogos = getLogos;
function getLogoPath() {
    var logoId = null;
    // ✅ If running in a browser, get query param from URL
    if (typeof window !== "undefined") {
        var params = new URLSearchParams(window.location.search);
        logoId = params.get("logo");
    }
    // ✅ If running in Node.js (backend), get query from process args
    else {
        var args = process.argv.slice(2);
        var param = args.find(function (arg) { return arg.startsWith("logo="); });
        logoId = param ? param.split("=")[1] : null;
    }
    console.log("Logo ID from request:", logoId); // Debugging
    // Convert logoId to a number
    var logoIndex = logoId ? parseInt(logoId, 10) : null;
    var logos = (0, exports.getLogos)();
    console.log("Available logos:", logos); // Debugging
    // ✅ Return full logo path if valid, otherwise return null
    if (logoIndex !== null && !isNaN(logoIndex) && logoIndex < logos.length) {
        return path_1.default.join("public/assets/img/logo", logos[logoIndex]);
    }
    return null;
}
