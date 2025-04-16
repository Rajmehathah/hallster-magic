
import { useBooking } from "@/contexts/BookingContext";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  approved: "bg-green-100 text-green-800 border-green-200",
  denied: "bg-red-100 text-red-800 border-red-200"
};

const UserBookings = () => {
  const { currentUser } = useAuth();
  const { getUserRequests, getHall } = useBooking();
  
  const userRequests = currentUser ? getUserRequests(currentUser.id) : [];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Bookings</h1>
        
        {userRequests.length === 0 ? (
          <div className="bg-white shadow-sm rounded-lg p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No booking requests yet</h3>
            <p className="text-gray-600">
              When you book a seminar hall, your requests will appear here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {userRequests.map((request) => {
              const hall = getHall(request.hallId);
              if (!hall) return null;
              
              return (
                <Card 
                  key={request.id} 
                  className="overflow-hidden animate-fade-in"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-gray-100">
                      <img
                        src={hall.images[0]}
                        alt={hall.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/4">
                      <CardHeader className="flex flex-row items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{hall.name}</CardTitle>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <MapPin size={14} className="mr-1" />
                            {hall.location}
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={statusColors[request.status]}
                        >
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </Badge>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">Date: {request.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">Time: {request.startTime} - {request.endTime}</span>
                          </div>
                        </div>
                        
                        <div className="mt-2">
                          <h4 className="text-sm font-medium text-gray-900">Purpose:</h4>
                          <p className="text-sm text-gray-600 mt-1">{request.purpose}</p>
                        </div>
                        
                        <div className="mt-4 border-t pt-4">
                          <div className="flex items-center justify-between">
                            <div className="text-sm">
                              <span className="text-gray-500">Requested on: </span>
                              <span className="font-medium">{new Date(request.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="text-sm font-medium">
                              {request.status === "pending" && (
                                <span className="text-yellow-600">Awaiting approval</span>
                              )}
                              {request.status === "approved" && (
                                <span className="text-green-600">Your booking is confirmed</span>
                              )}
                              {request.status === "denied" && (
                                <span className="text-red-600">Request was denied</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBookings;
