import styles from './Plans.module.css';
import useAuth from '../../hooks/useAuth';

// component
import Nav from '../../components/nav/Nav';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import Copyright from '../../components/copyright/Copyright';
import ContactForm from '../../components/contactForm/ContactForm';
import InvestmentCard from '../../components/investmentCard/InvestmentCard';

// invest text
import { investment } from '../../utils/investText';

export default function Plans() {
  const { authIsReady } = useAuth();


  return (authIsReady &&
    <div className={styles.container}>
      <Nav />
      <Hero title={investment.title} subtitle={investment.subtitle} image={investment.image} link={investment.link} shrink={true}/>
      <InvestmentCard title={investment.title2} subtitle={investment.subtitle2} plans={investment.plans} showHeader={true}/>
      <ContactForm />
      <Footer />
      <Copyright />
    </div>
  )
}
