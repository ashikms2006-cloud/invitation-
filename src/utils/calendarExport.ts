// Calendar Export utility for Google Calendar & Apple/Outlook iCal

export interface EventInfo {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export const EVENT_DETAILS: EventInfo = {
  title: "Francis & Rosily 50th Anniversary + Andrina & Dhaniel 1st Holy Communion",
  description: "One Big Family Celebration! Holy Mass & Thanksgiving celebrating Francis & Rosily's 50th Golden Jubilee and First Holy Communion of Andrina Denny & Dhaniel Daison with the @familycousinzz vibe!",
  location: "St. Thomas Church, Thuruthur, Kerala",
  startDate: new Date("2026-09-12T11:00:00+05:30"),
  endDate: new Date("2026-09-12T15:30:00+05:30"),
};

export function getGoogleCalendarUrl(event: EventInfo = EVENT_DETAILS): string {
  const formatTime = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const startTime = formatTime(event.startDate);
  const endTime = formatTime(event.endDate);

  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", event.title);
  url.searchParams.set("dates", `${startTime}/${endTime}`);
  url.searchParams.set("details", event.description);
  url.searchParams.set("location", event.location);

  return url.toString();
}

export function downloadIcsFile(event: EventInfo = EVENT_DETAILS) {
  const formatTime = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
  const startTime = formatTime(event.startDate);
  const endTime = formatTime(event.endDate);

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Family Celebration//Antigravity//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    `DTSTART:${startTime}`,
    `DTEND:${endTime}`,
    `STATUS:CONFIRMED`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "family_celebration_invitation.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
