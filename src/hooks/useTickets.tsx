import { useEffect, useMemo, useState } from 'react';

import { KanbanData, Ticket, TicketWithUser, User } from '../types';

const url = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export function useTickets(): {
  tickets: Ticket[];
  users: User[];
  ticketsWithUser: TicketWithUser[];
} {
  const [kanbanData, setKanbanData] = useState<KanbanData>({ tickets: [], users: [] });

  const fetchKanbanData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setKanbanData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const tickets = (() => {
    if (!kanbanData.tickets.length) return [];
    return kanbanData['tickets'];
  })();

  const users = (() => {
    if (!kanbanData.users.length) return [];
    return kanbanData['users'];
  })();

  const ticketsWithUser: TicketWithUser[] = useMemo(() => {
    return tickets.map((ticket) => {
      const user = users.find((user) => user.id === ticket.userId);
      return user ? { ...ticket, user } : ticket;
    }) as TicketWithUser[];
  }, [tickets, users]);

  useEffect(() => {
    fetchKanbanData();
  }, []);

  return { tickets, users, ticketsWithUser };
}

export default useTickets;
