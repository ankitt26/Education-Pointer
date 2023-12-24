import Navbar from './Navbar';

export default function Construction() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-5 font-sans">
        <div className="text-5xl text-gray-800 font-bold">
          ⚠️ Work in progress.......
        </div>
        <p className="text-2xl text-gray-500">
          ⚙️ The work is currently in progress,🎵 Stay tune for updates🧑🏿‍💻.
        </p>
      </div>
    </>
  );
}
