import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req,res){
    if(req.method != 'GET'){ return NextResponse.json({message:"method not allowed"})}
    let sentUser = await req.url.split("=")[1]

    let foundSub = await prisma.subscriptions.findMany({
        where:{
            userid: sentUser
        },
        select:{
            channelid:true
        }
    })
    let channels = []
    for(let i = 0; i < foundSub.length;i++){
        let foundChannel = await prisma.channel.findFirst({
            where:{
                id: foundSub[i].channelid
            }
        })
        channels.push(foundChannel)
    }
     if(channels.length <= 0){ return  NextResponse.json([])}
     return NextResponse.json(channels)
}
export async function POST(req,res){
    if(req.method != 'POST'){ return NextResponse.json({message:"method not allowed"})}
    let body = await req.json()
    console.log(body)
    const insertedRow = await prisma.subscriptions.create({
        data:{
            userid: body.user,
            channelid: body.subChannel.id
            }
      });

     return NextResponse.json(insertedRow)
}
export async function PUT(req,res){
    if(req.method != 'PUT'){ return NextResponse.json({message:"method not allowed"})}
    let body = await req.json()
    console.log(body)
    let foundSub = await prisma.subscriptions.findFirst({
        where:{
            userid: body.user,
            channelid: body.subChannel.id
        },
        select:{
            id: true
        }
    })
    const deletedRow = await prisma.subscriptions.delete({
        where:{
             id : foundSub.id
            }
      });

     return NextResponse.json(deletedRow)
}