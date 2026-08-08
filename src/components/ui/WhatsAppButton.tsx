import React from 'react';

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
      {/* Official WhatsApp SVG logo */}
      <svg
        className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform duration-300"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.99C16.554 1.874 14.077.842 11.44.842c-5.441 0-9.864 4.422-9.867 9.867-.001 1.748.469 3.453 1.36 4.985l-1.01 3.692 3.784-.993zm11.233-5.94c-.31-.154-1.83-.901-2.11-.1.01-.278-.125-.412-.228-.562l-.744-1.09c-.113-.165-.2-.31-.05-.53.11-.16.49-.57.74-.88.11-.14.2-.31.1-.53-.1-.22-.92-2.22-1.26-3.04-.33-.8-.67-.69-.92-.7-.24-.01-.52-.01-.8.01-.28.01-.73.11-1.12.53-.38.42-1.47 1.44-1.47 3.5s1.5 4.07 1.7 4.35c.21.28 2.95 4.5 7.15 6.31 1 .43 1.78.69 2.39.88 1.01.32 1.93.28 2.66.17.81-.12 2.49-1.02 2.84-2 1.01-1.01.31-1.92.23-2.08-.07-.16-.27-.24-.58-.4z" />
      </svg>
      {/* Pulsing indicator ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 pointer-events-none" />
    </a>
  );
};
