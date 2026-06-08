"use client";

import { useState, useMemo } from "react";
import events from "@/data/events.json";

type EventType = "pet-holiday" | "federal" | "seasonal" | "promotion";

interface Event {
  id: string;
  title: string;
  date: string;
  type: EventType;
  description: string;
  emoji?: string;
}

const TYPE_COLORS: Record<EventType, { bg: string; border: string; text: string; dot: string }> = {
  "pet-holiday": {
    bg: "#F5E8ED",
    border: "#965B83",
    text: "#965B83",
    dot: "#965B83",
  },
  federal: {
    bg: "#F0F0F1",
    border: "#1F2124",
    text: "#1F2124",
    dot: "#1F2124",
  },
  seasonal: {
    bg: "#E8F5F0",
    border: "#4A9B6F",
    text: "#4A9B6F",
    dot: "#4A9B6F",
  },
  promotion: {
    bg: "#FFF4E6",
    border: "#D4891C",
    text: "#D4891C",
    dot: "#D4891C",
  },
};

const TYPE_LABELS: Record<EventType, string> = {
  "pet-holiday": "Pet Holiday",
  federal: "Federal Holiday",
  seasonal: "Seasonal",
  promotion: "Promotion",
};

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface DayEvents {
  date: Date;
  dateKey: string;
  events: Event[];
}

export default function EventsCalendarClient() {
  const [selectedTypes, setSelectedTypes] = useState<EventType[]>([
    "pet-holiday",
    "federal",
    "seasonal",
    "promotion",
  ]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Filter events
  const filteredEvents = useMemo(() => {
    return (events as Event[]).filter((event) => {
      const eventDate = new Date(event.date);
      eventDate.setHours(0, 0, 0, 0);
      return selectedTypes.includes(event.type);
    });
  }, [selectedTypes]);

  // Group events by date
  const eventsByDate = useMemo(() => {
    const grouped: Record<string, Event[]> = {};
    filteredEvents.forEach((event) => {
      const dateKey = event.date;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(event);
    });
    return grouped;
  }, [filteredEvents]);

  // Build calendar grid for current month
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (DayEvents | null)[] = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      days.push({
        date,
        dateKey,
        events: eventsByDate[dateKey] || [],
      });
    }

    return days;
  }, [currentMonth, eventsByDate]);

  // Get selected day's events
  const selectedDayEvents = useMemo(() => {
    if (!selectedDay) return [];
    const y = selectedDay.getFullYear();
    const m = String(selectedDay.getMonth() + 1).padStart(2, "0");
    const d = String(selectedDay.getDate()).padStart(2, "0");
    return eventsByDate[`${y}-${m}-${d}`] || [];
  }, [selectedDay, eventsByDate]);

  const toggleType = (type: EventType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    setSelectedDay(null);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    setSelectedDay(null);
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedDay(null);
  };

  const monthYear = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      {/* Filter Section */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ marginBottom: "24px" }}>
          <h2
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(20px, 3vw, 28px)",
              color: "#1F2124",
              marginBottom: "12px",
              fontWeight: "400",
            }}
          >
            Filter Events
          </h2>
          <p
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "14px",
              color: "#54595F",
              margin: "0",
            }}
          >
            Click to show/hide event categories
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {(Object.keys(TYPE_LABELS) as EventType[]).map((type) => (
            <button
              key={type}
              onClick={() => toggleType(type)}
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: "14px",
                padding: "10px 16px",
                border: `2px solid ${TYPE_COLORS[type].border}`,
                backgroundColor: selectedTypes.includes(type)
                  ? TYPE_COLORS[type].bg
                  : "#ffffff",
                color: TYPE_COLORS[type].text,
                cursor: "pointer",
                borderRadius: "6px",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  TYPE_COLORS[type].bg;
              }}
              onMouseLeave={(e) => {
                if (!selectedTypes.includes(type)) {
                  (e.target as HTMLButtonElement).style.backgroundColor =
                    "#ffffff";
                }
              }}
            >
              {TYPE_LABELS[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Section */}
      <div style={{ marginBottom: "24px" }}>
        {/* Month Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={goToPreviousMonth}
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              padding: "10px 16px",
              backgroundColor: "#965B83",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#7a4a66";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#965B83";
            }}
          >
            Previous Month
          </button>

          <h3
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(20px, 3vw, 28px)",
              color: "#1F2124",
              margin: "0",
              fontWeight: "400",
              textAlign: "center",
              flex: 1,
              minWidth: "150px",
            }}
          >
            {monthYear}
          </h3>

          <button
            onClick={goToNextMonth}
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "16px",
              padding: "10px 16px",
              backgroundColor: "#965B83",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#7a4a66";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#965B83";
            }}
          >
            Next Month
          </button>
        </div>

        {/* Days of Week Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          {DAYS_OF_WEEK.map((day) => (
            <div
              key={day}
              style={{
                textAlign: "center",
                fontFamily: '"Outfit", sans-serif',
                fontSize: "14px",
                fontWeight: "600",
                color: "#54595F",
                padding: "12px 8px",
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "4px",
            backgroundColor: "#ffffff",
          }}
        >
          {calendarDays.map((dayData, index) => {
            if (!dayData) {
              return (
                <div
                  key={`empty-${index}`}
                  style={{
                    minHeight: "48px",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "8px",
                    border: "1px solid #e5e5e5",
                  }}
                />
              );
            }

            const { date, dateKey, events: dayEvents } = dayData;
            const isToday =
              date.getFullYear() === today.getFullYear() &&
              date.getMonth() === today.getMonth() &&
              date.getDate() === today.getDate();
            const isSelected =
              selectedDay &&
              date.getFullYear() === selectedDay.getFullYear() &&
              date.getMonth() === selectedDay.getMonth() &&
              date.getDate() === selectedDay.getDate();

            return (
              <div
                key={dateKey}
                onClick={() => setSelectedDay(date)}
                style={{
                  aspectRatio: "1",
                  backgroundColor: isSelected ? "#965B83" : "#ffffff",
                  border: isSelected ? "2px solid #965B83" : isToday ? "2px solid #965B83" : "1px solid #e5e5e5",
                  borderRadius: "8px",
                  padding: "8px",
                  cursor: dayEvents.length > 0 ? "pointer" : "default",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (dayEvents.length > 0 && !isSelected) {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.backgroundColor = "#f5e8ed";
                    el.style.boxShadow = "0 4px 12px rgba(150, 91, 131, 0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.backgroundColor = "#ffffff";
                    el.style.boxShadow = "none";
                  }
                }}
              >
                {/* Day Number */}
                <div
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "14px",
                    fontWeight: "600",
                    color: isSelected ? "#ffffff" : "#1F2124",
                    marginBottom: "6px",
                  }}
                >
                  {date.getDate()}
                </div>

                {/* Event Name Pills */}
                {dayEvents.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "2px", overflow: "hidden", width: "100%" }}>
                    {dayEvents.slice(0, 2).map((event, i) => (
                      <div
                        key={i}
                        style={{
                          fontSize: "10px",
                          lineHeight: "1.2",
                          padding: "2px 4px",
                          borderRadius: "3px",
                          backgroundColor: isSelected ? "rgba(255,255,255,0.25)" : TYPE_COLORS[event.type].bg,
                          color: isSelected ? "#fff" : TYPE_COLORS[event.type].text,
                          fontFamily: '"Outfit", sans-serif',
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          borderLeft: `3px solid ${TYPE_COLORS[event.type].dot}`,
                        }}
                      >
                        {event.emoji ? `${event.emoji} ` : ""}{event.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div style={{ fontSize: "9px", color: isSelected ? "rgba(255,255,255,0.7)" : "#999", fontFamily: '"Outfit", sans-serif' }}>
                        +{dayEvents.length - 2} more
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Day Details Panel */}
      {selectedDay && selectedDayEvents.length > 0 && (
        <div
          style={{
            backgroundColor: "#F5E8ED",
            borderRadius: "12px",
            padding: "32px 24px",
            marginBottom: "50px",
            border: "2px solid #965B83",
          }}
        >
          <h3
            style={{
              fontFamily: '"Bowlby One SC", sans-serif',
              fontSize: "clamp(18px, 3vw, 24px)",
              color: "#1F2124",
              marginBottom: "24px",
              marginTop: "0",
              fontWeight: "400",
            }}
          >
            Events for{" "}
            <span style={{ color: "#965B83" }}>
              {selectedDay.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {selectedDayEvents.map((event) => (
              <div
                key={event.id}
                style={{
                  backgroundColor: "#ffffff",
                  border: `2px solid ${TYPE_COLORS[event.type].border}`,
                  borderLeft: `6px solid ${TYPE_COLORS[event.type].border}`,
                  borderRadius: "8px",
                  padding: "20px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12)";
                  element.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const element = e.currentTarget as HTMLDivElement;
                  element.style.boxShadow = "none";
                  element.style.transform = "translateY(0)";
                }}
              >
                {/* Event Type Badge */}
                <span
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "11px",
                    color: TYPE_COLORS[event.type].text,
                    fontWeight: "600",
                    backgroundColor: TYPE_COLORS[event.type].bg,
                    padding: "4px 10px",
                    borderRadius: "4px",
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    marginBottom: "12px",
                  }}
                >
                  {TYPE_LABELS[event.type]}
                </span>

                {/* Event Title */}
                <h4
                  style={{
                    fontFamily: '"Bowlby One SC", sans-serif',
                    fontSize: "clamp(16px, 2vw, 20px)",
                    color: "#1F2124",
                    marginBottom: "12px",
                    marginTop: "0",
                    fontWeight: "400",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {event.emoji && <span>{event.emoji}</span>}
                  {event.title}
                </h4>

                {/* Event Description */}
                <p
                  style={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: "14px",
                    color: "#54595F",
                    lineHeight: "1.6",
                    margin: "0",
                  }}
                >
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setSelectedDay(null)}
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "14px",
              marginTop: "24px",
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "#965B83",
              border: "2px solid #965B83",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLButtonElement;
              el.style.backgroundColor = "#965B83";
              el.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLButtonElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#965B83";
            }}
          >
            Close Details
          </button>
        </div>
      )}

      {/* Event Schema for SEO */}
      {filteredEvents.slice(0, 10).map((event) => (
        <script
          key={event.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: event.title,
              description: event.description,
              startDate: event.date,
              organizer: {
                "@type": "Organization",
                name: "The Dog House Pet Salon",
                url: "https://www.thedoghouseps.com",
              },
            }),
          }}
        />
      ))}
    </div>
  );
}
