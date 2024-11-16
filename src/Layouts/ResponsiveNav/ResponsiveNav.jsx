import React, { useState } from 'react';

const ResponsiveNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex">
            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-4 left-4 z-20 p-2 bg-blue-500 text-white rounded-lg md:hidden"
            >
                ☰ Menu
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform md:translate-x-0 md:w-64`}
            >
                <div className="p-4 text-2xl font-bold border-b border-blue-400">
                    Logo
                </div>
                <ul className="mt-4 space-y-4">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-blue-500 rounded">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-blue-500 rounded">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-blue-500 rounded">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-blue-500 rounded">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className="ml-0 md:ml-64 p-4">
                <h1 className="text-3xl font-bold mb-4">Responsive Side Navbar</h1>
                <p>
                    This is a responsive side navbar example using Tailwind CSS and React.
                    Resize the screen to see the effect!
                </p>
            </div>
        </div>
    );
};

export default ResponsiveNav;