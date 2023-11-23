export default interface ICoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: Tag[];
  team: TeamMember[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: Links;
  links_extended: LinkExtended[];
  whitepaper: Whitepaper;
  first_data_at: string;
  last_data_at: string;
}

interface Tag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
}

interface Links {
  explorer: string[];
  facebook: string[];
  reddit: string[];
  source_code: string[];
  website: string[];
  youtube: string[];
}

interface LinkExtended {
  url: string;
  type: string;
  stats?: {
    subscribers?: number;
    contributors?: number;
    stars?: number;
    followers?: number;
  };
}

interface Whitepaper {
  link: string;
  thumbnail: string;
}

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
