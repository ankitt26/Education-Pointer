import Navbar from './Navbar';
import AboutImg from '../assets/images/about.png';
export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-white h-screen">
        <div className="flex flex-row justify-between items-center gap-20 sm:px-4 lg:px-10">
          <div className="mx-auto max-w-2xl sm:py-48 lg:py-24">
            <div className="text-left">
              <p className="text-3xl text-slate-700 pb-6"> O_O</p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                We’re changing the way You Learn & Grow.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Embark on a transformative educational journey at our
                institution, where unlocking potential is at the heart of our
                mission. We seamlessly blend academic excellence with
                cutting-edge technology, providing an innovative and immersive
                learning experience. Join us as knowledge converges with
                innovation, paving the way for brilliance and ensuring your
                success in every test and beyond.
              </p>
            </div>
          </div>

          <div className="w-80 y-80 mr-10  flex-nowrap">
            <img
              src={AboutImg}
              // src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
              alt="image"
              className=" w-80 mt-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
