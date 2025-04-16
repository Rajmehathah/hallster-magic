
export type UserRole = "admin" | "user";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Hall {
  id: string;
  name: string;
  capacity: number;
  location: string;
  amenities: string[];
  images: string[];
  description: string;
  pricePerHour: number;
  availability: boolean;
}

export interface BookingRequest {
  id: string;
  hallId: string;
  userId: string;
  userName: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
  status: "pending" | "approved" | "denied";
  createdAt: string;
}
