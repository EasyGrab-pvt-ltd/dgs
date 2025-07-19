import React, {useState, useEffect} from 'react';
import {
    ChevronRight,
    Award,
    TrendingUp,
    Calculator,
    FileText,
    Building,
    Shield,
    GraduationCap,
    ShoppingCart,
    Phone,
    Mail,
    MapPin,
    Star,
    ArrowRight,
    ChevronLeft,
    Play,
    Pause
} from 'lucide-react';
import Nav from "../Nav.jsx";

const Home = () => {
    const [currentNews, setCurrentNews] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [visibleElements, setVisibleElements] = useState(new Set());

    const news = [
        "New Tax Compliance Updates for 2025 - Stay ahead with our expert guidance",
        "Digital Transformation Services Now Available - Modernize your business operations",
        "Free Business Health Check-ups Available - Book your consultation today"
    ];

    const carouselSlides = [
        {
            title: "Expert Financial Solutions",
            subtitle: "Trusted by 100+ SME Owners",
            description: "Professional audit, tax, and accounting services tailored for your business success",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
            cta: "Get Free Consultation"
        },
        {
            title: "Complete Business Solutions",
            subtitle: "From Registration to Compliance",
            description: "End-to-end services including company registration, tax management, and business training",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2387&q=80",
            cta: "Explore Services"
        },
        {
            title: "Retail & Supplies Division",
            subtitle: "Quality Office & Construction Materials",
            description: "Comprehensive retail solutions for stationery, computer consumables, and construction hardware",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
            cta: "Shop Now"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentNews((prev) => (prev + 1) % news.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [news.length]);

    useEffect(() => {
        if (isAutoPlay) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
            }, 6000);
            return () => clearInterval(timer);
        }
    }, [carouselSlides.length, isAutoPlay]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => new Set(prev).add(entry.target.dataset.animate));
                    }
                });
            },
            {threshold: 0.1, rootMargin: '50px'}
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const services = [
        {
            icon: Calculator,
            title: "Bookkeeping & Accounting",
            description: "Professional financial management and reporting solutions",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: FileText,
            title: "Tax Services",
            description: "Registration, returns, and comprehensive tax management",
            color: "from-green-500 to-green-600"
        },
        {
            icon: Building,
            title: "Company Registration",
            description: "Complete incorporation and re-registration services",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Shield,
            title: "Audit & Compliance",
            description: "Internal audit, risk management, and due diligence",
            color: "from-red-500 to-red-600"
        },
        {
            icon: GraduationCap,
            title: "Business Training",
            description: "Professional development and management training",
            color: "from-indigo-500 to-indigo-600"
        },
        {
            icon: ShoppingCart,
            title: "Retail & Supplies",
            description: "Stationery, computer consumables, and construction materials",
            color: "from-orange-500 to-orange-600"
        }
    ];

    const stats = [
        {number: "100+", label: "SME Clients", icon: "👥"},
        {number: "15+", label: "Years Experience", icon: "⭐"},
        {number: "24/7", label: "Support Available", icon: "🕒"},
        {number: "100%", label: "Client Satisfaction", icon: "✅"}
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    };

    const isVisible = (elementId) => visibleElements.has(elementId);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
            <Nav/>
            {/* Hero Carousel */}
            <section className="relative h-screen overflow-hidden">
                {carouselSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                filter: 'brightness(0.4)'
                            }}
                        />
                        <div className="absolute inset-0" style={{backgroundColor: 'rgba(27, 27, 27, 0.7)'}}/>

                        <div className="relative h-full flex items-center justify-center text-white">
                            <div className="max-w-6xl mx-auto px-4 text-center">
                                <div
                                    className={`transition-all duration-1000 delay-300 ${
                                        index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                >
                                    <div
                                        className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse"
                                        style={{backgroundColor: '#fdcc29', color: '#1b1b1b'}}>
                                        <Award className="w-5 h-5 mr-2"/>
                                        {slide.subtitle}
                                    </div>

                                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                                        <span style={{color: '#fdcc29'}}>Distinct Golden</span><br/>
                                        <span className="text-4xl lg:text-5xl">{slide.title}</span>
                                    </h1>

                                    <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 max-w-4xl mx-auto">
                                        {slide.description}
                                    </p>

                                    <button
                                        className="px-10 py-4 rounded-xl font-bold text-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-bounce"
                                        style={{backgroundColor: '#fdcc29', color: '#1b1b1b'}}
                                    >
                                        {slide.cta}
                                        <ArrowRight className="w-6 h-6 ml-2 inline"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Carousel Controls */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6 text-white"/>
                    </button>

                    <div className="flex space-x-2">
                        {carouselSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide ? 'w-8 opacity-100' : 'w-3 opacity-60'
                                }`}
                                style={{backgroundColor: index === currentSlide ? '#fdcc29' : 'white'}}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6 text-white"/>
                    </button>

                    <button
                        onClick={() => setIsAutoPlay(!isAutoPlay)}
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 ml-4"
                    >
                        {isAutoPlay ? <Pause className="w-6 h-6 text-white"/> : <Play className="w-6 h-6 text-white"/>}
                    </button>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-20 h-20 rounded-full opacity-20 animate-bounce"
                     style={{backgroundColor: '#fdcc29', animationDelay: '0s', animationDuration: '3s'}}/>
                <div className="absolute top-40 left-20 w-16 h-16 rounded-full opacity-20 animate-bounce"
                     style={{backgroundColor: '#fdcc29', animationDelay: '1s', animationDuration: '4s'}}/>
                <div className="absolute bottom-40 right-40 w-12 h-12 rounded-full opacity-20 animate-bounce"
                     style={{backgroundColor: '#fdcc29', animationDelay: '2s', animationDuration: '5s'}}/>
            </section>

            {/* Animated Stats Section */}
            <section
                className="py-20 relative overflow-hidden"
                style={{backgroundColor: '#fdcc29'}}
                data-animate="stats"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-50"/>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                                    isVisible('stats') ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                                }`}
                            >
                                <div className="text-5xl mb-4 animate-pulse"
                                     style={{animationDelay: `${index * 0.5}s`}}>
                                    {stat.icon}
                                </div>
                                <div className="text-4xl lg:text-6xl font-bold mb-2 animate-pulse"
                                     style={{color: '#1b1b1b', animationDelay: `${index * 0.3}s`}}>
                                    {stat.number}
                                </div>
                                <div className="font-semibold text-lg" style={{color: '#1b1b1b'}}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animated Background Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-10 animate-spin"
                     style={{backgroundColor: '#1b1b1b', animationDuration: '20s'}}/>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full opacity-10 animate-spin"
                     style={{backgroundColor: '#1b1b1b', animationDuration: '25s'}}/>
            </section>

            {/* Animated Services Section */}
            <section className="py-24 bg-white relative" data-animate="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`text-center mb-20 transform transition-all duration-1000 ${
                            isVisible('services') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Our Services
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{backgroundColor: '#fdcc29'}}/>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            From accounting to retail supplies, we provide integrated solutions tailored to government
                            ministries, parastatals, private businesses, and individual clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-700 delay-${index * 100} ${
                                        isVisible('services') ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                                    }`}
                                    style={{
                                        border: '1px solid #f3f4f6',
                                        transformStyle: 'preserve-3d'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-12px) rotateX(5deg) rotateY(5deg)';
                                        e.currentTarget.style.borderColor = '#fdcc29';
                                        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
                                        e.currentTarget.style.borderColor = '#f3f4f6';
                                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    {/* Animated Background Gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}/>

                                    <div className="relative z-10">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                                            style={{backgroundColor: '#fdcc29'}}>
                                            <Icon className="w-10 h-10" style={{color: '#1b1b1b'}}/>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300"
                                            style={{color: '#1b1b1b'}}>
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <button
                                            className="font-semibold hover:opacity-80 flex items-center group-hover:translate-x-4 transition-all duration-300"
                                            style={{color: '#fdcc29'}}>
                                            Learn More <ChevronRight
                                            className="w-5 h-5 ml-2 group-hover:animate-bounce"/>
                                        </button>
                                    </div>

                                    {/* Floating Icon */}
                                    <div
                                        className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500"
                                        style={{backgroundColor: '#fdcc29'}}>
                                        <Icon className="w-6 h-6" style={{color: '#1b1b1b'}}/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Animated News Section */}
            <section className="py-20 bg-gradient-to-r from-gray-50 via-white to-gray-50" data-animate="news">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`text-center mb-16 transform transition-all duration-1000 ${
                            isVisible('news') ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{color: '#1b1b1b'}}>
                            Latest News & Updates
                        </h2>
                        <p className="text-xl text-gray-600">
                            Stay informed with the latest updates from Distinct Golden Services
                        </p>
                    </div>

                    <div
                        className={`bg-white rounded-3xl shadow-2xl p-10 border-l-8 transform transition-all duration-1000 delay-300 ${
                            isVisible('news') ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                        }`}
                        style={{borderColor: '#fdcc29'}}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 animate-pulse"
                                    style={{backgroundColor: '#fdcc29'}}>
                                    <TrendingUp className="w-6 h-6" style={{color: '#1b1b1b'}}/>
                                </div>
                                <span className="text-lg font-bold tracking-wide" style={{color: '#fdcc29'}}>
                  LATEST UPDATE
                </span>
                            </div>
                            <div className="flex space-x-3">
                                {news.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                            index === currentNews ? 'scale-125' : 'scale-100'
                                        }`}
                                        style={{
                                            backgroundColor: index === currentNews ? '#fdcc29' : '#d1d5db',
                                            boxShadow: index === currentNews ? '0 0 10px rgba(253, 204, 41, 0.5)' : 'none'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <p className="text-xl text-gray-800 font-medium leading-relaxed animate-fadeIn">
                            {news[currentNews]}
                        </p>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="py-24 text-white relative overflow-hidden" style={{backgroundColor: '#1b1b1b'}}
                     data-animate="cta">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    width: `${Math.random() * 6 + 2}px`,
                                    height: `${Math.random() * 6 + 2}px`,
                                    backgroundColor: '#fdcc29',
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${Math.random() * 3 + 2}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                        className={`transform transition-all duration-1000 ${
                            isVisible('cta') ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                        }`}
                    >
                        <h2 className="text-5xl lg:text-7xl font-bold mb-8 animate-pulse">
                            Ready to <span style={{color: '#fdcc29'}}>Elevate</span> Your Business?
                        </h2>

                        <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Contact Distinct Golden Services today for a free consultation and discover how we can help
                            you achieve your goals with personalized, reliable service.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
                            <button
                                className="px-12 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transform hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-2xl animate-bounce"
                                style={{backgroundColor: '#fdcc29', color: '#1b1b1b', animationDelay: '0.5s'}}>
                                Get Free Consultation
                                <Phone className="w-6 h-6 ml-3 inline animate-pulse"/>
                            </button>
                            <button
                                className="px-12 py-5 border-3 rounded-2xl font-bold text-xl hover:opacity-90 hover:scale-110 hover:-rotate-1 transition-all duration-300 shadow-2xl"
                                style={{borderColor: '#fdcc29', color: '#fdcc29'}}>
                                Get a Quote
                            </button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {icon: Phone, text: "+263 xxx xxx xxx", delay: "0s"},
                                {icon: Mail, text: "info@distinctgolden.co.zw", delay: "0.2s"},
                                {icon: MapPin, text: "Harare, Zimbabwe", delay: "0.4s"}
                            ].map((contact, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                                    style={{animationDelay: contact.delay}}
                                >
                                    <contact.icon className="w-8 h-8 animate-pulse" style={{color: '#fdcc29'}}/>
                                    <span className="text-gray-300 text-lg font-medium">{contact.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating CTA Elements */}
                <div className="absolute top-10 right-10 w-24 h-24 rounded-full opacity-10 animate-spin"
                     style={{backgroundColor: '#fdcc29', animationDuration: '15s'}}/>
                <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-10 animate-spin"
                     style={{backgroundColor: '#fdcc29', animationDuration: '20s'}}/>
            </section>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .group:hover .group-hover\\:animate-bounce {
                    animation: bounce 1s infinite;
                }
            `}</style>
        </div>
    );
};

export default Home;