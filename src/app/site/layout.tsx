import Navigation from "@/components/site/navigation";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <Navigation />
      {children}
    </div>
  );
};

export default AuthLayout;
