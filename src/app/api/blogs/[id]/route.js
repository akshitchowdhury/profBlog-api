import connectMongoDb from "@/libs/mongodb";
import ProfBlogs from "@/models/ProfBlogs";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){

    const {id} = params;

    // client,project,
    // description,price,
    // category

    const {
        newTitle : title,
        newDescription : description,
        newSource : source,
        newAuthor : author,
    } = await request.json()

    await connectMongoDb();

    await ProfBlogs.findByIdAndUpdate(id, {
        title,
        description,
        source,
        author
    })

    return NextResponse.json({message: "Blog succesfully Edited"}, {status: 200})
}


export async function GET(request, {params}){

    const {id} = params;
    await connectMongoDb();
    const blogs = await ProfBlogs.findOne({_id: id})
    return NextResponse.json({blogs}, {status: 200})
}