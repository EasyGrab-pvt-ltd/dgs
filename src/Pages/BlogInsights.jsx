import React, { useState } from 'react';
import {
    BookOpen,
    TrendingUp,
    Lightbulb,
    Building2,
    Calendar,
    User,
    ArrowRight,
    Filter,
    Search,
    Clock,
    Tag,
    Eye,
    Share2
} from 'lucide-react';
import Nav from "../Nav.jsx";

const BlogInsights = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'All Posts', icon: BookOpen, count: 12 },
        { id: 'industry', name: 'Industry News', icon: TrendingUp, count: 5 },
        { id: 'guides', name: 'Tips & Guides', icon: Lightbulb, count: 4 },
        { id: 'company', name: 'Company Updates', icon: Building2, count: 3 }
    ];

    const blogPosts = [
        {
            id: 1,
            title: "New Tax Regulations for SMEs in Zimbabwe - What You Need to Know",
            excerpt: "Recent changes to tax legislation will significantly impact small and medium enterprises. Here's a comprehensive breakdown of what business owners should prepare for in 2025.",
            category: 'industry',
            author: 'DGS Tax Team',
            date: '2025-01-15',
            readTime: '8 min read',
            views: 1250,
            featured: true,
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: "5 Essential Financial Controls Every Small Business Should Implement",
            excerpt: "Discover the key financial controls that can protect your business from fraud, improve cash flow management, and ensure regulatory compliance.",
            category: 'guides',
            author: 'Sarah Moyo',
            date: '2025-01-10',
            readTime: '6 min read',
            views: 980,
            featured: false,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: "Distinct Golden Services Expands Retail Division",
            excerpt: "We're excited to announce the expansion of our retail supplies division, now offering a wider range of office equipment and construction materials to serve our clients better.",
            category: 'company',
            author: 'Management Team',
            date: '2025-01-08',
            readTime: '3 min read',
            views: 750,
            featured: false,
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            title: "Mastering Cash Flow Management: A Step-by-Step Guide",
            excerpt: "Cash flow is the lifeblood of any business. Learn proven strategies to forecast, monitor, and optimize your cash flow for sustainable growth.",
            category: 'guides',
            author: 'Finance Team',
            date: '2025-01-05',
            readTime: '10 min read',
            views: 1400,
            featured: true,
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            title: "Zimbabwe's Economic Outlook: Opportunities for Local Businesses",
            excerpt: "An analysis of current economic trends and how local businesses can position themselves to take advantage of emerging opportunities in various sectors.",
            category: 'industry',
            author: 'Economic Analysis Team',
            date: '2025-01-03',
            readTime: '7 min read',
            views: 920,
            featured: false,
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            title: "Digital Transformation in Accounting: Tools Every Business Needs",
            excerpt: "Explore the latest accounting software and digital tools that can streamline your financial processes and improve accuracy in reporting.",
            category: 'guides',
            author: 'Technology Team',
            date: '2024-12-28',
            readTime: '9 min read',
            views: 1100,
            featured: false,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter(post => post.featured);

    const getCategoryColor = (category) => {
        const colors = {
            industry: 'bg-blue-100 text-blue-800',
            guides: 'bg-green-100 text-green-800',
            company: 'bg-purple-100 text-purple-800'
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
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
                            Blog & Insights
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stay informed with the latest industry news, expert tips, and company updates from Distinct Golden Services
                        </p>
                    </div>

                    {/* Featured Posts */}
                    {featuredPosts.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredPosts.map((post) => (
                                    <div key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                        <div className="relative h-64">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                                            </div>
                                            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
                                                FEATURED
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center">
                                                        <User className="w-4 h-4 mr-1" />
                                                        {post.author}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Calendar className="w-4 h-4 mr-1" />
                                                        {new Date(post.date).toLocaleDateString()}
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex items-center">
                                                        <Eye className="w-4 h-4 mr-1" />
                                                        {post.views}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Clock className="w-4 h-4 mr-1" />
                                                        {post.readTime}
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center">
                                                Read More <ArrowRight className="w-4 h-4 ml-2" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Filters and Search */}
                    <div className="flex flex-col lg:flex-row gap-6 mb-12">
                        {/* Category Filter */}
                        <div className="flex-1">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <Filter className="w-5 h-5 text-yellow-500 mr-2" />
                                    <h3 className="font-semibold text-gray-900">Categories</h3>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`flex items-center justify-center p-3 rounded-lg transition-colors duration-300 ${
                                                activeCategory === category.id
                                                    ? 'bg-yellow-400 text-gray-900 shadow-md'
                                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                            }`}
                                        >
                                            <category.icon className="w-4 h-4 mr-2" />
                                            <span className="font-medium">{category.name}</span>
                                            <span className="ml-2 text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="lg:w-80">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <Search className="w-5 h-5 text-yellow-500 mr-2" />
                                    <h3 className="font-semibold text-gray-900">Search Articles</h3>
                                </div>
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {filteredPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-48">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <div className="flex items-center">
                                            <User className="w-3 h-3 mr-1" />
                                            {post.author}
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {new Date(post.date).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm flex items-center">
                                            Read More <ArrowRight className="w-3 h-3 ml-1" />
                                        </button>
                                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                                            <div className="flex items-center">
                                                <Eye className="w-3 h-3 mr-1" />
                                                {post.views}
                                            </div>
                                            <button className="flex items-center hover:text-yellow-500 transition-colors">
                                                <Share2 className="w-3 h-3 mr-1" />
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Signup */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 lg:p-12 text-center">
                        <div className="max-w-2xl mx-auto">
                            <BookOpen className="w-12 h-12 text-gray-900 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Stay Updated with Our Latest Insights
                            </h2>
                            <p className="text-gray-900 opacity-90 mb-8">
                                Subscribe to our newsletter and never miss important industry updates, expert tips, and company news
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                                />
                                <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BlogInsights;