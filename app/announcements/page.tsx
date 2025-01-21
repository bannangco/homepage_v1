import { Metadata } from 'next';
import AnnouncementsContent from './AnnouncementsContent';

export const metadata: Metadata = {
  title: '공지사항 - 반낭코',
  description: '반낭코 공지사항',
};

export default function AnnouncementsPage() {
  return <AnnouncementsContent />;
} 