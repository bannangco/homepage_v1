import { Timestamp } from 'firebase/firestore';

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
  fileUrl?: string;
  fileName?: string;
} 