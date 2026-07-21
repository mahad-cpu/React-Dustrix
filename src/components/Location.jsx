export default function Location() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-8 bg-white">
      <div className="w-full max-w-7xl overflow-hidden shadow-lg border border-slate-200">
        <iframe 
          src="https://google.com" 
          width="100%" 
          className="h-[400px] md:h-[600px] w-full border-0"
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ristorante Osteria Enoteca Ferriroli Location Map"
        />
      </div>
    </section>
  );
}
