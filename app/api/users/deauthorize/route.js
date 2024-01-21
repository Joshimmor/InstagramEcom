import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET (req){
    if(req.method != 'GET'){ return NextResponse.json({message:"method not allowed"})}
    const cookieStore = cookies()
    const login = cookieStore.get('grandpatv')
    cookieStore.delete(login.name)
     return NextResponse.json({"data":"Goodbye World"})
}