export default function Location() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-8 bg-white">
      <div className="w-full max-w-7xl overflow-hidden shadow-lg border border-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.100259517037!2d8.477387053638813!3d46.96520926905677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478559ceeda15977%3A0x6b3e8f86e581de31!2sR%C3%B6m.-kath.%20Pfarramt%20Beckenried!5e0!3m2!1sen!2s!4v1784620487904!5m2!1sen!2s" 
          width="100%" 
          className="h-[400px] md:h-[600px] w-full border-0"
          allowFullScreen
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
          title="Ristorante Osteria Enoteca Ferriroli Location Map"
        />
      </div>
    </section>
  );
}