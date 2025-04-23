import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatChineseDateTime(dateString: string): string {
  const date = new Date(dateString);
  return format(date, "yyyy年M月d日 HH:mm", { locale: zhCN });
}
