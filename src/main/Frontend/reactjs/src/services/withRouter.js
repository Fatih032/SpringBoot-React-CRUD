import React from 'react';


export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    
    return (
      <Component
        searchTerm={searchTerm}
        {...props}
        setSearchTerm={setSearchTerm}
        {...props}
        />
    );
  };
  
  return Wrapper;
};