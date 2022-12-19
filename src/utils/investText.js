import invest from "../assets/sec3.png"


export const investment = {
  title: 'INVESTMENT',
  subtitle: 'Invest in the future of the world',
  title2: "PRICING",
  subtitle2: "TRUSTSOLID PACKAGES",
  image: invest,
  link: '#',
  plans: [
  {
    id: 1,
    percent: 15,
    min: 50,
    max: 300,
    title: "STANDARD PLAN",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Pro Personalized Portfolio", "5% Referral Bonus", "ROI After 24 hours", "Min Withdrawal → $20", "24/7 Customer Care"],
    background: "#FFE600", 
  },
  {
    id: 2,
    percent: 45,
    title: "MEDIUM PLAN",
    min: 300,
    max: 999,
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "5% Referral Bonus", "ROI After 24 hours", "Min Withdrawal → $20", "24/7 Customer Care"],
    background: "#00A3FF",   
  },
  {
    id: 3,
    percent: 75,
    min: 1000,
    max: 9999,
    title: "EXECUTIVE PLAN",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "5% Referral Bonus", "ROI After 48 hours", "Min Withdrawal → $20", "24/7 Customer Care"],
    background: "#b4ff3b",   
  },
  {
    id: 4,
    percent: 100,
    min: 10000,
    max: "Unlimited",
    title: "PROFESSIONAL PLAN",
    falsepoints: ["Management fee", "Deposit fee"],
    truepoints: ["Personalized Portfolio", "5% Referral Bonus", "ROI After 72 hours", "Min Withdrawal → $20", "24/7 Customer Care"],
    background: "#f67eff",    
  },
]};