import { Link, useLocation } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { portfolioSections } from '@/lib/portfolio';

export function PortfolioShell({ children, afterMain }: { children: ReactNode; afterMain?: ReactNode }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);
  const navigation = (id: string) => <><p className="menu-eyebrow">CHOOSE YOUR NEXT MOVE</p><nav id={id} aria-label="Navigasi portofolio" className="menu-list">{portfolioSections.map(item => <Link key={item.to} to={item.to} className="menu-link" data-active={pathname === item.to} aria-current={pathname === item.to ? 'page' : undefined} onClick={() => setMenuOpen(false)}><span className="menu-number">{item.number}</span><span>{item.label}</span></Link>)}</nav><p className="menu-note"><Sparkles size={13} /> EVERY STORY STARTS SOMEWHERE.</p></>;
  return (
    <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
    <div className="portfolio-app">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="Ryo — halaman utama">
          <span className="brand-mark">RYO.</span>
          <span className="brand-caption">THE PHANTOM<br />PORTFOLIO</span>
        </Link>
        <span className="header-center">A LITTLE REBELLION. A LOT OF AMBITION.</span>
        <div className="header-actions">
          <span className="header-status"><span className="status-dot" /> PERSONAL PORTFOLIO</span>
          <Dialog.Trigger asChild><Button variant="nav" size="icon" className="mobile-menu-toggle" aria-label="Buka menu"><Menu /></Button></Dialog.Trigger>
        </div>
      </header>
      <div className="main-layout">
        <aside className="side-menu">{navigation('portfolio-navigation')}</aside>
        <main id="main-content" className="main-stage">
          <div key={pathname} className="route-enter">{children}</div>
        </main>
      </div>
      {afterMain}
      <footer className="site-footer">
        <span className="footer-signature">© 2026 STEVANUS RYO WIJAYA</span>
        <span>INDEPENDENT PORTFOLIO · INSPIRED BY PERSONA 5 ROYAL</span>
        <Link to="/contact" className="flex items-center gap-2 text-paper">LET'S CONNECT <ArrowUpRight size={13} /></Link>
      </footer>
    </div>
    <Dialog.Portal><Dialog.Content className="mobile-navigation" aria-describedby={undefined}><Dialog.Title className="sr-only">Menu portofolio</Dialog.Title><Dialog.Close asChild><Button variant="nav" size="icon" className="mobile-menu-close" title="Tutup menu" aria-label="Tutup menu"><X /></Button></Dialog.Close>{navigation('mobile-portfolio-navigation')}</Dialog.Content></Dialog.Portal>
    </Dialog.Root>
  );
}

export function PageHeading({ number, label, first, last, description }: { number: string; label: string; first: string; last: string; description: string }) {
  return <><span className="eyebrow"><span className="bg-ink px-2 py-1">{number}</span> {label}</span><h1 className="page-title"><span className="title-tag">{first}</span><br />{last}<span className="text-ink">.</span></h1><p className="page-subtitle">{description}</p></>;
}
