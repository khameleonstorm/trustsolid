import styles from './MarketPower.module.css';
import { useEffect } from 'react';

export default function MarketPower() {

  useEffect(() => {
    const script = document.createElement('script')
    const chartDiv = document.getElementById('marketpower')
    
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
    script.type = 'text/javascript'
    script.async = true
    
    const loadscript =  {
      "interval": "1m",
      "width": "100%",
      "isTransparent": true,
      "height": "100%",
      "symbol": "NASDAQ:AAPL",
      "showIntervalTabs": true,
      "locale": "en",
      "colorTheme": "light"
    }
    
    script.innerHTML = JSON.stringify(loadscript)
    chartDiv.appendChild(script)
  }, [])



  return (
    <div className={styles.container}>
      <div className={`${styles.tvcontainer}     tradingview-widget-container__widget`} id="marketpower">
      </div>
    </div>
  )
}