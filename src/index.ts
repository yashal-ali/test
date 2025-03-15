import { getLogoPath, getLogos } from "./getLogo";
export { default as Logo } from "./Logo";
export { getLogoPath } from "./getLogo";

// // const logos = getLogos();
// // console.log(logos);

// import { getLogos } from "./getLogo";
// export { default as Logo } from "./Logo";
// export { getLogos } from "./getLogo";

// // Function to get query parameter from command-line arguments
// function getQueryParam(paramName: string): string | null {
//     const args = process.argv.slice(2); // Get CLI arguments
//     const param = args.find(arg => arg.startsWith(`${paramName}=`));
//     return param ? param.split("=")[1] : null;
// }

// // Get the logo ID from CLI arguments
// const logoId = getQueryParam("logo");
// const logoIndex = logoId ? parseInt(logoId, 10) : null;

// // Fetch logos
// const logos = getLogos();

// // Return specific logo if index is valid
// const selectedLogo = logoIndex !== null && !isNaN(logoIndex) && logoIndex in logos 
//     ? logos[logoIndex] 
//     : logos;

// console.log(selectedLogo);

