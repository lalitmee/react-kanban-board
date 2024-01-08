import './Pillar.css';

import React, { ReactElement } from 'react';
import { FaEllipsisH, FaPlus } from 'react-icons/fa';

import { PRIORITY_ICONS, STATUS_ICONS } from '../../constants';
import { useBoardContext } from '../../context/board';
import { TicketWithUser } from '../../types';
import TicketCard from '../TicketCard';
import UserAvatar from '../TicketCard/UserAvatar';

interface ElementMap {
  [key: string]: ReactElement;
  [key: number]: ReactElement;
}

const ICONS: ElementMap = { ...STATUS_ICONS, ...PRIORITY_ICONS };

function KanbanBoardPillar({
  pillar,
  tickets,
}: {
  pillar: { title: string; icon: ReactElement };
  tickets: TicketWithUser[];
}) {
  const { options } = useBoardContext();
  const { title } = pillar;
  return (
    <div className="pillarContainer">
      <div className="pillarHeader">
        <div className="pillarHeaderLeft flex items-center gap-0-4">
          <div className="pillarIcon">
            {options.groupBy === 'users' ? (
              <UserAvatar user={{ id: title, name: title, available: false }} />
            ) : (
              ICONS[title]
            )}
          </div>
          <div className="pillarTitle">{title}</div>
          <div className="pillarTicketsNumber">{tickets.length}</div>
        </div>
        <div className="flex items-center gap-0-2">
          <button className="icon-button flex">
            <FaPlus />
          </button>
          <button className="icon-button flex">
            <FaEllipsisH />
          </button>
        </div>
      </div>
      <div className="pillarBody">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoardPillar;
