import Footer from "@/components/footer/footer";
import MovieAddUpdate from "@/components/movies/movie";

export default function Home() {
  { }
  return (
    <main className="bg-[#003645] text-white min-h-screen">
      <div className="container mx-auto flex justify-between items-center text-white text-[28px] max-sm:pl-[20px] lg:text-[60px] font-bold pt-[50px] pb-[70px]">
        Create a new movie
      </div>

      <MovieAddUpdate/>
      <Footer/>
    </main>
  );
}

