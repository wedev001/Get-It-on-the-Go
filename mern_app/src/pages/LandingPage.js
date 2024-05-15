import React from 'react';
import { Link } from 'react-router-dom';
import VideoBG from '../assets/NEWLAND.mp4'
import Suraj from '../assets/Suraj.png'
import Aditya from '../assets/Aditya.jpg'
import Aditya2 from '../assets/aditya2.jpeg'

function LandingPage() {
  return (
    <div>

<section>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <video src={VideoBG} autoPlay loop muted/>
    <p className="text-xl text-gray-600 mb-8 text-center">
    </p>
  </div>
  </section>

  <section>
    
  </section>

      <section>
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading font-bold mb-8">About Us</h2>
        <p className="text-lg mb-12">
          We are a team of passionate developers who love building great products.
        </p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ProfileCard
          name="Suraj Kumar"
          title="CEO & Founder"
          image={Suraj}
          description="John is a seasoned entrepreneur with over 10 years of experience in the tech industry. He loves building products that solve real-world problems."
        />
        <ProfileCard
          name="Aditya Mishra"
          title="CTO & Co-Founder"
          image={Aditya}
          description="Jane is a talented engineer with a deep passion for technology. She leads our engineering team and is responsible for building our platform."
        />
        <ProfileCard
          name="Aditya Singh"
          title="Head of Design"
          image={Aditya2}
          description="Mike is a creative designer with a keen eye for detail. He leads our design team and is responsible for creating beautiful user experiences."
        />
      </div>
</div>
<div className="flex flex-col sm:flex-row sm:justify-center items-center bg-gray-100">
      <Link to = {"/login"} className="bg-custom-50 hover:text-black text-white font-bold p-6 rounded-full text-2xl hover:scale-110 transition-all shadow-lg ">Enter Our Website</Link>
        </div>

    </section>
    </div>
  );
}

function ProfileCard({ name, title, image, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-110 transition-all">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-6 hover:scale-110 transition-all" />
      <h3 className="text-xl font-heading font-bold mb-2">{name}</h3>
      <p className="text-lg mb-4">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default LandingPage;