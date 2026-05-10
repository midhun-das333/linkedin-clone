import React from 'react';

function HeaderOption({ Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon />}
      <h3>{title}</h3>
    </div>
  );
}

export default HeaderOption;