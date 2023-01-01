import React from 'react';

const Header = ({ title, category }) => {
  return (
    <div className="mb-10 lg:mt-0 md:mt-0 mt-16">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default Header;
