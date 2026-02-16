
import PaymentPage from "@/Components/PaymentPage/PaymentPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading photos...</div>}>
      <PaymentPage/>
    </Suspense>
  );
}
