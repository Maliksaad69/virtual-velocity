import { useState } from 'react';
import { Bot, PhoneCall, Mic, Sparkles, CheckCircle2, Play, Pause, Zap, ArrowRight, Database, MessageSquare } from 'lucide-react';
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
    { sender: 'AI Agent', text: 'Hello! This is Sarah from Virtual Velocity. I saw your request regarding revenue scaling. Is this a good time to chat?' },
  ]);

  const handleSimulateCall = () => {
    setIsCalling(true);
    setCallLog([
      { sender: 'AI Agent', text: 'Initiating automated outbound call to prospect line...' },
    ]);

    setTimeout(() => {
      setCallLog((prev) => [...prev, { sender: 'Prospect', text: 'Hi Sarah, yes! We are looking to scale our Meta & Google Ads.' }]);
    }, 1500);

    setTimeout(() => {
      setCallLog((prev) => [...prev, { sender: 'AI Agent', text: 'Awesome! Based on your target market, our automated funnel can increase your lead volume by 3x. Shall I book a strategy call for tomorrow at 2 PM?' }]);
    }, 3200);

    setTimeout(() => {
      setCallLog((prev) => [...prev, { sender: 'Prospect', text: 'Perfect, 2 PM works. Please send the calendar invite.' }]);
      setIsCalling(false);
    }, 5000);
  };

  return (
    <section className="section ai-solutions" id="ai-solutions">
      <div className="container">
        <div className="section-header">
          <span className="label"><Sparkles size={13} style={{ display: 'inline', marginRight: 4 }} /> Proprietary Tech</span>
          <h2 className="heading-lg">
            AI-Driven <span className="text-gradient">Automation Systems</span>
          </h2>
          <p className="text-lg">
            Replace manual outreach and support with 24/7 autonomous AI calling agents and workflow pipelines.
          </p>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="ai-tabs-container">
          {AI_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className={`ai-tab-card glass-card ${activeTab === cap.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cap.id)}
            >
              <div className="ai-tab-icon">{cap.icon}</div>
              <h3 className="ai-tab-title">{cap.title}</h3>
              <p className="ai-tab-desc">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Live Interactive Simulator Console */}
        <div className="ai-simulator-console glass-card">
          <div className="console-header">
            <div className="console-title">
              <span className="status-indicator-dot pulsing" />
              <span>Live AI Voice Agent Simulation Console</span>
            </div>
            <div className="console-badge">Model: Velocity-Voice-v4</div>
          </div>

          <div className="console-body">
            <div className="console-chat-window">
              {callLog.map((log, i) => (
                <div key={i} className={`chat-bubble ${log.sender === 'AI Agent' ? 'agent' : 'prospect'}`}>
                  <span className="chat-sender">{log.sender}</span>
                  <p className="chat-text">{log.text}</p>
                </div>
              ))}
            </div>

            <div className="console-controls">
              <button
                className={`btn btn-primary ${isCalling ? 'calling' : ''}`}
                onClick={handleSimulateCall}
                disabled={isCalling}
              >
                {isCalling ? <Pause size={18} /> : <Play size={18} />}
                {isCalling ? 'Simulating Live Call...' : 'Test Live AI Calling Agent'}
              </button>

              <a href="#contact" className="btn btn-secondary">
                Deploy For My Business <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
