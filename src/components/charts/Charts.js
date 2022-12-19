import styles from './Charts.module.css';
import {Helmet} from "react-helmet";

export default function Charts() {


  return (
    <div className={styles.container}>
      <Helmet>
      <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
        <script type="text/javascript">
          {`
            new TradingView.widget({
              "container_id": "bigchart",
              "width": "100%",
              "height": "100%",
              "autosize": true,
              "symbol": "BINANCE:BTCUSDT",
              "interval": "D",
              "timezone": "exchange",
              "theme": "light",
              "style": "1",
              "withdateranges": true,
              "hide_side_toolbar": false,
              "allow_symbol_change": true,
              "save_image": false,
              "studies": [
                "ROC@tv-basicstudies",
                "StochasticRSI@tv-basicstudies",
                "MASimple@tv-basicstudies"
              ],
              "locale": "en"
              })
          `}
        </script>
      </Helmet>
      <div className={styles.chart1} id="bigchart">
      </div>
    </div>
  )
}