import { ThemeProvider } from "next-themes";
import { TanstackProviders } from "./tanstack-providers";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TanstackProviders>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TanstackProviders>
  );
};
