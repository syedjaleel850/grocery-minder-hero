
import { useState, useEffect } from "react";
import { GroceryItem, mockGroceries } from "@/utils/groceryData";
import GroceryList from "@/components/GroceryList";
import AddGroceryForm from "@/components/AddGroceryForm";
import StatisticsCard from "@/components/StatisticsCard";
import { getExpiryStatus } from "@/utils/dateUtils";
import Navbar from "@/components/Navbar";
import { ShoppingCart, AlertTriangle, Clock, PlusCircle, Check } from "lucide-react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const [groceries, setGroceries] = useState<GroceryItem[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<GroceryItem | undefined>(undefined);
  
  // Initialize with mock data
  useEffect(() => {
    setGroceries(mockGroceries);
  }, []);
  
  // Statistics calculations
  const totalItems = groceries.length;
  const expiringSoonItems = groceries.filter(item => getExpiryStatus(item.expiryDate) === "expiring-soon").length;
  const expiredItems = groceries.filter(item => getExpiryStatus(item.expiryDate) === "expired").length;
  const freshItems = groceries.filter(item => getExpiryStatus(item.expiryDate) === "fresh").length;
  
  // Handle adding a new grocery item
  const handleAddGrocery = (newItem: Omit<GroceryItem, "id" | "addedDate">) => {
    if (editingItem) {
      // Update existing item
      const updatedGroceries = groceries.map(item => 
        item.id === editingItem.id ? { ...item, ...newItem } : item
      );
      setGroceries(updatedGroceries);
      setEditingItem(undefined);
      toast.success("Item updated successfully!");
    } else {
      // Add new item
      const newGrocery: GroceryItem = {
        ...newItem,
        id: uuidv4(),
        addedDate: new Date()
      };
      setGroceries([newGrocery, ...groceries]);
      toast.success("Item added successfully!");
    }
    setShowAddForm(false);
  };
  
  // Handle deleting a grocery item
  const handleDeleteGrocery = (id: string) => {
    setGroceries(groceries.filter(item => item.id !== id));
    toast.success("Item removed successfully!");
  };
  
  // Handle editing a grocery item
  const handleEditGrocery = (item: GroceryItem) => {
    setEditingItem(item);
    setShowAddForm(true);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate animate-fade-in">
              My Grocery Dashboard
            </h1>
            <p className="mt-2 text-muted-foreground animate-fade-in">
              Keep track of your groceries and reduce food waste
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              onClick={() => {
                setEditingItem(undefined);
                setShowAddForm(!showAddForm);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
            >
              <PlusCircle className="mr-1.5 h-4 w-4" />
              Add Grocery
            </button>
          </div>
        </div>
        
        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatisticsCard
            title="Total Items"
            value={totalItems}
            icon={<ShoppingCart size={20} />}
            className="animate-slide-up"
          />
          <StatisticsCard
            title="Expiring Soon"
            value={expiringSoonItems}
            icon={<Clock size={20} />}
            className="animate-slide-up"
            change={{ value: 5, type: "increase" }}
          />
          <StatisticsCard
            title="Expired Items"
            value={expiredItems}
            icon={<AlertTriangle size={20} />}
            className="animate-slide-up" 
            change={{ value: 2, type: "decrease" }}
          />
          <StatisticsCard
            title="Fresh Items"
            value={freshItems}
            icon={<Check size={20} />}
            className="animate-slide-up"
          />
        </div>
        
        {/* Add Form (conditionally rendered) */}
        {showAddForm && (
          <div className="mb-8">
            <AddGroceryForm
              onAdd={handleAddGrocery}
              onCancel={() => {
                setShowAddForm(false);
                setEditingItem(undefined);
              }}
              editItem={editingItem}
            />
          </div>
        )}
        
        {/* Grocery List */}
        <GroceryList
          groceries={groceries}
          onDeleteItem={handleDeleteGrocery}
          onEditItem={handleEditGrocery}
        />
      </main>
    </div>
  );
};

export default Dashboard;
