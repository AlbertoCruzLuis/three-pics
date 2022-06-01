import { PicsSection } from 'feature/Pics/content/PicsSection'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [auth] = useLocalStorage('auth');
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      if (!auth) {
        router.push("/login")
      }
    }, 1000)
  }, [auth])

  return (
    <div>
      <PicsSection />
    </div>
  )
}

export default Home
