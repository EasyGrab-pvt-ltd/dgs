import React, { useState } from 'react';
import { Calculator, TrendingUp, MapPin, Clock, ChevronRight, Star, Award, DollarSign, BarChart3, PieChart, Building2 } from 'lucide-react';

const Careers = () => {
    const [activeTab, setActiveTab] = useState('jobs');

    const jobOpenings = [
        {
            id: 1,
            title: "Senior Financial Analyst",
            department: "Finance",
            location: "New York / Remote",
            type: "Full-time",
            experience: "4+ years",
            description: "Lead financial planning, analysis, and reporting to drive strategic business decisions.",
            skills: ["Financial Modeling", "Excel/PowerBI", "SQL", "Financial Reporting", "Budgeting"]
        },
        {
            id: 2,
            title: "Staff Accountant",
            department: "Accounting",
            location: "Chicago",
            type: "Full-time",
            experience: "2+ years",
            description: "Manage general ledger activities, month-end close, and ensure accurate financial reporting.",
            skills: ["GAAP", "QuickBooks", "Excel", "Account Reconciliation", "Tax Preparation"]
        },
        {
            id: 3,
            title: "Treasury Analyst",
            department: "Treasury",
            location: "Remote",
            type: "Full-time",
            experience: "3+ years",
            description: "Optimize cash management, oversee investment strategies, and manage banking relationships.",
            skills: ["Cash Flow Modeling", "Risk Management", "Banking", "Investment Analysis", "Treasury Systems"]
        },
        {
            id: 4,
            title: "Tax Manager",
            department: "Tax",
            location: "Dallas",
            type: "Full-time",
            experience: "5+ years",
            description: "Lead tax compliance, planning strategies, and manage relationships with tax advisors.",
            skills: ["Corporate Tax", "Tax Software", "Compliance", "Tax Planning", "CPA Preferred"]
        },
        {
            id: 5,
            title: "Financial Controller",
            department: "Finance",
            location: "San Francisco",
            type: "Full-time",
            experience: "7+ years",
            description: "Oversee all accounting operations, financial reporting, and internal controls.",
            skills: ["Management", "SOX Compliance", "Team Leadership", "Strategic Planning", "Public Accounting"]
        }
    ];

    const internshipPrograms = [
        {
            id: 1,
            title: "Finance Intern",
            department: "Corporate Finance",
            duration: "12 weeks",
            location: "New York",
            season: "Summer 2025",
            description: "Support financial analysis, budgeting, and strategic planning initiatives while gaining hands-on experience.",
            perks: ["Mentorship Program", "Real Project Ownership", "Professional Development Workshops"]
        },
        {
            id: 2,
            title: "Accounting Intern",
            department: "General Accounting",
            duration: "10 weeks",
            location: "Chicago / Remote",
            season: "Summer 2025",
            description: "Assist with month-end close processes, account reconciliations, and financial statement preparation.",
            perks: ["CPA Exam Support", "Cross-Functional Training", "Career Path Guidance"]
        },
        {
            id: 3,
            title: "Financial Planning Intern",
            department: "FP&A",
            duration: "12 weeks",
            location: "Remote",
            season: "Fall 2025",
            description: "Work on budgeting, forecasting, and variance analysis while learning advanced financial modeling.",
            perks: ["Advanced Excel Training", "Business Intelligence Tools", "Leadership Exposure"]
        }
    ];

    const benefits = [
        { icon: DollarSign, title: "Competitive Compensation", desc: "Market-leading salary + bonuses" },
        { icon: Award, title: "Professional Development", desc: "CPA/CFA exam support & continuing education" },
        { icon: BarChart3, title: "Career Growth", desc: "Clear advancement paths & leadership opportunities" },
        { icon: Building2, title: "Work-Life Balance", desc: "Flexible schedules & comprehensive benefits" }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400/10 rounded-full mb-6 border border-yellow-400/20">
                            <Calculator className="w-10 h-10 text-yellow-600" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                            Finance & Accounting Careers
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Shape the financial future with us. Join our dynamic finance and accounting teams where numbers drive strategy,
                            precision meets innovation, and your expertise fuels our growth.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-6 py-3">
                                <span className="text-yellow-700 font-semibold">CPA Support</span>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-6 py-3">
                                <span className="text-yellow-700 font-semibold">Career Growth</span>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-6 py-3">
                                <span className="text-yellow-700 font-semibold">Competitive Pay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-center mb-12">
                        <div className="bg-white shadow-lg rounded-full p-2 border border-gray-200">
                            <button
                                onClick={() => setActiveTab('jobs')}
                                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeTab === 'jobs'
                                        ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/25'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                <Calculator className="w-5 h-5 inline-block mr-2" />
                                Job Openings
                            </button>
                            <button
                                onClick={() => setActiveTab('internships')}
                                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                                    activeTab === 'internships'
                                        ? 'bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/25'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                <TrendingUp className="w-5 h-5 inline-block mr-2" />
                                Internship Programs
                            </button>
                        </div>
                    </div>

                    {/* Job Openings */}
                    {activeTab === 'jobs' && (
                        <div className="space-y-6">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">Current Opportunities</h2>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Discover exciting career opportunities in finance and accounting where your analytical skills
                                    and attention to detail will drive our success.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {jobOpenings.map((job) => (
                                    <div
                                        key={job.id}
                                        className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                                                    {job.title}
                                                </h3>
                                                <p className="text-yellow-600 font-medium">{job.department}</p>
                                            </div>
                                            <div className="bg-yellow-50 rounded-full p-2 border border-yellow-200">
                                                <Calculator className="w-5 h-5 text-yellow-600" />
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {job.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200"
                                                >
                          {skill}
                        </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <BarChart3 className="w-4 h-4" />
                                                {job.experience}
                                            </div>
                                        </div>

                                        <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/25 flex items-center justify-center gap-2">
                                            Apply Now
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Internship Programs */}
                    {activeTab === 'internships' && (
                        <div className="space-y-6">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">Internship Programs</h2>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                    Launch your finance and accounting career with our comprehensive internship programs.
                                    Gain real-world experience and build valuable professional networks.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {internshipPrograms.map((program) => (
                                    <div
                                        key={program.id}
                                        className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                                                    {program.title}
                                                </h3>
                                                <p className="text-yellow-600 font-medium">{program.department}</p>
                                            </div>
                                            <div className="bg-yellow-50 rounded-full p-2 border border-yellow-200">
                                                <TrendingUp className="w-5 h-5 text-yellow-600" />
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>

                                        <div className="space-y-2 mb-4">
                                            <h4 className="font-semibold text-gray-900">Program Benefits:</h4>
                                            <ul className="text-gray-600 text-sm space-y-1">
                                                {program.perks.map((perk, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                                                        {perk}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {program.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {program.duration}
                                            </div>
                                        </div>

                                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 mb-4">
                                            <span className="text-yellow-700 font-medium text-sm">{program.season}</span>
                                        </div>

                                        <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/25 flex items-center justify-center gap-2">
                                            Apply for Internship
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Our Finance Team?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We offer comprehensive benefits and opportunities designed specifically for finance and accounting professionals.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-gray-800/30 to-gray-800/10 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300"
                        >
                            <div className="bg-yellow-400/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-yellow-400/20 transition-colors">
                                <benefit.icon className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border-t border-gray-700/50">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Build Your Finance Career?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        Join our team of financial professionals and take your career to the next level.
                        We're committed to your growth and success.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-400/25 flex items-center justify-center gap-2">
                            <PieChart className="w-5 h-5" />
                            Browse All Positions
                        </button>
                        <button className="border-2 border-yellow-400 text-yellow-400 font-semibold py-4 px-8 rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                            <Award className="w-5 h-5" />
                            Learn About Benefits
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;