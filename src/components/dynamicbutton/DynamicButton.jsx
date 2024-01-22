import React from 'react';


const DynamicButton = ({ icon, text, size }) => {
    const buttonStyle = {
        backgroundColor: '#1C1BA5',
        color: 'white',
        width: '85px',
        height: '39px',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0', // No padding for inner content
        fontWeight: 'bold',
        border: 'none'
      };
    
      const iconStyle = {
        marginRight: '8px', // Adjust margin based on your preference
      };

  return (
    <button style={buttonStyle}>
      {icon && React.cloneElement(icon, { size: size, style: iconStyle })} {/* Render the icon if provided */}
      {text && <span>{text}</span>} {/* Render the text if provided */}
    </button>
  );
};

export default DynamicButton