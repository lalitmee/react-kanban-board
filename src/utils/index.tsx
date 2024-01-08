import { PRIORITY_MAPPING } from '../constants';
import { Pillar, TicketWithUser } from '../types';

export const groupByStatus = (data: TicketWithUser[]) => {
  return data.reduce((result: Pillar, item: TicketWithUser) => {
    const keyValue = item['status'];

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);

    return result;
  }, {});
};

export const groupByUsers = (data: TicketWithUser[]) => {
  return data.reduce((result: Pillar, item: TicketWithUser) => {
    const user = item['user'];

    const { name } = user;

    if (!result[name]) {
      result[name] = [];
    }

    result[name].push(item);

    return result;
  }, {});
};

export const groupByPriority = (data: TicketWithUser[]) => {
  return data.reduce((result: Pillar, item: TicketWithUser) => {
    const priority = item['priority'];

    const priorityName = PRIORITY_MAPPING[priority];

    if (!result[priorityName]) {
      result[priorityName] = [];
    }

    result[priorityName].push(item);

    return result;
  }, {});
};
