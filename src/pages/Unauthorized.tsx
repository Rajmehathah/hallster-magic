
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ShieldAlert } from "lucide-react";

const Unauthorized = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleNavigateHome = () => {
    if (currentUser?.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/halls");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4 animate-scale-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
          <ShieldAlert className="h-8 w-8 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-lg text-gray-600 mb-6">
          You don't have permission to view this page.
        </p>
        <Button onClick={handleNavigateHome}>
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
