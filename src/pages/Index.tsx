
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ShoppingCart, Clock, AlertTriangle, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-24 xl:py-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl animate-slide-up">
                <span className="block">Never let groceries</span>
                <span className="block text-primary">expire again</span>
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                FreshTrack helps you track grocery expiration dates, reduce food waste, and save money. Get notifications before items expire and keep your kitchen organized.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div>
                  <Link
                    to="/dashboard"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 md:py-3 md:text-lg md:px-8 transition-colors duration-200"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/auth"
                    className="w-full flex items-center justify-center px-8 py-3 border border-input bg-background text-base font-medium rounded-lg hover:bg-secondary md:py-3 md:text-lg md:px-8 transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative background blob */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10 lg:opacity-20">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#pattern-circles)" />
          </svg>
        </div>
        
        {/* Hero image */}
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="relative h-full">
            <div className="absolute right-0 h-full w-full overflow-hidden">
              <div className="absolute right-0 h-full w-full glass-card rounded-l-3xl border border-white/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-95">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)]"></div>
                </div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="glass-card p-4 rounded-xl border border-white/20 w-full max-w-md mx-8 soft-shadow">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <span className="bg-primary/10 text-primary p-1.5 rounded mr-2"><ShoppingCart size={16} /></span>
                      My Groceries
                    </h3>
                    
                    <div className="space-y-2">
                      {/* Grocery items mockup */}
                      <div className="bg-white/50 p-3 rounded-lg border border-white/40 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Milk</h4>
                          <div className="text-xs text-muted-foreground">1 liter • Dairy</div>
                        </div>
                        <div className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full border border-amber-200 flex items-center">
                          <Clock size={12} className="mr-1" />
                          2 days left
                        </div>
                      </div>
                      
                      <div className="bg-white/50 p-3 rounded-lg border border-white/40 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Chicken Breast</h4>
                          <div className="text-xs text-muted-foreground">500g • Meat</div>
                        </div>
                        <div className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full border border-amber-200 flex items-center">
                          <Clock size={12} className="mr-1" />
                          1 day left
                        </div>
                      </div>
                      
                      <div className="bg-white/50 p-3 rounded-lg border border-white/40 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Apples</h4>
                          <div className="text-xs text-muted-foreground">6 pcs • Fruits</div>
                        </div>
                        <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full border border-green-200 flex items-center">
                          <CheckCircle size={12} className="mr-1" />
                          7 days left
                        </div>
                      </div>
                      
                      <div className="bg-white/50 p-3 rounded-lg border border-white/40 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Bread</h4>
                          <div className="text-xs text-muted-foreground">1 loaf • Bakery</div>
                        </div>
                        <div className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded-full border border-red-200 flex items-center animate-pulse-slow">
                          <AlertTriangle size={12} className="mr-1" />
                          Expired
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="py-16 bg-white bg-opacity-70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Features</h2>
            <p className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-4xl">
              Everything you need to manage groceries
            </p>
            <p className="max-w-xl mt-5 mx-auto text-base text-muted-foreground sm:text-lg md:text-xl">
              FreshTrack helps you keep track of groceries, manage expiry dates, and reduce food waste with these powerful features.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="glass-card rounded-xl p-6 soft-shadow hover-scale">
                <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary p-3 mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">Expiry Tracking</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Set expiry dates for each item and get notified before they expire. FreshTrack automatically updates status based on expiry date.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="glass-card rounded-xl p-6 soft-shadow hover-scale">
                <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary p-3 mb-4">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">Smart Grocery Management</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Add, edit and organize groceries with customizable categories. Easily track quantity and find items with powerful search and filters.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="glass-card rounded-xl p-6 soft-shadow hover-scale">
                <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary p-3 mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">Usage Analytics</h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Track food usage patterns and identify which items are most frequently wasted. Make better grocery shopping decisions based on data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Ready to start tracking?</span>
            <span className="block text-primary">Create your account today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-lg shadow">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-lg shadow">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center px-5 py-3 border border-input bg-background text-base font-medium rounded-lg hover:bg-secondary transition-colors duration-200"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-background">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-muted-foreground">
                &copy; 2023 FreshTrack, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
