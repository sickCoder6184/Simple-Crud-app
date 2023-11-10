import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {title, description}= await req.json() // destructoring data
    await connectMongoDB();
    await Topic.create({title,description});
    return NextResponse.json({message:"topic is created "})
}

export async function GET() {
    await connectMongoDB();
    const alltopics = await Topic.find();
    return NextResponse.json({ alltopics });
  }

export async function DELETE(req) {
    const id=req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic Deleted"})
}