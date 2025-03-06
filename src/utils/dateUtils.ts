
import { format, addDays, differenceInDays, isBefore, isAfter } from "date-fns";

// Format date for display
export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return format(dateObj, "MMM dd, yyyy");
};

// Get days until expiry
export const getDaysUntilExpiry = (expiryDate: Date | string): number => {
  const expiry = typeof expiryDate === "string" ? new Date(expiryDate) : expiryDate;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return differenceInDays(expiry, today);
};

// Determine expiry status
export const getExpiryStatus = (expiryDate: Date | string): "fresh" | "expiring-soon" | "expired" => {
  const daysLeft = getDaysUntilExpiry(expiryDate);
  if (daysLeft < 0) return "expired";
  if (daysLeft <= 3) return "expiring-soon";
  return "fresh";
};

// Get expiry badge text
export const getExpiryBadgeText = (expiryDate: Date | string): string => {
  const daysLeft = getDaysUntilExpiry(expiryDate);
  if (daysLeft < 0) return "Expired";
  if (daysLeft === 0) return "Expires today";
  if (daysLeft === 1) return "Expires tomorrow";
  if (daysLeft <= 3) return `Expires in ${daysLeft} days`;
  return `Expires in ${daysLeft} days`;
};

// Add days to current date (for creating mock data)
export const addDaysFromNow = (days: number): Date => {
  return addDays(new Date(), days);
};
