import image1 from "../assets/Images/image-1.webp";
import image2 from "../assets/Images/image-2.webp";
import image3 from "../assets/Images/image-3.webp";
import image4 from "../assets/Images/image-4.webp";
import image5 from "../assets/Images/image-5.webp";

export default function Gallery() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="mt-20 w-full ">
      {/* Acts exactly like Spotlight */}
      <div className="flex justify-center gap-6 px-4 max-w-7xl mx-auto ">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-[260px] h-[340px] overflow-hidden rounded-2xl shrink-0 rotate-[-2deg] hover:rotate-0 transition-all duration-500 cursor-pointer shadow-lg"
          >
            <img
              src={img}
              alt={`Gallery ${i}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
