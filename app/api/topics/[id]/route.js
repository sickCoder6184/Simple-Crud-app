const { default: connectMongoDB } = require("@/libs/mongodb");
const { default: Topic } = require("@/models/topic");
const { NextResponse } = require("next/server");

export const PUT=async(req,{params})=>{  //destructuring params so we can use single parameter
    const {id}=params;
    const {newTitle:title,newDescription:description}=await req.json();

    await connectMongoDB()
    await Topic.findByIdAndUpdate(id,{title,description})

    return NextResponse.json({message:"topic updated"})
}

export const GET=async(req,{params})=>{  //destructuring params so we can use single parameter
    const {id}=params;

    await connectMongoDB()
    const oneTopic=await Topic.findOne({_id: id})

    return NextResponse.json({oneTopic})
}