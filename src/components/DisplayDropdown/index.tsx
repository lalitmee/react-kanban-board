import './DisplayDropdown.css';

import { useEffect, useRef, useState } from 'react';
import { FaAngleDown, FaFilter } from 'react-icons/fa6';

import { GROUP_OPTIONS, ORDER_OPTIONS } from '../../constants';
import { HtmlSelectEvent, Options } from '../../types';
import Select from '../common/Select';

function DisplayDropdown({
  options,
  onOrderingChange,
  onGroupingChange,
}: {
  options: Options;
  onOrderingChange: (e: HtmlSelectEvent) => void;
  onGroupingChange: (e: HtmlSelectEvent) => void;
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleShowDropdown = () => {
    setShowDropdown(true);
  };

  const handleHideDropdown = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('click', handleHideDropdown);
    }
    return () => {
      document.removeEventListener('click', handleHideDropdown);
    };
  }, [showDropdown]);

  return (
    <>
      <button className="dropdownButton" onClick={handleShowDropdown}>
        <FaFilter />
        <div className="dropdownButtonText">Display</div>
        <FaAngleDown />
        {showDropdown && (
          <div className="dropdownModal" ref={dropdownRef}>
            <Select
              label="Grouping"
              options={GROUP_OPTIONS}
              onChange={onGroupingChange}
              value={options.groupBy}
            />
            <Select
              label="Ordering"
              options={ORDER_OPTIONS}
              onChange={onOrderingChange}
              value={options.orderBy}
            />
          </div>
        )}
      </button>
    </>
  );
}

export default DisplayDropdown;
