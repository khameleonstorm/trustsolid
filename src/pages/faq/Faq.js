import styles from './Faq.module.css';
import useAuth from '../../hooks/useAuth';

// importing components
import Nav from '../../components/nav/Nav';
import StarterFaq from '../../components/starterFaq/StarterFaq';
import Hero from '../../components/hero/Hero';
import HomeSec1 from '../../components/homeSec1/HomeSec1';
import ContactForm from '../../components/contactForm/ContactForm';
import Footer from '../../components/footer/Footer';
import Copyright from '../../components/copyright/Copyright';

// importing component text
import { faqHero, services } from '../../utils/faq';

export default function Faq() {
  const { authIsReady } = useAuth();


  return (authIsReady &&
    <div className={styles.container}>
      <Nav />
      <Hero title={faqHero.title} subtitle={faqHero.subtitle} image={faqHero.image} link={faqHero.link}/>
      <StarterFaq />
      <HomeSec1 title={services.title} card={services.card} />
      <ContactForm />
      <Footer />
      <Copyright />
    </div>
  )
}
