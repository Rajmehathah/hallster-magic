
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBooking } from "@/contexts/BookingContext";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, Info, MapPin, Users, ArrowLeft } from "lucide-react";

const HallDetail = () => {
  const { hallId } = useParams<{ hallId: string }>();
  const { getHall, createBookingRequest } = useBooking();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  const hall = getHall(hallId || "");
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [formError, setFormError] = useState("");
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  
  if (!hall) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Hall not found</h1>
          <p className="text-gray-600 mb-6">The hall you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/halls")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all halls
          </Button>
        </div>
      </div>
    );
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    
    if (!selectedDate) {
      setFormError("Please select a date");
      return;
    }
    
    if (!startTime || !endTime) {
      setFormError("Please specify both start and end time");
      return;
    }
    
    if (!purpose.trim()) {
      setFormError("Please describe the purpose of your booking");
      return;
    }
    
    if (!currentUser) {
      setFormError("You must be logged in to book a hall");
      return;
    }
    
    // Create booking request
    createBookingRequest({
      hallId: hall.id,
      userId: currentUser.id,
      userName: currentUser.name,
      date: format(selectedDate, "yyyy-MM-dd"),
      startTime,
      endTime,
      purpose,
    });
    
    // Show success message
    setBookingSubmitted(true);
    setTimeout(() => {
      setIsBookingDialogOpen(false);
      setBookingSubmitted(false);
      // Reset form
      setSelectedDate(undefined);
      setStartTime("");
      setEndTime("");
      setPurpose("");
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fade-in">
        {/* Back button */}
        <Button 
          variant="outline" 
          onClick={() => navigate("/halls")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all halls
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery - Left Side */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-lg overflow-hidden h-80 bg-gray-100 shadow-sm">
              <img
                src={hall.images[activeImage]}
                alt={hall.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {hall.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {hall.images.map((image, index) => (
                  <div 
                    key={index} 
                    onClick={() => setActiveImage(index)}
                    className={`h-20 w-32 rounded-md overflow-hidden cursor-pointer transition-opacity
                      ${activeImage === index ? "ring-2 ring-purple" : "opacity-70 hover:opacity-100"}`}
                  >
                    <img 
                      src={image} 
                      alt={`${hall.name} - image ${index + 1}`} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Hall Details - Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-sm rounded-lg p-6 h-full">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{hall.name}</h1>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin size={16} className="mr-1" />
                  <span>{hall.location}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center text-gray-700 mb-4">
                  <Users size={18} className="mr-2 text-purple" />
                  <span>Capacity: {hall.capacity} people</span>
                </div>
                <div className="flex items-center text-gray-700 mb-4">
                  <Clock size={18} className="mr-2 text-purple" />
                  <span>Price: ${hall.pricePerHour} per hour</span>
                </div>
                <div className="flex items-center text-gray-700 mb-4">
                  <CalendarDays size={18} className="mr-2 text-purple" />
                  <span>Availability: {hall.availability ? "Available" : "Currently Booked"}</span>
                </div>
                
                <Separator className="my-6" />
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {hall.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => setIsBookingDialogOpen(true)} 
                  className="w-full"
                  disabled={!hall.availability}
                >
                  Book This Hall
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hall Description and Info */}
        <div className="mt-10">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Info size={20} className="mr-2 text-purple" />
                  About This Hall
                </h2>
                <p className="text-gray-700 leading-relaxed">{hall.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="policies" className="mt-6">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Booking Policies</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Bookings must be made at least 24 hours in advance.</li>
                  <li>Cancellations are allowed up to 48 hours before the booking time.</li>
                  <li>The hall must be left in the same condition as it was found.</li>
                  <li>Any damage to equipment or facilities will be charged to the booker.</li>
                  <li>Full payment is required at the time of approval.</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Booking Dialog */}
      <Dialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Book {hall.name}</DialogTitle>
            <DialogDescription>
              Complete the form below to request a booking. You'll be notified once the admin approves your request.
            </DialogDescription>
          </DialogHeader>
          
          {bookingSubmitted ? (
            <div className="py-10 text-center animate-fade-in">
              <h3 className="text-lg font-medium text-green-600 mb-2">
                Booking Request Submitted!
              </h3>
              <p className="text-gray-600">
                Your request has been sent to the administrator for approval.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Select Date</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input
                      id="start-time"
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="end-time">End Time</Label>
                    <Input
                      id="end-time"
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="purpose">Purpose</Label>
                  <Textarea
                    id="purpose"
                    placeholder="Briefly describe the purpose of your booking..."
                    rows={3}
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  />
                </div>
                
                {formError && (
                  <p className="text-sm font-medium text-destructive">{formError}</p>
                )}
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsBookingDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit Request</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HallDetail;
