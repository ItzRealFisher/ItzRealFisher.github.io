import type { Social } from "../types";
export const socials: Social[] = [
  { slug:"github", platform:"GitHub", username:"ItzRealFisher", url:"https://github.com/ItzRealFisher", category:"Social", verified:true, description:"Open-source work and experiments." },
  { slug:"discord", platform:"Discord", username:"ItzOnlyFisher", url:"https://discord.com/users/1319567972335091773", category:"Community", verified:true, description:"Find me on Discord." },
  { slug:"youtube", platform:"YouTube", username:"ItzRealFisherYT", candidateUrl:"https://youtube.com/@ItzRealFisherYT", category:"Social", verified:false, description:"Videos and uploads." },
  { slug:"tiktok", platform:"TikTok", username:"itzrealfisher", url:"https://www.tiktok.com/@itzrealfisher", category:"Social", verified:true, description:"Short-form updates." },
  { slug:"roblox", platform:"Roblox", username:"ItzOnlyFisher", url:"https://www.roblox.com/users/8942431123/profile", category:"Community", verified:true, description:"Roblox profile." },
  { slug:"snapchat", platform:"Snapchat", username:"lfish94ll", url:"https://www.snapchat.com/add/lfish94ll", category:"Social", verified:true, description:"Snapchat profile." },
  { slug:"paypal", platform:"PayPal", username:"ItzOnlyFisher", url:"https://paypal.me/ItzOnlyFisher", category:"Support", verified:true, description:"Voluntary support — never required." },
  { slug:"kofi", platform:"Ko-fi", username:"itzrealfisheryt", candidateUrl:"https://ko-fi.com/itzrealfisheryt", category:"Support", verified:false, description:"Voluntary support — never required." },
  { slug:"slat", platform:"Slat.cc", username:"ItzRealFisher", candidateUrl:"https://slat.cc/ItzRealFisher", category:"Links", verified:false, description:"Profile link." },
  { slug:"guns", platform:"Guns.lol", username:"itzrealfisher", candidateUrl:"https://guns.lol/itzrealfisher", category:"Links", verified:false, description:"Profile link." },
  { slug:"feds", platform:"Feds.lol", username:"ItzRealFisher", url:"https://feds.lol/ItzRealFisher", category:"Links", verified:true, description:"Profile link." },
];
export const socialBySlug = (slug: string) => socials.find((social) => social.slug === slug);
