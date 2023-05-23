import React from 'react';

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      name=''
      id=''
      className='form-select mt-5'
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value=''>All Categories</option>
      <option value='Groceries'>Groceries</option>
      <option value='Utilities'>Utilities</option>
      <option value='Entertainment'>Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
