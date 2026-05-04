import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Departments from '@/components/Departments'
import Doctors from '@/components/Doctors'
import News from '@/components/News'
import Access from '@/components/Access'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Departments />
        <Doctors />
        <News />
        <Access />
      </main>
      <Footer />
    </>
  )
}
