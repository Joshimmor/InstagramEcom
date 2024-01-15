import Link from 'next/link'
import Image from 'next/image'
export default function Products({id,logo,name}) {
  return (
        <Link  href={`/player/${id}`}
         className="rounded overflow-hidden shadow-lg" 
         style={{
          width:'20vw',
          height:'20vh',
          backgroundImage: `url(${logo})`,
          backgroundPosition:"center",
          backgroundSize:'contain'
        }}/>

  )
}
