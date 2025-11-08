import React from "react";
import "./Clients.css";

// Logos import karo
import PMLN from "../assets/logos/pmln.jpg";
import PTI from "../assets/logos/pti.jpg";
import PPP from "../assets/logos/ppp.jpg";
import Mission1World from "../assets/logos/mission1world.jpg";
import EveryHuman from "../assets/logos/everyhuman.png";
import WFAid from "../assets/logos/wf-aid.jpg";
import RingShing from "../assets/logos/ring.png";
import AlmuntazrTV from "../assets/logos/almuntazar.png";
import MFEntertainment from "../assets/logos/mf.jpg";
import BinoriaMedia from "../assets/logos/binoria.jpg";
import ItalianPizza from "../assets/logos/italian.jpg";
import SalehaNaturals from "../assets/logos/saleha.jpg";
import AesthaticClinic from "../assets/logos/aesthetics.jpg";

const brands = [
  { name: "PMLN", logo: PMLN },
  { name: "PTI", logo: PTI },
  { name: "PPP", logo: PPP },
  { name: "Mission 1 World", logo: Mission1World },
  { name: "Every Human Matters Foundation", logo: EveryHuman },
  { name: "WF-Aid", logo: WFAid },
  { name: "Ring Shing", logo: RingShing },
  { name: "Almuntazr TV", logo: AlmuntazrTV },
  { name: "MF Entertainment", logo: MFEntertainment },
  { name: "Binoria Media", logo: BinoriaMedia },
  { name: "Italian Pizza", logo: ItalianPizza },
  { name: "Saleha Naturals", logo: SalehaNaturals },
  { name: "The Aesthatic Clinic By Shaista Lodhi", logo: AesthaticClinic },
];

const Clients = () => {
  return (
    <section id="clients" className="bg-black py-20 px-4 sm:px-6 md:px-8 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-500 mb-4">
          Trusted by Leading <span className="text-red-500">Brands</span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light">
          We help businesses of all sizes grow with proven digital strategies.
        </p>
      </div>

      {/* Marquee / Horizontal scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="flex flex-col items-center justify-center brand-container">
              <img
                src={brand.logo}
                alt={brand.name}
                className="brand-logo"
              />
              <p className="brand-name">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
