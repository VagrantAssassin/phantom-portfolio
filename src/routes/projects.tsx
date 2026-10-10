import { createFileRoute } from '@tanstack/react-router';
import { LockKeyhole, FolderOpen } from 'lucide-react';
import { PortfolioShell, PageHeading } from '@/components/portfolio/shell';
import { EmptyRecord } from '@/components/portfolio/empty-record';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/projects')({ head: () => portfolioHead('Projects', 'Koleksi proyek dan karya Stevanus Ryo Wijaya.'), component: Projects });
function Projects() {
 return <PortfolioShell><section className="content-page"><PageHeading number="04" label="THE MISSION ARCHIVE" first="SELECTED" last="WORKS" description="Ide adalah titik awal. Karya adalah bukti perjalanan." /><div className="record-panel"><div className="record-heading"><h2>Project archive</h2><span className="record-status">MISSIONS / 00</span></div><EmptyRecord icon={FolderOpen} title="Arsip karya belum tersedia." description="Proyek, gambar karya, serta tautan demo dan kode belum ditambahkan." /><div className="project-slot"><span className="project-index">01</span><div className="project-info"><h3>THE NEXT MISSION</h3><p>Ruang untuk karya berikutnya.</p></div><span className="project-lock" aria-label="Belum ada proyek"><LockKeyhole size={20} /></span></div></div></section></PortfolioShell>;
}
