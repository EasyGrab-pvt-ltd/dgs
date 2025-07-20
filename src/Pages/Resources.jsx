import React, { useState } from 'react';
import { Download, FileText, HelpCircle, AlertCircle, ChevronDown, ChevronUp, Calendar, Shield, Building, Calculator, Users, BookOpen } from 'lucide-react';
import Nav from "../Nav.jsx";

const Resources = () => {
    const [activeTab, setActiveTab] = useState('forms');
    const [expandedFAQ, setExpandedFAQ] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What types of services does Distinct Golden Services offer?",
            answer: "We provide a comprehensive range of services including bookkeeping and accounting, tax registration and management, company registration and incorporation, internal audits, risk management, due diligence, business management training, and retail supplies such as stationery, computer consumables, and construction hardware."
        },
        {
            id: 2,
            question: "How can I get a free consultation?",
            answer: "Simply contact us through our website's contact form, email, or phone number of Facebook page, or WhatsApp to schedule your free consultation. Our team will discuss your needs and recommend the best solutions for your business."
        },
        {
            id: 3,
            question: "Do you serve startups and small businesses?",
            answer: "Yes, we specialize in supporting small and medium enterprises (SMEs), helping them establish a strong financial foundation and providing ongoing professional support tailored to their growth."
        },
        {
            id: 4,
            question: "Can you assist with company registration and licensing?",
            answer: "Absolutely. We handle the entire process of company registration, re-registration, and incorporation, ensuring compliance with all legal requirements for a smooth setup."
        },
        {
            id: 5,
            question: "Do you provide retail supplies for businesses?",
            answer: "Yes, our retail division supplies stationery, computer consumables, groceries, and construction hardware, catering to the needs of various organizations and individuals."
        },
        {
            id: 6,
            question: "How experienced is your team?",
            answer: "Our team comprises highly qualified professionals, including auditors, accountants, tax specialists, and finance experts with extensive industry knowledge and practical experience in financial systems and compliance."
        },
        {
            id: 7,
            question: "How do you ensure the confidentiality and security of client information?",
            answer: "We adhere to strict confidentiality policies and utilize secure systems and protocols to protect all client data and ensure your information remains private and secure."
        }
    ];

    const toggleFAQ = (id) => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };

    return (
        <>
            <Nav/>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 mt-8">

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full mb-6 shadow-lg">
                            <BookOpen className="w-10 h-10 text-gray-900" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Resources & Support
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Access essential documents, get answers to common questions, and stay updated with the latest regulations
                        </p>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
                            <div className="flex space-x-1">
                                <button
                                    onClick={() => setActiveTab('forms')}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === 'forms'
                                            ? 'bg-yellow-400 text-gray-900 shadow-md'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    <FileText className="w-5 h-5 inline-block mr-2" />
                                    Forms & Documents
                                </button>
                                <button
                                    onClick={() => setActiveTab('faqs')}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === 'faqs'
                                            ? 'bg-yellow-400 text-gray-900 shadow-md'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    <HelpCircle className="w-5 h-5 inline-block mr-2" />
                                    FAQs
                                </button>
                                <button
                                    onClick={() => setActiveTab('regulations')}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === 'regulations'
                                            ? 'bg-yellow-400 text-gray-900 shadow-md'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    <AlertCircle className="w-5 h-5 inline-block mr-2" />
                                    Regulations & Updates
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    {activeTab === 'forms' && (
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
                                    <Download className="w-8 h-8 text-gray-900" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Downloadable Forms & Documents</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Access essential business forms and documents to streamline your operations
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-yellow-400 transition-colors duration-300">
                                    <div className="text-center">
                                        <Calculator className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Tax Forms</h3>
                                        <p className="text-gray-600 text-sm mb-4">Essential tax registration and filing documents</p>
                                        <div className="text-yellow-500 font-medium">Coming Soon</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-yellow-400 transition-colors duration-300">
                                    <div className="text-center">
                                        <Building className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Registration</h3>
                                        <p className="text-gray-600 text-sm mb-4">Business incorporation and registration forms</p>
                                        <div className="text-yellow-500 font-medium">Coming Soon</div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-yellow-400 transition-colors duration-300">
                                    <div className="text-center">
                                        <FileText className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Audit Templates</h3>
                                        <p className="text-gray-600 text-sm mb-4">Internal audit checklists and templates</p>
                                        <div className="text-yellow-500 font-medium">Coming Soon</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8">
                                    <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Staff Access Required</h3>
                                    <p className="text-gray-600">
                                        Forms and documents will be added by Distinct Golden Services staff.
                                        Contact us if you need specific documentation for your business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'faqs' && (
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
                                    <HelpCircle className="w-8 h-8 text-gray-900" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Find answers to common questions about our services and processes
                                </p>
                            </div>

                            <div className="max-w-4xl mx-auto space-y-4">
                                {faqs.map((faq) => (
                                    <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-yellow-400 transition-colors duration-300">
                                        <button
                                            onClick={() => toggleFAQ(faq.id)}
                                            className="w-full px-6 py-4 text-left bg-gradient-to-r from-gray-50 to-white hover:from-yellow-50 hover:to-yellow-50 transition-colors duration-300 flex justify-between items-center"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                            {expandedFAQ === faq.id ? (
                                                <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                            )}
                                        </button>
                                        {expandedFAQ === faq.id && (
                                            <div className="px-6 py-4 bg-white border-t border-gray-100">
                                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-xl p-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Still Have Questions?</h3>
                                    <p className="text-gray-600 mb-6">
                                        Can't find what you're looking for? Our team is here to help with personalized assistance.
                                    </p>
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
                                        Contact Our Support Team
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'regulations' && (
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mb-6">
                                    <AlertCircle className="w-8 h-8 text-gray-900" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Regulations & Updates</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Stay informed about the latest regulatory changes and compliance requirements
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                                    <div className="flex items-center mb-4">
                                        <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">Tax Regulations</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Latest updates on tax laws, filing requirements, and compliance deadlines.
                                    </p>
                                    <div className="text-blue-600 font-medium">Updates coming soon</div>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                                    <div className="flex items-center mb-4">
                                        <Shield className="w-8 h-8 text-green-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">Business Compliance</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Important regulatory changes affecting business operations and licensing.
                                    </p>
                                    <div className="text-green-600 font-medium">Updates coming soon</div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Content Management Area</h3>
                                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                                    This section will be populated by Distinct Golden Services team with relevant regulations,
                                    compliance updates, and important announcements affecting our clients.
                                </p>
                                <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 inline-block">
                                    <p className="text-yellow-800 font-medium">
                                        📋 Staff will post updates here as regulations change
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12">
                                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-8">
                                    <div className="flex items-center justify-center mb-4">
                                        <AlertCircle className="w-8 h-8 text-yellow-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">Stay Updated</h3>
                                    </div>
                                    <p className="text-gray-600 text-center">
                                        Subscribe to our newsletter or follow our social media channels to receive immediate notifications
                                        about regulatory changes that may impact your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>

    );
};

export default Resources;