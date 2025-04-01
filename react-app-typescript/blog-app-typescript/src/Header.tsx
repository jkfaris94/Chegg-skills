import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string; // Optional prop
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </>
  );
}

export default Header;