const Card = ({ children, className = '', onClick, ...props }) => {
    const baseClasses = "bg-white rounded-lg shadow-md border border-gray-200 p-6 transition-all duration-200"
    const hoverClasses = onClick ? "hover:shadow-lg hover:border-primary-300 cursor-pointer" : ""
    
    return (
      <div 
        className={`${baseClasses} ${hoverClasses} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    )
  }
  
  export default Card

