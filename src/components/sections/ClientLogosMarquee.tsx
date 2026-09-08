"use client";

const CLIENT_LOGOS_ROW_1 = [
  { src: "/VV LOGOS/VV LOGOS/Anta logo/Anta logo.png", alt: "Anta" },
  { src: "/VV LOGOS/VV LOGOS/Blue world city/Blue world city.png", alt: "Blue World City" },
  { src: "/VV LOGOS/VV LOGOS/Glamar/Glamar.png", alt: "Glamar" },
  { src: "/VV LOGOS/VV LOGOS/Gloria Jeans/Gloria Jeans logo.png", alt: "Gloria Jeans" },
  { src: "/VV LOGOS/VV LOGOS/Megazone/Megazone logo.png", alt: "Megazone" },
  { src: "/VV LOGOS/VV LOGOS/Mughlai/Mughlai logo.png", alt: "Mughlai" },
  { src: "/VV LOGOS/VV LOGOS/Pamir/Pamir.png", alt: "Pamir" },
  { src: "/VV LOGOS/VV LOGOS/Red apple/Red apple.png", alt: "Red Apple" },
  { src: "/VV LOGOS/VV LOGOS/TSL/TSL.png", alt: "TSL" },
  { src: "/VV LOGOS/VV LOGOS/Unied nations/Unied nations.png", alt: "United Nations" },
  { src: "/VV LOGOS/VV LOGOS/andaz/andaz.png", alt: "Andaz" },
  { src: "/VV LOGOS/VV LOGOS/ariston/ariston.png", alt: "Ariston" },
  { src: "/VV LOGOS/VV LOGOS/capital arena/capital arena.png", alt: "Capital Arena" },
  { src: "/VV LOGOS/VV LOGOS/chaaye khana/chaaye khana.png", alt: "Chaaye Khana" },
  { src: "/VV LOGOS/VV LOGOS/chinaar/chinaar.png", alt: "Chinaar" },
];

const CLIENT_LOGOS_ROW_2 = [
  { src: "/VV LOGOS/VV LOGOS/cresto/cresto.png", alt: "Cresto" },
  { src: "/VV LOGOS/VV LOGOS/de asthethic/de asthethic transparent.png", alt: "De Aesthetic" },
  { src: "/VV LOGOS/VV LOGOS/desi chapter/desi chapter.png", alt: "Desi Chapter" },
  { src: "/VV LOGOS/VV LOGOS/galaxy hayatabad/Untitled-1.png", alt: "Galaxy Hayatabad" },
  { src: "/VV LOGOS/VV LOGOS/iplexmarketing/iplexmarketing.png", alt: "IPlex Marketing" },
  { src: "/VV LOGOS/VV LOGOS/kapacious/kapacious.png", alt: "Kapacious" },
  { src: "/VV LOGOS/VV LOGOS/levante/levante.png", alt: "Levante" },
  { src: "/VV LOGOS/VV LOGOS/maple vista/maple vista.png", alt: "Maple Vista" },
  { src: "/VV LOGOS/VV LOGOS/media sniffers/media sniffers.png", alt: "Media Sniffers" },
  { src: "/VV LOGOS/VV LOGOS/oxbite/oxbite.png", alt: "Oxbite" },
  { src: "/VV LOGOS/VV LOGOS/pizza hut/pizza hut.png", alt: "Pizza Hut" },
  { src: "/VV LOGOS/VV LOGOS/revival/revival.png", alt: "Revival" },
  { src: "/VV LOGOS/VV LOGOS/shake wake/shake wake.png", alt: "Shake Wake" },
  { src: "/VV LOGOS/VV LOGOS/slice and cone/slice and cone transparent.png", alt: "Slice and Cone" },
  { src: "/VV LOGOS/VV LOGOS/wild wings/wild wings logo.png", alt: "Wild Wings" },
];

interface LogoTileProps {
  src: string;
  name: string;
}

const LogoTile = ({ src, name }: LogoTileProps) => {
  return (
    <div className="flex items-center justify-center w-44 h-24 sm:w-56 sm:h-32 md:w-64 md:h-36 lg:w-72 lg:h-40 shrink-0 rounded-2xl bg-zinc-900 border border-zinc-800">
      {/* Logo: white + blurred by default; sharp + original colors while pressed */}
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="max-h-[75%] max-w-[75%] object-contain brightness-0 invert opacity-80 blur-[2px] hover:opacity-100 hover:scale-110 active:brightness-100 active:invert-0 active:blur-none active:scale-105 transition-all duration-300 cursor-pointer"
      />
    </div>
  );
};

export const ClientLogosMarquee = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-y border-zinc-800 bg-zinc-950 overflow-hidden select-none space-y-8 sm:space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-2">
        <p className="text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-[0.25em] text-center mb-2">
          Proven Track Record • Featured Clients
        </p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-50 text-center leading-none">
          Brands We&apos;ve <span className="text-emerald-400">Powered</span>
        </h3>
      </div>

      {/* Row 1 — Left → Right */}
      <div className="hover-marquee whitespace-nowrap overflow-hidden py-2">
        <div className="animate-marquee-left animate-marquee-slow inline-flex items-center gap-8 sm:gap-12 md:gap-14 px-4 sm:px-8 align-middle">
          {[...CLIENT_LOGOS_ROW_1, ...CLIENT_LOGOS_ROW_1, ...CLIENT_LOGOS_ROW_1].map((logo, idx) => (
            <LogoTile key={`r1-${idx}`} src={logo.src} name={logo.alt} />
          ))}
        </div>
      </div>

      {/* Row 2 — Right → Left */}
      <div className="hover-marquee whitespace-nowrap overflow-hidden py-2">
        <div className="animate-marquee-right animate-marquee-slow inline-flex items-center gap-8 sm:gap-12 md:gap-14 px-4 sm:px-8 align-middle">
          {[...CLIENT_LOGOS_ROW_2, ...CLIENT_LOGOS_ROW_2, ...CLIENT_LOGOS_ROW_2].map((logo, idx) => (
            <LogoTile key={`r2-${idx}`} src={logo.src} name={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};
