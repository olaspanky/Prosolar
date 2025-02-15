"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { 
  FaCheckCircle, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';
import Nav from "@/app/components/Nav"

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Launch confetti
    setTimeout(() => {
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      
      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        
        const particleCount = 50 * (timeLeft / duration);
        
        // Launch confetti from both sides
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
    }, 500);
  }, []);

  if (!mounted) return null;

  return (
    <main className="bg-white ">
    <Nav/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Head>
        <title>Thank You for Your Submission</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-xl text-center relative overflow-hidden">
        {/* Animated sparkles */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-6 h-6 opacity-70 animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="#FFD700">
              <path d="M12 2L9.2 8.6 2 9.2 7 14.4 5.5 22 12 18.4 18.5 22 17 14.4 22 9.2 14.8 8.6z" />
            </svg>
          </div>
        ))}
        
        <div className="text-[#292ECF] text-7xl mb-6">
          <FaCheckCircle className="mx-auto" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#292ECF] to-purple-600 bg-clip-text text-transparent">
          Thank You!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          The quote has been sent to your mail. We appreciate your time and interest in our services.
        </p>
        
        <Link 
          href="/"
          className="inline-block bg-gradient-to-r from-[#292ECF] to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:-translate-y-1"
        >
          Return to Home
        </Link>
        
        <div className="mt-10 flex justify-center space-x-6">
          <SocialIcon icon={<FaTwitter />} href="#" />
          <SocialIcon icon={<FaFacebook />} href="#" />
          <SocialIcon icon={<FaInstagram />} href="#" />
          <SocialIcon icon={<FaLinkedin />} href="#" />
        </div>
      </div>
    </div>
    </main>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <a 
      href={href}
      className="text-gray-500 text-2xl transition-all hover:text-blue-600 hover:scale-125"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}