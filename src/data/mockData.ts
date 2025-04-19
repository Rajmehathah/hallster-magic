import { Hall, User, BookingRequest } from "../types";

export const mockHalls: Hall[] = [
  {
    id: "1",
    name: "NALANDA AUDITORIUM",
    capacity: 200,
    location: "Main Building, 1st Floor",
    amenities: ["Projector", "Surround Sound System", "Adjustable Lighting", "Video Conferencing", "Refreshment Area"],
    images: [
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800"
    ],
    description: "Our prestigious auditorium featuring state-of-the-art technology and a versatile space suitable for conferences, seminars, and events.",
    pricePerHour: 5000,
    availability: true,
  },
  {
    id: "2",
    name: "CHETANA AUDITORIUM",
    capacity: 150,
    location: "East Wing, Ground Floor",
    amenities: ["Interactive Whiteboard", "Premium Audio System", "Ergonomic Seating", "Natural Lighting"],
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800"
    ],
    description: "A modern auditorium perfect for academic events, cultural programs, and large gatherings.",
    pricePerHour: 4000,
    availability: true,
  },
  {
    id: "3",
    name: "SADHANA",
    capacity: 100,
    location: "Tech Block, Ground Floor",
    amenities: ["Smart Boards", "Modular Furniture", "High-Speed Internet", "Recording Equipment"],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
    ],
    description: "A flexible space designed for workshops and collaborative sessions with cutting-edge technology.",
    pricePerHour: 3000,
    availability: true,
  },
  {
    id: "4",
    name: "PRERANA",
    capacity: 80,
    location: "Central Building, First Floor",
    amenities: ["Stage Lighting", "Professional Sound System", "Green Room", "Projection Screens"],
    images: [
      "https://images.unsplash.com/photo-1580130545376-e0cbda8cc411?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1617360547557-23f2c22ba679?auto=format&fit=crop&w=800"
    ],
    description: "An inspiring venue for presentations, seminars, and academic events.",
    pricePerHour: 2500,
    availability: true,
  },
  {
    id: "5",
    name: "DISHA",
    capacity: 60,
    location: "Arts Building, 3rd Floor",
    amenities: ["Artistic Lighting", "Soundproofing", "Multimedia Equipment", "Flexible Seating"],
    images: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1603297638244-ba28f3b42ad1?auto=format&fit=crop&w=800"
    ],
    description: "A versatile creative space for workshops and innovative sessions.",
    pricePerHour: 2000,
    availability: true,
  },
  {
    id: "6",
    name: "DATA SCIENCE SEMINAR HALL",
    capacity: 50,
    location: "Tech Tower, 2nd Floor",
    amenities: ["Data Visualization Screens", "Computing Workstations", "Research Tools", "Conference System"],
    images: [
      "https://images.unsplash.com/photo-1571624436279-c19059aba9e1?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1556761175-4b46a3fb44de?auto=format&fit=crop&w=800"
    ],
    description: "Specialized hall for data science conferences and research presentations.",
    pricePerHour: 3500,
    availability: true,
  },
  {
    id: "7",
    name: "AI/ML SEMINAR HALL",
    capacity: 50,
    location: "Innovation Center, 2nd Floor",
    amenities: ["GPU Workstations", "AI Demo Platforms", "Research Tools", "Interactive Displays"],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800"
    ],
    description: "Advanced facility for AI/ML workshops and research presentations.",
    pricePerHour: 3500,
    availability: true,
  },
  {
    id: "8",
    name: "INDIAN ENGLISH LAB",
    capacity: 40,
    location: "Language Block, 1st Floor",
    amenities: ["Language Learning Software", "Audio Labs", "Interactive Boards", "Recording Studio"],
    images: [
      "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800"
    ],
    description: "Specialized lab for language studies and communication workshops.",
    pricePerHour: 2000,
    availability: true,
  },
  {
    id: "9",
    name: "SUMEDHA SEMINAR HALL",
    capacity: 70,
    location: "Academic Block, Ground Floor",
    amenities: ["Digital Podium", "Conference System", "Interactive Displays", "Recording Facility"],
    images: [
      "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800"
    ],
    description: "Modern seminar hall for academic presentations and conferences.",
    pricePerHour: 2500,
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
