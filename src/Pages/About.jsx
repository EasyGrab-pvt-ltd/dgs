import React from 'react';
import {
    Building2,
    Target,
    Eye,
    Heart,
    Users,
    Lightbulb,
    UserCheck,
    Handshake,
    Shield,
    Calculator,
    FileText,
    TrendingUp,
    Award,
    GraduationCap,
    Briefcase,
    CheckCircle,
    ShoppingCart,
    Hammer
} from 'lucide-react';
import Nav from "../Nav.jsx";

export default function About() {
    const services = [
        { name: 'Audit Services', icon: <Shield className="w-6 h-6" /> },
        { name: 'Tax Advisory', icon: <Calculator className="w-6 h-6" /> },
        { name: 'Financial Advisory', icon: <TrendingUp className="w-6 h-6" /> },
        { name: 'Outsourcing', icon: <FileText className="w-6 h-6" /> }
    ];

    const coreValues = [
        {
            title: 'Integrity',
            description: 'We operate in an honest, ethical, legal and professional manner, delivering competent, quality professional services.',
            icon: <Shield className="w-8 h-8" />
        },
        {
            title: 'Teamwork',
            description: 'We encourage teamwork among staff members to increase performance, employee unity and company culture.',
            icon: <Users className="w-8 h-8" />
        },
        {
            title: 'Innovation',
            description: 'We constantly re-invent ourselves, coming up with quality and attractive products that meet client needs.',
            icon: <Lightbulb className="w-8 h-8" />
        },
        {
            title: 'Customer Focus',
            description: 'Our clients are our main focus. We aim to develop client loyalty and satisfaction through aligned objectives.',
            icon: <UserCheck className="w-8 h-8" />
        },
        {
            title: 'Respect for People',
            description: 'We respect others, make effort to understand each other, and build mutual trust between ourselves and clients.',
            icon: <Heart className="w-8 h-8" />
        }
    ];

    const achievements = [
        'Over 100+ Zimbabwean SME clients',
        'Government ministries partnerships',
        'Parastatals collaboration',
        'Private enterprises trust'
    ];

    const qualifications = [
        'Fellow of the ACCA',
        'Certified Information Systems Auditor (CISA)',
        'Certified Tax Accountant (ICTAZ)',
        'Certified Internal Control Specialist',
        'Master of Science in Financial Management',
        'Registered Public and Tax Accountant'
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Nav/>

            {/* Hero Section */}
            <div className="relative py-20" style={{ backgroundColor: '#1b1b1b' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Building2 className="w-16 h-16 mx-auto mb-6" style={{ color: '#fdcc29' }} />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About Distinct Golden Services
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A reputable and dynamic Zimbabwean company dedicated to providing comprehensive professional services and retail solutions.
                    </p>
                </div>
            </div>

            {/* Company Profile */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: '#1b1b1b' }}>
                                Company Profile
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Distinct Golden Services (Pvt) Ltd is trusted by over a hundred Zimbabwean small to medium scale business owners. Our core expertise encompasses Audit, Tax, Outsourcing, and Financial Advisory services, tailored to meet the diverse needs of our clients across various sectors.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                In addition to our consulting offerings, we operate a thriving retail division specializing in stationery, computer consumables, groceries, and construction materials. Our products and services are customized with user-friendly software platforms and highly qualified professionals.
                            </p>

                            {/* Services Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                        <div style={{ color: '#fdcc29' }}>{service.icon}</div>
                                        <span className="font-medium text-gray-800">{service.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-xl font-bold mb-4" style={{ color: '#1b1b1b' }}>
                                    Our Achievements
                                </h3>
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-center space-x-3 mb-3">
                                        <CheckCircle className="w-5 h-5" style={{ color: '#fdcc29' }} />
                                        <span className="text-gray-700">{achievement}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: '#fdcc29' }}>
                                <h4 className="text-2xl font-bold mb-2" style={{ color: '#1b1b1b' }}>
                                    Get a Free Consultation Today!
                                </h4>
                                <p style={{ color: '#1b1b1b' }}>
                                    We are the solution for all your accounting, tax, company secretarial and compliance needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <Target className="w-10 h-10 mr-4" style={{ color: '#fdcc29' }} />
                                <h3 className="text-2xl font-bold" style={{ color: '#1b1b1b' }}>Our Mission</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                To offer exceptional value for money services and products, in an environment that encourages teamwork, innovation and excellence.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <Eye className="w-10 h-10 mr-4" style={{ color: '#fdcc29' }} />
                                <h3 className="text-2xl font-bold" style={{ color: '#1b1b1b' }}>Our Vision</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                We aim to be the practice of choice in accounting, taxation and secretarial services in the growing Zimbabwean market, championing client needs through consistency in international standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: '#1b1b1b' }}>
                            Our Core Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our values are inspired by international professional standards including IFAC, ACCA, ICSA, ISACA, and PAAB.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    <div style={{ color: '#fdcc29' }} className="mr-3">{value.icon}</div>
                                    <h4 className="text-xl font-bold" style={{ color: '#1b1b1b' }}>{value.title}</h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Industries We Serve */}
            <div className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: '#1b1b1b' }}>
                            Industries We Serve
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We provide specialized services tailored to meet the unique needs of various sectors and industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <TrendingUp className="w-8 h-8 mr-3" style={{ color: '#fdcc29' }} />
                                <h4 className="text-lg font-bold" style={{ color: '#1b1b1b' }}>Small & Medium Enterprises</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                We understand the unique challenges faced by SMEs and offer tailored accounting, tax, and business support services to help them grow sustainably, efficiently manage finances, and stay compliant with regulatory standards.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <Building2 className="w-8 h-8 mr-3" style={{ color: '#fdcc29' }} />
                                <h4 className="text-lg font-bold" style={{ color: '#1b1b1b' }}>Corporate Clients</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Our expertise extends to large corporations and corporate entities, providing comprehensive financial advisory, internal audits, risk management, and outsourcing solutions designed to optimize operations and support strategic decision-making.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <ShoppingCart className="w-8 h-8 mr-3" style={{ color: '#fdcc29' }} />
                                <h4 className="text-lg font-bold" style={{ color: '#1b1b1b' }}>Retail Businesses</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                We assist retail businesses by offering inventory management, point-of-sale accounting, and retail-specific financial services that streamline operations, improve cash flow, and enhance profitability.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <Hammer className="w-8 h-8 mr-3" style={{ color: '#fdcc29' }} />
                                <h4 className="text-lg font-bold" style={{ color: '#1b1b1b' }}>Construction & Infrastructure</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Our services cater to the construction and infrastructure sector, providing specialized financial management, project costing, supply chain solutions, and compliance support to ensure smooth project execution and financial planning.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
                            <div className="flex items-center mb-4">
                                <GraduationCap className="w-8 h-8 mr-3" style={{ color: '#fdcc29' }} />
                                <h4 className="text-lg font-bold" style={{ color: '#1b1b1b' }}>Public Sector</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                We deliver tailored accounting, auditing, and compliance services to schools, government entities, parastatals, and local authorities, ensuring transparency, regulatory adherence, and efficient financial management to support public service delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership */}
            <div className="py-16" style={{ backgroundColor: '#1b1b1b' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Our Leadership
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Led by experienced professionals with extensive industry knowledge and practical expertise.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1 text-center">
                                <div className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fdcc29' }}>
                                    <Briefcase className="w-16 h-16" style={{ color: '#1b1b1b' }} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1b1b1b' }}>
                                    Godern Chuma
                                </h3>
                                <p className="font-medium" style={{ color: '#fdcc29' }}>
                                    Managing Partner
                                </p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold mb-3" style={{ color: '#1b1b1b' }}>
                                        Professional Qualifications
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {qualifications.map((qual, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <Award className="w-4 h-4" style={{ color: '#fdcc29' }} />
                                                <span className="text-sm text-gray-700">{qual}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold mb-3" style={{ color: '#1b1b1b' }}>
                                        Professional Experience
                                    </h4>
                                    <div className="space-y-2 text-gray-700">
                                        <div className="flex items-center space-x-2">
                                            <GraduationCap className="w-4 h-4" style={{ color: '#fdcc29' }} />
                                            <span className="text-sm">Provincial Accountant - Zimbabwe Government Ministry (2003-2008)</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Briefcase className="w-4 h-4" style={{ color: '#fdcc29' }} />
                                            <span className="text-sm">Senior Auditor - Old Mutual Zimbabwe (2008-2018)</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Users className="w-4 h-4" style={{ color: '#fdcc29' }} />
                                            <span className="text-sm">Team Leader of Inspections - CABS (2018-2021)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}