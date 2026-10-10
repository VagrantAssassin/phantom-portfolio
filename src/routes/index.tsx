import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PortfolioShell } from '@/components/portfolio/shell';
import { portfolioHead } from '@/lib/portfolio';
import rogueAvatar from '@/assets/ryo-rogue.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => portfolioHead('Stevanus Ryo Wijaya', 'Kenali Stevanus Ryo Wijaya melalui pendidikan, pengalaman, keahlian, karya, dan pencapaiannya dalam portofolio bertema Persona 5 Royal.'),
  component: Index,
});

function Index() {
  return <PortfolioShell>
    <section className="hero" aria-label="Perkenalan Ryo">
      <div className="hero-star" aria-hidden="true" /><span className="hero-small-star" aria-hidden="true">✦</span>
      <div className="hero-copy">
        <span className="eyebrow hero-eyebrow"><Star size={12} fill="currentColor" /> THE PERSON BEHIND THE MASK</span>
        <h1 className="hero-title"><span className="first-line">STEV<span className="cut-letter">A</span>NUS</span><span className="last-line">RYO WIJAYA<span className="text-ink">.</span></span></h1>
        <div className="name-strip">NOT YOUR AVERAGE PLAYER.</div>
        <p className="hero-description">Setiap orang punya cerita. Ini cerita saya.<br />Tentang perjalanan, karya, dan keinginan untuk<br className="hidden md:block" /> <strong>terus naik level.</strong></p>
        <div className="hero-cta"><Button asChild variant="phantom"><Link to="/projects">EXPLORE MY WORK <ArrowUpRight /></Link></Button><Button asChild variant="phantomOutline"><Link to="/contact">LET'S TALK <ArrowUpRight /></Link></Button></div>
      </div>
      <div className="hero-figure"><img src={rogueAvatar.url} width={1024} height={1536} alt="Karakter Ryo berjaket biru, berkacamata hitam, dan membawa pedang beraksen biru" /><div className="figure-label"><span>★</span> A NEW CHAPTER BEGINS</div></div>
      <div className="hero-bottom"><a href="#dossier"><ArrowDown size={15} /> SCROLL TO REVEAL THE STORY</a><span className="edition">PERSONAL FILE / NO. 001</span></div>
    </section>
    <div className="ticker" aria-hidden="true"><div className="ticker-track">{[0,1,2,3].map(n => <div key={n} className="flex items-center gap-10"><span>BREAK THE LIMITS</span><span className="ticker-star">★</span><span className="outline-word">CREATE YOUR OWN PATH</span><span className="ticker-star">★</span><span>NEVER STOP LEVELING UP</span><span className="ticker-star">★</span></div>)}</div></div>
    <section id="dossier" className="dossier-preview"><div className="preview-inner"><div><span className="section-kicker">THE REAL ME, UNMASKED</span><h2 className="preview-title">MORE THAN<br />A <span>PLAYER.</span></h2><p className="preview-text">Di balik setiap karya, ada proses. Di balik setiap pencapaian, ada perjalanan. Kenali sisi lain dari Stevanus Ryo Wijaya.</p></div><div className="dossier-links"><Link to="/about" className="dossier-link"><span className="index">01 /</span><strong>MY STORY & EXPERIENCE</strong><ArrowUpRight size={22} /></Link><Link to="/skills" className="dossier-link"><span className="index">02 /</span><strong>THE SKILL INVENTORY</strong><ArrowUpRight size={22} /></Link><Link to="/achievements" className="dossier-link"><span className="index">03 /</span><strong>UNLOCKED ACHIEVEMENTS</strong><ArrowUpRight size={22} /></Link></div></div></section>
  </PortfolioShell>;
}
