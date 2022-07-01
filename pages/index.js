import prisma from '../lib/prisma'
import Image from "next/image"
export async function getStaticProps() {
  const movies = await prisma.user.findMany()
  return {
    props: {
      data: movies
    }
  } 
}


export default function Home({data}) {
  return (
    <>
    <div>{data.map(item =>{
      <h1>{item.title}</h1>
      
    })}</div>
    <Image 
    src="/podcast.jpg"
    alt="Galaxy"
    width={1000}
    height={750}/>
    </>
  )

  }