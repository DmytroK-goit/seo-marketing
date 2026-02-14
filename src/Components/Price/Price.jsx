"use client";
import Image from "next/image";
import s from "./Price.module.scss";
import TrueIco from "../../img/price/true.png";
import FalseIco from "../../img/price/false.png";
import FrameUp from "../../img/frame_up.png";
import { useState } from "react";
export const Price = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const pricing = [
    {
      planeName: "Silver",
      price: "159",
      keyWords: true,
      topTen: true,
      weeklyReport: true,
      technicalSEO: true,
      competitorAnalysis: false,
      backlinkBuilding: false,
      contentOptimization: false,
      overSupport: false,
    },
    {
      planeName: "Gold",
      price: "399",
      keyWords: true,
      topTen: true,
      weeklyReport: true,
      technicalSEO: true,
      competitorAnalysis: true,
      backlinkBuilding: true,
      contentOptimization: false,
      overSupport: false,
    },
    {
      planeName: "Platinum",
      price: "549",
      keyWords: true,
      topTen: true,
      weeklyReport: true,
      technicalSEO: true,
      competitorAnalysis: true,
      backlinkBuilding: true,
      contentOptimization: true,
      overSupport: true,
    },
  ];

  const features = [
    { key: "keyWords", label: "50 Keywords Optimization" },
    { key: "topTen", label: "Top 10 Google Ranking" },
    { key: "weeklyReport", label: "Weekly Report" },
    { key: "technicalSEO", label: "Technical SEO" },
    { key: "competitorAnalysis", label: "Competitor Analysis" },
    { key: "backlinkBuilding", label: "Backlink Building" },
    { key: "contentOptimization", label: "Content Optimization" },
    { key: "overSupport", label: "24/7 Support" },
  ];

  return (
    <div className={s.price_sec}>
      <Image src={FrameUp} alt="SEO marketing illustration" priority />
      <div className={s.price_block}>
        <h2>Pricing & Plans</h2>
        <p className={s.price_block_p}>We offer best price in the market</p>

        <ul className={s.price_list}>
          {pricing.map((p, index) => (
            <li key={index} className={s.price_card}>
              <h3>{p.planeName}</h3>

              <p>
                $<span>{p.price}</span> / Per Month
              </p>

              <ul className={s.feature_list}>
                {features.map((feature) => (
                  <li key={index}>
                    <Image
                      src={p[feature.key] ? TrueIco : FalseIco}
                      alt="feature icon"
                      width={16}
                      height={16}
                    />
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(p.planeName)}
                className={`${s.price_btn} ${
                  selectedPlan === p.planeName ? s.active_plan : ""
                }`}
              >
                {selectedPlan === p.planeName ? "Selected" : "Choose Plan"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
