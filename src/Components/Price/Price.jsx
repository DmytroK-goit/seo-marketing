"use client";
import Image from "next/image";
import s from "./Price.module.scss";
import TrueIco from "../../img/price/true.png";
import FalseIco from "../../img/price/false.png";
import FrameUp from "../../img/frame_up.png";
import Popular from "../../img/price/popular.png";
import { useState } from "react";
import Link from "next/link";
export const Price = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const pricing = [
    {
      planeName: "Silver",
      popular: false,
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
      popular: true,
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
      popular: false,
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
    <div id="price" className={s.price_sec}>
      <Image src={FrameUp} alt="SEO marketing illustration" priority />
      <div className={s.price_block}>
        <h2>Pricing & Plans</h2>
        <p className={s.price_block_p}>We offer best price in the market</p>

        <ul className={s.price_list}>
          {pricing.map((p, index) => (
            <li key={index} className={s.price_card}>
              {p.popular && (
                <Image
                  src={Popular}
                  alt="Most Popular"
                  className={s.popular_badge}
                />
              )}

              <h3>{p.planeName}</h3>

              <p>
                $<span>{p.price}</span> / Per Month
              </p>

              <ul className={s.feature_list}>
                {features.map((feature, index) => (
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
                onClick={() => setSelectedPlan(p)}
                className={`${s.price_btn} ${
                  selectedPlan?.planeName === p.planeName ? s.active_plan : ""
                }`}
              >
                {selectedPlan?.planeName === p.planeName
                  ? "Selected"
                  : "Get Started"}
              </button>
            </li>
          ))}
        </ul>
        <Link
          href={
            selectedPlan
              ? `/payment?plan=${selectedPlan.planeName}&price=${selectedPlan.price}`
              : "#"
          }
          className={`${!selectedPlan ? s.disabled : ""} ${s.payment_btn}`}
        >
          Pay your plan
        </Link>
      </div>
    </div>
  );
};
