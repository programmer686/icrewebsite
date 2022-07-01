import prisma from '../lib/prisma'

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
    
    <div className="flex justify-center w-screen h-screen bg-red items-center">{data.map(item => (
      <h1 className="shadow-lg" key={item.id}>{item.title}</h1>
    ))}</div>
    )
 }





