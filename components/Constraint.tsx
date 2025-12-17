
import React from 'react';
import { ConstraintType } from '../types';

interface ConstraintProps {
  type: ConstraintType;
  isError: boolean;
}

const Constraint: React.FC<ConstraintProps> = ({ type, isError }) => {
  let symbol = '';
  if (type === ConstraintType.EQUAL) symbol = '=';
  if (type === ConstraintType.UNEQUAL) symbol = '≠';

  const colorClass = isError ? 'text-red-500' : 'text-slate-400 dark:text-slate-500';
  const classes = `flex items-center justify-center text-2xl font-bold w-full h-full ${colorClass}`;

  return (
    <div className={classes}>
      {symbol}
    </div>
  );
};

export default Constraint;