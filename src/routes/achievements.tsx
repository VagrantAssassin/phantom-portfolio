import { createFileRoute } from '@tanstack/react-router';
import { Trophy } from 'lucide-react';
import { PortfolioShell, PageHeading } from '@/components/portfolio/shell';
import { EmptyRecord } from '@/components/portfolio/empty-record';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/achievements')({ head: () => portfolioHead('Achievements', 'Pencapaian, penghargaan, dan sertifikasi Stevanus Ryo Wijaya.'), component: Achievements });
function Achievements() {
 return <PortfolioShell><section className="content-page"><PageHeading number="05" label="THE TROPHY ROOM" first="LEVEL" last="UNLOCKED" description="Setiap pencapaian punya cerita. Setiap langkah layak dirayakan." /><div className="record-panel"><div className="record-heading"><h2>Achievements & certifications</h2><span className="record-status">TROPHIES / 00</span></div><EmptyRecord icon={Trophy} title="Daftar pencapaian belum ditambahkan." description="Penghargaan, kompetisi, dan sertifikasi akan tampil di sini setelah informasinya tersedia." /></div></section></PortfolioShell>;
}
