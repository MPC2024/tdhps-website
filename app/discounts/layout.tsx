import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Offers & Discounts",
  description:
    "Exclusive discounts and promotions at The Dog House Pet Salon. New customer discount, partner programs, and seasonal offers.",
};

export default function DiscountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
