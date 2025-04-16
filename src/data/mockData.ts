
import { Hall, User, BookingRequest } from "../types";

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
  },
  {
    id: "7",
    name: "Tech Forum Hall",
    capacity: 120,
    location: "Innovation Center, 2nd Floor",
    amenities: ["8K Projection", "Holographic Display", "Quantum Computing Demo Station", "VR/AR Equipment", "Biometric Access"],
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800"
    ],
    description: "A cutting-edge venue designed for tech conferences, product launches, and future-focused events with access to the latest technology.",
    pricePerHour: 180,
    availability: false,
  },
  {
    id: "8",
    name: "Botanical Conference Room",
    capacity: 80,
    location: "Garden Wing, Ground Floor",
    amenities: ["Living Plant Walls", "Natural Acoustics", "Eco-friendly AV System", "Organic Refreshments", "Natural Lighting"],
    images: [
      "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800"
    ],
    description: "A biophilic meeting space surrounded by lush greenery and natural elements, promoting wellbeing and creativity during meetings.",
    pricePerHour: 130,
    availability: true,
  },
  {
    id: "9",
    name: "Historical Library Hall",
    capacity: 70,
    location: "Heritage Building, West Wing",
    amenities: ["Antique Furnishings", "Classic Art Collection", "Rare Book Access", "Fireplace", "Traditional Tea Service"],
    images: [
      "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800"
    ],
    description: "A distinguished venue with old-world charm and historical significance, perfect for literary events, academic gatherings, and elegant receptions.",
    pricePerHour: 160,
    availability: true,
  },
  {
    id: "10",
    name: "Collaborative Workshop Space",
    capacity: 45,
    location: "Design Center, 1st Floor",
    amenities: ["360° Whiteboards", "Modular Workstations", "Design Thinking Tools", "Digital Brainstorming Wall", "Maker Space"],
    images: [
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800"
    ],
    description: "A dynamic space specifically configured for hands-on workshops, collaborative problem-solving, and interactive learning experiences.",
    pricePerHour: 110,
    availability: true,
  },
  {
    id: "11",
    name: "Wellness Seminar Studio",
    capacity: 35,
    location: "Health Center, 3rd Floor",
    amenities: ["Cork Flooring", "Meditation Area", "Aromatherapy System", "Water Feature", "Acoustic Treatments"],
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1558017487-06bf9f82613a?auto=format&fit=crop&w=800"
    ],
    description: "A tranquil environment designed for health seminars, mindfulness sessions, and wellness workshops, promoting focus and relaxation.",
    pricePerHour: 95,
    availability: true,
  },
  {
    id: "12",
    name: "Digital Media Theater",
    capacity: 150,
    location: "Media Arts Building, Lower Level",
    amenities: ["THX Sound System", "4K Laser Projection", "Stadium Seating", "Professional Lighting Rig", "Podcast Recording Booth"],
    images: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?auto=format&fit=crop&w=800"
    ],
    description: "A professional-grade venue for film screenings, multimedia presentations, and immersive audio-visual experiences.",
    pricePerHour: 220,
    availability: false,
  },
  {
    id: "13",
    name: "Networking Lounge",
    capacity: 90,
    location: "Business Hub, 5th Floor",
    amenities: ["Cocktail Bar Setup", "Networking Pods", "Interactive LED Displays", "DJ Booth", "Mood Lighting"],
    images: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1559298894-2cfbd5bbba3a?auto=format&fit=crop&w=800"
    ],
    description: "A sophisticated space for professional networking events, cocktail receptions, and social gatherings with a contemporary atmosphere.",
    pricePerHour: 180,
    availability: true,
  },
  {
    id: "14",
    name: "Global Conference Center",
    capacity: 250,
    location: "International Building, Ground Floor",
    amenities: ["Simultaneous Translation Booths", "International Power Outlets", "Global Video Conferencing", "Cultural Display Areas", "International Catering Options"],
    images: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800"
    ],
    description: "A world-class facility designed for international conferences, global summits, and multinational corporate events with comprehensive support services.",
    pricePerHour: 275,
    availability: true,
  },
  {
    id: "15",
    name: "Academic Training Lab",
    capacity: 55,
    location: "Education Building, 4th Floor",
    amenities: ["Computer Workstations", "Instructor Console", "Collaborative Learning Software", "Document Cameras", "Interactive Learning Tools"],
    images: [
      "https://images.unsplash.com/photo-1586060169542-3fadb71e1176?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1567937559677-fb9578ba3c9b?auto=format&fit=crop&w=800"
    ],
    description: "A purpose-built environment for hands-on training, educational workshops, and professional development programs with integrated technology.",
    pricePerHour: 120,
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
