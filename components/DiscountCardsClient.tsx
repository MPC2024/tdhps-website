"use client";

import Link from "next/link";

interface DiscountCard {
  title: string;
  badge: string;
  description: string;
  note?: string;
  discountCode: string;
  type?: "new" | "existing" | "";
}

const DISCOUNT_CARDS: DiscountCard[] = [
  {
    title: "New Groom Clients",
    badge: "25% OFF",
    description: "First groom includes complimentary nail file and teeth brush",
    note: "OR 10% off basic groom",
    discountCode: "new-groom-25",
    type: "new",
  },
  {
    title: "Loyalty Punch Card",
    badge: "$30 CREDIT",
    description: "Earn a $30 credit on your 12th grooming service",
    note: "One punch per grooming visit",
    discountCode: "loyalty-punch",
    type: "existing",
  },
  {
    title: "Referral Rewards",
    badge: "15% OFF",
    description: "Get 15% off your next service when you refer a friend who books",
    discountCode: "referral-15",
    type: "",
  },
  {
    title: "Boarding Clients",
    badge: "FREE",
    description: "Complimentary daycare included with all boarding stays",
    discountCode: "boarding-free",
    type: "",
  },
  {
    title: "First Responders",
    badge: "10% OFF",
    description: "10% off all services",
    note: "Valid ID required: Police, Fire, EMS, Military",
    discountCode: "first-responder-10",
    type: "",
  },
  {
    title: "Friends & Family",
    badge: "10% OFF",
    description: "10% discount for team member friends and family",
    discountCode: "friends-family-10",
    type: "existing",
  },
  {
    title: "PawOps Rescues",
    badge: "25% OFF",
    description: "25% off grooming for foster dogs",
    note: "Email jeff@thedoghouseps.com to arrange",
    discountCode: "rescue-25",
    type: "",
  },
  {
    title: "Recently Adopted",
    badge: "15% OFF",
    description: "15% off all services for 1 year from adoption date",
    note: "Show adoption contract",
    discountCode: "adopted-15",
    type: "",
  },
  {
    title: "Birthday Groom",
    badge: "50% OFF",
    description: "50% off birthday grooming",
    note: "Requires 15+ visits, 6+ grooms, review within 30 days, proof of birthday",
    discountCode: "birthday-50",
    type: "existing",
  },
];

export default function DiscountCardsClient() {
  const getBookingLink = (card: DiscountCard): string => {
    if (card.type === "new" || card.type === "existing") {
      return `/appointment-request-form_location_richmond?discount=${card.discountCode}&type=${card.type}#booking`;
    }
    return `/appointment-request-form_location_richmond?discount=${card.discountCode}#booking`;
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
      {DISCOUNT_CARDS.map((card) => (
        <div
          key={card.discountCode}
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            borderTop: "4px solid #965B83",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            display: "flex",
            flexDirection: "column",
          }}
          className="discount-card"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
            <h3 style={{ fontFamily: '"Bowlby One SC", sans-serif', fontSize: "18px", color: "#1F2124", margin: "0", flex: "1" }}>
              {card.title}
            </h3>
            <div style={{ backgroundColor: "#965B83", color: "white", padding: "8px 16px", borderRadius: "50px", fontSize: "0.9rem", fontWeight: "700", whiteSpace: "nowrap" }}>
              {card.badge}
            </div>
          </div>
          <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "15px", color: "#54595F", lineHeight: 1.6, margin: "0 0 12px 0" }}>
            {card.description}
          </p>
          {card.note && (
            <p style={{ fontFamily: '"Outfit", sans-serif', fontSize: "14px", color: "#999", margin: "0 0 16px 0", flex: "1" }}>
              {card.note}
            </p>
          )}
          {!card.note && <div style={{ flex: "1" }} />}
          <Link
            href={getBookingLink(card)}
            style={{
              display: "inline-block",
              backgroundColor: "#965B83",
              color: "white",
              padding: "10px 24px",
              borderRadius: "6px",
              fontFamily: '"Outfit", sans-serif',
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7d4968")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#965B83")}
          >
            Book with Discount
          </Link>
        </div>
      ))}
    </div>
  );
}
