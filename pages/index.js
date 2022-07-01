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
    <>
    <div>{data.map(item =>{
      <h1>{item.title}</h1>
      
    })}</div>
    
    </>
  )

  }

  export async function getStaticProps()