import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/actions/auth.action'

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated()
  
  // Prevent redirect loop by checking current path
  if (!isUserAuthenticated && typeof window !== 'undefined') {
    const currentPath = window.location.pathname
    if (!currentPath.startsWith('/sign-in')) {
      redirect('/sign-in')
    }
    return null // Prevent flash of protected content
  }

  return (
    <div className='auth-layout'>
      {children}
    </div>
  )
}

export default AuthLayout