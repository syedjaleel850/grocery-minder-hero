
import { addDaysFromNow } from "./dateUtils";

export interface GroceryItem {
  id: string;
  name: string;
  category: "dairy" | "vegetables" | "fruits" | "meat" | "bakery" | "snacks" | "beverages" | "other";
  expiryDate: Date;
  quantity: number;
  unit: string;
  addedDate: Date;
}

// Mock data for initial display
export const mockGroceries: GroceryItem[] = [
  {
    id: "1",
    name: "Milk",
    category: "dairy",
    expiryDate: addDaysFromNow(2),
    quantity: 1,
    unit: "liter",
    addedDate: new Date()
  },
  {
    id: "2",
    name: "Chicken Breast",
    category: "meat",
    expiryDate: addDaysFromNow(1),
    quantity: 500,
    unit: "g",
    addedDate: new Date()
  },
  {
    id: "3",
    name: "Apples",
    category: "fruits",
    expiryDate: addDaysFromNow(7),
    quantity: 6,
    unit: "pcs",
    addedDate: new Date()
  },
  {
    id: "4",
    name: "Bread",
    category: "bakery",
    expiryDate: addDaysFromNow(-1), // Already expired
    quantity: 1,
    unit: "loaf",
    addedDate: new Date()
  },
  {
    id: "5",
    name: "Spinach",
    category: "vegetables",
    expiryDate: addDaysFromNow(3),
    quantity: 1,
    unit: "bunch",
    addedDate: new Date()
  },
  {
    id: "6",
    name: "Yogurt",
    category: "dairy",
    expiryDate: addDaysFromNow(5),
    quantity: 500,
    unit: "g",
    addedDate: new Date()
  },
  {
    id: "7",
    name: "Orange Juice",
    category: "beverages",
    expiryDate: addDaysFromNow(10),
    quantity: 1,
    unit: "liter",
    addedDate: new Date()
  },
  {
    id: "8",
    name: "Chocolate Cookies",
    category: "snacks",
    expiryDate: addDaysFromNow(30),
    quantity: 1,
    unit: "pack",
    addedDate: new Date()
  }
];

// Category options with icons/emojis
export const categoryOptions = [
  { value: "dairy", label: "Dairy" },
  { value: "vegetables", label: "Vegetables" },
  { value: "fruits", label: "Fruits" },
  { value: "meat", label: "Meat" },
  { value: "bakery", label: "Bakery" },
  { value: "snacks", label: "Snacks" },
  { value: "beverages", label: "Beverages" },
  { value: "other", label: "Other" }
];

// Common quantity units
export const unitOptions = [
  "g", "kg", "ml", "l", "liter", "pcs", "pack", "bunch", "bottle", "can"
];

// Get category color based on category
export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    dairy: "bg-blue-50 text-blue-700 border-blue-200",
    vegetables: "bg-green-50 text-green-700 border-green-200",
    fruits: "bg-orange-50 text-orange-700 border-orange-200",
    meat: "bg-red-50 text-red-700 border-red-200",
    bakery: "bg-yellow-50 text-yellow-700 border-yellow-200",
    snacks: "bg-purple-50 text-purple-700 border-purple-200",
    beverages: "bg-cyan-50 text-cyan-700 border-cyan-200",
    other: "bg-gray-50 text-gray-700 border-gray-200"
  };
  
  return colors[category] || colors.other;
};

// Get expiry status color
export const getExpiryStatusColor = (status: "fresh" | "expiring-soon" | "expired"): string => {
  const colors: Record<string, string> = {
    fresh: "bg-green-50 text-green-700 border-green-200",
    "expiring-soon": "bg-amber-50 text-amber-700 border-amber-200",
    expired: "bg-red-50 text-red-700 border-red-200"
  };
  
  return colors[status];
};
