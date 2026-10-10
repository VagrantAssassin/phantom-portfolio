import { type LucideIcon } from 'lucide-react';
export function EmptyRecord({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return <div className="empty-record"><span className="empty-icon"><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></div>;
}
