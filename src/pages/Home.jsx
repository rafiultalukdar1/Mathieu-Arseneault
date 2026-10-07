import Hero from '../components/home/Hero';
import About from '../components/home/About';
import FeaturedProperties from '../components/home/FeaturedProperties';
import Agency from '../components/home/Agency';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProperties />
      <Agency />
      <Testimonials />
    </>
  );
}
