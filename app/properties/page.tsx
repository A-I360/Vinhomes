import { Suspense } from "react";
import PropertiesView from "./PropertiesView";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Properties & Developments",
  description:
    "Browse premium homes, duplexes for sale, secure communities and investment properties across Lagos with Vinhomes Platinum Living. Filter by location, type, bedrooms and availability.",
  path: "/properties",
});

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-paper" />}>
      <PropertiesView />
    </Suspense>
  );
}
