import orderBy from 'lodash/orderBy';
import { useEffect, useState } from 'react';

import { Pillar, TicketWithUser } from '../types';
import { groupByPriority, groupByStatus, groupByUsers } from '../utils';
import useTickets from './useTickets';

function groupBy(data: TicketWithUser[], key: string) {
  switch (key) {
    case 'status':
      return groupByStatus(data);
    case 'priority':
      return groupByPriority(data);
    case 'users':
      return groupByUsers(data);
    default:
      return groupByStatus(data);
  }
}

function useGroupingAndOrdering({
  groupBy: groupByKey,
  orderBy: orderByKey,
}: {
  groupBy: string;
  orderBy: string;
}) {
  const storedPillars = JSON.parse(localStorage.getItem('pillars') || '');
  const { ticketsWithUser: tickets } = useTickets();
  const [pillars, setPillars] = useState<Pillar>(storedPillars);
  const [orderType, setOrderType] = useState('asc');

  useEffect(() => {
    localStorage.setItem('pillars', JSON.stringify(pillars));
  }, [pillars]);

  useEffect(() => {
    const groupedData = groupBy(tickets, groupByKey);
    setPillars(groupedData);
  }, [groupByKey, tickets]);

  useEffect(() => {
    if (orderByKey) {
      const groupedData = groupBy(tickets, groupByKey);
      const orderedGroupedData: Pillar = {};
      Object.keys(groupedData).forEach((key: string) => {
        const sortedData = orderBy(
          groupedData[key],
          ['priority'],
          [orderType === 'asc' ? 'desc' : 'asc'],
        );
        orderedGroupedData[key] = sortedData;
      });
      setPillars(orderedGroupedData);
      setOrderType((prev) => {
        if (prev === 'asc') return 'desc';
        return 'asc';
      });
    }
  }, [orderByKey, groupByKey, tickets]);

  return { pillars };
}

export default useGroupingAndOrdering;
