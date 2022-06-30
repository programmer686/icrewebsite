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
    <h1>{data.map(item => (
      <h1>{item.id}</h1>
    ))}</h1>
    )
 }





