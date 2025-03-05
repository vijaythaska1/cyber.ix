import { Shield, Twitter, Facebook, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    // <footer className="bg-background py-12 border-t">
    //   <div className="container mx-auto px-4">
    //     {/* Main Footer Content */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
    //       {/* Company Info */}
    //       <div className="space-y-4">
    //         <div className="flex items-center space-x-2">
    //           <Shield className="h-8 w-8 text-primary" />
    //           <span className="text-xl font-bold">Cyber.ix</span>
    //         </div>
    //         <p className="text-sm text-muted-foreground">
    //           Protecting your digital world with cutting-edge cybersecurity solutions and expert consulting services.
    //         </p>
    //         <div className="flex space-x-4">
    //           <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
    //           <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
    //           <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
    //           <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
    //         </div>
    //       </div>

    //       {/* Quick Links */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
    //         <ul className="space-y-2">
    //           {['Home', 'About', 'Services', 'Products', 'Blog', 'Contact'].map((item) => (
    //             <li key={item}>
    //               <a href="#" className="text-sm text-muted-foreground hover:text-primary">
    //                 {item}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Services */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Our Services</h3>
    //         <ul className="space-y-2">
    //           {[
    //             'Security Consulting',
    //             'Penetration Testing',
    //             'Incident Response',
    //             'Security Training',
    //             'Compliance Audit',
    //             'Threat Detection'
    //           ].map((service) => (
    //             <li key={service}>
    //               <a href="#" className="text-sm text-muted-foreground hover:text-primary">
    //                 {service}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       {/* Contact Info */}
    //       <div>
    //         <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
    //         <div className="space-y-4">
    //           <div className="flex items-center space-x-3">
    //             <Mail className="h-5 w-5 text-primary" />
    //             <span className="text-sm text-muted-foreground">contact@cyber.ix</span>
    //           </div>
    //           <div className="flex items-center space-x-3">
    //             <Phone className="h-5 w-5 text-primary" />
    //             <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
    //           </div>
    //           <div className="flex items-center space-x-3">
    //             <MapPin className="h-5 w-5 text-primary" />
    //             <span className="text-sm text-muted-foreground">123 Security Ave, Cyber City</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom Bar */}
    //     <div className="pt-8 border-t">
    //       <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    //         <div className="text-sm text-muted-foreground">
    //           © 2025 Cyber.ix. All rights reserved.
    //         </div>
    //         <div className="flex space-x-6">
    //           <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
    //           <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
    //           <a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookie Policy</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>


    <footer className="bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Cyber.ix</span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <span>© 2025 Cyber.ix. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}