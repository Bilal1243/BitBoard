import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import bgimg from "../assets/bg-img.jpg";

const HomeScreen = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <Header active="Home" />
      <div className="backdrop-blur-sm bg-black/60 min-h-screen text-white flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 text-center drop-shadow-lg">
          WELCOME TO <span className="text-white">BitBoard</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl text-center">
          Experience world-class cuisine, drinks, and ambiance. Explore our menu
          or book your table now.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <Link
            to="/menu"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition"
          >
            View Menu
          </Link>
          <Link
            to="/reservation"
            className="border border-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full font-semibold transition"
          >
            Make a Reservation
          </Link>
        </div>

        <section className="mt-20 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400">
            At BitBoard, we bring passion to the plate. Our chefs craft dishes
            that combine tradition and innovation. Perfect for family dinners,
            romantic evenings, and special celebrations.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
