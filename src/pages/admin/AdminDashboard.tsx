
import { useBooking } from "@/contexts/BookingContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, Clock, Users } from "lucide-react";

const AdminDashboard = () => {
  const { halls, bookingRequests } = useBooking();
  
  const pendingRequests = bookingRequests.filter(request => request.status === "pending");
  const approvedRequests = bookingRequests.filter(request => request.status === "approved");
  const deniedRequests = bookingRequests.filter(request => request.status === "denied");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow animate-slide-in-bottom" style={{ animationDelay: '0ms' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Halls</CardTitle>
              <Building className="h-5 w-5 text-purple" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{halls.length}</div>
              <p className="text-xs text-gray-500 mt-1">Available for booking</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow animate-slide-in-bottom" style={{ animationDelay: '100ms' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Pending Requests</CardTitle>
              <Clock className="h-5 w-5 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingRequests.length}</div>
              <p className="text-xs text-gray-500 mt-1">Awaiting your approval</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow animate-slide-in-bottom" style={{ animationDelay: '200ms' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Approved Bookings</CardTitle>
              <Calendar className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{approvedRequests.length}</div>
              <p className="text-xs text-gray-500 mt-1">Confirmed bookings</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow animate-slide-in-bottom" style={{ animationDelay: '300ms' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
              <Users className="h-5 w-5 text-blue-bright" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-gray-500 mt-1">Registered in the system</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Booking Activity */}
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Booking Activity</h2>
        <Card>
          <CardContent className="p-6">
            {bookingRequests.length > 0 ? (
              <div className="space-y-6">
                {bookingRequests
                  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                  .slice(0, 5)
                  .map((request, index) => {
                    const hall = halls.find(h => h.id === request.hallId);
                    if (!hall) return null;
                    
                    let statusColor = "";
                    if (request.status === "pending") statusColor = "text-yellow-600";
                    if (request.status === "approved") statusColor = "text-green-600";
                    if (request.status === "denied") statusColor = "text-red-600";
                    
                    return (
                      <div key={request.id} className="flex items-start">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {request.userName} requested <span className="font-semibold">{hall.name}</span>
                          </p>
                          <p className="text-sm text-gray-500">
                            For {request.date} ({request.startTime} - {request.endTime})
                          </p>
                          <p className={`text-sm mt-1 ${statusColor}`}>
                            Status: {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                          </p>
                        </div>
                        <div className="ml-6 flex-shrink-0">
                          <p className="text-xs text-gray-500">
                            {new Date(request.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-4">No booking activity yet</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
