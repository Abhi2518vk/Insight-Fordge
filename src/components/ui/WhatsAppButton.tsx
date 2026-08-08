import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '917594835882';
  const defaultMessage = encodeURIComponent('Hello Insight Forge, I would like to schedule a product/architecture audit.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] transform hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <MessageSquare className="w-6 h-6 fill-white text-[#25D366] group-hover:rotate-12 transition-transform duration-300" />
      {/* Pulsing indicator ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 pointer-events-none" />
    </a>
  );
};
