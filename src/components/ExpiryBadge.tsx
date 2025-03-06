
import { getExpiryStatus, getExpiryBadgeText } from "@/utils/dateUtils";
import { getExpiryStatusColor } from "@/utils/groceryData";
import { cn } from "@/lib/utils";

interface ExpiryBadgeProps {
  expiryDate: Date;
  className?: string;
}

const ExpiryBadge = ({ expiryDate, className }: ExpiryBadgeProps) => {
  const status = getExpiryStatus(expiryDate);
  const badgeText = getExpiryBadgeText(expiryDate);
  const colorClass = getExpiryStatusColor(status);
  
  return (
    <div className={cn(
      "text-xs font-medium inline-flex items-center px-2 py-1 rounded-full border",
      colorClass,
      status === "expired" && "animate-pulse-slow",
      className
    )}>
      <span className={cn(
        "w-2 h-2 rounded-full mr-1.5",
        status === "fresh" ? "bg-green-500" : 
        status === "expiring-soon" ? "bg-amber-500" : "bg-red-500"
      )}></span>
      {badgeText}
    </div>
  );
};

export default ExpiryBadge;
