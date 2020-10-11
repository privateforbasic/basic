import { useEffect } from "react";

export const useLang = (lang: string) => {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
};
