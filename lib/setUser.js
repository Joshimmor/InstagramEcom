"use server"
import { cookies } from 'next/headers'
 
export async function create(data) {
  const oneDay = 24 * 60 * 60 * 1000
  cookies().set('grandpatv', data,{ expires: Date.now() + ( oneDay * 675) })
}