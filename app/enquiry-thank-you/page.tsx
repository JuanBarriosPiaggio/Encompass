import type { Metadata } from "next";
import { Thanks } from "@/components/Thanks";

export const metadata: Metadata = {
  title: "Enquiry received",
  description: "Your enquiry stays on this page. Nothing is sent.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/enquiry-thank-you/" },
};

export default function Page() {
  return <Thanks />;
}
