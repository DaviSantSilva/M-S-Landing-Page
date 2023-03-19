import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <div className='bg-green-500 p-56 h-36 w-40 text-xl' >hello world!</div>
    </>
  )
}
