
import { useState } from "react";
import { GroceryItem } from "@/utils/groceryData";
import { categoryOptions, unitOptions } from "@/utils/groceryData";
import { PlusCircle, X } from "lucide-react";
import { addDays } from "date-fns";

interface AddGroceryFormProps {
  onAdd: (item: Omit<GroceryItem, "id" | "addedDate">) => void;
  onCancel: () => void;
  editItem?: GroceryItem;
}

const AddGroceryForm = ({ onAdd, onCancel, editItem }: AddGroceryFormProps) => {
  const [name, setName] = useState(editItem?.name || "");
  const [category, setCategory] = useState<GroceryItem["category"]>(editItem?.category || "other");
  const [expiryDate, setExpiryDate] = useState<string>(
    editItem?.expiryDate 
      ? new Date(editItem.expiryDate).toISOString().split('T')[0] 
      : addDays(new Date(), 7).toISOString().split('T')[0]
  );
  const [quantity, setQuantity] = useState(editItem?.quantity.toString() || "1");
  const [unit, setUnit] = useState(editItem?.unit || "pcs");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onAdd({
      name,
      category,
      expiryDate: new Date(expiryDate),
      quantity: Number(quantity),
      unit
    });
    
    // Reset form
    if (!editItem) {
      setName("");
      setCategory("other");
      setExpiryDate(addDays(new Date(), 7).toISOString().split('T')[0]);
      setQuantity("1");
      setUnit("pcs");
    }
  };
  
  return (
    <div className="glass-card rounded-xl p-6 animate-slide-up">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{editItem ? 'Edit Grocery Item' : 'Add New Grocery'}</h2>
        <button
          onClick={onCancel}
          className="p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Item Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            placeholder="Enter grocery name"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value as GroceryItem["category"])}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              required
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="expiry" className="block text-sm font-medium mb-1">
              Expiry Date
            </label>
            <input
              id="expiry"
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium mb-1">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              min="1"
              step="0.1"
              required
            />
          </div>
          
          <div>
            <label htmlFor="unit" className="block text-sm font-medium mb-1">
              Unit
            </label>
            <select
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              required
            >
              {unitOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="mr-2 px-4 py-2 rounded-lg border border-input bg-background text-sm font-medium transition-colors hover:bg-muted"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 flex items-center"
          >
            <PlusCircle size={18} className="mr-1.5" />
            {editItem ? 'Save Changes' : 'Add Grocery'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGroceryForm;
