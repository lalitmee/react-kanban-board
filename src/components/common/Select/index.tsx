import './Select.css';

import { FaAngleDown } from 'react-icons/fa6';

import { Option } from '../../../types';

export default function Select({
  label,
  options,
  onChange,
  value,
}: {
  label: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}) {
  return (
    <div className="selectContainer">
      <div className="selectLabel">{label}</div>
      <div className="selectSelect">
        <select onChange={onChange} value={value}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="selectIcon">
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
}
