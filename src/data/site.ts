export const site = {
  name: "ItzFisher", url: "https://www.itzfisher.org", title: "ItzFisher — Independent developer",
  description: "Portfolio, software projects, developer resources and links from Fisher.",
  owner: "ItzRealFisher", githubApi: "https://api.github.com/users/ItzRealFisher/repos",
} as const;

export const navigation = [
  ["Projects", "/projects"], ["Developer hub", "/dev"], ["Downloads", "/downloads"],
  ["Partners", "/partners"], ["Links", "/links"], ["Contact", "/contact"],
] as const;
