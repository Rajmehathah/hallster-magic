import { Hall } from "../types";

export const mockHalls: Hall[] = [
  {
    id: "1",
    name: "Grand Conference Hall",
    capacity: 200,
    location: "Main Building, 1st Floor",
    amenities: ["Projector", "Surround Sound System", "Adjustable Lighting", "Video Conferencing", "Refreshment Area"],
    images: [
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800"
    ],
    description: "Our largest conference hall featuring state-of-the-art technology and a versatile space suitable for conferences, seminars, and corporate events.",
    pricePerHour: 150,
    availability: true,
  },
  {
    id: "2",
    name: "Executive Seminar Room",
    capacity: 50,
    location: "East Wing, 2nd Floor",
    amenities: ["Interactive Whiteboard", "Premium Audio System", "Ergonomic Seating", "Natural Lighting"],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800"
    ],
    description: "An intimate setting perfect for executive meetings, training sessions, and focused group discussions with premium amenities.",
    pricePerHour: 100,
    availability: true,
  },
  {
    id: "3",
    name: "Innovation Lab",
    capacity: 30,
    location: "Tech Block, Ground Floor",
    amenities: ["Smart Boards", "Modular Furniture", "High-Speed Internet", "Recording Equipment"],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
    ],
    description: "A flexible space designed for brainstorming, design thinking, and collaborative workshops with cutting-edge technology.",
    pricePerHour: 85,
    availability: true,
  },
  {
    id: "4",
    name: "Auditorium of Excellence",
    capacity: 300,
    location: "Central Campus, Main Hall",
    amenities: ["Stage Lighting", "Professional Sound System", "Green Room", "Large Projection Screens", "Livestreaming Capabilities"],
    images: [
      "https://images.unsplash.com/photo-1580130545376-e0cbda8cc411?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1617360547557-23f2c22ba679?auto=format&fit=crop&w=800"
    ],
    description: "A grand auditorium perfect for large-scale presentations, award ceremonies, and major academic events with world-class audiovisual capabilities.",
    pricePerHour: 250,
    availability: true,
  },
  {
    id: "5",
    name: "Creative Studio",
    capacity: 40,
    location: "Arts Building, 3rd Floor",
    amenities: ["Artistic Lighting", "Soundproofing", "Multimedia Equipment", "Flexible Seating", "Green Screen"],
    images: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1603297638244-ba28f3b42ad1?auto=format&fit=crop&w=800"
    ],
    description: "A versatile creative space designed for workshops, media production, art exhibitions, and innovative team-building sessions.",
    pricePerHour: 95,
    availability: true,
  },
  {
    id: "6",
    name: "Panoramic Meeting Suite",
    capacity: 60,
    location: "Skyline Tower, Top Floor",
    amenities: ["Panoramic City Views", "Telepresence Systems", "Catering Kitchen", "Private Terrace", "Executive Catering"],
    images: [
      "https://images.unsplash.com/photo-1571624436279-c19059aba9e1?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1556761175-4b46a3fb44de?auto=format&fit=crop&w=800"
    ],
    description: "An exclusive meeting suite with breathtaking city views, perfect for high-level executive meetings and prestigious corporate events.",
    pricePerHour: 200,
    availability: true,
  }
];

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  },
  {
    id: "2",
    name: "Regular User",
    email: "user@example.com",
    role: "user",
  },
];

export const mockBookingRequests: BookingRequest[] = [
  {
    id: "1",
    hallId: "1",
    userId: "2",
    userName: "Regular User",
    date: "2025-05-01",
    startTime: "09:00",
    endTime: "12:00",
    purpose: "Annual Department Conference",
    status: "pending",
    createdAt: "2025-04-15T10:30:00Z",
  },
  {
    id: "2",
    hallId: "3",
    userId: "2",
    userName: "Regular User",
    date: "2025-05-15",
    startTime: "14:00",
    endTime: "16:00",
    purpose: "Product Development Workshop",
    status: "approved",
    createdAt: "2025-04-10T14:45:00Z",
  },
];
