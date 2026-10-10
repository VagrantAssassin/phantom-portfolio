import { createFileRoute } from '@tanstack/react-router';
import { Mail, Github, Linkedin, Instagram, LockKeyhole } from 'lucide-react';
import { PortfolioShell, PageHeading } from '@/components/portfolio/shell';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/contact')({ head: () => portfolioHead('Contact', 'Kontak dan kanal sosial Stevanus Ryo Wijaya.'), component: Contact });
function Contact() {
 return <PortfolioShell><section className="content-page"><PageHeading number="06" label="SEND A CALLING CARD" first="LET'S" last="CONNECT" description="Ide baru, kolaborasi, atau sekadar menyapa. Setiap percakapan bisa menjadi awal cerita baru." /><div className="contact-note">GREAT THINGS START<br />WITH A <span className="text-primary">HELLO.</span></div><div className="contact-lines">{[{ name: 'EMAIL', icon: Mail },{ name: 'GITHUB', icon: Github },{ name: 'LINKEDIN', icon: Linkedin },{ name: 'INSTAGRAM', icon: Instagram }].map(({name, icon: Icon}) => <div className="contact-line" key={name}><Icon size={22} /><div><h3>{name}</h3><p>Kontak belum ditambahkan</p></div><LockKeyhole size={14} aria-label="Kontak belum tersedia" /></div>)}</div></section></PortfolioShell>;
}
