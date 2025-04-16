import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { BookingProvider } from "./contexts/BookingContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import HallsListing from "./pages/user/HallsListing";
import HallDetail from "./pages/user/HallDetail";
import UserBookings from "./pages/user/UserBookings";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRequests from "./pages/admin/AdminRequests";
import AdminHalls from "./pages/admin/AdminHalls";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BookingProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              
              {/* User Routes */}
              <Route 
                path="/halls" 
                element={
                  <ProtectedRoute allowedRoles={["user"]}>
                    <HallsListing />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/halls/:hallId" 
                element={
                  <ProtectedRoute allowedRoles={["user"]}>
                    <HallDetail />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/bookings" 
                element={
                  <ProtectedRoute allowedRoles={["user"]}>
                    <UserBookings />
                  </ProtectedRoute>
                } 
              />
              
              {/* Admin Routes */}
              <Route 
                path="/admin/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/requests" 
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminRequests />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/halls" 
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminHalls />
                  </ProtectedRoute>
                } 
              />
              
              {/* Error Routes */}
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </BookingProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
