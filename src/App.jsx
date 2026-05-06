import React, { useState } from "react";

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
    external: (
      <svg {...common}>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
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
      className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-black/25 px-7 py-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-black/35"
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

function PageBackground() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgba(255,255,255,.045) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.045) 87.5%, rgba(255,255,255,.045)), linear-gradient(150deg, rgba(255,255,255,.045) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.045) 87.5%, rgba(255,255,255,.045)), linear-gradient(90deg, rgba(255,255,255,.025) 2%, transparent 2.5%, transparent 97%, rgba(255,255,255,.025) 97.5%, rgba(255,255,255,.025))",
          backgroundSize: "92px 160px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(31,217,132,.18),transparent_34%),linear-gradient(180deg,rgba(7,10,17,.08),rgba(7,10,17,.92))]" />
    </>
  );
}

function LandingPage({ onEnter }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a11] text-white">
      <PageBackground />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
        <div className="mb-10 flex h-44 w-44 items-center justify-center rounded-full border-[3px] border-emerald-400/70 bg-[#111723] p-2 shadow-[0_0_90px_rgba(31,217,132,.20)]">
          <img src="/logo.jpg" alt="BIGBETBABA logo" className="h-full w-full rounded-full object-cover" />
        </div>

        <div className="mb-5 text-lg font-medium uppercase tracking-[0.28em] text-emerald-300 sm:text-2xl">
          The best casino rewards, streams and community
        </div>

        <h1 className="text-6xl font-black uppercase tracking-[-0.06em] text-white sm:text-7xl md:text-8xl">
          BIGBETBABA
        </h1>

        <button
          type="button"
          onClick={onEnter}
          className="mt-12 rounded-sm bg-emerald-400 px-12 py-5 text-lg font-black uppercase tracking-wide text-[#07110d] shadow-[0_0_45px_rgba(31,217,132,.24)] transition hover:bg-emerald-300"
        >
          I'M OVER 18! LET ME IN!
        </button>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <SocialCard href="https://kick.com/bigbetbaba" icon="kick" label="Kick" action="Watch" colorClass="bg-[#53FC18] text-[#07110d]" />
          <SocialCard href="https://discord.gg/XM92x385n" icon="discord" label="Discord" action="Join!" colorClass="bg-[#5865F2] text-white" />
          <SocialCard href="https://www.youtube.com/@BIGBETBABA" icon="youtube" label="YouTube" action="Videos" colorClass="bg-[#FF0000] text-white" />
        </div>

        <p className="mt-14 max-w-xl text-xs uppercase tracking-[0.18em] text-slate-600">
          18+ only • Gamble responsibly • Never gamble with money you cannot afford to lose
        </p>
      </section>
    </main>
  );
}

function LoadingScreen() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a11] text-white">
      <PageBackground />

      <style>{`
        @keyframes reelSpin {
          0% { transform: translateY(-120px); }
          100% { transform: translateY(0px); }
        }

        @keyframes handlePull {
          0% { transform: rotate(0deg); }
          40% { transform: rotate(28deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <div className="mb-8 text-sm font-black uppercase tracking-[0.3em] text-emerald-300">
          Loading BIGBETBABA
        </div>

        <div className="relative rounded-[40px] border-2 border-yellow-400/20 bg-[#141924] px-8 py-10 shadow-[0_0_90px_rgba(31,217,132,.18)] backdrop-blur-sm">
          <div className="absolute -right-20 top-10 hidden md:flex items-center">
            <div className="h-4 w-14 rounded-full bg-gradient-to-r from-gray-500 to-gray-300 shadow-lg shadow-black/40" />

            <div
              className="origin-left"
              style={{ animation: 'handlePull 1.4s ease-in-out infinite' }}
            >
              <div className="relative flex items-center">
                <div className="h-3 w-24 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 shadow-inner shadow-black/40" />
                <div className="absolute right-[-18px] h-11 w-11 rounded-full border-4 border-red-300 bg-red-500 shadow-[0_0_25px_rgba(255,0,0,.65)]" />
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-center gap-3">
            {['B', 'A', 'B', 'A'].map((symbol, index) => (
              <div
                key={symbol}
                className="relative flex h-32 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0c1119] shadow-inner shadow-black/40"
              >
                <div
                  className="flex h-full w-full items-center justify-center font-black text-6xl text-yellow-300"
                  style={{
                    animation: `reelSpin ${0.7 + index * 0.2}s ease-out infinite alternate`
                  }}
                >
                  {symbol}
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl bg-gradient-to-r from-emerald-400 to-green-300 px-10 py-4 text-4xl font-black uppercase tracking-tight text-[#07110d]"
            style={{ animation: 'glowPulse 1s ease-in-out infinite' }}
          >
            JACKPOT!
          </div>
        </div>
      </section>
    </main>
  );
}

function MainPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a11] text-white">
      <PageBackground />

      <nav className="relative z-10 border-b border-white/10 bg-[#0b0d16]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="BIGBETBABA logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-emerald-400/60" />
            <div>
              <div className="text-lg font-black tracking-wide">BIGBETBABA</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Live community</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {[
              ["Home", "#home"],
              ["Babayanbreaks", "https://babayanbreaks.com/"],
              ["Kick", "https://kick.com/bigbetbaba"],
              ["Discord", "https://discord.gg/XM92x385n"],
              ["YouTube", "https://www.youtube.com/@BIGBETBABA"],
            ].map(([label, href], index) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`rounded-lg px-4 py-3 text-xs font-black uppercase tracking-[0.18em] transition hover:bg-white/10 ${index === 0 ? "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20" : "text-slate-300"}`}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="https://discord.gg/XM92x385n"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-400 px-5 py-3 text-sm font-black text-[#07110d] shadow-[0_0_24px_rgba(31,217,132,.22)] transition hover:bg-emerald-300"
          >
            Join Discord
          </a>
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto max-w-7xl px-5 pb-12 pt-16 text-center">
        <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border-2 border-emerald-400/60 bg-[#111723] p-1.5 shadow-[0_0_60px_rgba(31,217,132,.18)]">
          <img src="/logo.jpg" alt="BIGBETBABA logo" className="h-full w-full rounded-full object-cover" />
        </div>

        <div className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-[32px] border border-emerald-400/20 bg-black/30 text-left shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              <div className="text-base font-black uppercase tracking-[0.18em] text-emerald-300">BIGBETBABA Live</div>
              <div className="mt-1 text-sm text-slate-500">kick.com/bigbetbaba</div>
            </div>
            <a
              href="https://kick.com/bigbetbaba"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#53FC18] px-5 py-3 text-sm font-black text-[#07110d] transition hover:bg-emerald-300"
            >
              WATCH LIVE
            </a>
          </div>

          <div className="relative aspect-\[16/7\] bg-[#050806] max-h-\[520px\]">
            <iframe
              title="BIGBETBABA Kick live player"
              src="https://kick.com/bigbetbaba"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-6 shadow-xl shadow-black/20">
            <div className="text-3xl font-black text-white">BABA</div>
            <p className="mt-2 text-sm font-semibold text-slate-400">Community partner code.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-6 shadow-xl shadow-black/20">
            <div className="text-3xl font-black text-white">Kick</div>
            <p className="mt-2 text-sm font-semibold text-slate-400">Watch streams and live updates.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/25 p-6 shadow-xl shadow-black/20">
            <div className="text-3xl font-black text-white">Discord</div>
            <p className="mt-2 text-sm font-semibold text-slate-400">Join the community hub.</p>
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-6xl rounded-xl border border-yellow-300/20 bg-yellow-300/5 px-5 py-4 text-center text-sm font-bold text-yellow-200">
          18+ only. Gamble responsibly. Never gamble with money you cannot afford to lose.
        </div>
      </section>

      <section id="babayanbreaks" className="relative z-10 mx-auto max-w-7xl px-5 pb-20">
        <h2 className="mb-6 text-4xl font-black uppercase tracking-[-0.03em] text-white sm:text-5xl">Babayanbreaks</h2>

        <div className="grid gap-5 md:grid-cols-3">
          <a href="https://babayanbreaks.com/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-emerald-400/20 bg-[#101620]/80 p-7 transition hover:-translate-y-1 hover:border-emerald-400/50">
            <div className="mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
              <img
                src="/spacehills.png"
                alt="Spacehills logo"
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-2xl font-black text-white">Babayanbreaks</h3>
            <p className="mt-3 leading-7 text-slate-400">Visit Babayanbreaks for live breaks, collectibles and community events.</p>
          </a>

          <a href="https://kick.com/bigbetbaba" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-emerald-400/20 bg-[#101620]/80 p-7 transition hover:-translate-y-1 hover:border-emerald-400/50">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#53FC18] text-[#07110d]"><Icon type="kick" className="h-9 w-9" /></div>
            <h3 className="text-2xl font-black text-white">Watch live</h3>
            <p className="mt-3 leading-7 text-slate-400">Follow BIGBETBABA on Kick for live streams and community moments.</p>
          </a>

          <a href="https://discord.gg/XM92x385n" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-emerald-400/20 bg-[#101620]/80 p-7 transition hover:-translate-y-1 hover:border-emerald-400/50">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5865F2] text-white"><Icon type="discord" className="h-9 w-9" /></div>
            <h3 className="text-2xl font-black text-white">Community support</h3>
            <p className="mt-3 leading-7 text-slate-400">Join Discord for reward help, updates, giveaways and announcements.</p>
          </a>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState("landing");

  function handleEnter() {
    setScreen("loading");
    window.setTimeout(() => {
      setScreen("main");
    }, 1800);
  }

  if (screen === "loading") {
    return <LoadingScreen />;
  }

  if (screen === "main") {
    return <MainPage />;
  }

  return <LandingPage onEnter={handleEnter} />;
}
