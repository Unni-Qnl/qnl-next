export type TInsight = {
  id: number;
  slug: string;
  heading: string;
  short_description: string;
  seo_keywords: string;
  image: string;
  blur_image: string;
  content: string;
  is_active: boolean;
  author: string;
  created_at: string;
  seo_title: string;
  seo_description: string;
  related_insights: RelatedInsight[];
};

export type RelatedInsight = {
  id: number;
  slug: string;
  heading: string;
  short_description: string;
  image: string;
  content: string;
  is_active: boolean;
  author: string;
};
