import { useState, useRef } from "react";
import { wallet } from "../../utils/fund";
import { VscCopy } from "react-icons/vsc";
import styles from "./Funding.module.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Funding() {
  const [coin, setCoin] = useState(0);
  const [copy, setCopy] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);


  const handleChange = (e) => {
    setCoin(e.target.value)
  }

  const handleClick =  (e) => {
    if (e === "copy") {
      setCopy(true)
    }
  }


  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false)
        setCopy(false)
      }, 3000);
    } catch (err) {
      setCopySuccess(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <FormControl sx={{ minWidth: 120 }} size="small" className={styles.form}>
          <InputLabel id="demo-select-small">Coin</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={coin}
              label="Coin"
              onChange={handleChange}
              style={{fontSize: ".8rem"}}
            >

            <MenuItem value={0}>Bitcoin</MenuItem>
            <MenuItem value={1}>Ethereum</MenuItem>
            <MenuItem value={2}>USDT</MenuItem>
          </Select>
        </FormControl>

        <div className={styles.qr}>
            <img src={wallet[coin].image} alt="QR code" loading="lazy"/>
            <input
            type="text"
            ref={textAreaRef}
            value={wallet[coin].address}
            disabled
            />
        </div>

        <div className={styles.text}>
          <p>Send only <span>{wallet[coin].title}({wallet[coin].network}) </span>to this address, sending any other coin may result to permanent loss</p>
        </div>

        <div className={styles.icons}>
          <div className={styles.icon}>
            <a href="#icon" onClick={() => handleClick("copy")}>
              <VscCopy onClick={() => copyToClipBoard(wallet[coin].address)} size="4em" style={copy && {color: "#00e99b"}}/>
            </a>
            {!copySuccess && <p>Copy</p>}
            {copySuccess && <p>Copied!</p>}
          </div>
        </div>

      </div>
    </div>
  )
  }
