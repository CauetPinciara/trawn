import Navigation from "@/components/site/navigation";
import { ReactNode } from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full">
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default AuthLayout;
