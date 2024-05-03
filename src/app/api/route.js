
import ProfBlogs from "@/models/ProfBlogs";
import connectMongoDb from "@/libs/mongodb";
 
import { connect } from "mongoose"
import { NextResponse } from "next/server";


//post or add a topic

export async function POST(request){

    const{
        title,
        description,
        source,
        author
            } = await request.json()

    await connectMongoDb();
    await ProfBlogs.create({
        title,
        description,
        source,
        author
                })

    return NextResponse.json({message: "Blogs created"}, {status: 201})
}

//fetch all topics

export async function GET(){
    await connectMongoDb();
   const blogs = await ProfBlogs.find()

   return NextResponse.json({blogs})
}


//delete a topic

export async function DELETE(request){

    const id = request.nextUrl.searchParams.get("id") //Technique to search id and delete in next JS via params

    await connectMongoDb();
    await ProfBlogs.findByIdAndDelete(id)
    return NextResponse.json({message: 'Blog Deleted'}, {status: 200})
}

