import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import AboutMe from '../components/AboutMe';
import Resume from '../components/Resume';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <AboutMe />
      <Resume />
      <ContactForm />
      <Footer />
    </>
  );
}
