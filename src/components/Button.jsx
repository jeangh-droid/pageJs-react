
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  href,
  type = 'button'
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all rounded-full group focus:outline-none";
  
  const variants = {
    primary: "bg-[#3D2B1F] text-white hover:bg-[#1A1A1A]",
    secondary: "bg-[#a67c52] text-white hover:bg-[#8e6844]",
    outline: "border-2 border-[#3D2B1F] text-[#3D2B1F] hover:bg-[#3D2B1F] hover:text-white",
    whatsapp: "bg-[#25d366] text-white hover:bg-[#1fb355]"
  };

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className} cursor-pointer`}
      onClick={onClick}
    >
      <span className="relative flex items-center">{children}</span>
    </motion.div>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          target={href.startsWith('http') ? '_blank' : undefined} 
          rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
          className="inline-block"
        >
          {buttonContent}
        </a>
      );
    }
    
    return (
      <Link to={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="focus:outline-none">
      {buttonContent}
    </button>
  );
};

export default Button;
