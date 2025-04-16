
import { useBooking } from "@/contexts/BookingContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { Clock, Users, MapPin, MoreHorizontal } from "lucide-react";

const AdminHalls = () => {
  const { halls } = useBooking();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Manage Halls</h1>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hall Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Price/Hour</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {halls.map((hall) => (
                    <TableRow key={hall.id} className="animate-fade-in">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded overflow-hidden">
                            <img 
                              src={hall.images[0]} 
                              alt={hall.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{hall.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1 text-gray-500" />
                          {hall.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1 text-gray-500" />
                          {hall.capacity} people
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1 text-gray-500" />
                          ${hall.pricePerHour}
                        </div>
                      </TableCell>
                      <TableCell>
                        {hall.availability ? (
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            Available
                          </Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-800 border-red-200">
                            Booked
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminHalls;
