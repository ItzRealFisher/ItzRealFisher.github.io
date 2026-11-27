import type { Project } from "../types";
export const projects: Project[] = [
  {slug:"autoquiz",name:"AutoQuiz",description:"A personal development project.",category:"Software",status:"Unknown",featured:true,maintenanceNote:"Project details have not been published yet."},
  {slug:"travellers-bed",name:"Traveller’s Bed",description:"A Minecraft mod project.",category:"Minecraft",status:"Unknown",featured:true},
  {slug:"fisherconnect",name:"FisherConnect",description:"A personal connectivity project.",category:"Software",status:"Unknown",featured:true},
  {slug:"autocraft",name:"AutoCraft",description:"A Minecraft-related development project.",category:"Minecraft",status:"Unknown"},
  {slug:"fishers-file-hosting",name:"FishersFileHosting",description:"A file-hosting project.",category:"Web",status:"Unknown"},
  {slug:"blockboss",name:"BlockBoss",description:"A custom Discord bot for community management and automation.",category:"Discord Bot",status:"Experimental",technologies:["JavaScript","Node.js","Discord.js"],featured:true},
  {slug:"cannanetwork",name:"CannaNetwork",description:"A Minecraft network project involving plugins, configuration and community management.",category:"Minecraft",status:"Archived",website:"https://cannanetwork.github.io",technologies:["Java","Paper","Minecraft"],maintenanceNote:"Historical project; current availability is unverified."},
  {slug:"zenithsmp",name:"ZenithSMP",description:"A survival multiplayer project with Origins and proximity voice chat.",category:"Minecraft",status:"Unknown",technologies:["Minecraft","Folia","Origins"]},
  {slug:"blockbase-launcher",name:"BlockBase Launcher",description:"Custom Minecraft Java launcher with profiles, login, modpack imports and release updates.",category:"Software",status:"Archived",github:"https://github.com/itz-me-fisherYT/BlockBase-Launcher"},
  {slug:"minecord",name:"MineCord",description:"Minecraft and Discord community tools.",category:"Tools",status:"Archived",github:"https://github.com/itz-me-fisherYT/MineCord"},
  {slug:"sentra",name:"Sentra",description:"A Discord bot and website workspace.",category:"Web",status:"Archived",github:"https://github.com/itz-me-fisherYT/Sentra"},
  {slug:"portfolio",name:"ItzFisher Portfolio",description:"This website: a durable home for projects and links.",category:"Web",status:"Active",github:"https://github.com/ItzRealFisher/ItzRealFisher.github.io",website:"https://www.itzfisher.org",technologies:["React","TypeScript","Vite","Tailwind CSS"]},
];
export const archivedProjectNames = ["TicketForge","Help Bot 2.0","Fisher RAM Roblox Account Manager","StatsTools","NovaBridge","BoundPVPChatGames","BoundPVPDiscordBridge","BoundPVPKoth","BoundPVPShardsPAPI","BoundPVPFishingRewards","BoundPVPPunish","Minecraft RTP GUI","Minecraft Sign Tool","Shards Shop","Kit Bot"];
export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
