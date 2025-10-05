import Image from "next/image";
import Background from "/public/assets/background.png";
import Character from "/public/assets/char.png";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src={Background}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0"
      />

      {/* Character Image */}
      <div className="absolute bottom-20 left-1/2 transform scale-140 -translate-x-1/2 z-10">
        <Image
          src={Character}
          alt="Character image"
          width={Character.width * 10}
          height={Character.height * 10}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
