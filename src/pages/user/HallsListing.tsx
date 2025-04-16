
import { useState } from "react";
import { useBooking } from "@/contexts/BookingContext";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { Search, Users, MapPin } from "lucide-react";

const HallsListing = () => {
  const { halls } = useBooking();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  // Filter halls based on search term
  const filteredHalls = halls.filter(hall => 
    hall.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hall.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hall.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort halls based on selected option
  const sortedHalls = [...filteredHalls].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "capacity-asc":
        return a.capacity - b.capacity;
      case "capacity-desc":
        return b.capacity - a.capacity;
      case "price-asc":
        return a.pricePerHour - b.pricePerHour;
      case "price-desc":
        return b.pricePerHour - a.pricePerHour;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Seminar Halls</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search halls by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="md:w-64">
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="capacity-asc">Capacity (Low to High)</SelectItem>
                <SelectItem value="capacity-desc">Capacity (High to Low)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Halls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedHalls.map((hall) => (
            <Link
              key={hall.id}
              to={`/halls/${hall.id}`}
              className="transform transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
            >
              <Card className="h-full overflow-hidden hover:shadow-md hover:border-purple/30 transition-all">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden h-48">
                  <img
                    src={hall.images[0]}
                    alt={hall.name}
                    className="object-cover w-full h-full"
                  />
                  {hall.availability ? (
                    <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">Available</Badge>
                  ) : (
                    <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">Booked</Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{hall.name}</CardTitle>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={14} className="mr-1" />
                    {hall.location}
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center text-sm mb-2">
                    <Users size={16} className="mr-2 text-gray-500" />
                    <span>Capacity: {hall.capacity} people</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{hall.description}</p>
                </CardContent>
                <CardFooter className="pt-0 border-t text-sm text-gray-600">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex gap-2">
                      {hall.amenities.slice(0, 2).map((amenity, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-soft/50">
                          {amenity}
                        </Badge>
                      ))}
                      {hall.amenities.length > 2 && (
                        <Badge variant="outline" className="bg-blue-soft/50">
                          +{hall.amenities.length - 2} more
                        </Badge>
                      )}
                    </div>
                    <span className="font-medium text-purple-dark">
                      ${hall.pricePerHour}/hr
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {sortedHalls.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No halls found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HallsListing;
