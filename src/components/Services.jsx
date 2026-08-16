import { useState } from 'react';
import { ArrowUpRight, Megaphone, Share2, BarChart3, Search, Palette, Film, Camera, Users, Globe, ShoppingCart, Database, Bot, Phone, Workflow, TrendingUp, Target, PenTool, Sparkles, CheckCircle2 } from 'lucide-react';
import './Services.css';

const CATEGORIES = ['ALL', 'DIGITAL MARKETING', 'CREATIVE PRODUCTION', 'AI & AUTOMATION', 'WEB & CRM'];

const SERVICES = [
  { category: 'DIGITAL MARKETING', icon: <Megaphone size={22} />, title: 'Digital Marketing & Growth', desc: 'Omni-channel marketing strategies driving qualified traffic, viral brand engagement, and predictable ROI.', tags: ['Strategy', 'Media Buying', 'Omnichannel'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80' },
  { category: 'DIGITAL MARKETING', icon: <Share2 size={22} />, title: 'Social Media Management', desc: 'End-to-end community building, high-converting organic content, and cross-platform brand positioning.', tags: ['Instagram', 'TikTok', 'LinkedIn', 'YouTube'], image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80' },
  { category: 'DIGITAL MARKETING', icon: <BarChart3 size={22} />, title: 'Meta, Google & TikTok Ads', desc: 'High-ROAS paid acquisition campaigns optimized with real-time conversion tracking and A/B ad creative testing.', tags: ['Meta Ads', 'PPC', 'Retargeting', 'Scale'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { category: 'DIGITAL MARKETING', icon: <Search size={22} />, title: 'Technical & Content SEO', desc: 'Dominate organic search rankings with deep technical optimization, high-authority backlink outreach, and keyword dominance.', tags: ['Technical SEO', 'Backlinks', 'Content Strategy'], image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=600&q=80' },

  { category: 'CREATIVE PRODUCTION', icon: <Target size={22} />, title: 'Brand Identity & Strategy', desc: 'Complete brand creation — logo marks, typography systems, voice guidelines, and visual positioning.', tags: ['Brand Identity', 'Styleguides', 'Positioning'], image: 'https://images.unsplash.com/photo-1542744094-3a3172720180?w=600&q=80' },
  { category: 'CREATIVE PRODUCTION', icon: <Palette size={22} />, title: '3D & Graphic Design', desc: 'Cutting-edge visual assets, 3D product renders, pitch decks, and ad creatives designed for conversion.', tags: ['3D Design', 'Ad Creatives', 'Visual Assets'], image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80' },
  { category: 'CREATIVE PRODUCTION', icon: <Film size={22} />, title: 'Cinematic Video Production', desc: 'Commercial shoots, promotional brand films, social media reels, and post-production editing.', tags: ['Commercials', 'Reels', 'Post Production'], image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80' },
  { category: 'CREATIVE PRODUCTION', icon: <Camera size={22} />, title: 'Photography & Drone', desc: 'High-definition corporate photography, product shoots, and 4K aerial drone videography.', tags: ['Product Photography', 'Drone 4K', 'Lifestyle'], image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80' },
  { category: 'CREATIVE PRODUCTION', icon: <Users size={22} />, title: 'Influencer Marketing', desc: 'Vetted creator match-making, contract management, and viral product seeding campaigns.', tags: ['Creators', 'Viral Seeding', 'KOL Management'], image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80' },

  { category: 'AI & AUTOMATION', icon: <Phone size={22} />, title: 'AI Voice Calling Agents', desc: 'Autonomous conversational voice agents for outbound lead qualification, appointment setting, and customer support.', tags: ['Voice AI', 'Outbound Sales', 'Inbound Call'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80' },
  { category: 'AI & AUTOMATION', icon: <Bot size={22} />, title: 'Custom AI Chatbots', desc: '24/7 intelligent LLM chatbots trained on your company knowledge base for multi-channel support.', tags: ['LLMs', 'WhatsApp Bots', 'Knowledge Base'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80' },
  { category: 'AI & AUTOMATION', icon: <Workflow size={22} />, title: 'Enterprise Workflow Automation', desc: 'Seamless API integrations connecting web traffic directly to your CRM, email, and fulfillment tools.', tags: ['Make.com', 'Zapier', 'Custom APIs'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80' },

  { category: 'WEB & CRM', icon: <Globe size={22} />, title: 'High-Performance Web Design', desc: 'Bespoke React / Vite / Next.js web applications engineered for speed, SEO, and maximum conversion rates.', tags: ['React', 'Next.js', 'Framer', 'Webflow'], image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
  { category: 'WEB & CRM', icon: <ShoppingCart size={22} />, title: 'E-Commerce Storefronts', desc: 'Custom Shopify, WooCommerce, and headless e-commerce builds designed for high average order values.', tags: ['Shopify Plus', 'Headless', 'Conversion Rate'], image: 'https://images.unsplash.com/photo-1556742049-0a6756da99ec?w=600&q=80' },
  { category: 'WEB & CRM', icon: <Database size={22} />, title: 'CRM & Sales Pipeline Dev', desc: 'HubSpot, GoHighLevel, and Salesforce custom setup with automated lead assignment and tracking.', tags: ['HubSpot', 'GoHighLevel', 'Sales Pipelines'], image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80' },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredServices = activeCategory === 'ALL'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="label"><Sparkles size={13} style={{ display: 'inline', marginRight: 4 }} /> Full-Service Digital Agency</span>
          <h2 className="heading-lg">
            Services Built for <span className="text-gradient">Market Leadership</span>
          </h2>
          <p className="text-lg">
            From strategic growth marketing to AI voice agents and custom web development.
          </p>
        </div>

        {/* Category Filters */}
        <div className="services-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`services-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Services Showcase */}
        <div className="services-grid">
          {filteredServices.map((s, i) => (
            <div key={i} className="service-card glass-card">
              <div className="service-card-image-wrap">
                <img src={s.image} alt={s.title} className="service-card-image" loading="lazy" />
                <div className="service-card-badge">{s.category}</div>
              </div>

              <div className="service-card-body">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>

                <div className="service-tags">
                  {s.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="service-tag">
                      <CheckCircle2 size={11} style={{ marginRight: 3, color: 'var(--primary)' }} />
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="btn btn-secondary service-btn">
                  Explore Solution <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
