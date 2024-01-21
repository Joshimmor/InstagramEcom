import Link from 'next/link'
import Image from 'next/image'
export default function Products({id,logo,name}) {
  return (
        <Link  href={`/player/${id}`}
        className='w-full h-1/4 p-4'
        > 
          <div
                   className="rounded box-content h-60 w-full overflow-hidden shadow-lg" 
                   style={{
                    backgroundImage: `url(${logo})`,
                    backgroundPosition:"center",
                    backgroundSize:'contain'
                  }}
          />
        </Link>

  )
}
