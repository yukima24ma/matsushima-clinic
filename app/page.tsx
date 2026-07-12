import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Departments from '@/components/Departments'
import Doctors from '@/components/Doctors'
import News from '@/components/News'
import Access from '@/components/Access'
import Footer from '@/components/Footer'
import LocalSeo from '@/components/LocalSeo'
import MobileBottomBar from '@/components/MobileBottomBar'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main className="main-page">
        <Hero />
        <Departments />
        <Doctors />
        <LocalSeo />
        <News />
        <Access />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  )
}
