// import Head from 'next/head'
// import Image from 'next/image'
// import Footer from "../components/Footer"
import Footer2 from "../components/Footer2"
// import Hero2 from "../components/Hero2"
// import Hero from "../components/Hero"
import TailHero from "../components/TailHero"
// import Price from "../components/Price"
// import Price2 from "../components/Price2"
import PricingMamba from "../components/PricingMamba"




export default function Home() {
  return (
    <div className=''>
      <TailHero />
      {/* <div className="price flex m-auto mt-7 mb-7 justify-center gap-4">
        <Price2/>
        <Price />
        <Price2 />
      </div> */}
      <PricingMamba />
      <Footer2 />
    </div>
  )
}
