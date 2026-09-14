export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  year: string;
  image: string;
  videoUrl?: string | null;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  liveUrl: string;
  layoutType?: "right-large" | "left-large" | "full-width" | "asymmetric";
}

export interface Service {
  id: string;
  number: string;
  title: string;
  category: "PRACTICAL" | "EXPERIMENTAL" | "STRATEGIC" | "CREATIVE" | "TECHNICAL";
  shortDescription: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  previewImage?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
  year?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}

export interface Founder {
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
  vision: string;
  bioParagraphs?: string[];
  communities: { name: string; followers: string }[];
}

export const FOUNDER: Founder = {
  name: "Tauseef Alam",
  role: "Founder & Creative Director",
  experience: "Almost 12 Years",
  image: "/Profile.png",
  bio: "Tauseef Alam is a digital media and marketing professional with almost 12 years of experience in the industry.\n\nAs the founder of Virtual Velocity, his experience goes beyond traditional digital marketing. He has built and managed some of the most recognized digital communities in the region, including Rawalpindians, Islamabad Insider, and Sirf Chai platforms that have collectively grown to nearly a million followers.\n\nFrom building digital communities and growing brands to content, social media, marketing, strategy, and everything in between, Tauseef brings hands-on experience across the digital landscape.",
  vision: "His vision for Virtual Velocity is simple: create work that gets noticed, builds brands, and actually moves businesses forward.",
  bioParagraphs: [
    "Tauseef Alam is a digital media and marketing professional with almost 12 years of experience in the industry.",
    "As the founder of Virtual Velocity, his experience goes beyond traditional digital marketing. He has built and managed some of the most recognized digital communities in the region, including Rawalpindians, Islamabad Insider, and Sirf Chai platforms that have collectively grown to nearly a million followers.",
    "From building digital communities and growing brands to content, social media, marketing, strategy, and everything in between, Tauseef brings hands-on experience across the digital landscape.",
  ],
  communities: [
    { name: "Rawalpindians", followers: "450K+" },
    { name: "Islamabad Insider", followers: "380K+" },
    { name: "Sirf Chai", followers: "200K+" },
  ],
};

export const AGENCY_INFO = {
  name: "VIRTUAL VELOCITY",
  tagline: "A Creative House Built for Brands That Want to Move Forward",
  subTagline: "7+ years of experience transforming ambitious brands through distinct visual identities, high-impact digital campaigns, and data-driven performance marketing.",
  founder: FOUNDER,
  offices: [
    {
      city: "ISLAMABAD, PAKISTAN",
      address: "Islamabad, Pakistan",
      phone: "+92 (51) 555-0199",
      email: "hello@virtualvelocity.agency",
      timezone: "Asia/Karachi",
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-ecommerce",
    number: "01",
    title: "NEXUS E-COMMERCE GROWTH & PPC",
    client: "Nexus Global Retail",
    category: "PERFORMANCE MARKETING & CRO",
    industry: "RETAIL & E-COMMERCE",
    year: "2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-shopping-app-on-a-smartphone-43093-large.mp4",
    description: "Omnichannel digital marketing campaign across Google Shopping, Meta Ads, and email marketing funnels that expanded active customer reach.",
    challenge: "Nexus faced rising customer acquisition costs (CAC) and declining ROAS across paid search and social channels.",
    solution: "We restructured their Google Search & Shopping campaigns, implemented hyper-targeted Meta retargeting, and optimized checkout conversion funnels.",
    results: ["+185% Increase in Customer Conversion Rate", "4.6x Average ROAS on Paid Search", "$14.2M Generated in Q1 Campaign Sales"],
    services: ["Google Ads PPC", "Meta Paid Social", "Conversion Rate Optimization (CRO)", "Klaviyo Email Funnels"],
    liveUrl: "https://nexus-ecommerce.example.com",
    layoutType: "right-large",
  },
  {
    id: "vertex-fintech",
    number: "02",
    title: "VERTEX FINTECH SEO & CONTENT CAMPAIGN",
    client: "Vertex Capital",
    category: "TECHNICAL SEO & B2B MARKETING",
    industry: "FINANCIAL INFRASTRUCTURE",
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-financial-charts-on-a-digital-tablet-41221-large.mp4",
    description: "Enterprise search engine optimization strategy and thought leadership content hub that scaled organic monthly traffic from 15,000 to 450,000 visitors.",
    challenge: "Vertex faced fierce ad competition and low organic keyword visibility for high-intent B2B commercial banking terms.",
    solution: "We executed comprehensive technical SEO audits, structured rich search schema markup, and published authority content clusters.",
    results: ["+2,900% Organic Search Traffic Growth", "#1 Ranking for 42 Commercial Banking Terms", "3.4x Growth in Qualified Inbound B2B Leads"],
    services: ["Technical SEO Audits", "Keyword Strategy & Content Hubs", "B2B Lead Generation"],
    liveUrl: "https://vertex-fintech.example.com",
    layoutType: "left-large",
  },
  {
    id: "zenith-health",
    number: "03",
    title: "ZENITH HEALTHCARE PATIENT ACQUISITION",
    client: "Zenith Health Systems",
    category: "PPC & PAID SOCIAL CAMPAIGNS",
    industry: "HEALTHCARE & MEDTECH",
    year: "2025",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-doctor-using-a-digital-tablet-in-a-hospital-41551-large.mp4",
    description: "Multi-channel Google Search PPC, Meta Paid Social, and patient onboarding funnel optimization that reduced customer acquisition cost (CAC) by 42%.",
    challenge: "High cost-per-lead on Google Search and inefficient patient intake forms led to substantial drop-offs in clinic appointments.",
    solution: "Designed high-converting landing page strategies alongside hyper-targeted Search, YouTube, and Paid Social campaigns.",
    results: ["-42% Reduction in Patient Acquisition Cost", "+310% Increase in Online Patient Appointments", "4.8x Return on Ad Spend (ROAS)"],
    services: ["Google Search Ads", "Meta Paid Social", "Landing Page Copywriting", "Conversion Rate Optimization (CRO)"],
    liveUrl: "https://zenith-health.example.com",
    layoutType: "full-width",
  },
  {
    id: "solaris-ev",
    number: "04",
    title: "SOLARIS EV BRAND LAUNCH & INFLUENCER CAMPAIGN",
    client: "Solaris Motors",
    category: "BRAND STRATEGY & DIGITAL CAMPAIGNS",
    industry: "AUTOMOTIVE & HIGH-TECH",
    year: "2026",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-electric-car-charging-42861-large.mp4",
    description: "Global digital marketing launch strategy combining cinematic YouTube video ads, tech creator partnerships, and targeted social campaigns.",
    challenge: "Solaris required a high-impact global launch campaign to generate automotive pre-orders ahead of production.",
    solution: "Authored multi-channel video ad creative, coordinated automotive influencer activations, and managed targeted lead campaigns.",
    results: ["1.8M Unique Campaign Sessions", "14 Minute Average Dwell Time", "$48M in Online Vehicle Pre-Orders"],
    services: ["Global Brand Strategy", "Social Video Marketing", "Influencer Partnerships", "Lead Generation Funnels"],
    liveUrl: "https://solaris-ev.example.com",
    layoutType: "asymmetric",
  },
];

// In /src/data/agencyData.ts, replace the existing SERVICES array with this:
export const SERVICES: Service[] = [
  {
    id: "branding",
    number: "01",
    title: "BRANDING",
    category: "STRATEGIC",
    shortDescription: "Brand identity, logo design, visual guidelines, and brand positioning.",
    description: "Create a distinctive brand identity that resonates with your target audience and differentiates you from competitors.",
    deliverables: ["Brand Identity System", "Logo Design", "Visual Guidelines", "Brand Positioning Strategy"],
    techStack: ["Adobe Creative Suite", "Figma", "Canva"],
    previewImage: "https://images.unsplash.com/photo-1763705857736-2b4f16a33758?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "social-media",
    number: "02",
    title: "SOCIAL MEDIA",
    category: "PRACTICAL",
    shortDescription: "Content creation, community management, and social media marketing.",
    description: "Engage your audience and build brand awareness through strategic social media content and campaigns.",
    deliverables: ["Content Calendar", "Post Creation", "Community Management", "Social Media Strategy"],
    techStack: ["Meta Business Suite", "Hootsuite", "Canva", "Adobe Creative Suite"],
    previewImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "photography",
    number: "03",
    title: "PHOTOGRAPHY",
    category: "CREATIVE",
    shortDescription: "Professional product, lifestyle, and event photography.",
    description: "Capture stunning visuals that showcase your products and brand story effectively.",
    deliverables: ["Professional Photo Shoot", "Photo Editing", "Image Library", "Brand Photography"],
    techStack: ["Canon/Nikon DSLR", "Adobe Lightroom", "Photoshop"],
    previewImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "videography",
    number: "04",
    title: "VIDEOGRAPHY",
    category: "CREATIVE",
    shortDescription: "Promotional videos, commercials, and branded content production.",
    description: "Tell your brand story through compelling video content that drives engagement and conversions.",
    deliverables: ["Video Production", "Script Writing", "Editing", "Final Video Deliverable"],
    techStack: ["Sony/Canon Cameras", "Adobe Premiere Pro", "After Effects"],
    previewImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "shopify-store",
    number: "05",
    title: "SHOPIFY STORE",
    category: "TECHNICAL",
    shortDescription: "Custom Shopify store design, development, and optimization.",
    description: "Build a high-converting e-commerce store tailored to your brand and customer experience goals.",
    deliverables: ["Store Design", "Development", "Payment Setup", "Optimization"],
    techStack: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
    previewImage: "https://images.unsplash.com/photo-1763872011479-aa293bf083a8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "influencer-marketing",
    number: "06",
    title: "INFLUENCER MARKETING",
    category: "STRATEGIC",
    shortDescription: "Influencer partnerships, campaign management, and performance tracking.",
    description: "Amplify your brand reach and credibility through strategic influencer collaborations.",
    deliverables: ["Influencer Identification", "Partnership Management", "Campaign Tracking", "ROI Analysis"],
    techStack: ["AspireIQ", "Upfluence", "Social Blade", "Google Analytics"],
    previewImage: "https://images.unsplash.com/photo-1522860747050-bb0c1af38ae9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "seo",
    number: "07",
    title: "SEARCH ENGINE OPTIMIZATION",
    category: "PRACTICAL",
    shortDescription: "Technical SEO, keyword research, and content optimization.",
    description: "Increase organic visibility and drive qualified traffic through comprehensive SEO strategies.",
    deliverables: ["SEO Audit", "Keyword Research", "Content Strategy", "Technical Implementation"],
    techStack: ["Google Search Console", "Ahrefs", "SEMrush", "Google Analytics"],
    previewImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "meta-advertising",
    number: "08",
    title: "META ADVERTISING",
    category: "PRACTICAL",
    shortDescription: "Facebook and Instagram ad campaigns, targeting, and optimization.",
    description: "Reach your ideal customers on Facebook and Instagram with targeted advertising campaigns.",
    deliverables: ["Ad Campaign Setup", "Creative Assets", "Audience Targeting", "Performance Optimization"],
    techStack: ["Meta Ads Manager", "Facebook Pixel", "Instagram Insights"],
    previewImage: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "google-advertising",
    number: "09",
    title: "GOOGLE ADVERTISING",
    category: "PRACTICAL",
    shortDescription: "Google Ads search, shopping, and display campaigns.",
    description: "Drive immediate traffic and conversions with strategic Google Ads campaigns.",
    deliverables: ["Campaign Architecture", "Keyword Strategy", "Landing Page Optimization", "Conversion Tracking"],
    techStack: ["Google Ads", "Google Analytics", "Google Merchant Center"],
    previewImage: "https://images.unsplash.com/photo-1654277041042-8927699fcfd2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "software-development",
    number: "10",
    title: "SOFTWARE DEVELOPMENT",
    category: "TECHNICAL",
    shortDescription: "Custom web applications, mobile apps, and software solutions.",
    description: "Develop custom software solutions to streamline operations and enhance customer experiences.",
    deliverables: ["Requirement Analysis", "UI/UX Design", "Development", "Testing & Deployment"],
    techStack: ["React", "Node.js", "Python", "AWS"],
    previewImage: "https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=800&auto=format&fit=crop",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "AUDIT & STRATEGY",
    subtitle: "Analyzing your search position, ad performance, target audience, and competitors.",
    description: "Analyzing your search position, ad performance, target audience, and competitors.",
    deliverables: ["Competitor Ad Breakdown", "Technical SEO Audit", "Campaign Growth Roadmap"],
  },
  {
    number: "02",
    title: "CAMPAIGN ARCHITECTURE",
    subtitle: "Designing high-converting ad copy, landing pages, keyword structures, and audience segments.",
    description: "Designing high-converting ad copy, landing pages, keyword structures, and audience segments.",
    deliverables: ["High-Converting Ad Copy", "Audience Targeting Matrix", "Landing Page Wireframes"],
  },
  {
    number: "03",
    title: "EXECUTION & LAUNCH",
    subtitle: "Deploying Google Ads, Paid Social campaigns, technical SEO updates, and email automation flows.",
    description: "Deploying Google Ads, Paid Social campaigns, technical SEO updates, and email automation flows.",
    deliverables: ["Live Google Search & Meta Ads", "Technical SEO Implementation", "Klaviyo Email Sequences"],
  },
  {
    number: "04",
    title: "OPTIMIZATION & SCALING",
    subtitle: "Rigorous A/B testing of headlines, bid adjustments, landing page CRO, and ROAS scaling.",
    description: "Rigorous A/B testing of headlines, bid adjustments, landing page CRO, and ROAS scaling.",
    deliverables: ["Negative Keyword Filtering", "A/B Test Results", "ROAS Scaling Adjustments"],
  },
  {
    number: "05",
    title: "REPORTING & GROWTH",
    subtitle: "Transparent monthly analytics reporting detailing CPL, CAC, ROAS, and revenue growth.",
    description: "Transparent monthly analytics reporting detailing CPL, CAC, ROAS, and revenue growth.",
    deliverables: ["Looker Studio Dashboard", "Monthly Strategy Calls", "Quarterly Scaling Plans"],
  },
];

export const CAPABILITIES = [
  {
    number: "01",
    title: "SEARCH ENGINE OPTIMIZATION (SEO)",
    category: "ORGANIC",
    description: "Technical SEO Audits, Schema Structuring, Keyword Research, and Content Hubs.",
    desc: "Technical SEO Audits, Schema Structuring, Keyword Research, and Content Hubs.",
    tags: ["SEO Audits", "Google Schema", "Keyword Strategy", "Content Hubs"],
  },
  {
    number: "02",
    title: "PPC & PAID SEARCH (SEM)",
    category: "PAID MEDIA",
    description: "Google Search Ads, Shopping, Performance Max, and YouTube Ads.",
    desc: "Google Search Ads, Shopping, Performance Max, and YouTube Ads.",
    tags: ["Google Ads", "Performance Max", "Shopping Ads", "YouTube Ads"],
  },
  {
    number: "03",
    title: "PAID SOCIAL & CONTENT",
    category: "SOCIAL",
    description: "Meta Ads (Instagram/Facebook), TikTok Ads, LinkedIn Campaigns, and Video Reels.",
    desc: "Meta Ads (Instagram/Facebook), TikTok Ads, LinkedIn Campaigns, and Video Reels.",
    tags: ["Meta Ads", "TikTok Ads", "Reel Production", "LinkedIn Ads"],
  },
  {
    number: "04",
    title: "CONVERSION RATE OPTIMIZATION (CRO)",
    category: "CONVERSION",
    description: "A/B Testing, High-Converting Landing Page Copy, Heatmap Analysis, and Funnels.",
    desc: "A/B Testing, High-Converting Landing Page Copy, Heatmap Analysis, and Funnels.",
    tags: ["A/B Testing", "Landing Page Copy", "Heatmap Audits", "Funnels"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "VIRTUAL VELOCITY completely transformed our e-commerce marketing strategy. Our conversion rate surged by 185% in the first 90 days across Google Shopping and Meta Ads.",
    author: "MARCUS CHEN",
    role: "VP OF MARKETING",
    company: "NEXUS GLOBAL RETAIL",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    metric: "+185% CONVERSION RATE",
    year: "2026",
  },
  {
    id: "t2",
    quote: "Their Technical SEO and Content team scaled our B2B fintech organic search traffic from 15k to 450k monthly visitors. They deliver tangible ROI and transparent reporting.",
    author: "SARAH JENNINGS",
    role: "CHIEF MARKETING OFFICER",
    company: "VERTEX CAPITAL",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    metric: "450K MONTHLY VISITORS",
    year: "2025",
  },
  {
    id: "t3",
    quote: "The global digital launch campaign VIRTUAL VELOCITY executed for Solaris generated $48M in pre-orders. Their video ad creation and influencer strategy were flawless.",
    author: "DAVID KAISER",
    role: "HEAD OF BRAND MARKETING",
    company: "SOLARIS MOTORS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    metric: "$48M PRE-ORDERS GENERATED",
    year: "2026",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "scaling-ecommerce-conversion-rates-2026",
    title: "10 Proven Marketing Strategies to Scale E-Commerce Conversion Rates in 2026",
    excerpt: "Discover how Google Shopping optimization, personalized retargeting, and frictionless checkout funnels double online sales.",
    category: "E-COMMERCE & MARKETING",
    date: "AUG 24, 2026",
    readTime: "6 MIN READ",
    author: {
      name: "MARCUS CHEN",
      role: "HEAD OF MARKETING",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    content: [
      "E-commerce conversion optimization is no longer just about changing button colors. In 2026, consumer attention demands hyper-targeted ads and frictionless landing page messaging.",
      "By pairing Google Shopping ads with hyper-personalized Meta retargeting, online retailers can capture high-intent buyers at key stages in the purchase funnel.",
      "Mobile checkout friction remains the single largest cause of cart abandonment. Implementing targeted SMS reminders and one-click payment callouts increases conversion rates by up to 45%.",
    ],
  },
  {
    slug: "technical-seo-b2b-growth-guide",
    title: "The Ultimate Technical SEO & Search Marketing Guide for Enterprise B2B SaaS",
    excerpt: "How search schema data, Core Web Vitals audits, and authority topic clusters drive 300%+ organic lead growth.",
    category: "SEO & MARKETING",
    date: "AUG 18, 2026",
    readTime: "8 MIN READ",
    author: {
      name: "SARAH JENNINGS",
      role: "SEO DIRECTOR",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    },
    content: [
      "Search Engine Optimization has evolved beyond basic keyword stuffing. Modern search engines prioritize topical authority, technical site health, and verified schema markup.",
      "To dominate commercial search intent, B2B companies must structure their content into authoritative pillar clusters supported by granular technical case studies.",
    ],
  },
  {
    slug: "webgl-3d-web-experiences-future",
    title: "Why High-Impact Brand Storytelling & Video Content Drive Modern Campaigns",
    excerpt: "Visual storytelling and interactive brand experiences boost user dwell time by 400% while driving record campaign conversions.",
    category: "BRAND MARKETING",
    date: "AUG 12, 2026",
    readTime: "5 MIN READ",
    author: {
      name: "KAI HARADA",
      role: "CREATIVE DIRECTOR",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    content: [
      "Interactive digital brand experiences allow consumers to connect deeply with product stories directly in their browser.",
      "With high-fidelity video creative optimized for mobile feeds, brands can establish lasting emotional resonance.",
    ],
  },
];

export const STATS = [
  { label: "CAMPAIGNS MANAGED", value: "240+", note: "Google, Meta & SEO", detail: "Executed across United States & international markets" },
  { label: "AVERAGE ROAS GENERATED", value: "4.8x", note: "Across PPC & Social", detail: "Measured across Google & Meta campaigns" },
  { label: "ORGANIC TRAFFIC GROWTH", value: "320%", note: "Client Average", detail: "Technical SEO & content hub scaling" },
  { label: "CLIENT RETENTION RATE", value: "98%", note: "Long-Term Partnerships", detail: "Multi-year retainers & strategy support" },
];
