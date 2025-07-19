import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { useNavigate } from "react-router-dom";

export default function Nav() {
    const  navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'Home', href: '' },
        { name: 'About', href: 'about' },
        { name: 'Services', href: 'services' },
        { name: 'Resources', href: 'resources', featured: true },
        { name: 'Contact Us', href: 'contact', featured: true },
        { name: 'Careers', href: 'careers' },
    ];
    const handleNavigate=(link)=>{
        navigate(link)

    }

    return (
        <>
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ backgroundColor: '#1b1b1b' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a
                                href="/"
                                className="text-2xl font-bold hover:scale-105 transform transition-transform duration-300"
                                style={{ color: '#fdcc29' }}
                            >
                                logo
                                {/*<img src="/assets/dgslogo.png" alt=""  />*/}
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:-translate-y-1 ${
                                            item.featured
                                                ? 'text-yellow-400 font-bold hover:bg-yellow-400 hover:text-gray-900 border border-transparent hover:border-yellow-400'
                                                : 'text-white hover:bg-yellow-400 hover:text-gray-900'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-300"
                                style={{ color: '#fdcc29' }}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                    style={{ backgroundColor: '#1b1b1b' }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                                    item.featured
                                        ? 'text-yellow-400 font-bold hover:bg-yellow-400 hover:text-gray-900 border border-transparent hover:border-yellow-400'
                                        : 'text-white hover:bg-yellow-400 hover:text-gray-900'
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}






