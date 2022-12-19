import faqIMG from '../assets/hero-img.svg';
import faqIMG2 from '../assets/about-img.svg';
import fiat from '../assets/fiat.svg';
import mobility from '../assets/mobility.svg';
import mining from '../assets/mining.svg';
import security from '../assets/securityicon.svg';


export const faqHero = {
  title: 'Cryptocurrency Unraveled',
  subtitle: 'Understand the basics of crypto and why we believe it is the future. Get answers to all your questions about cryptocurrency.',
  image: faqIMG,
  link: '#',
}

export const faqFirstText = {
  title1: 'Crypto basics?',
  title2: 'Cryptocurrency?',
  title3: 'Crypto vs Fiat?',
  text1: "Ready to embark on a journey to gain valuable knowledge on the subject of blockchain and cryptocurrency? Here’s the perfect starting point!",
  text2: 'Cryptocurrency is a digital currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Cryptocurrencies use decentralized control as opposed to centralized digital currency and central banking systems.',
  text3: "Cryptocurrency and fiat money are stores of value that can be used as a medium of exchange. Neither has any real value on its own. A big difference between them is fiat is backed by a government and hence its supply is determined by that government.",
  image: faqIMG2,
};



export const services = {
  title: 'Advantages of Crypto',
  card: [
    {
      title: 'No Inflation',
      text: "Fiat money is prone to inflation over time, a million Naira does not have the same buying power today that it did ten years ago. The issuing government can print more notes whenever necessary and increase the supply of the currency in circulation thereby depreciating the value of the currency.",
      image: fiat,
    },
    {
      title: 'Global Mobility',
      text: "Cryptocurrency facilitates cross-border payments faster and easier than fiat money can ever hope to. Using fiat for cross-border transactions requires that you give the bank private information and you have to rely on them to set up the transaction. With crypto, there are no borders and international transactions are instantaneous..",
      image: mobility,
    },
    {
      title: 'Privacy',
      text: "Currently, the central banks have control over every information passed during a fiat transaction. Whenever you initiate a wire transfer or payment, the banks know exactly how much you are sending and who you are sending it to. With Crypto, the transaction details are still made public in the ledger, but all personal information is kept private and secure.",
      image: security,
    },
    {
      title: 'Crypto Mining',
      text: "Crypto mining is the process of adding transaction records to the public ledger of a cryptocurrency. This ledger of past transactions is called the blockchain. The blockchain serves to confirm transactions to the rest of the network as having taken place. Bitcoin miners are processing transactions and securing the network using specialized hardware and are collecting new bitcoins in exchange.",
      image: mining,
    },
  ]
}