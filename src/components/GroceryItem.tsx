
import { useState } from "react";
import { GroceryItem as GroceryItemType } from "@/utils/groceryData";
import { formatDate } from "@/utils/dateUtils";
import { getCategoryColor } from "@/utils/groceryData";
import ExpiryBadge from "./ExpiryBadge";
import { Check, Trash2, Edit } from "lucide-react";
import { cn } from "@/lib/utils";

interface GroceryItemProps {
  item: GroceryItemType;
  onDelete: (id: string) => void;
  onEdit: (item: GroceryItemType) => void;
}

const GroceryItem = ({ item, onDelete, onEdit }: GroceryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const categoryColorClass = getCategoryColor(item.category);
  
  return (
    <div 
      className="glass-card rounded-xl p-4 mb-4 transition-all duration-300 relative hover-scale soft-shadow animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className={cn(
              "text-xs font-medium px-2 py-1 rounded-full border",
              categoryColorClass
            )}>
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </span>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
              {item.quantity} {item.unit}
            </span>
          </div>
        </div>
        <ExpiryBadge expiryDate={item.expiryDate} />
      </div>
      
      <div className="text-sm text-muted-foreground mt-2">
        Added on {formatDate(item.addedDate)}
      </div>
      
      <div className={cn(
        "absolute top-3 right-3 flex space-x-2 opacity-0 transition-opacity duration-200", 
        isHovered && "opacity-100"
      )}>
        <button 
          onClick={() => onEdit(item)}
          className="p-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          aria-label="Edit item"
        >
          <Edit size={16} />
        </button>
        <button 
          onClick={() => onDelete(item.id)}
          className="p-1.5 rounded-full bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
          aria-label="Delete item"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default GroceryItem;
