"use client";

import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-secondary to-ternary absolute top-0 left-0 z-50">
      SplashScreen
    </div>
  );
};
export default SplashScreen;
