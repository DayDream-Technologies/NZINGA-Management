import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

// Get the base path for assets (handles GitHub Pages deployment)
export const basePath = process.env.NODE_ENV === "production" ? "/NZINGA-Management" : "";

// Helper to get full asset path
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
