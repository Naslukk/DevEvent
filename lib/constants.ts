type EventItem = {
  title: string
  image: string
  slug: string
  location: string
  date: string
  time: string
}

export const events: EventItem[] = [
  {
    title: "React Summit 2026",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "Sep 8–9, 2026",
    time: "09:00 – 18:00"
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "Oct 14–16, 2026",
    time: "10:00 – 17:30"
  },
  {
    title: "Node.js Interactive / NodeConf 2026",
    image: "/images/event3.png",
    slug: "nodeconf-2026",
    location: "Portland, OR, USA",
    date: "Nov 3–4, 2026",
    time: "09:30 – 17:00"
  },
  {
    title: "Hacktoberfest Hackathon",
    image: "/images/event4.png",
    slug: "hacktoberfest-hackathon-2026",
    location: "Remote",
    date: "Oct 1–31, 2026",
    time: "All day"
  },
  {
    title: "Google I/O 2026",
    image: "/images/event5.png",
    slug: "google-io-2026",
    location: "Mountain View, CA, USA",
    date: "May 19–21, 2026",
    time: "09:00 – 17:00"
  },
  {
    title: "ETHDenver 2027 (Preview Events)",
    image: "/images/event6.png",
    slug: "ethdenver-2027",
    location: "Denver, CO, USA",
    date: "Feb 20–28, 2027",
    time: "10:00 – 18:00 MST"
  }
]

export default events
