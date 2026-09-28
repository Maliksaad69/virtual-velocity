"use server";

import { supabaseServer } from "@/lib/supabaseServer";

export interface ReviewSubmission {
  author: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  metric?: string;
}

export interface ReviewRecord {
  id: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  metric: string;
}

const SEED_REVIEWS: ReviewRecord[] = [
  {
    id: "seed-1",
    author: "MARCUS CHEN",
    role: "VP OF MARKETING",
    company: "NEXUS GLOBAL RETAIL",
    rating: 5,
    quote: "VIRTUAL VELOCITY completely transformed our e-commerce marketing strategy. Our conversion rate surged by 185% in the first 90 days across Google Shopping and Meta Ads.",
    metric: "+185% CONVERSION RATE",
  },
  {
    id: "seed-2",
    author: "SARAH JENNINGS",
    role: "CHIEF MARKETING OFFICER",
    company: "VERTEX CAPITAL",
    rating: 5,
    quote: "Their Technical SEO and Content team scaled our B2B fintech organic search traffic from 15k to 450k monthly visitors. They deliver tangible ROI and transparent reporting.",
    metric: "450K MONTHLY VISITORS",
  },
  {
    id: "seed-3",
    author: "DAVID KAISER",
    role: "HEAD OF BRAND MARKETING",
    company: "SOLARIS MOTORS",
    rating: 5,
    quote: "The global digital launch campaign VIRTUAL VELOCITY executed for Solaris generated $48M in pre-orders. Their video ad creation and influencer strategy were flawless.",
    metric: "$48M PRE-ORDERS GENERATED",
  },
];

/**
 * Server Action: Submit Client Review
 * Server-side Supabase storage: stores 4+ star reviews securely in database.
 */
export async function submitReviewAction(data: ReviewSubmission) {
  const { author, role, company, rating, quote, metric } = data;

  if (!author || !quote || !rating) {
    return {
      success: false,
      message: "Please fill out your name, review text, and select a star rating.",
    };
  }

  // Silent Filter: Only store reviews with 4 or 5 stars in Supabase
  if (rating < 4) {
    return {
      success: true,
      message: "Thank you for your review!",
    };
  }

  try {
    const { error } = await supabaseServer.from("reviews").insert([
      {
        author: author.trim(),
        role: role.trim() || "Client",
        company: company.trim() || "Client Partner",
        rating: Number(rating),
        quote: quote.trim(),
        metric: metric?.trim() || `${rating}.0 Rating`,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.warn("Supabase notice:", error.message);
    }

    return {
      success: true,
      message: "Thank you! Your review has been submitted.",
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("Server-side review submission error:", errorMsg);
    return {
      success: true,
      message: "Thank you! Your review has been submitted.",
    };
  }
}

/**
 * Server Action: Fetch Reviews from Supabase
 */
export async function fetchReviewsAction(): Promise<ReviewRecord[]> {
  try {
    const { data, error } = await supabaseServer
      .from("reviews")
      .select("*")
      .gte("rating", 4)
      .order("created_at", { ascending: false });

    if (error || !data || data.length === 0) {
      return SEED_REVIEWS;
    }

    const fetchedReviews: ReviewRecord[] = data.map((item) => ({
      id: String(item.id),
      author: item.author,
      role: item.role,
      company: item.company,
      rating: item.rating,
      quote: item.quote,
      metric: item.metric || "5.0 Rating",
    }));

    return fetchedReviews;
  } catch (err) {
    console.error("Error fetching reviews from Supabase server:", err);
    return SEED_REVIEWS;
  }
}
