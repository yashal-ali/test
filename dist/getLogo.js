import fs from "fs";
import path from "path";
export const getLogos = () => {
    const folderPath = path.join(process.cwd(), "public/assets/img/logo");
    try {
        const files = fs.readdirSync(folderPath);
        return files.filter(file => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
    }
    catch (error) {
        console.error("Error reading logo directory:", error);
        return [];
    }
};
export function getLogoPath() {
    let logoId = null;
    // ✅ If running in a browser, get query param from URL
    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        logoId = params.get("logo");
    }
    // ✅ If running in Node.js (backend), get query from process args
    else {
        const args = process.argv.slice(2);
        const param = args.find(arg => arg.startsWith("logo="));
        logoId = param ? param.split("=")[1] : null;
    }
    // Convert logoId to a number
    const logoIndex = logoId ? parseInt(logoId, 10) : null;
    const logos = getLogos();
    // ✅ Return full logo path if valid, otherwise return null
    return logoIndex !== null && !isNaN(logoIndex) && logoIndex < logos.length
        ? path.join("public/assets/img/logo", logos[logoIndex])
        : null;
}
