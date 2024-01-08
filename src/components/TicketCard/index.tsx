import './TicketCard.css';

import { GoDotFill } from 'react-icons/go';

import { PRIORITY_ICONS, PRIORITY_MAPPING, STATUS_ICONS } from '../../constants';
import { useBoardContext } from '../../context/board';
import { TicketWithUser } from '../../types';
import UserAvatar from './UserAvatar';

function TicketCard({ ticket }: { ticket: TicketWithUser }) {
  const { options } = useBoardContext();
  const { id, title, priority, tag: tags, user, status } = ticket;
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="cardId">{id}</div>
        <UserAvatar user={user} />
      </div>
      <div className={`cardTitle ${options.groupBy === 'status' ? '' : 'flex gap-0-4'}`}>
        <div>{options.groupBy !== 'status' && STATUS_ICONS[status]}</div>
        <div>{title}</div>
      </div>
      <div className="cardFooter">
        <div className="cardPriority">{PRIORITY_ICONS[PRIORITY_MAPPING[priority]]}</div>
        <div className="cardType">
          {tags.map((tag) => (
            <div key={tag} className="cardTypeNameContainer">
              <div className="cardTypeNameIcon">
                <GoDotFill />
              </div>
              <div className="cardTypeName">{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
