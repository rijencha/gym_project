// lib/data.ts
export const GYM = {
  name: "IRONHAUS",
  tagline: "Strength is a habit. Serious strength and conditioning facilities across Nepal.",
  established: "2016",
  location: "Kathmandu Valley",
  address: "Jhamsikhel, Lalitpur, Nepal",
  phone: "+977 980-000-1234",
  email: "train@ironhaus.fit",
};

export const stats = [
  { value: "500+", label: "Members Training" },
  { value: "40+", label: "Weekly Classes" },
  { value: "12", label: "Expert Coaches" },
  { value: "3", label: "Branches" },
];

export const services = [
  { id: "powerlifting", title: "Powerlifting", blurb: "Squat, bench, deadlift — coached technique on competition platforms." },
  { id: "conditioning", title: "Conditioning", blurb: "Metabolic circuits built for real strength gains, not just a sweat." },
  { id: "boxing", title: "Boxing", blurb: "Bag work and pad sessions led by a dedicated boxing coach." },
  { id: "mobility", title: "Mobility & Recovery", blurb: "Sauna, cold plunge, and guided mobility work between sessions." },
  { id: "group-classes", title: "Group Classes", blurb: "40+ weekly sessions across strength, HIIT, and conditioning." },
  { id: "personal-training", title: "1-on-1 Coaching", blurb: "Personalized programming with a coach who tracks your progress." },
];

export const classes = [
  { name: "Strength Foundations", day: "Mon / Wed / Fri", time: "06:00", coach: "Coach Raj" },
  { name: "Metcon Conditioning", day: "Tue / Thu", time: "07:00", coach: "Coach Sita" },
  { name: "Powerlifting Technique", day: "Mon / Thu", time: "18:00", coach: "Coach Bibek" },
  { name: "Boxing Fundamentals", day: "Wed / Sat", time: "17:00", coach: "Coach Anish" },
];

export const trainers = [
  { name: "Bibek Shrestha", role: "Head Powerlifting Coach", bio: "10+ years coaching competitive lifters across Nepal." },
  { name: "Sita Gurung", role: "Conditioning Coach", bio: "Former national athlete specializing in metabolic training." },
];

export const plans = [
  { name: "Basic", price: "Rs 3,500", per: "/ month", perks: ["Gym floor access", "Locker room", "1 branch"], featured: false },
  { name: "Pro", price: "Rs 5,500", per: "/ month", perks: ["Gym floor access", "All group classes", "All branches", "1 coaching session / mo"], featured: true },
  { name: "Elite", price: "Rs 9,000", per: "/ month", perks: ["Everything in Pro", "Unlimited 1-on-1 coaching", "Recovery room priority"], featured: false },
];