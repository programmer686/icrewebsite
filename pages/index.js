
import { headers } from '../next.config'
import Image from 'next/image';




export default function Home({images}) {

  return (
    <div className='bg-black w-auto h-auto p-10 flex justify-center items-center flex-col'>
      <h1 className='text-white text-[50px] text-center'>Cloudinary<br/> Alojamiento gratuito en la nube para photos y imagenes<br/>es gratis hasta 10GB</h1>
      <div className=''>{images.map(image => {
      return (
     <Image
     src={image.image}
     alt=""
     width={350}
     height={350}
     key={image.id} />
   )
 })}</div>
    </div>
        
        
  )
}
  

  export async function getStaticProps() {
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
      }
    }).then(r => r.json())
  
    const { resources } = results;

    const images = resources.map(resource => {
      
      return {
        id: resource.asset_id,
        title: resource.public_id,
        image: resource.secure_url,
        width: resource.width,
        height: resource.height

      }
    })

    return {
      props: {
        images
      }
    }
  }

  /**/ 