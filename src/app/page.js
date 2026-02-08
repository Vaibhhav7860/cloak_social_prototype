import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroTransformation from '@/components/home/HeroTransformation';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroTransformation />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
