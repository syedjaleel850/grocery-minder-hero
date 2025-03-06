
import { cn } from "@/lib/utils";

interface StatisticsCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  className?: string;
}

const StatisticsCard = ({ title, value, icon, change, className }: StatisticsCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-5 transition-all duration-500 hover-scale", 
      className
    )}>
      <div className="flex items-center">
        <div className="mr-4 bg-primary/10 text-primary p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{value}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          
          {change && (
            <div className="flex items-center mt-1">
              <span className={cn(
                "text-xs font-medium",
                change.type === "increase" ? "text-green-600" : "text-red-600"
              )}>
                {change.type === "increase" ? "+" : "-"}{Math.abs(change.value)}%
              </span>
              <span className="text-xs text-muted-foreground ml-1">from last week</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
