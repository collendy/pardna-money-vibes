
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GroupDetail from "./pages/GroupDetail";
import CreatePardna from "./pages/CreatePardna";
import AppLayout from "./components/layout/AppLayout";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/groups/:id" element={<GroupDetail />} />
            <Route path="/create-pardna" element={<CreatePardna />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
