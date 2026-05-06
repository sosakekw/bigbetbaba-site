import React, { useEffect, useState } from "react";

const LINKS = {
  kick: "https://kick.com/bigbetbaba",
  discord: "https://discord.gg/XM92x385n",
  youtube: "https://www.youtube.com/@BIGBETBABA",
  babayanbreaks: "https://babayanbreaks.com/",
  spacehills: "https://www.spacehills.com/",
};

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
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  };

  return icons[type] || null;
}

function Styles() {
  return (
    <style>{`
      @keyframes cursorGlow {
        0%, 100% { opacity: .55; }
        50% { opacity: .82; }
      }

      @keyframes logoFloat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      @keyframes enterShake {
        0%, 100% { transform: translateX(0); }
        30% { transform: translateX(-3px); }
        60% { transform: translateX(3px); }
      }

      @keyframes buttonBreath {
        0%, 100% { box-shadow: 0 0 24px rgba(83,252,24,.14); }
        50% { box-shadow: 0 0 46px rgba(83,252,24,.26); }
      }

      @keyframes reelDrop {
        0% { transform: translateY(-110%); filter: blur(4px); }
        68% { transform: translateY(7%); filter: blur(1px); }
        100% { transform: translateY(0); filter: blur(0); }
      }

      @keyframes leverPull {
        0%, 100% { transform: rotate(-10deg); }
        45% { transform: rotate(35deg); }
      }

      @keyframes machineSettle {
        0%, 84%, 100% { transform: translateX(0); }
        88% { transform: translateX(-2px); }
        92% { transform: translateX(2px); }
      }
    `}</style>
  );
}

function Background({ mouse }) {
  const pointerGlow = mouse
    ? `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(83,252,24,.15), rgba(83,252,24,.05) 17%, transparent 34%)`
    : "transparent";

  return (
    <>
      <div className="absolute inset-0 bg-[#070a11]" />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(30deg, rgba(255,255,255,.04) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.04) 87.5%, rgba(255,255,255,.04)), linear-gradient(150deg, rgba(255,255,255,.035) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.035) 87.5%, rgba(255,255,255,.035))",
          backgroundSize: "120px 208px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(83,252,24,.12),transparent_33%),linear-gradient(180deg,rgba(7,10,17,.12),rgba(7,10,17,.96))]" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{ background: pointerGlow, animation: mouse ? "cursorGlow 3s ease-in-out infinite" : undefined }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\" opacity=\"0.8\"/%3E%3C/svg%3E")',
        }}
      />
    </>
  );
}

function SocialCard({ href, icon, label, action, colorClass }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#0d121b]/80 px-6 py-5 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35 hover:bg-[#111827]"
    >
      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colorClass} shadow-lg shadow-black/30`}>
        <Icon type={icon} className="h-8 w-8" />
      </div>
      <div className="text-left">
        <div className="text-xs font-bold tracking-[0.08em] text-slate-500">{label}</div>
        <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">{action}</div>
      </div>
    </a>
  );
}

function LandingPage({ onEnter }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [pressed, setPressed] = useState(false);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  function handleEnterClick() {
    setPressed(true);
    window.setTimeout(onEnter, 180);
  }

  return (
    <main
      className={`relative min-h-screen overflow-hidden text-white ${pressed ? "animate-[enterShake_.18s_ease-in-out]" : ""}`}
      onMouseMove={handleMouseMove}
    >
      <Styles />
      <Background mouse={mouse} />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-10 text-center">
        <div
          className="mb-9 flex h-44 w-44 items-center justify-center rounded-full border border-[#53FC18]/55 bg-[#111723] p-2 shadow-[0_0_60px_rgba(83,252,24,.14)]"
          style={{ animation: "logoFloat 6s ease-in-out infinite" }}
        >
          <img src="/logo.jpg" alt="BIGBETBABA logo" className="h-full w-full rounded-full object-cover" />
        </div>

        <p className="mb-5 max-w-3xl text-base font-semibold tracking-[0.08em] text-[#53FC18] sm:text-xl">
          Watch streams, claim rewards and join the community
        </p>

        <h1 className="text-5xl font-black uppercase tracking-[-0.045em] text-white sm:text-7xl md:text-8xl">
          BIGBETBABA
        </h1>

        <button
          type="button"
          onClick={handleEnterClick}
          className={`mt-11 rounded-xl bg-[#53FC18] px-10 py-5 text-base font-black tracking-wide text-[#07110d] transition duration-200 ease-out hover:-translate-y-1 hover:bg-emerald-300 active:translate-y-1 active:scale-[0.97] sm:px-12 sm:text-lg ${pressed ? "scale-[0.97]" : ""}`}
          style={{ animation: "buttonBreath 2s ease-in-out infinite" }}
        >
          I’m over 18 — enter
        </button>

        <div className="mt-16 grid w-full max-w-5xl gap-4 md:grid-cols-3">
          <SocialCard href={LINKS.kick} icon="kick" label="Kick" action="Watch" colorClass="bg-[#53FC18] text-[#07110d]" />
          <SocialCard href={LINKS.discord} icon="discord" label="Discord" action="Join" colorClass="bg-[#5865F2] text-white" />
          <SocialCard href={LINKS.youtube} icon="youtube" label="YouTube" action="Videos" colorClass="bg-[#FF0000] text-white" />
        </div>

        <p className="mt-12 max-w-xl text-xs uppercase tracking-[0.14em] text-slate-600">
          18+ only • Play responsibly • Never play with money you cannot afford to lose
        </p>
      </section>
    </main>
  );
}

function LoadingScreen() {
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const audio = new Audio("/jackpot.mp3");
    audio.volume = 0.22;

    if (soundOn) {
      audio.play().catch(() => {});
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [soundOn]);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Styles />
      <Background />

      <button
        type="button"
        onClick={() => setSoundOn((value) => !value)}
        className="absolute right-5 top-5 z-20 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300 transition hover:bg-white/[0.08]"
      >
        Sound {soundOn ? "on" : "off"}
      </button>

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <div className="relative">
          <div
            className="rounded-[26px] border border-white/10 bg-[#10141d] p-5 shadow-2xl shadow-black/50"
            style={{ animation: "machineSettle 1.8s ease-in-out infinite" }}
          >
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="text-xs font-bold tracking-[0.12em] text-[#53FC18]">BigBetBaba</span>
              <span className="rounded-full bg-[#53FC18]/10 px-3 py-1 text-xs font-bold text-[#53FC18]">Loading</span>
            </div>

            <div className="flex gap-3 rounded-2xl border border-white/10 bg-[#070a11] p-4 shadow-inner shadow-black/60">
              {["B", "A", "B", "A"].map((symbol, index) => (
                <div key={`${symbol}-${index}`} className="relative flex h-28 w-20 items-center justify-center overflow-hidden rounded-xl bg-[#151b26] ring-1 ring-white/10">
                  <div
                    className="font-mono text-6xl font-black text-white"
                    style={{ animation: `reelDrop .75s ${index * 0.12}s cubic-bezier(.2,.9,.25,1) both` }}
                  >
                    {symbol}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-[#53FC18]/20 bg-[#53FC18]/10 px-6 py-3 text-center text-lg font-black tracking-[0.08em] text-[#53FC18]">
              BABA loaded
            </div>
          </div>

          <div className="absolute -right-12 top-16 hidden md:block">
            <div className="h-16 w-8 rounded-r-xl border border-white/10 bg-[#151b26]" />
            <div className="absolute left-4 top-2 origin-top" style={{ animation: "leverPull 1.1s ease-in-out infinite" }}>
              <div className="h-24 w-2 rounded-full bg-slate-400" />
              <div className="-ml-4 -mt-2 h-10 w-10 rounded-full bg-red-500 shadow-lg shadow-red-950/40" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MainPage() {
  const isLive = false;

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <Styles />
      <Background />

      <nav className="relative z-10 border-b border-white/10 bg-[#080b12]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="BIGBETBABA logo" className="h-14 w-14 rounded-full object-cover ring-2 ring-[#53FC18]/55" />
            <div>
              <div className="text-lg font-black tracking-normal text-white antialiased">BIGBETBABA</div>
              <div className="text-xs font-bold tracking-[0.08em] text-[#53FC18] antialiased">Live community</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {[
              ["Babayanbreaks", LINKS.babayanbreaks],
              ["Kick", LINKS.kick],
              ["Discord", LINKS.discord],
              ["YouTube", LINKS.youtube],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-5 py-3 text-sm font-extrabold tracking-normal text-slate-200 antialiased transition duration-300 hover:bg-[#53FC18]/10 hover:text-[#53FC18] hover:ring-1 hover:ring-[#53FC18]/20"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#53FC18] px-5 py-3 text-sm font-black text-[#07110d] shadow-[0_0_20px_rgba(83,252,24,.16)] transition duration-300 hover:bg-emerald-300"
          >
            Join Discord
          </a>
        </div>
      </nav>

      <section id="home" className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-12 text-center">
        <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#53FC18]/50 bg-[#111723] p-1.5 shadow-[0_0_42px_rgba(83,252,24,.12)]">
          <img src="/logo.jpg" alt="BIGBETBABA logo" className="h-full w-full rounded-full object-cover" />
        </div>

        <div className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d121b]/90 text-left shadow-2xl shadow-black/40 md:translate-x-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
            <div>
              <div className="flex items-center gap-2 text-base font-black tracking-[0.08em] text-slate-200">
                <span className="h-2.5 w-2.5 rounded-full bg-[#53FC18]" />
                Kick stream
              </div>
              <div className="mt-1 text-sm text-slate-500">kick.com/bigbetbaba</div>
            </div>
            <a
              href={LINKS.kick}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#53FC18] px-5 py-3 text-sm font-black text-[#07110d] transition duration-300 hover:bg-emerald-300"
            >
              Watch live
            </a>
          </div>

          <div className="relative h-[260px] bg-[#050806] md:h-[360px]">
            {!isLive && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#050806]/92 text-center">
                <div className="max-w-sm px-6">
                  <img src="/logo.jpg" alt="BIGBETBABA logo" className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-[#53FC18]/35" />
                  <div className="mt-5 text-xl font-black text-white">Stream offline</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">BigBetBaba is not live right now. Open Kick or check back later.</div>
                </div>
              </div>
            )}

            {isLive && (
              <iframe
                title="BIGBETBABA Kick live player"
                src="https://player.kick.com/bigbetbaba"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-[1.1fr_.9fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-6 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/30">
            <div className="text-2xl font-black text-white">Code BABA</div>
            <p className="mt-2 text-sm font-semibold text-slate-400">Use it when signing up on Spacehills.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-6 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/30">
            <div className="text-2xl font-black text-white">Kick stream</div>
            <p className="mt-2 text-sm font-semibold text-slate-400">Catch live sessions and stream moments.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-6 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/30">
            <div className="text-2xl font-black text-white">Discord</div>
            <p className="mt-2 text-sm font-semibold text-slate-400">Get updates, drops and community posts.</p>
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-6xl rounded-xl border border-yellow-300/15 bg-yellow-300/[0.03] px-5 py-4 text-center text-sm font-bold text-yellow-200">
          18+ only. Play responsibly. Never play with money you cannot afford to lose.
        </div>
      </section>

      <section id="babayanbreaks" className="relative z-10 mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Community links</h2>
            <p className="mt-2 text-sm text-slate-500">Fast access to the places people actually use.</p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-[#0d121b]/80 px-4 py-2 text-sm font-bold text-slate-300 md:flex">
            <Icon type="clock" className="h-4 w-4 text-[#53FC18]" />
            Most nights • 8PM CET
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <a href={LINKS.babayanbreaks} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-7 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35">
            <div className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f16] p-2">
              <img src="/babayanbreaks.png" alt="Babayanbreaks logo" className="h-full w-full object-contain" />
            </div>
            <h3 className="text-2xl font-black text-white">Babayanbreaks</h3>
            <p className="mt-3 leading-7 text-slate-400">Live breaks, collectibles and community events.</p>
          </a>

          <a href={LINKS.kick} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-7 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#53FC18] text-[#07110d]"><Icon type="kick" className="h-9 w-9" /></div>
            <h3 className="text-2xl font-black text-white">Watch live</h3>
            <p className="mt-3 leading-7 text-slate-400">Follow BIGBETBABA on Kick for live streams and community moments.</p>
          </a>

          <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#0d121b]/80 p-7 shadow-xl shadow-black/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#53FC18]/35">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5865F2] text-white"><Icon type="discord" className="h-9 w-9" /></div>
            <h3 className="text-2xl font-black text-white">Community support</h3>
            <p className="mt-3 leading-7 text-slate-400">Join Discord for updates, giveaways and announcements.</p>
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 pb-24 md:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <div className="text-lg font-black text-white">BIGBETBABA</div>
            <div className="mt-1 text-xs text-slate-500">18+ community links, streams and updates.</div>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINKS.kick} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-[#53FC18]/40 hover:text-[#53FC18]"><Icon type="kick" className="h-5 w-5" /></a>
            <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-[#53FC18]/40 hover:text-[#53FC18]"><Icon type="discord" className="h-5 w-5" /></a>
            <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-[#53FC18]/40 hover:text-[#53FC18]"><Icon type="youtube" className="h-5 w-5" /></a>
          </div>
          <div className="text-xs uppercase tracking-[0.12em] text-slate-600">© 2026 • Play responsibly</div>
        </div>
      </footer>

      <div className="fixed inset-x-4 bottom-4 z-30 grid grid-cols-2 gap-3 md:hidden">
        <a href={LINKS.kick} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#53FC18] px-4 py-3 text-center text-sm font-black text-[#07110d] shadow-xl shadow-black/30">Watch Live</a>
        <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-[#07110d] shadow-xl shadow-black/30">Join Discord</a>
      </div>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState("landing");

  function handleEnter() {
    setScreen("loading");
    const delay = 1200 + Math.floor(Math.random() * 900);
    window.setTimeout(() => {
      setScreen("main");
    }, delay);
  }

  if (screen === "loading") return <LoadingScreen />;
  if (screen === "main") return <MainPage />;
  return <LandingPage onEnter={handleEnter} />;
}
