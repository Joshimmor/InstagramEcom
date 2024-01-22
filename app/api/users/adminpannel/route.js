import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(req){
    if(req.method != 'GET'){ return NextResponse.json({message:"method not allowed"})}
    let adminID= await req.url.split("=")[1]
    let foundUsers = await prisma.user.findMany({})
     if(!foundUsers){ return NextResponse.error()}
     return NextResponse.json(foundUsers)
}
export async function POST(req){
    if(req.method != 'POST'){ return NextResponse.json({message:"method not allowed"})}
    let adminID = await req.url.split("=")[1]
    let adminUser = await prisma.user.findFirst({
            where:{
                id:adminID
            }
    })
    if(!adminUser){ return NextResponse.error()}
    let newUser = await req.json()
    console.log(newUser)
    let addedUser = await prisma.user.create({
        data:newUser
    })
     if(!addedUser){ return NextResponse.error()}
     return NextResponse.json(addedUser)
}
export async function PUT(req){
    if(req.method != 'PUT'){ return NextResponse.json({message:"method not allowed"})}
    let adminID = await req.url.split("=")[1]
    let adminUser = await prisma.user.findFirst({
            where:{
                id:adminID
            }
    })
    if(!adminUser){ return NextResponse.error()}
    let deltedUser = await req.json()
    let foundUsers = await prisma.user.delete({
        where:{
            id:deltedUser.id
        }
    })
     return NextResponse.json(foundUsers)
}