import styles from './AppleChart.module.css';
import {Helmet} from "react-helmet";

export default function AppleChart() {

  return (
    <div className={styles.container}>
      <Helmet>
      <script type="text/javascript">
        {`
            new TradingView.MediumWidget(
              {
              "symbols": [
                [
                  "Bitcoin",
                  "BINANCE:BTCUSDT|12M"
                ],
                [
                  "Meta",
                  "NASDAQ:META|12M"
                ],
                [
                  "Apple",
                  "NASDAQ:AAPL|12M"
                ],
                [
                  "Google",
                  "NASDAQ:GOOG|12M"
                ]
              ],
              "chartOnly": false,
              "width": "100%",
              "height": 500,
              "locale": "en",
              "colorTheme": "light",
              "isTransparent": false,
              "autosize": true,
              "adaptiveMode": true,
              "showVolume": true,
              "hideDateRanges": false,
              "scalePosition": "right",
              "scaleMode": "Normal",
              "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
              "fontSize": "10",
              "noTimeScale": false,
              "valuesTracking": "1",
              "chartType": "line",
              "backgroundColor": "rgba(0, 0, 0, 0)",
              "container_id": "tvchart1"
            })
        `}
      </script>
      </Helmet>
      <div 
      className={`${styles.chart} tradingview-widget-container`}
      id="tvchart1"
      >
      </div>
    </div>
  )
}