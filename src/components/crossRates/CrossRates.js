import styles from './CrossRates.module.css';
import { useEffect } from 'react';

export default function CrossRates() {

  useEffect(() => {
    const script = document.createElement('script')
    const chartDiv = document.getElementById('crossrates')
    
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"
    script.type = 'text/javascript'
    script.async = true
    
    const loadscript =      {
      "width": "100%",
      "height": "100%",
      "currencies": [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY"
      ],
      "isTransparent": true,
      "colorTheme": "light",
      "locale": "en"
    }
    
    script.innerHTML = JSON.stringify(loadscript)
    chartDiv.appendChild(script)
  }, [])



  return (
    <div className={styles.container}>
      <div className={`${styles.tvcontainer}     tradingview-widget-container__widget`} id="crossrates">
      </div>
    </div>
  )
}