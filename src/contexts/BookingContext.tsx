
import { createContext, useContext, useState, ReactNode } from "react";
import { Hall, BookingRequest } from "../types";
import { mockHalls, mockBookingRequests } from "../data/mockData";

interface BookingContextType {
  halls: Hall[];
  bookingRequests: BookingRequest[];
  getHall: (id: string) => Hall | undefined;
  createBookingRequest: (request: Omit<BookingRequest, "id" | "status" | "createdAt">) => void;
  approveRequest: (id: string) => void;
  denyRequest: (id: string) => void;
  getUserRequests: (userId: string) => BookingRequest[];
  getHallRequests: (hallId: string) => BookingRequest[];
  getPendingRequests: () => BookingRequest[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [halls, setHalls] = useState<Hall[]>(mockHalls);
  const [bookingRequests, setBookingRequests] = useState<BookingRequest[]>(mockBookingRequests);

  const getHall = (id: string) => {
    return halls.find(hall => hall.id === id);
  };

  const createBookingRequest = (request: Omit<BookingRequest, "id" | "status" | "createdAt">) => {
    const newRequest: BookingRequest = {
      ...request,
      id: (bookingRequests.length + 1).toString(),
      status: "pending",
      createdAt: new Date().toISOString()
    };
    
    setBookingRequests(prev => [...prev, newRequest]);
  };

  const approveRequest = (id: string) => {
    setBookingRequests(prev =>
      prev.map(request =>
        request.id === id ? { ...request, status: "approved" } : request
      )
    );
  };

  const denyRequest = (id: string) => {
    setBookingRequests(prev =>
      prev.map(request =>
        request.id === id ? { ...request, status: "denied" } : request
      )
    );
  };

  const getUserRequests = (userId: string) => {
    return bookingRequests.filter(request => request.userId === userId);
  };

  const getHallRequests = (hallId: string) => {
    return bookingRequests.filter(request => request.hallId === hallId);
  };

  const getPendingRequests = () => {
    return bookingRequests.filter(request => request.status === "pending");
  };

  return (
    <BookingContext.Provider
      value={{
        halls,
        bookingRequests,
        getHall,
        createBookingRequest,
        approveRequest,
        denyRequest,
        getUserRequests,
        getHallRequests,
        getPendingRequests
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
