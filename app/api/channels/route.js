import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(req,res){
    if(req.method != 'GET'){ return NextResponse.json({message:"method not allowed"})}
    let channel = await req.url.split("=")[1]
    channel.includes("%20") ? channel = channel.replace(/%20/g,' ') : null
    let foundChannel = await prisma.channel.findMany({
        where:{
            channelName:{
                contains: channel
            }
        }
    })
   
     if(!foundChannel){ return  NextResponse.error()}
     return NextResponse.json(foundChannel)
}