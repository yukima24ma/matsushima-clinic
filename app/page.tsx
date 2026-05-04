import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Departments from '@/components/Departments'
import Doctors from '@/components/Doctors'
import News from '@/components/News'
import Access from '@/components/Access'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="main-page">
        <Hero />
        <Departments />
        <Doctors />
        <News />
        <Access />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
