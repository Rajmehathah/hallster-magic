
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, Search, CheckCircle2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-6">
            <CalendarDays className="h-12 w-12 text-purple mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              SeminarBook
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Book Professional Seminar Halls with Ease
          </h2>

          <p className="text-gray-600 max-w-2xl mb-8">
            Find and reserve the perfect seminar hall for your next event, conference, or meeting.
            Our platform offers a wide selection of professionally maintained spaces with modern amenities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              className="bg-purple hover:bg-purple-dark text-white px-8 py-6 text-lg"
              onClick={() => navigate("/halls")}
            >
              <Search className="mr-2" size={20} /> Browse Halls
            </Button>
            <Button 
              variant="outline" 
              className="border-purple text-purple hover:bg-purple/10 px-8 py-6 text-lg"
              onClick={() => navigate("/login")}
            >
              Login / Sign Up
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-fade-in">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
              <CheckCircle2 className="h-10 w-10 text-purple mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple and streamlined process to reserve your perfect venue in minutes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
              <CheckCircle2 className="h-10 w-10 text-purple mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Spaces</h3>
              <p className="text-gray-600">Access to high-quality seminar halls equipped with modern technology and amenities.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
              <CheckCircle2 className="h-10 w-10 text-purple mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Confirmation</h3>
              <p className="text-gray-600">Receive immediate booking confirmations and manage your reservations easily.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
