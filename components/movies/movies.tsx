
interface CardProps {
  image: string,
  title: string,
  year: number,
}
export default function MovieCard({ image, title, year }: CardProps) {
  { }
  return (
      <div className="bg-[#002d39] hover:bg-[#094a57] rounded-[20px] shadow-lg overflow-hidden">
        <img src={image}  alt="Image 1" className="w-full rounded-[20px]   lg:p-[10px] h-[500px] max-sm:h-[300px] object-cover"  />
        <div className="p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="">{year}</p>
        </div>
      </div>
  );

}
