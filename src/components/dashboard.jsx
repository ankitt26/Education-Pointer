import Navbar from './Navbar';

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="w-full h-[70vh] flex flex-col justify-center items-center gap-5 font-sans">
            <div className="text-5xl text-gray-800 font-bold">
              ⚠️ Work in progress.......
            </div>
            <p className="text-2xl text-gray-500">
              ⚙️ The work is currently in progress,🎵 Stay tune for updates🧑🏿‍💻.
            </p>
          </div>
        </div>
      </main>{' '}
    </>
  );
}
