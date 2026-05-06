import React from "react";

function Icon({ type, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    kick: (
      <svg {...common} viewBox="0 0 32 32" fill="currentColor" stroke="none">
        <path d="M5 4h7v10l8-8h8l-10 10 10 12h-9l-6-8-1 1v7H5V4z" />
      </svg>
    ),
    discord: (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M20.3 4.37A17.54 17.54 0 0 0 16 3l-.2.4a16.14 16.14 0 0 1 3.9 1.2 12.9 12.9 0 0 0-3.7-1.1 11.77 11.77 0 0 0-8 0A12.6 12.6 0 0 0 4.3 4.6a16.22 16.22 0 0 1 3.9-1.2L8 3a17.52 17.52 0 0 0-4.3 1.37C1.1 8.2.5 11.9.7 15.5A17.7 17.7 0 0 0 6 18l1-1.6a11.2 11.2 0 0 1-1.7-.8l.4-.3c3.3 1.5 6.9 1.5 10.2 0l.4.3a11.2 11.2 0 0 1-1.7.8l1 1.6a17.7 17.7 0 0 0 5.3-2.5c.3-4.1-.5-7.8-2.6-11.1ZM9.5 14.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm5 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
      </svg>
    ),
    youtube: (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7L16 12l-6.4 3.5Z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

function SocialCard({ href, icon, label, action, colorClass }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/25 px-7 py-6 backdrop-blur-sm transition hover:border-emerald-400/40 hover:bg-black/35"
    >
      <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${colorClass} shadow-lg shadow-black/40`}>
        <Icon type={icon} className="h-10 w-10" />
      </div>
      <div className="text-left">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</div>
        <div className="text-4xl font-black uppercase tracking-tight text-white">{action}</div>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a11] text-white">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgba(255,255,255,.045) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.045) 87.5%, rgba(255,255,255,.045)), linear-gradient(150deg, rgba(255,255,255,.045) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.045) 87.5%, rgba(255,255,255,.045)), linear-gradient(90deg, rgba(255,255,255,.025) 2%, transparent 2.5%, transparent 97%, rgba(255,255,255,.025) 97.5%, rgba(255,255,255,.025))",
          backgroundSize: "92px 160px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,217,132,.18),transparent_34%),linear-gradient(180deg,rgba(7,10,17,.08),rgba(7,10,17,.92))]" />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
        <div className="mb-10 flex h-40 w-40 items-center justify-center rounded-full border-[3px] border-emerald-400/70 bg-[#111723] shadow-[0_0_90px_rgba(31,217,132,.20)]">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-[#171d29] text-white">
            <span className="text-5xl font-black tracking-tight">BB</span>
          </div>
        </div>

        <div className="mb-5 text-lg font-medium uppercase tracking-[0.28em] text-emerald-300 sm:text-2xl">
          The best casino rewards, streams and community
        </div>

        <h1 className="text-6xl font-black uppercase tracking-[-0.06em] text-white sm:text-7xl md:text-8xl">
          BIGBETBABA
        </h1>

        <a
          href="https://www.spacehills.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 rounded-sm bg-emerald-400 px-12 py-5 text-lg font-black uppercase tracking-wide text-[#07110d] shadow-[0_0_45px_rgba(31,217,132,.24)] transition hover:bg-emerald-300"
        >
          I'M OVER 18! LET ME IN!
        </a>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <SocialCard
            href="https://kick.com/bigbetbaba"
            icon="kick"
            label="Kick"
            action="Watch"
            colorClass="bg-[#53FC18] text-[#07110d]"
          />
          <SocialCard
            href="https://discord.com/invite/leftlanepapi"
            icon="discord"
            label="Discord"
            action="Join!"
            colorClass="bg-[#5865F2] text-white"
          />
          <SocialCard
            href="https://www.youtube.com/@BIGBETBABA"
            icon="youtube"
            label="YouTube"
            action="Videos"
            colorClass="bg-[#FF0000] text-white"
          />
        </div>

        <p className="mt-14 max-w-xl text-xs uppercase tracking-[0.18em] text-slate-600">
          18+ only • Gamble responsibly • Never gamble with money you cannot afford to lose
        </p>
      </section>
    </main>
  );
}
