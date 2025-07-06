import React from "react";
import { Search, Sun, Moon, Menu } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex justify-center top-3 mt-5 sticky z-10">
            <div className="flex justify-between items-center p-2 bg-gray-50 border-solid border-2 border-gray-100 text-black w-2/3 rounded-2xl shadow-lg">
                <div>
                    <span className="text-2xl font-bold ml-2">ArtLens</span>
                </div>

                <div className="flex items-center gap-10 ml-4">
                    <div className="flex-1 max-w-xs mx-4 relative hidden sm:block">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-1 focus:ring-gray-300 focus:border-transparent focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center gap-4 ml-3">
                        <div className="hidden sm:block">
                            <button
                                className="p-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all duration-200"
                                aria-label="Toggle theme"
                            >
                                <Moon size={20} />
                            </button>
                        </div>
                        <div>
                            <button
                                className="p-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all duration-200"
                                aria-label="Toggle sidebar"
                            >
                                <Menu size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;