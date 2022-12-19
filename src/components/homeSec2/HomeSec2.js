import styles from './HomeSec2.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function HomeSec2({ title, subtitle, image, accordions, reverse }) {
  return (
    <div className={reverse? styles.container2 : styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.accordions}>
          {accordions.map((accordion, index) => (
            <Accordion key={index} className={styles.acc}>
              <AccordionSummary
                expandIcon={<MdOutlineKeyboardArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3><span>0{index +1}</span>{accordion.title}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{accordion.text}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      <div className={reverse? styles.right2 : styles.right}>
        <img src={image} alt={title} />
      </div>
    </div>
  )
}
