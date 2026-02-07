import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
    ];

    const services = [
        { name: 'Student Visa', href: '/visa/student-visa' },
        { name: 'Visitor Visa', href: '/visa/visitor-visa' },
        { name: 'Work Visa', href: '/visa/work-visa' },
        { name: 'IELTS Coaching', href: '/test-prep/ielts' },
        { name: 'PTE Coaching', href: '/test-prep/pte' },
        { name: 'Air Tickets', href: '/services/air-tickets' },
    ];

    const countries = [
        { name: 'USA', href: '/countries/usa' },
        { name: 'UK', href: '/countries/uk' },
        { name: 'Canada', href: '/countries/canada' },
        { name: 'Australia', href: '/countries/australia' },
        { name: 'New Zealand', href: '/countries/new-zealand' },
        { name: 'Germany', href: '/countries/germany' },
    ];

    return (
        <footer className="bg-foreground text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 font-heading">Maruti Overseas Consultancy</h3>
                        <p className="text-muted-foreground mb-4">
                            Your trusted partner for visa consultancy and study abroad services since 2004.
                            Helping students achieve their global education dreams.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-primary hover:text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-primary hover:text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-primary hover:text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-primary hover:text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-heading">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-heading">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="text-muted-foreground hover:text-primary transition-colors">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 font-heading">Contact Us</h3>
                        <div className="space-y-3 text-muted-foreground">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                                <div>
                                    <p className="font-semibold text-primary-foreground">Head Office - Visnagar</p>
                                    <p className="text-sm">Visnagar, Gujarat, India</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                                <div>
                                    <p className="font-semibold text-primary-foreground">Branch - Ahmedabad</p>
                                    <p className="text-sm">Ahmedabad, Gujarat, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <a href="tel:+917940030637" className="hover:text-primary transition-colors">
                                    +91-79-40030637
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <a href="mailto:visnagar.moc@gmail.com" className="hover:text-primary transition-colors">
                                    visnagar.moc@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/10 mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Maruti Overseas Consultancy. All rights reserved.</p>
                    <p className="text-sm mt-2">Designed with ❤️ for your success</p>
                </div>
            </div>
        </footer>
    );
}
