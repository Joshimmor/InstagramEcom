import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function POST (req){
    if(req.method != 'POST'){ return NextResponse.json({message:"method not allowed"})}
    const sentUser = await req.json()
    let foundUser = await prisma.user.findFirst({
        where:{
            username: sentUser.username,
            password: sentUser.password
        }
    })
     if(!foundUser){ return NextResponse.error()}
     return NextResponse.json(foundUser)
}