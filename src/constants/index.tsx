import { AiOutlineDash } from 'react-icons/ai';
import { AiOutlineExclamation } from 'react-icons/ai';
import { FaCheckCircle, FaRegCircle, FaRegTimesCircle } from 'react-icons/fa';
import { GrInProgress } from 'react-icons/gr';
import { LuCircleDashed } from 'react-icons/lu';
import { TbAntennaBars2, TbAntennaBars3, TbAntennaBars5 } from 'react-icons/tb';

export const PRIORITY = {
  HIGH: 3,
  LOW: 1,
  MEDIUM: 2,
  NO_PRIORITY: 0,
  URGENT: 4,
};

export const PRIORITY_MAPPING = {
  [PRIORITY.HIGH]: 'High',
  [PRIORITY.LOW]: 'Low',
  [PRIORITY.MEDIUM]: 'Medium',
  [PRIORITY.NO_PRIORITY]: 'No Priority',
  [PRIORITY.URGENT]: 'Urgent',
};

export const PRIORITY_ICONS = {
  [PRIORITY_MAPPING[PRIORITY.HIGH]]: <TbAntennaBars5 />,
  [PRIORITY_MAPPING[PRIORITY.LOW]]: <TbAntennaBars2 />,
  [PRIORITY_MAPPING[PRIORITY.MEDIUM]]: <TbAntennaBars3 />,
  [PRIORITY_MAPPING[PRIORITY.NO_PRIORITY]]: <AiOutlineDash />,
  [PRIORITY_MAPPING[PRIORITY.URGENT]]: <AiOutlineExclamation />,
};

export const GROUP_OPTIONS = [
  { label: 'Status', value: 'status' },
  { label: 'Users', value: 'users' },
  { label: 'Priority', value: 'priority' },
];

export const ORDER_OPTIONS = [
  { label: 'Priority', value: 'priority' },
  { label: 'None', value: 'none' },
];

export const STATUS = {
  BACKLOG: 'Backlog',
  CANCELED: 'Canceled',
  DONE: 'Done',
  IN_PROGRESS: 'In progress',
  TODO: 'Todo',
};

export const STATUS_ICONS = {
  [STATUS.BACKLOG]: <LuCircleDashed />,
  [STATUS.CANCELED]: <FaRegTimesCircle />,
  [STATUS.DONE]: <FaCheckCircle />,
  [STATUS.IN_PROGRESS]: <GrInProgress />,
  [STATUS.TODO]: <FaRegCircle />,
};
