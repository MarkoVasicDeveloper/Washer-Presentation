export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden min-h-[200vh]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full object-cover z-0"
      >
        <source src="/videos/bg-hero.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
