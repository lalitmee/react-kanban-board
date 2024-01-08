import './KanbanBoard.css';

import { FaCircle } from 'react-icons/fa6';

import { GROUP_OPTIONS, PRIORITY_MAPPING } from '../../constants';
import { useBoardContext } from '../../context/board';
import useGroupingAndOrdering from '../../hooks/useGroupingAndOrdering';
import { HtmlSelectEvent } from '../../types';
import DisplayDropdown from '../DisplayDropdown';
import Pillar from '../Pillar';

function KanbanBoard() {
  const { options, setOptions } = useBoardContext();

  const onOrderingChange = (e: HtmlSelectEvent) => {
    setOptions((prev) => ({ ...prev, orderBy: PRIORITY_MAPPING[+e.target.value] }));
  };

  const onGroupingChange = (e: HtmlSelectEvent) => {
    const grouping = GROUP_OPTIONS.find(
      (group) => (group.value as string) === (e.target.value as string),
    );
    if (grouping) {
      setOptions((prev) => ({ ...prev, groupBy: grouping.value }));
    }
  };

  const { pillars } = useGroupingAndOrdering({
    groupBy: options.groupBy,
    orderBy: options.orderBy,
  });

  return (
    <div className="kanbanBoard">
      <div className="boardHeader">
        <DisplayDropdown
          options={options}
          onGroupingChange={onGroupingChange}
          onOrderingChange={onOrderingChange}
        />
      </div>
      <div className="boardBody">
        {Object.keys(pillars).map((title) => {
          const tickets = pillars[title];
          return (
            <Pillar
              key={title}
              pillar={{ title, icon: <FaCircle /> }}
              tickets={tickets}
            />
          );
        })}
      </div>
    </div>
  );
}

export default KanbanBoard;
