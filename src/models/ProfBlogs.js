import { Schema } from "mongoose";
import mongoose from "mongoose";



const blogSchema = new Schema(
  {
    title : String,
        description : String,
        source : String,
        author : String
    },

  {
    timestamps: true,
  }
);

const ProfBlogs = mongoose.models.ProfBlogs || mongoose.model("ProfBlogs", blogSchema);

export default ProfBlogs;
