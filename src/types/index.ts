export type Status = "Active" | "Released" | "Experimental" | "On Hold" | "Archived" | "Unknown";

export type Project = {
  slug: string; name: string; description: string; category: string; status: Status;
  technologies?: string[]; github?: string; website?: string; downloads?: string;
  documentation?: string; logo?: string; screenshots?: string[]; featured?: boolean; maintenanceNote?: string;
};

export type Social = {
  slug: string; platform: string; username: string; url?: string; candidateUrl?: string;
  category: "Social" | "Community" | "Support" | "Links"; verified: boolean; description: string;
};

export type Promotion = {
  slug: string; name: string; description: string; attribution: string; category: "Contribution" | "Promotion";
  url?: string; logo?: string; featured?: boolean; enabled: boolean; sponsored?: boolean;
  startsAt?: string; expiresAt?: string; priority?: number;
};
