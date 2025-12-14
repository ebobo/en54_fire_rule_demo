import React from 'react';
import './combo.css';

const DropdownCombo = ({ name, current, onChangeHandel, options }) => {
  return (
    <div className='dropdown-container'>
      <label className='dropdown-label'>{name}</label>

      <select
        className='dropdown-select'
        value={current}
        onChange={onChangeHandel}
      >
        {options.map((op, index) => (
          <option key={index} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownCombo;
