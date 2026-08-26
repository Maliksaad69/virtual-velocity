import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, PhoneCall, Sparkles, Play, Pause, Zap, ArrowRight } from 'lucide-react';
import './AISolutions.css';

const AI_CAPABILITIES = [
  { id: 'voice', icon: <PhoneCall size={20} />, title: 'Autonomous AI Voice Agents', desc: 'Natural-sounding AI call representatives handling outbound cold calls, lead qualification, and calendar booking.' },
  { id: 'chat', icon: <Bot size={20} />, title: '24/7 Intelligent Chatbots', desc: 'Custom LLM-powered assistants trained on your internal documentation for instant customer resolution.' },
  { id: 'pipeline', icon: <Zap size={20} />, title: 'Automated CRM Pipelines', desc: 'Real-time API integrations connecting website traffic, call logs, and deal stages automatically.' },
];

export default function AISolutions() {
  const [activeTab, setActiveTab] = useState('voice');
  const [isCalling, setIsCalling] = useState(false);
  const [callLog, setCallLog] = useState([
    { id: 1, sender: 'AI Agent', text: 'Hello! This is Sarah from Virtual Velocity. I saw your request regarding revenue scaling. Is this a good time to chat?' },
  ]);

  const handleSimulateCall = () => {
    if (isCalling) return;
    setIsCalling(true);
    setCallLog([
      { id: Date.now(), sender: 'AI Agent', text: 'Initiating automated outbound call to prospect line...' },
    ]);

    setTimeout(() => {
      setCallLog((prev) => [...prev, { id: Date.now(), sender: 'Prospect', text: 'Hi Sarah, yes! We are looking to scale our Meta & Google Ads.' }]);
    }, 1500);

    setTimeout(() => {
      setCallLog((prev) => [...prev, { id: Date.now(), sender: 'AI Agent', text: 'Awesome! Based on your target market, our automated funnel can increase your lead volume by 3x. Shall I book a strategy call for tomorrow at 2 PM?' }]);
    }, 3200);

    setTimeout(() => {
      setCallLog((prev) => [...prev, { id: Date.now(), sender: 'Prospect', text: 'Perfect, 2 PM works. Please send the calendar invite.' }]);
      setIsCalling(false);
    }, 5000);
  };

  return (
    <section className="section ai-solutions" id="ai-solutions">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="label"><Sparkles size={13} style={{ display: 'inline', marginRight: 4 }} /> Proprietary Tech</span>
          <h2 className="heading-lg">
            AI-Driven <span className="text-gradient">Automation Systems</span>
          </h2>
          <p className="text-lg">
            Replace manual outreach and support with 24/7 autonomous AI calling agents and workflow pipelines.
          </p>
        </motion.div>

        {/* Interactive Feature Tabs */}
        <motion.div
          className="ai-tabs-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {AI_CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.id}
              className={`ai-tab-card glass-card ${activeTab === cap.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cap.id)}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ y: -6, boxShadow: '0 15px 35px rgba(0, 212, 170, 0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="ai-tab-icon">{cap.icon}</div>
              <h3 className="ai-tab-title">{cap.title}</h3>
              <p className="ai-tab-desc">{cap.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Live Interactive Simulator Console */}
        <motion.div
          className="ai-simulator-console glass-card"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="console-header">
            <div className="console-title">
              <span className="status-indicator-dot pulsing" />
              <span>Live AI Voice Agent Simulation Console</span>
            </div>
            <div className="console-badge">Model: Velocity-Voice-v4</div>
          </div>

          <div className="console-body">
            <div className="console-chat-window">
              <AnimatePresence initial={false}>
                {callLog.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: log.sender === 'AI Agent' ? -30 : 30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`chat-bubble ${log.sender === 'AI Agent' ? 'agent' : 'prospect'}`}
                  >
                    <span className="chat-sender">{log.sender}</span>
                    <p className="chat-text">{log.text}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="console-controls">
              <motion.button
                className={`btn btn-primary ${isCalling ? 'calling' : ''}`}
                onClick={handleSimulateCall}
                disabled={isCalling}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isCalling ? <Pause size={18} /> : <Play size={18} />}
                {isCalling ? 'Simulating Live Call...' : 'Test Live AI Calling Agent'}
              </motion.button>

              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Deploy For My Business <ArrowRight size={16} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
