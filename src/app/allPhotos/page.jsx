import AllPhotos from "@/Components/allPhotos/allPhotos";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading photos...</div>}>
      <AllPhotos />
    </Suspense>
  );
}
