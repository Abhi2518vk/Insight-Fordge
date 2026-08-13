import React, { useState } from 'react';
import { X, Calendar, Clock, Shield, Terminal, ArrowRight, MessageSquare, Check } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    bottleneck: '',
    bi: false,
    ai: false,
    dev: false
  });

  // Calculate the next 5 business days
  const getNextBusinessDays = () => {
    const days = [];
    const current = new Date();
    while (days.length < 5) {
      current.setDate(current.getDate() + 1);
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip Saturday and Sunday
        days.push(new Date(current));
      }
    }
    return days;
  };

  const businessDays = getNextBusinessDays();
  const [selectedDate, setSelectedDate] = useState<Date>(businessDays[0]);
  const [selectedTime, setSelectedTime] = useState<string>('2:00 PM');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const timeSlots = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePillar = (field: 'bi' | 'ai' | 'dev') => {
    setFormData(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBook = () => {
    setIsSubmitted(true);
  };

  const getWhatsAppMsg = () => {
    const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const selectedPillars = [];
    if (formData.bi) selectedPillars.push('BI & Analytics');
    if (formData.ai) selectedPillars.push('AI & Automation');
    if (formData.dev) selectedPillars.push('Software Engineering');

    const text = `Hello Insight Forge,
I would like to lock in my Architecture Audit.
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Interests: ${selectedPillars.join(', ') || 'N/A'}
Scheduled: ${dateStr} @ ${selectedTime}
Bottleneck: ${formData.bottleneck || 'N/A'}`;

    return `https://wa.me/917594835882?text=${encodeURIComponent(text)}`;
  };

  const getMailtoLink = () => {
    const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const selectedPillars = [];
    if (formData.bi) selectedPillars.push('BI & Analytics');
    if (formData.ai) selectedPillars.push('AI & Automation');
    if (formData.dev) selectedPillars.push('Software Engineering');

    const subject = encodeURIComponent(`Architecture Audit Request - ${formData.company}`);
    const body = encodeURIComponent(`Hello Insight Forge,

I have requested a Partner-led Architecture Audit.

Client Profile:
- Name: ${formData.name}
- Company: ${formData.company}
- Email: ${formData.email}
- Pillars: ${selectedPillars.join(', ') || 'N/A'}

Selected Slot:
- Date: ${dateStr}
- Time: ${selectedTime}

Operational Bottleneck:
${formData.bottleneck || 'N/A'}

Best regards,
${formData.name}`);

    return `mailto:insightforge.site@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-bg-dark/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-bg-surface border border-border-custom rounded-2xl shadow-2xl overflow-hidden z-10 animate-forge">
        {/* Glow accent */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-primary/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent-gold/10 blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-custom bg-bg-dark/60">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent-gold" />
            <span className="font-mono text-xs text-text-primary uppercase tracking-widest font-semibold">Consultation & Audit Hub</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-surface border border-transparent hover:border-border-custom transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {!isSubmitted ? (
            <div>
              {/* Steps Progress indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-custom/30">
                <div className="flex gap-4 items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${step === 1 ? 'bg-brand-primary text-text-primary' : 'bg-bg-dark border border-border-custom text-text-secondary'}`}>1</div>
                  <span className={`font-display text-xs uppercase tracking-wider font-semibold ${step === 1 ? 'text-text-primary' : 'text-text-secondary'}`}>Organization Profile</span>
                </div>
                <div className="h-[1px] bg-border-custom flex-1 mx-4 hidden sm:block" />
                <div className="flex gap-4 items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${step === 2 ? 'bg-brand-primary text-text-primary' : 'bg-bg-dark border border-border-custom text-text-secondary'}`}>2</div>
                  <span className={`font-display text-xs uppercase tracking-wider font-semibold ${step === 2 ? 'text-text-primary' : 'text-text-secondary'}`}>Select Consultation Slot</span>
                </div>
              </div>

              {step === 1 ? (
                <form onSubmit={handleNext} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Your Full Name</label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Company / Org</label>
                      <input
                        type="text"
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Corporate Work Email</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@acme.com"
                      className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  {/* Pillars Checklist selection */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Technical Focus Areas</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => togglePillar('bi')}
                        className={`px-3 py-1.5 rounded border font-mono text-[9px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          formData.bi ? 'bg-brand-primary/10 border-brand-primary text-accent-gold' : 'bg-bg-dark border-border-custom text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        [ {formData.bi ? 'X' : ' '} ] BI & Analytics
                      </button>
                      <button
                        type="button"
                        onClick={() => togglePillar('ai')}
                        className={`px-3 py-1.5 rounded border font-mono text-[9px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          formData.ai ? 'bg-brand-primary/10 border-brand-primary text-accent-gold' : 'bg-bg-dark border-border-custom text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        [ {formData.ai ? 'X' : ' '} ] AI & Automation
                      </button>
                      <button
                        type="button"
                        onClick={() => togglePillar('dev')}
                        className={`px-3 py-1.5 rounded border font-mono text-[9px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          formData.dev ? 'bg-brand-primary/10 border-brand-primary text-accent-gold' : 'bg-bg-dark border-border-custom text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        [ {formData.dev ? 'X' : ' '} ] Product Engineering
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] text-text-secondary uppercase tracking-widest">Brief description of operational bottleneck</label>
                    <textarea
                      required
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleChange}
                      rows={3}
                      placeholder="e.g. database speed bottlenecks, automated reporting delays, custom pipeline setups..."
                      className="bg-bg-dark border border-border-custom hover:border-brand-primary focus:border-brand-primary rounded-lg px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-lg font-display text-xs font-semibold uppercase tracking-wider bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all flex items-center justify-center gap-2 animate-pulse-slow"
                  >
                    <span>Proceed to Slot Selector</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="flex flex-col gap-6">
                  {/* Calendar layout */}
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                      Select Target Audit Date
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {businessDays.map((date, idx) => {
                        const isSelected = selectedDate.toDateString() === date.toDateString();
                        const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
                        const dayNum = date.getDate();
                        const month = date.toLocaleDateString('en-US', { month: 'short' });
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedDate(date)}
                            className={`p-3 rounded-lg border text-center transition-all cursor-pointer flex flex-col gap-1 ${
                              isSelected
                                ? 'bg-brand-primary/10 border-brand-primary text-text-primary shadow-[0_4px_12px_rgba(79,70,229,0.2)]'
                                : 'bg-bg-dark border-border-custom text-text-secondary hover:text-text-primary hover:border-border-custom/80'
                            }`}
                          >
                            <span className="font-mono text-[8px] uppercase tracking-wider text-accent-gold">{weekday}</span>
                            <span className="font-display font-bold text-sm">{dayNum}</span>
                            <span className="font-mono text-[8px] uppercase">{month}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-primary" />
                      Select Audit Time (Your Local Timezone)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((slot, idx) => {
                        const isSelected = selectedTime === slot;
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedTime(slot)}
                            className={`px-4 py-2 rounded-lg border font-mono text-xs transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-brand-primary/15 border-brand-primary text-text-primary'
                                : 'bg-bg-dark border-border-custom text-text-secondary hover:text-text-primary'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Summary card */}
                  <div className="bg-bg-dark border border-border-custom/60 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[8px] text-text-secondary uppercase tracking-widest">Audit Schedule Locked In</span>
                      <span className="text-xs font-semibold text-text-primary">
                        {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} @ {selectedTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-accent-gold bg-bg-surface px-3 py-1.5 rounded border border-border-custom/50">
                      <Shield className="w-3.5 h-3.5" />
                      <span>SECURE PARTNER SESSION</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-3 rounded-lg border border-border-custom hover:border-text-secondary text-text-secondary hover:text-text-primary font-mono text-xs transition-colors"
                    >
                      &larr; Back
                    </button>
                    <button
                      onClick={handleBook}
                      className="flex-1 py-3 rounded-lg font-display text-xs font-semibold uppercase tracking-wider bg-brand-primary text-text-primary hover:bg-brand-secondary transition-all shadow-[0_0_15px_rgba(79,70,229,0.25)] flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Confirm & Reserve Audit Slot</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center flex flex-col items-center gap-6 py-6">
              <div className="w-14 h-14 rounded-full bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center text-accent-gold mb-2 animate-bounce">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-xl text-text-primary">Your Audit Slot is Requested</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                We have registered your session on <span className="text-text-primary font-semibold">{selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span> at <span className="text-text-primary font-semibold">{selectedTime}</span>. All submitted bottlenecks are fully protected under our unilateral NDA protocol.
              </p>

              {/* Instant Escalation options */}
              <div className="w-full bg-bg-dark border border-border-custom rounded-xl p-5 text-left flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary font-semibold">Immediate Team Dispatches</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  For immediate coordination and real-time scheduling confirmation, choose an instant transport channel below:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={getWhatsAppMsg()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-mono text-xs font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={getMailtoLink()}
                    className="py-2.5 px-4 rounded-lg bg-brand-primary hover:bg-brand-secondary text-text-primary font-mono text-xs font-semibold text-center flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Send Secure Email</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-lg border border-border-custom hover:border-brand-primary text-text-secondary hover:text-text-primary font-mono text-xs transition-colors"
              >
                Close Portal
              </button>
            </div>
          )}
        </div>

        {/* NDA Protocol seal */}
        <div className="bg-bg-dark/80 border-t border-border-custom px-6 py-4 flex items-center gap-3">
          <Shield className="w-5 h-5 text-accent-gold flex-shrink-0" />
          <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider leading-relaxed">
            SYSTEM DISPATCH SECURED BY UNILATERAL COMPLIANCE MUTUAL NDA PROTECTIONS.
          </span>
        </div>
      </div>
    </div>
  );
};
