"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import MovieCard from "@/components/movies/movies";
import Footer from "@/components/footer/footer";
import Pagination from "@/components/pagination/pagination";



const ITEMS_PER_PAGE = 8;
export default function Home() {
  interface Movie {
    image: string;
    title: string;
    year: number;
  }
  const router = useRouter();
  const movies: Movie[] = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayQuUkQCIf9i3kdrsBg1UKAXF3OB2PX0JkQ&usqp=CAU',  
      title: 'Movie Title 1',
      year: 2021,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Y2EgPOJnEjAh-pk-bL3P9cEOfqKM8PjG3w&usqp=CAU',  
      title: 'Movie Title 2',
      year: 2022,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pE07m7D0vREW-v9L3EQjp8Q7fd1JDv5n9g&usqp=CAU',  
      title: 'Movie Title 3',
      year: 2023,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSbt8Kpp7yPwf7F4l9q5Ap5Z6vD_27aR6pw&usqp=CAU',  
      title: 'Movie Title 4',
      year: 2024,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 5',
      year: 2021,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 6',
      year: 2022,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 7',
      year: 2023,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 8',
      year: 2024,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 9',
      year: 2021,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 10',
      year: 2022,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 11',
      year: 2023,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 12',
      year: 2024,
    },{
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayQuUkQCIf9i3kdrsBg1UKAXF3OB2PX0JkQ&usqp=CAU',  
      title: 'Movie Title 1',
      year: 2021,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Y2EgPOJnEjAh-pk-bL3P9cEOfqKM8PjG3w&usqp=CAU',  
      title: 'Movie Title 2',
      year: 2022,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pE07m7D0vREW-v9L3EQjp8Q7fd1JDv5n9g&usqp=CAU',  
      title: 'Movie Title 3',
      year: 2023,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSbt8Kpp7yPwf7F4l9q5Ap5Z6vD_27aR6pw&usqp=CAU',  
      title: 'Movie Title 4',
      year: 2024,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 5',
      year: 2021,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 6',
      year: 2022,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 7',
      year: 2023,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 8',
      year: 2024,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 9',
      year: 2021,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 10',
      year: 2022,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 11',
      year: 2023,
    },
    {
      image: 'https://via.placeholder.com/150',  
      title: 'Movie Title 12',
      year: 2024,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);

  // Slice the movies array to get only the movies for the current page
  const paginatedMovies = movies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <main className="bg-[#003645] text-white">

      <div className="container mx-auto flex justify-between items-center text-white text-[38px] font-bold pt-[50px] pb-[50px ]">
        <div className="text-left">
          <p className="">My Movies </p>
        </div>
        <div className="text-right">
          <button onClick={() => router.push('/')} className="text-lg">Logout</button>
        </div>
      </div>

      {paginatedMovies.length != 0 ?
        <div className=" flex min-h-screen flex-col items-center justify-between p-[10px] ">
          <div className="container mx-auto">
            <div className="grid  gap-6 max-sm:grid-cols-2 grid-cols-4">
              {paginatedMovies.map((movie, index) => (
                <div key={index}>
                  <MovieCard image={movie.image} title={movie.title} year={movie.year} />
                </div>
              ))}

            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />



        </div> :
        <div className="text-center mt-[300px] mb-[300px] font-bold">
          <h1 className=" text-[56px]">
            Your Movie list is empty
          </h1>
          <button
            onClick={() => router.push('/movie/create')}
            type="submit"
            className="px-4 py-2 bg-green-500 w-[200px] h-[60px] text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 ml-2 mt-[20px]"
          >
            Add a new movie
          </button>
        </div>}
      <Footer />
    </main>
  );
}
