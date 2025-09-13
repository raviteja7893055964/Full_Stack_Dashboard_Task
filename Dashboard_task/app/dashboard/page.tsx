"use client";

import { useRouter } from "next/navigation";
import { useLang } from "../../context/LanguageContext";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { t } = useLang();


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth", { credentials: "include" });
        const data = await res.json();
        if (data?.user && window.location.pathname === "/") {
          router.replace("/login");
          
        }
        
      } catch {}
    };
    checkAuth();
  }, [router]);


  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST", credentials: "include" });
    router.replace("/login");
  };

  return (
    <div className="p-8 rounded-lg shadow-md w-full max-w-md transition-colors duration-300 bg-gray-100 dark:bg-gray-900 ml-7 mr-7 ">
      <h1 className="p-8 rounded-lg shadow-md w-full max-w-md transition-colors duration-300 bg-gray-100 dark:bg-gray-900 ml-7 mr-7">{t("title")}</h1>
      <button
        onClick={handleLogout}
        className="w-4 px-3 py-2 rounded transition-colors duration-300 bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 ml-7 mr-7"
      >
        {t("logout")}
      </button>
    </div>
  );
}
