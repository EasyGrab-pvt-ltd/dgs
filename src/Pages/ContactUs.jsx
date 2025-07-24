import React, { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    Building,
    Globe,
    Facebook,
    CheckCircle,
    User,
    Briefcase,
    AlertCircle
} from 'lucide-react';
import Nav from "../Nav.jsx";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after showing success message
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    service: '',
                    message: ''
                });
            }, 3000);
        }, 2000);
    };

    const services = [
        'Bookkeeping & Accounting',
        'Tax Registration & Management',
        'Company Registration',
        'Internal Audits',
        'Risk Management',
        'Due Diligence',
        'Business Management Training',
        'Retail Supplies',
        'Other'
    ];

    const contactMethods = [
        {
            icon: Phone,
            title: 'Phone',
            details: ['+263 2922 62208'],
            color: 'bg-blue-500'
        },
        {
            icon: MessageSquare,
            title: 'Mobile/WhatsApp',
            details: ['0712 690 489', '+263 778 208 003'],
            color: 'bg-green-500'
        },
        {
            icon: Mail,
            title: 'Email',
            details: ['dgoldenservices@gmail.com'],
            color: 'bg-red-500'
        },
        {
            icon: Globe,
            title: 'Website',
            details: ['www.distinctgolden.co.zw'],
            color: 'bg-purple-500'
        }
    ];

    return (
        <>
        <Nav/>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 mt-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full mb-6 shadow-lg">
                            <MessageSquare className="w-10 h-10 text-gray-900" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get in touch with our professional team for expert financial services and business solutions
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                                <p className="text-gray-600">
                                    Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                                    <p className="text-gray-600">
                                        Thank you for contacting us. We'll respond to your inquiry shortly.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                                    placeholder="+263 xxx xxx xxx"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                                    placeholder="Your company name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service of Interest
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-none"
                                            placeholder="Tell us about your needs or ask any questions..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-gray-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Contact Information & Location */}
                        <div className="space-y-8">
                            {/* Office Location */}
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-full mb-4">
                                        <Building className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Office</h3>
                                    <p className="text-gray-600">Visit us at our Bulawayo location</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Distinct Golden Services & Associates</h4>
                                            <p className="text-gray-600 mt-1">
                                                No. 10, 1st Floor Central Africa House<br />
                                                78 Jason Moyo Street<br />
                                                <span className="font-medium">Bulawayo, Zimbabwe</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Clock className="w-5 h-5 text-yellow-500 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Business Hours</h4>
                                            <p className="text-gray-600 mt-1">
                                                Monday - Friday: 8:00 AM - 5:00 PM<br />
                                                Saturday: 8:00 AM - 1:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Map Placeholder */}
                                <div className="mt-6 bg-gray-100 rounded-lg h-48 border-2 border-dashed border-gray-300 relative overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5281.787990825157!2d28.58116127523296!3d-20.15348078128577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDA5JzEyLjUiUyAyOMKwMzUnMDEuNSJF!5e1!3m2!1sen!2szw!4v1753341644192!5m2!1sen!2szw"
                                        className="absolute top-0 left-0 w-full h-full"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>

                            </div>

                            {/* Contact Methods */}
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                                <div className="space-y-4">
                                    {contactMethods.map((method, index) => (
                                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className={`${method.color} p-3 rounded-full`}>
                                                <method.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{method.title}</h4>
                                                {method.details.map((detail, idx) => (
                                                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Media */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                                    <a
                                        href="https://www.facebook.com/distinct.golden/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <Facebook className="w-5 h-5" />
                                        <span>Facebook Page</span>
                                    </a>
                                </div>
                            </div>

                            {/* Quick Contact CTA */}
                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-gray-900">
                                <div className="text-center">
                                    <Phone className="w-12 h-12 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
                                    <p className="mb-6 opacity-90">
                                        Call us directly or send a WhatsApp message for urgent inquiries
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a
                                            href="tel:+263292262208"
                                            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                                        >
                                            <Phone className="w-5 h-5 mr-2" />
                                            Call Now
                                        </a>
                                        <a
                                            href="https://wa.me/263778208003"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                                        >
                                            <MessageSquare className="w-5 h-5 mr-2" />
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;