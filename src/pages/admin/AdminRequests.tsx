
import { useBooking } from "@/contexts/BookingContext";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";

const AdminRequests = () => {
  const { bookingRequests, halls, approveRequest, denyRequest } = useBooking();
  
  const pendingRequests = bookingRequests.filter(request => request.status === "pending");
  const approvedRequests = bookingRequests.filter(request => request.status === "approved");
  const deniedRequests = bookingRequests.filter(request => request.status === "denied");
  
  const getHallName = (hallId: string) => {
    const hall = halls.find(h => h.id === hallId);
    return hall ? hall.name : "Unknown Hall";
  };

  const RequestCard = ({ request, showActions = false }: { request: any, showActions?: boolean }) => {
    return (
      <Card className="mb-4 border-l-4 animate-fade-in overflow-hidden" 
        style={{
          borderLeftColor: request.status === "pending" 
            ? "#eab308" 
            : request.status === "approved" 
              ? "#22c55e" 
              : "#ef4444"
        }}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{getHallName(request.hallId)}</CardTitle>
            <Badge className={`
              ${request.status === "pending" && "bg-yellow-100 text-yellow-800 border-yellow-200"}
              ${request.status === "approved" && "bg-green-100 text-green-800 border-green-200"}
              ${request.status === "denied" && "bg-red-100 text-red-800 border-red-200"}
            `}>
              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
            </Badge>
          </div>
          <p className="text-sm text-gray-500 mt-1">Requested by {request.userName}</p>
        </CardHeader>
        <CardContent className="pb-4">
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
          
          <div className="mb-4">
            <h4 className="text-sm font-medium">Purpose:</h4>
            <p className="text-sm text-gray-600 mt-1">{request.purpose}</p>
          </div>
          
          <div className="text-xs text-gray-500">
            Submitted on {new Date(request.createdAt).toLocaleDateString()}
          </div>
          
          {showActions && (
            <div className="mt-4 flex gap-2">
              <Button 
                variant="outline" 
                className="flex items-center gap-1 border-green-500 text-green-600 hover:bg-green-50"
                onClick={() => approveRequest(request.id)}
              >
                <CheckCircle className="h-4 w-4" />
                Approve
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-1 border-red-500 text-red-600 hover:bg-red-50"
                onClick={() => denyRequest(request.id)}
              >
                <XCircle className="h-4 w-4" />
                Deny
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Booking Requests</h1>
        
        <Tabs defaultValue="pending">
          <TabsList className="mb-8">
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <span>Pending</span>
              <Badge variant="secondary" className="ml-1">{pendingRequests.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="approved" className="flex items-center gap-2">
              <span>Approved</span>
              <Badge variant="secondary" className="ml-1">{approvedRequests.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="denied" className="flex items-center gap-2">
              <span>Denied</span>
              <Badge variant="secondary" className="ml-1">{deniedRequests.length}</Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            {pendingRequests.length === 0 ? (
              <div className="bg-white shadow-sm rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No pending requests</h3>
                <p className="text-gray-600">
                  When users book halls, their requests will appear here for your approval.
                </p>
              </div>
            ) : (
              <div>
                {pendingRequests.map(request => (
                  <RequestCard key={request.id} request={request} showActions={true} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="approved">
            {approvedRequests.length === 0 ? (
              <div className="bg-white shadow-sm rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No approved requests</h3>
                <p className="text-gray-600">
                  Requests you approve will appear here.
                </p>
              </div>
            ) : (
              <div>
                {approvedRequests.map(request => (
                  <RequestCard key={request.id} request={request} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="denied">
            {deniedRequests.length === 0 ? (
              <div className="bg-white shadow-sm rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No denied requests</h3>
                <p className="text-gray-600">
                  Requests you deny will appear here.
                </p>
              </div>
            ) : (
              <div>
                {deniedRequests.map(request => (
                  <RequestCard key={request.id} request={request} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminRequests;
