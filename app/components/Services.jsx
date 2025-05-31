import React from "react";
import Image from "next/image";
import { serviceData } from "@/assets/assets";
import { assets } from "@/assets/assets";

const Services = () => {
  return (
    <div id='services' className="w-full px-[12%] 
      py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Building, enhancing, and maintaining websites and web applications. 
        front-end development to create visually appealing and responsive user interfaces.
        Additional offerings may include eCommerce development, CMS integration (such as WordPress or Shopify), 
        website performance optimization, and search engine optimization (SEO) to improve visibility online.
      </p>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
         {serviceData.map(({icon, title,description,link}, index) => (
            <div key={index} 
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black
            cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-3 duration-500 dark:hover:bg-gray-800 dark:hover:shadow-white">
                <Image src={icon} alt='' className="w-10"></Image>
                <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                  {description}
                </p>
                <a href={link} className="flex items-center gap-2 text-sm mt-5">
                  Read more <Image alt= "" src={assets.right_arrow} className='w-4'/>
                </a>
            </div>
         ))}
      </div>
    </div>
  );
};

export default Services;
