import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <div>
      <h1 className="text-6xl font-bold text-center">University of Cyprus Microgrid</h1>
      <p className="text-xl italic text-center">Control, Monitor, Optimize, and Improve; Making a Greener Future through Intelligent Grid Systems</p>
    </div>
    <Image 
      src="/ucy_chatgpt_art.jpg" 
      alt="UCY Microgrid" 
      width={1920} 
      height={1080} 
    />
    </>
  );
}
