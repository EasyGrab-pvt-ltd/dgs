import React from 'react';
import {
    Calculator,
    FileText,
    Building2,
    Shield,
    GraduationCap,
    ShoppingCart,
    Printer,
    Hammer,
    BookOpen,
    TrendingUp,
    CheckCircle,
    Users,
    Target,
    Clipboard,
    PenTool,
    Monitor,
    Wrench,
    ArrowRight,
    Star
} from 'lucide-react';
import Nav from "../Nav.jsx";

export default function Services() {
    const mainServices = [
        {
            title: "Bookkeeping and Accounting Services",
            description: "We offer meticulous bookkeeping and accounting solutions that ensure your financial records are accurate, up-to-date, and compliant with regulatory standards. Our experts help you manage day-to-day transactions, prepare financial statements, and provide insights to drive your business forward.",
            icon: <Calculator className="w-8 h-8" />,
            features: ["Daily transaction management", "Financial statements preparation", "Regulatory compliance", "Business insights"]
        },
        {
            title: "Tax Registration, Returns, and Management Services",
            description: "Our tax specialists assist with seamless tax registration, preparing and filing returns, and managing tax compliance. We strive to optimize your tax obligations while ensuring adherence to Zimbabwean tax laws, minimizing risks and penalties.",
            icon: <FileText className="w-8 h-8" />,
            features: ["Tax registration assistance", "Returns preparation & filing", "Tax compliance management", "Risk minimization"]
        },
        {
            title: "Company Registration, Re-registration & Incorporation",
            description: "We simplify the process of registering and re-registering companies in Zimbabwe, handling all legal requirements efficiently. Whether starting a new business or updating existing registration details, our team ensures fast, compliant, and hassle-free incorporation.",
            icon: <Building2 className="w-8 h-8" />,
            features: ["New company registration", "Re-registration services", "Legal compliance", "Fast processing"]
        },
        {
            title: "Internal Audit Services, Risk Management, Due Diligence & Compliance",
            description: "Our internal audit and risk management services help identify vulnerabilities, improve controls, and ensure regulatory compliance. We conduct thorough due diligence to support informed decision-making and protect your business assets.",
            icon: <Shield className="w-8 h-8" />,
            features: ["Internal audit services", "Risk assessment", "Due diligence", "Compliance monitoring"]
        },
        {
            title: "Business Management Training Services",
            description: "We provide tailored training programs to equip your team with essential business management skills, enhancing operational efficiency, leadership, and strategic planning for sustainable growth.",
            icon: <GraduationCap className="w-8 h-8" />,
            features: ["Leadership training", "Strategic planning", "Operational efficiency", "Sustainable growth"]
        }
    ];

    const retailServices = [
        {
            title: "Stationery & Office Supplies",
            description: "Quality, affordable office essentials for smooth operational workflows.",
            icon: <PenTool className="w-6 h-6" />,
            items: ["Office stationery", "Paper products", "Writing instruments", "Filing solutions"]
        },
        {
            title: "Computer Consumables",
            description: "Reliable supplies of printers, toners, and tech accessories to keep your business connected.",
            icon: <Monitor className="w-6 h-6" />,
            items: ["Printer cartridges", "Toners", "Computer accessories", "Tech supplies"]
        },
        {
            title: "Construction Hardware",
            description: "Durable hardware products tailored for construction projects, ensuring quality and efficiency on site.",
            icon: <Hammer className="w-6 h-6" />,
            items: ["Construction tools", "Hardware supplies", "Building materials", "Safety equipment"]
        }
    ];

    const ServiceCard = ({ service, index }) => (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="p-8">
                <div className="flex items-center mb-6">
                    <div
                        className="p-3 rounded-lg mr-4"
                        style={{ backgroundColor: '#fdcc29', color: '#1b1b1b' }}
                    >
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: '#1b1b1b' }}>
                        {service.title}
                    </h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                </p>

                <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4" style={{ color: '#fdcc29' }} />
                            <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                    ))}
                </div>

                <button className="mt-6 flex items-center space-x-2 font-medium hover:underline transition-all duration-300">
                    <span style={{ color: '#1b1b1b' }}>Learn More</span>
                    <ArrowRight className="w-4 h-4" style={{ color: '#fdcc29' }} />
                </button>
            </div>
        </div>
    );

    const RetailCard = ({ service }) => (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">

            <div className="flex items-center mb-4">
                <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: '#fdcc29', color: '#1b1b1b' }}
                >
                    {service.icon}
                </div>
                <h4 className="text-lg font-bold" style={{ color: '#1b1b1b' }}>
                    {service.title}
                </h4>
            </div>

            <p className="text-gray-600 mb-4 text-sm">
                {service.description}
            </p>

            <div className="grid grid-cols-2 gap-2">
                {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-3 h-3" style={{ color: '#fdcc29' }} />
                        <span className="text-xs text-gray-700">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Nav/>
            {/* Hero Section */}
            <div className="relative py-20" style={{ backgroundColor: '#1b1b1b' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Target className="w-16 h-16 mx-auto mb-6" style={{ color: '#fdcc29' }} />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive professional services and retail solutions tailored to meet your business needs
                    </p>
                </div>
            </div>

            {/* Main Services */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: '#1b1b1b' }}>
                            Professional Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Expert solutions designed to streamline your business operations and ensure compliance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {mainServices.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Retail & Supplies */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <ShoppingCart className="w-12 h-12 mx-auto mb-4" style={{ color: '#fdcc29' }} />
                        <h2 className="text-3xl font-bold mb-4" style={{ color: '#1b1b1b' }}>
                            Retail & Supplies
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Quality products and supplies to support your business operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {retailServices.map((service, index) => (
                            <RetailCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-16" style={{ backgroundColor: '#1b1b1b' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Why Choose Distinct Golden Services?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fdcc29' }}>
                                <Users className="w-8 h-8" style={{ color: '#1b1b1b' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                            <p className="text-gray-300">
                                Highly qualified professionals with extensive industry knowledge and hands-on experience
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fdcc29' }}>
                                <CheckCircle className="w-8 h-8" style={{ color: '#1b1b1b' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                            <p className="text-gray-300">
                                Trusted by over 100+ Zimbabwean SMEs, government ministries, and private enterprises
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fdcc29' }}>
                                <TrendingUp className="w-8 h-8" style={{ color: '#1b1b1b' }} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Customized Solutions</h3>
                            <p className="text-gray-300">
                                Tailored services and products to meet the unique requirements of each client
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 bg-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ color: '#1b1b1b' }}>
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Contact us today for a free consultation and discover how we can help your business thrive
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90 transform hover:scale-105"
                            style={{ backgroundColor: '#fdcc29', color: '#1b1b1b' }}
                        >
                            Get Free Consultation
                        </button>
                        <button
                            className="px-8 py-3 rounded-lg font-medium border-2 transition-all duration-300 hover:bg-gray-800 hover:text-white"
                            style={{ borderColor: '#1b1b1b', color: '#1b1b1b' }}
                        >
                            View Our Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}