import { env } from "@/lib/env";
import { Axum } from "../axum";
import { WebsiteCategory } from "../websites/website-category";

const url = env.NEXT_PUBLIC_AXUM_URL + "/news";

export type News = {
  id: string;
  website_code: string;
  category: WebsiteCategory;
  created_at: string;
  updated_at: string;
  published_at: string;
  slug: string;
  image_url?: string;
  title: string;
  content: string;
  seo_title?: string;
  seo_description?: string;
  is_headline: boolean;
};

export const findManyNews = async (): Promise<Axum<News[]>> => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
