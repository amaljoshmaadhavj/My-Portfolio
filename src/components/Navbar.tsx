import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-display",
        isScrolled ? "py-4 glass border-b shadow-sm" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter uppercase group flex items-center gap-2">
          <span className="w-6 h-6 bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-black group-hover:rotate-90 transition-transform duration-500">A</span>
          AMALJOSH<span className="text-primary opacity-30">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-primary transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="mailto:amal018josephmathi@gmail.com"
            className="text-xs uppercase tracking-[0.2em] font-bold px-6 py-2 border border-border hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Connect
          </a>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
};
