import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'


const page = () => {
  return (
    <>
    <section className='card-cta'>

      <div className='flex flex-col gap-6 maw-w-lg'>
        <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>

        <p className='text-lg'>
      Practice on real interview question & get instat feedback
        </p>

        <Button asChild className='btn-primary max-sm:w-full'>
      <Link href= "/interview"> Start an Interview</Link>
        </Button>

      </div>

        <Image src="/robot.png" alt="robo-friend" width={400} height={400} className="max-sm:hidden" />
      

      </section> 

      <section className='flex flex_col gap-6 mt-8'>
      <h2>Your Interview</h2>
      <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard {... interview} key={interview.id}/>
        ))}
      </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
           <h2>Take a Interview</h2>
        <div className='interviews-section'>
           {dummyInterviews.map((interview)=>(
          <InterviewCard {... interview} key={interview.id}/>
        ))}

        {/* <p> You haven&apos;t taken any interview yet</p> */}
        </div>
      </section>
    </>
  )
}

export default page
