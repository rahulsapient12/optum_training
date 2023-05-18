import React from 'react';
import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';

interface ChildrenType {
  children: React.ReactNode;
}

const LayoutComponent = ({ children }: ChildrenType) => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <div>{children}</div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default LayoutComponent;
