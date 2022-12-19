// css import
import styles from './About.module.css';
import useAuth from '../../hooks/useAuth';

// component
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Copyright from '../../components/copyright/Copyright';
import AboutUs from '../../components/aboutUs/AboutUs';
import HomeSec2 from '../../components/homeSec2/HomeSec2';
import ContactForm from '../../components/contactForm/ContactForm';

// about page text
import { aboutHero } from '../../utils/aboutText';
import { homeSec5Text } from '../../utils/homeText';

export default function About() {
  const { authIsReady } = useAuth();


  return (authIsReady &&
    <div className={styles.container}>
      <Nav />
      <Hero title={aboutHero.title} subtitle={aboutHero.subtitle} image={aboutHero.image} link={aboutHero.link} />
      <AboutUs />
      <HomeSec2 title={homeSec5Text.title} subtitle={homeSec5Text.subtitle} image={homeSec5Text.image} accordions={homeSec5Text.accordions} reverse={true}/>
      <ContactForm />
      <Footer />
      <Copyright />
    </div>
  )
}
