import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import { PortfolioShell, PageHeading } from '@/components/portfolio/shell';
import { EmptyRecord } from '@/components/portfolio/empty-record';
import { Button } from '@/components/ui/button';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/about')({ head: () => portfolioHead('About me', 'Profil, perjalanan pendidikan, dan pengalaman Stevanus Ryo Wijaya.'), component: About });
function About() {
 const [tab, setTab] = useState<'education' | 'experience'>('education');
 return <PortfolioShell><section className="content-page"><PageHeading number="02" label="PERSONAL DOSSIER" first="BEHIND" last="THE MASK" description="Setiap perjalanan membentuk siapa kita hari ini. Inilah bagian dari cerita saya." /><dl className="profile-facts"><div><dt>FULL NAME</dt><dd>Stevanus Ryo Wijaya</dd></div><div><dt>PERSONAL FILE</dt><dd>The story is still unfolding.</dd></div></dl><div className="section-tabs" role="tablist" aria-label="Riwayat"><Button variant="menu" role="tab" aria-selected={tab === 'education'} data-selected={tab === 'education'} onClick={() => setTab('education')}><GraduationCap /> PENDIDIKAN</Button><Button variant="menu" role="tab" aria-selected={tab === 'experience'} data-selected={tab === 'experience'} onClick={() => setTab('experience')}><Briefcase /> PENGALAMAN</Button></div><div role="tabpanel" key={tab} className="route-enter"><EmptyRecord icon={tab === 'education' ? GraduationCap : Briefcase} title={tab === 'education' ? 'Riwayat pendidikan belum ditambahkan.' : 'Pengalaman belum ditambahkan.'} description={tab === 'education' ? 'Informasi institusi, program studi, dan tahun pendidikan belum tersedia.' : 'Informasi peran, organisasi, dan perjalanan pengalaman belum tersedia.'} /></div></section></PortfolioShell>;
}
