import Link from 'next/link'
import { ReactNode } from 'react'
import Image from "next/image"
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated()

  // Only add this check to prevent redirect loops
  if (typeof window !== 'undefined') {
    const isAuthRoute = window.location.pathname.startsWith('/sign-in') || 
                       window.location.pathname.startsWith('/sign-up')
    
    if (!isUserAuthenticated && !isAuthRoute) {
      redirect('/sign-in')
    }
  }

  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex item-center gap-2'>
          <Image src="/logo.svg" alt="Logo" height={32} width={38} />
          <h2 className='text-primary-100'>PrepWise</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout