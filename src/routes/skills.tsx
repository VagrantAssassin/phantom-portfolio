import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Code2, Users, Zap } from 'lucide-react';
import { PortfolioShell, PageHeading } from '@/components/portfolio/shell';
import { EmptyRecord } from '@/components/portfolio/empty-record';
import { Button } from '@/components/ui/button';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/skills')({ head: () => portfolioHead('Skills', 'Inventori keahlian teknis dan personal Stevanus Ryo Wijaya.'), component: Skills });
function Skills() {
 const [technical, setTechnical] = useState(true);
 return <PortfolioShell><section className="content-page"><PageHeading number="03" label="SKILL INVENTORY" first="MY" last="ARSENAL" description="Bukan sekadar apa yang diketahui. Tapi apa yang bisa diwujudkan." /><div className="section-tabs" role="tablist" aria-label="Kategori keahlian"><Button variant="menu" role="tab" data-selected={technical} aria-selected={technical} onClick={() => setTechnical(true)}><Code2 /> TECHNICAL</Button><Button variant="menu" role="tab" data-selected={!technical} aria-selected={!technical} onClick={() => setTechnical(false)}><Users /> PERSONAL</Button></div><div className="record-panel" role="tabpanel"><div className="record-heading"><h2>{technical ? 'Technical skills' : 'Personal skills'}</h2><span className="record-status">INVENTORY / 00</span></div><EmptyRecord icon={Zap} title="Inventori belum diisi." description={technical ? 'Daftar teknologi, alat, dan keahlian teknis belum ditambahkan.' : 'Daftar keahlian interpersonal dan keterampilan kerja belum ditambahkan.'} /></div></section></PortfolioShell>;
}
