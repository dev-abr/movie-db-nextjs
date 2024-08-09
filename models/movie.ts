import mongoose, { Schema, Document, Model } from "mongoose";

interface IMovie extends Document {
  title: string;
  publishingYear: number;
  poster: string;
}

const movieSchema = new Schema<IMovie>(
  {
    title: { type: String, required: true },
    publishingYear: { type: Number, required: true },
    poster: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Movie: Model<IMovie> = mongoose.models.Movie || mongoose.model<IMovie>("Movie", movieSchema);

export default Movie;
