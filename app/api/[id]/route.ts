import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import connectMongoDb from '@/libs/db';
import Movie from '@/models/movie';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { title, publishingYear, poster } = await request.json() as {
      title: string;
      publishingYear: number;
      poster: string;
    };

    if (!id || !title || !publishingYear || !poster) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    await connectMongoDb();

    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, publishingYear, poster },
      { new: true } // This returns the updated document
    );

    if (!updatedMovie) {
      return NextResponse.json({ message: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Movie Updated", movie: updatedMovie }, { status: 200 });
  } catch (error) {
    console.error('Error updating movie:', error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
