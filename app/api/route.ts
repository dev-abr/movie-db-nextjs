import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import path from 'path';
import { writeFile, unlink } from 'fs/promises';

import connectMongoDb from "@/libs/db";
import Movie from "@/models/movie";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDb();
    const data = await request.formData();
    const file = data.get('poster') as File;

    if (!file) {
        return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }
    
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const filePath = path.join(process.cwd(), 'public', file.name); // Use path.join for cross-platform compatibility
    await writeFile(filePath, buffer);

    const newMovie = {
        title: data.get('title') as string,
        publishingYear: parseInt(data.get('publishingYear') as string, 10),
        poster: file.name
    };
    await Movie.create(newMovie);
    return NextResponse.json({ message: "Movie Created", movie: newMovie }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating movie:', error);
    return NextResponse.json({ message: "Error processing file" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectMongoDb();

    // Get pagination parameters from query
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);
    const skip = (page - 1) * limit;

    // Fetch movies with pagination
    const movies = await Movie.find().skip(skip).limit(limit);

    // Count total movies for pagination info
    const totalMovies = await Movie.countDocuments();
    const totalPages = Math.ceil(totalMovies / limit);

    // Return the movies and pagination info
    return NextResponse.json({ 
      movies, 
      pagination: {
        currentPage: page,
        totalPages,
        totalMovies
      }
    }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching movies:', error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    
    if (!id)
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    
    await connectMongoDb();

    const movie = await Movie.findById(id);
    
    if (!movie)
      return NextResponse.json({ message: "Movie not found" }, { status: 404 });

    // Delete the file
    const filePath = path.join(process.cwd(), 'public', movie.poster);
    await unlink(filePath);
    
    // Delete the movie record
    await Movie.findByIdAndDelete(id);
    return NextResponse.json({ message: "Movie Deleted" }, { status: 200 });
  } catch (error: any) {
    console.error('Error deleting movie:', error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
