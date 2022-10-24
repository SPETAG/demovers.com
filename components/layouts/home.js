// home page layout

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import home from './home.module.scss'
import Trans from '../../public/demoversTrans.jpeg'
import Ship from '../../public/demoverShipping.jpeg'
import Pack from '../../public/demoversPacking.jpeg'

export default function Homelay({ children }) {
  return (
    <>
      <Head>
        <title>De-movers, logistics</title>
      </Head>
      
      <div className={home.main}>
        <header className={home.header}>
          <nav className={home.nav}>
            <div>
              <a href="/">Home</a>
              <a href="#">Profile</a>
              <a href="#">Contact</a>
            </div>
          </nav>
        </header>
        <div className={home.btn}>
          <a href="#">Services</a>
        </div>
        
        <section className={home.midsection}>
          <div className={home.motto}>
            <p className={home.txt}>Your Logistics needs, Our Service</p>
          </div>
          
          <div className={home.whatwedo}>
            <Image className={home.trans} src={Trans} alt="demovers transport vehicle" />
            <Image id={home.ship} src={Ship} alt="demovers shipping" />
            <Image id={home.pack} src={Pack} alt="demovers packing" />
          </div>
        </section>
        
        <section className={home.wavecon}>
          <svg className={home.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f92e2e" fillOpacity="1" d="M0,32L48,58.7C96,85,192,139,288,170.7C384,203,480,213,576,202.7C672,192,768,160,864,160C960,160,1056,192,1152,176C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <div className={home.siscom}>
            <a className={home.name} href="#">Rangers Farm</a>
            <a className={home.name} href="#">Sky-Power</a>
          </div>
        </section>
        
        <section className={home.copy}>
          <span>&copy;2022, de-movers ltd.</span>
        </section>
      </div>
    </>
  )
}