import { Toaster } from "react-hot-toast";
import { useTheme } from "../hooks/useTheme";

const AppToaster = () => {
  const { isDark } = useTheme();

  return (
    <Toaster
      position="top-center"
      containerStyle={{ top: 88 }}
      toastOptions={{
        duration: 5000,
        style: {
          background: isDark ? "#0f172a" : "#ffffff",
          color: isDark ? "#e2e8f0" : "#0f172a",
          border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
          boxShadow: "0 10px 30px rgba(2, 6, 23, 0.2)",
          padding: "12px 18px",
          fontSize: "15px",
          fontWeight: 500,
          maxWidth: 420,
        },
        success: { iconTheme: { primary: "#10b981", secondary: "#ffffff" } },
        error: { iconTheme: { primary: "#ef4444", secondary: "#ffffff" } },
      }}
    />
  );
};

export default AppToaster;
