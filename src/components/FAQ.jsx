import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQS = [
  { q: 'What services does Virtual Velocity Marketing offer?', a: 'We provide a comprehensive suite of digital services including digital marketing, social media management, paid advertising (Meta, Google, TikTok), SEO, brand strategy, creative design, video production, photography, influencer marketing, web design & development, e-commerce, CRM development, AI chatbots, AI voice agents, business automation, and lead generation.' },
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope and complexity. A brand identity project typically takes 3-4 weeks, website development 6-8 weeks, and ongoing marketing campaigns are managed monthly. We always provide detailed timelines during the discovery phase.' },
  { q: 'What is your pricing structure?', a: 'We offer flexible pricing including project-based quotes, monthly retainers, and performance-based models. Every project starts with a free consultation where we understand your goals and provide a transparent, detailed proposal.' },
  { q: 'Do you work with businesses of all sizes?', a: 'Yes! We work with startups, SMBs, and enterprise-level businesses across all industries. Our scalable solutions are tailored to match your specific needs and budget, whether you are launching a new brand or scaling an established one.' },
  { q: 'How do you measure success and ROI?', a: 'We use advanced analytics and reporting tools to track KPIs specific to your goals — from lead generation and conversion rates to brand awareness and engagement metrics. You receive detailed monthly reports with actionable insights.' },
  { q: 'What makes your AI solutions different?', a: 'Our AI solutions are built specifically for marketing and sales workflows. From intelligent chatbots to AI calling agents, we integrate cutting-edge AI technology with your CRM and business processes to automate lead qualification, customer support, and appointment booking — delivering 24/7 performance.' },
  { q: 'Can you handle international projects?', a: 'Absolutely. We have experience working with clients across the Middle East, Europe, and North America. Our team is equipped to handle multi-language campaigns and culturally relevant content strategies for global markets.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label">FAQ</span>
          <h2 className="heading-lg">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          className="faq-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="faq-chevron" />
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
