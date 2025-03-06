
import { useState, useMemo } from "react";
import { GroceryItem as GroceryItemType } from "@/utils/groceryData";
import GroceryItem from "./GroceryItem";
import { getExpiryStatus } from "@/utils/dateUtils";
import { Search, Filter } from "lucide-react";

interface GroceryListProps {
  groceries: GroceryItemType[];
  onDeleteItem: (id: string) => void;
  onEditItem: (item: GroceryItemType) => void;
}

const GroceryList = ({ groceries, onDeleteItem, onEditItem }: GroceryListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "expiring-soon" | "expired" | "fresh">("all");
  
  const filteredGroceries = useMemo(() => {
    return groceries.filter(item => {
      // Search filter
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Status filter
      const status = getExpiryStatus(item.expiryDate);
      const matchesFilter = filter === "all" || status === filter;
      
      return matchesSearch && matchesFilter;
    });
  }, [groceries, searchTerm, filter]);
  
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search groceries..."
            className="pl-10 h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter size={18} className="text-muted-foreground" />
          </div>
          <select
            className="pl-10 h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 appearance-none pr-8"
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
          >
            <option value="all">All items</option>
            <option value="expiring-soon">Expiring soon</option>
            <option value="expired">Expired</option>
            <option value="fresh">Fresh</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {filteredGroceries.length === 0 ? (
        <div className="text-center py-12">
          <div className="glass-card inline-flex flex-col items-center p-6 rounded-xl">
            <div className="text-muted-foreground mb-2">
              <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z" />
                <path d="M15 3v4" />
                <path d="M9 3v4" />
                <path d="M3 9h18" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-1">No items found</h3>
            <p className="text-muted-foreground text-sm">
              {searchTerm 
                ? `No results for "${searchTerm}"` 
                : filter !== "all" 
                  ? `No ${filter.replace('-', ' ')} items found` 
                  : "Add some groceries to get started"}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGroceries.map((item) => (
            <GroceryItem
              key={item.id}
              item={item}
              onDelete={onDeleteItem}
              onEdit={onEditItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GroceryList;
