export type PuppiesDTO = {
  results: Array<Puppey>;
  total: number;
  total_pages: number;
};

export type Puppey = {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  promoted_at: string | null;
  sponsorship: string | null;
  tags: Array<Tags>;
  topic_submissions: {};
  updated_at: string;
  urls: Urls;
  user: any; // huge object
  width: number;
};

type Links = {
  download: string;
  download_location: string;
  html: string;
  self: string;
};

type Tags = {
  type: string;
  title: string;
  source: any; //huge object
};

type Urls = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
};
