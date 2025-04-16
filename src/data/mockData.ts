
import { Hall, BookingRequest, User } from "../types";

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
