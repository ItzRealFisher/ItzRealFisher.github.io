import type { Promotion } from "../types";
export const promotions: Promotion[] = [
  {slug:"weedvpn",name:"WeedVPN",description:"A project I contributed to.",attribution:"Independent project — Fisher contributed; not the owner or sole developer.",category:"Contribution",url:"https://weedvpn.surf",enabled:true,featured:true,priority:1},
  {slug:"weedflix",name:"WeedFlix",description:"A project developed by a friend.",attribution:"Third-party project developed by a friend.",category:"Promotion",enabled:true,featured:true,priority:2},
  {slug:"weedtunes",name:"WeedTunes",description:"A project developed by a friend.",attribution:"Third-party project developed by a friend.",category:"Promotion",enabled:true,featured:true,priority:3},
];
export const promotionBySlug = (slug: string) => promotions.find((promotion) => promotion.slug === slug);
