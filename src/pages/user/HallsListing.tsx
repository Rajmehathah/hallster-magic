
import { useState } from "react";
import { useBooking } from "@/contexts/BookingContext";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { Search, Users, MapPin, Clock, Calendar, Sparkles } from "lucide-react";

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
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            Discover Our Seminar Halls
          </h1>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-purple/20 border-purple/30 text-gray-800">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              {sortedHalls.length} Halls Available
            </Badge>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.1s"}}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
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
          {sortedHalls.map((hall, index) => (
            <Link
              key={hall.id}
              to={`/halls/${hall.id}`}
              className="focus:outline-none"
            >
              <Card className="h-full overflow-hidden hover-card-scale animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}>
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden h-48">
                  <img
                    src={hall.images[0]}
                    alt={hall.name}
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
                  />
                  {hall.availability ? (
                    <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">Available</Badge>
                  ) : (
                    <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">Booked</Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-gray-900">{hall.name}</CardTitle>
                    <div className="text-lg font-bold text-purple">
                      ${hall.pricePerHour}
                      <span className="text-xs text-gray-500">/hr</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mt-1">
                    <MapPin size={14} className="mr-1 text-purple" />
                    {hall.location}
                  </div>
                </CardHeader>
                <CardContent className="pb-2 space-y-3">
                  <div className="flex items-center text-sm space-x-4 text-gray-700">
                    <div className="flex items-center">
                      <Users size={15} className="mr-1.5 text-purple" />
                      <span>{hall.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={15} className="mr-1.5 text-purple" />
                      <span>Always open</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{hall.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {hall.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="outline" className="bg-purple/10 border-purple/20 text-gray-700 text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {hall.amenities.length > 3 && (
                      <Badge variant="outline" className="bg-purple/10 border-purple/20 text-gray-700 text-xs">
                        +{hall.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 mt-2">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-xs text-gray-500">ID: {hall.id}</span>
                    <Badge className="bg-purple hover:bg-purple-dark">View Details</Badge>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {sortedHalls.length === 0 && (
          <div className="text-center py-10 animate-fade-in">
            <h3 className="text-lg font-medium text-gray-700 mb-2">No halls found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HallsListing;
