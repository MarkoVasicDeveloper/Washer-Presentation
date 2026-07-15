export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Tepih Servis <span className="text-blue-600">Sjaj</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Vrhunsko pranje i sušenje tepiha. Brzo, čisto i profesionalno.
        </p>
        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all">
          Zakažite pranje
        </button>
      </div>
    </main>
  );
}
