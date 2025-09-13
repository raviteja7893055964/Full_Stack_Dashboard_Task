"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useLang();
  const { theme } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(t("login.invalid"));
        setLoading(false);
        return;
      }

      setLoading(false);
      debugger;
      router.replace("/dashboard");
    } catch (err) {
      console.error(err);
      setError(t("login.invalid"));
      setLoading(false);
    }
  };


  return (
    <div className="p-6 min-h-screen flex items-center justify-center transition-colors duration-300 ml-7 mr-7">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md transition-colors duration-300 bg-gray-100 dark:bg-gray-900 ml-7 mr-7">
        <h1 className="text-2xl font-bold mb-6 text-center ml-7 mr-7">
          {t("login.submit")}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">{t("login.email")}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded transition-colors duration-300 bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"

            />
          </div>
          <div>
            <label className="block mb-1">{t("login.password")}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded transition-colors duration-300 bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"

            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="my-2 mx-auto text-center" >
<button
            type="submit"
            disabled={loading}
            className="w-3 px-3 my-6 py-2 my-2 mx-auto text-center rounded transition-colors duration-300 bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600"

          >
            {loading
              ? t("login.loggingIn") || "Logging in..."
              : t("login.submit")}
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
