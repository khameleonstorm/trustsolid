// css import
import styles from './Policy.module.css';
import useAuth from '../../hooks/useAuth';

// component
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Copyright from '../../components/copyright/Copyright';
import HomeSec2 from '../../components/homeSec2/HomeSec2';
import ContactForm from '../../components/contactForm/ContactForm';

// policy page text
import { privacyHero } from '../../utils/privacypolicy';
import { homeSec5Text } from '../../utils/homeText';
import PrivacyPolicy from '../../components/privacypolicy/PrivacyPolicy';

export default function Policy() {
  const { authIsReady } = useAuth();


  return (authIsReady &&
    <div className={styles.container}>
      <Nav />
      <Hero title={privacyHero.title} subtitle={privacyHero.subtitle} image={privacyHero.image} link={privacyHero.link} shrink={true}/>
      <PrivacyPolicy />
      <HomeSec2 title={homeSec5Text.title} subtitle={homeSec5Text.subtitle} image={homeSec5Text.image} accordions={homeSec5Text.accordions} reverse={true}/>
      <ContactForm />
      <Footer />
      <Copyright />
    </div>
  )
}
