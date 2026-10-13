'use client'

import { useState } from 'react'
import {
  Activity, ArrowDownRight, ArrowUpRight, BarChart3, Bell, Building2, Check, ChevronDown,
  CircleHelp, ClipboardCheck, FileText, FolderKanban, Home, KeyRound, LayoutGrid,
  LockKeyhole, MoreHorizontal, Plus, Search, Settings, ShieldCheck, Sparkles, Terminal,
  TrendingUp, Users, WalletCards, X
} from 'lucide-react'

type PageKey = 'Overview' | 'Companies' | 'MCP Tools' | 'Reports' | 'Audit Log' | 'Settings'

const navItems: { label: PageKey; icon: typeof Home }[] = [
  { label: 'Overview', icon: Home }, { label: 'Companies', icon: Building2 },
  { label: 'MCP Tools', icon: Terminal }, { label: 'Reports', icon: BarChart3 },
  { label: 'Audit Log', icon: ClipboardCheck }, { label: 'Settings', icon: Settings },
]

const companies = [
  { name: 'Northstar Creative Co.', id: '••• 8421', status: 'Connected', color: 'indigo', last: '2 min ago' },
  { name: 'Aster & Finch LLC', id: '••• 1937', status: 'Connected', color: 'sage', last: '18 min ago' },
  { name: 'Wilder Goods Inc.', id: '••• 4402', status: 'Needs attention', color: 'amber', last: '3 days ago' },
]

const activity = [
  ['Profit & Loss report generated', 'Northstar Creative Co.', '2 minutes ago', 'success'],
  ['Invoice INV-1048 created', 'Aster & Finch LLC', '18 minutes ago', 'blue'],
  ['Bank reconciliation reviewed', 'Northstar Creative Co.', '42 minutes ago', 'success'],
  ['OAuth token refreshed', 'Wilder Goods Inc.', '3 days ago', 'muted'],
]

function MetricCard({ icon: Icon, label, value, delta, tone = 'default' }: { icon: typeof TrendingUp; label: string; value: string; delta: string; tone?: string }) {
  return <div className="metric-card">
    <div className={`metric-icon ${tone}`}><Icon /></div>
    <div className="metric-copy"><span>{label}</span><strong>{value}</strong><small className={delta.startsWith('+') ? 'positive' : 'neutral'}>{delta}</small></div>
    <MoreHorizontal className="more" />
  </div>
}

function Overview({ onNavigate }: { onNavigate: (page: PageKey) => void }) {
  return <>
    <div className="page-heading"><div><p className="eyebrow">MONDAY, OCTOBER 13, 2026</p><h1>Good morning, Alex</h1><p className="subheading">Here&apos;s what&apos;s happening across your connected companies.</p></div><button className="primary-button" onClick={() => onNavigate('Companies')}><Plus /> Connect company</button></div>
    <div className="metric-grid">
      <MetricCard icon={Building2} label="Connected companies" value="3" delta="+1 this month" tone="lavender" />
      <MetricCard icon={Terminal} label="MCP tools available" value="120" delta="All systems operational" tone="mint" />
      <MetricCard icon={Activity} label="API calls this month" value="8,429" delta="+18.4% vs. last month" tone="peach" />
      <MetricCard icon={ShieldCheck} label="Security score" value="98%" delta="Excellent standing" tone="sky" />
    </div>
    <div className="content-grid">
      <section className="panel activity-panel"><div className="panel-heading"><div><h2>Recent activity</h2><p>Actions across your QuickBooks companies.</p></div><button className="text-button" onClick={() => onNavigate('Audit Log')}>View all <ArrowUpRight /></button></div><div className="activity-list">{activity.map(([title, company, time, tone]) => <div className="activity-row" key={title}><span className={`activity-dot ${tone}`}><Check /></span><div className="activity-info"><strong>{title}</strong><span>{company}</span></div><time>{time}</time></div>)}</div></section>
      <section className="panel health-panel"><div className="panel-heading"><div><h2>System health</h2><p>Everything is running smoothly.</p></div><span className="status-pill"><span /> Operational</span></div><div className="health-score"><div className="score-ring"><b>99.9</b><span>uptime</span></div><div className="health-lines"><div><span>QuickBooks API</span><b>Operational</b></div><div><span>MCP endpoint</span><b>Operational</b></div><div><span>OAuth services</span><b>Operational</b></div></div></div><button className="secondary-button full" onClick={() => onNavigate('MCP Tools')}>View system status <ArrowUpRight /></button></section>
    </div>
    <section className="panel companies-panel"><div className="panel-heading"><div><h2>Connected companies</h2><p>Manage access and permissions for each company.</p></div><button className="text-button" onClick={() => onNavigate('Companies')}>Manage companies <ArrowUpRight /></button></div><div className="company-grid">{companies.map(c => <div className="company-card" key={c.name}><div className={`company-mark ${c.color}`}>{c.name.split(' ').map(x => x[0]).slice(0,2).join('')}</div><div className="company-details"><strong>{c.name}</strong><span>QuickBooks Online · {c.id}</span><div><span className={`mini-status ${c.status === 'Connected' ? 'green' : 'orange'}`} />{c.status}<em>Last synced {c.last}</em></div></div><MoreHorizontal /></div>)}</div></section>
  </>
}

function PageContent({ page, onNavigate }: { page: PageKey; onNavigate: (page: PageKey) => void }) {
  if (page === 'Overview') return <Overview onNavigate={onNavigate} />
  const configs: Record<Exclude<PageKey, 'Overview'>, { eyebrow: string; title: string; desc: string }> = {
    Companies: { eyebrow: 'WORKSPACE', title: 'Connected companies', desc: 'Manage your QuickBooks Online connections and company permissions.' },
    'MCP Tools': { eyebrow: 'DEVELOPER PLATFORM', title: 'MCP tools', desc: 'Explore and monitor the tools available to AI assistants.' },
    Reports: { eyebrow: 'FINANCIAL INTELLIGENCE', title: 'Reports', desc: 'Generate, save, and share financial reports across companies.' },
    'Audit Log': { eyebrow: 'SECURITY & COMPLIANCE', title: 'Audit log', desc: 'A complete record of activity across your workspace.' },
    Settings: { eyebrow: 'WORKSPACE', title: 'Settings', desc: 'Configure your workspace, security, and integrations.' },
  }
  const config = configs[page]
  return <><div className="page-heading"><div><p className="eyebrow">{config.eyebrow}</p><h1>{config.title}</h1><p className="subheading">{config.desc}</p></div><button className="primary-button"><Plus /> {page === 'Companies' ? 'Connect company' : page === 'Reports' ? 'New report' : 'Create API key'}</button></div><div className="page-placeholder"><div className="placeholder-icon"><LayoutGrid /></div><h2>{page} workspace</h2><p>Mock data is ready for this view. Your production {page.toLowerCase()} will appear here once connected.</p><button className="secondary-button" onClick={() => onNavigate('Overview')}>Back to overview</button></div></>
}

export default function Page() {
  const [page, setPage] = useState<PageKey>('Overview')
  const [companyOpen, setCompanyOpen] = useState(false)
  return <div className="app-shell"><aside className="sidebar"><div className="brand"><div className="brand-symbol"><Sparkles /></div><span>ledger<span className="brand-accent">flow</span></span></div><div className="workspace-switcher" onClick={() => setCompanyOpen(!companyOpen)}><div className="avatar">AC</div><div><span>Alex Carter</span><small>Personal workspace</small></div><ChevronDown /></div>{companyOpen && <div className="workspace-menu"><strong>Personal workspace</strong><span>Acme Finance Team</span><span>Create workspace</span></div>}<nav><span className="nav-label">WORKSPACE</span>{navItems.slice(0,4).map(({ label, icon: Icon }) => <button className={page === label ? 'nav-item active' : 'nav-item'} onClick={() => setPage(label)} key={label}><Icon />{label}{label === 'MCP Tools' && <b>120</b>}</button>)}<span className="nav-label lower">MANAGE</span>{navItems.slice(4).map(({ label, icon: Icon }) => <button className={page === label ? 'nav-item active' : 'nav-item'} onClick={() => setPage(label)} key={label}><Icon />{label}</button>)}</nav><div className="sidebar-bottom"><div className="help-card"><CircleHelp /><div><strong>Need a hand?</strong><span>Read the docs</span></div><ArrowUpRight /></div><div className="user-row"><div className="avatar small">AC</div><div><strong>Alex Carter</strong><span>alex@ledgerflow.io</span></div><MoreHorizontal /></div></div></aside><main className="main-content"><header className="topbar"><div className="breadcrumbs"><span>Workspace</span><span>/</span><strong>{page}</strong></div><div className="top-actions"><div className="search"><Search /><input placeholder="Search anything..." /></div><button className="icon-button"><Bell /><i /></button><div className="top-avatar">AC</div></div></header><div className="main-inner"><PageContent page={page} onNavigate={setPage} /></div></main></div>
}
