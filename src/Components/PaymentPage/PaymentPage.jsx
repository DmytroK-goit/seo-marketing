"use client";

import s from "./PaymentPage.module.scss";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const params = useSearchParams();
  const plan = params.get("plan");
  const price = params.get("price");

  return (
    <div className={s.payment_page}>
      <div className={s.card}>
        <h2>Checkout</h2>

        <div className={s.plan_block}>
          <h3>{plan} Plan</h3>
          <p className={s.desc}>
            You selected the <b>{plan}</b> subscription.
          </p>
          <p className={s.desc}>
            Price <b>{price}</b>
          </p>
        </div>

        <button className={s.pay_btn}>Continue to payment</button>

        <p className={s.secure}>🔒 Secure payment • Cancel anytime</p>
      </div>
    </div>
  );
}
