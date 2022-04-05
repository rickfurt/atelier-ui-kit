import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Button} from "../components/common/Button";

const Home: NextPage = () => {
  return (
    <>
<h1>Home</h1>
<Button theme={'primary'} text={'button'} />
    </>
  )
}

export default Home
