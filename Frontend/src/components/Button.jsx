const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    disabled = false,
    ...props 
  }) => {
    const baseClasses = "font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    
    const variants = {
      primary: "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
      secondary: "bg-secondary-200 hover:bg-secondary-300 text-secondary-800 focus:ring-secondary-500",
      outline: "border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500",
      danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500"
    }
    
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base"
    }
    
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""
    
    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
  
  export default Button