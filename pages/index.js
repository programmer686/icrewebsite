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
    <div className='container'>{data.map(item => (
      <h1 className="box" key={item.id}>{item.title}</h1>
    ))}</div>
    )
 }





