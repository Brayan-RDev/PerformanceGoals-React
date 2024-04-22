import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {

  return (
    <div className="flex justify-center shadow-lg border-t-[1px] border-t-black">
      <div className="container flex flex-col items-center py-4">
        <p className='text-xl font-bold text-black'>BRAFarma | Copyright: </p>
        <p className='text-lg text-black'>Acesse nossas redes sociais</p>
        <div className='flex gap-2'>
          <LinkedinLogo size={48} weight='bold' className='text-black' />
          <InstagramLogo size={48} weight='bold' className='text-black' />
          <FacebookLogo size={48} weight='bold' className='text-black' />
        </div>
      </div>
    </div>
  )
}