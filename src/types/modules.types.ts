export type TCaseStudy = {
  id: number;
  slug: string;
  heading: string;
  content: string;
  is_active: boolean;
  image: string;
  author: string;
  blur_image: string;
};

export type TInsight = {
  id: number;
  slug: string;
  heading: string;
  short_description: string;
  image: string;
  content: string;
  is_active: boolean;
  author: string;
};

export type TService = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
};

export type TNewsLetter = {
  id: number;
  slug: string;
  title: string;
  heading: string;
  description: string;
  author: string;
  created_at: string;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
};

export type TMetaTags = {
  id: number;
  slug: string;
  module: string;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
};
