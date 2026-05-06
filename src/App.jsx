import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const menu = ["მთავარი", "დაწყება", "ფორუმი", "სოციალები"];

function DiscordIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.32 4.37A19.8 19.8 0 0 0 15.36 2.84a.07.07 0 0 0-.08.04c-.21.38-.45.88-.62 1.27a18.4 18.4 0 0 0-5.32 0c-.17-.4-.42-.9-.64-1.27a.08.08 0 0 0-.08-.04A19.74 19.74 0 0 0 3.68 4.37a.07.07 0 0 0-.03.03C.54 9.04-.31 13.56.11 18.03c0 .02.01.05.03.06a19.9 19.9 0 0 0 6.08 3.07.08.08 0 0 0 .09-.03c.47-.64.89-1.31 1.24-2.02a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.9-.91.08.08 0 0 1-.01-.13c.13-.1.26-.2.38-.3a.08.08 0 0 1 .08-.01c3.99 1.82 8.3 1.82 12.24 0a.08.08 0 0 1 .09.01c.12.1.25.2.38.3a.08.08 0 0 1-.01.13c-.6.35-1.23.65-1.9.91a.08.08 0 0 0-.04.11c.36.7.77 1.38 1.24 2.02a.08.08 0 0 0 .09.03 19.84 19.84 0 0 0 6.09-3.07.08.08 0 0 0 .03-.06c.5-5.17-.84-9.65-3.52-13.63a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.2 0-2.19-1.1-2.19-2.45 0-1.35.97-2.45 2.19-2.45 1.23 0 2.2 1.11 2.19 2.45 0 1.35-.97 2.45-2.19 2.45Zm7.97 0c-1.2 0-2.19-1.1-2.19-2.45 0-1.35.97-2.45 2.19-2.45 1.23 0 2.2 1.11 2.19 2.45 0 1.35-.96 2.45-2.19 2.45Z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a5.8 5.8 0 0 0 3.4 1.1v3.43a9.15 9.15 0 0 1-3.4-.68v6.08a6.25 6.25 0 1 1-6.25-6.25c.35 0 .69.03 1.02.09v3.55a2.84 2.84 0 1 0 1.98 2.71V2h3.25v3.82Z" />
    </svg>
  );
}

function IXLogo({ size = "md" }) {
  const box =
    size === "lg"
      ? "h-24 w-24 rounded-[28px] text-4xl"
      : size === "hero"
      ? "h-20 w-20 rounded-2xl text-4xl"
      : "h-12 w-12 rounded-xl text-xl";

  return (
    <div className={`relative flex ${box} items-center justify-center overflow-hidden bg-gradient-to-br from-[#ff5a5a] via-[#d93636] to-[#6f1111] font-black text-white shadow-[0_0_45px_rgba(217,54,54,.35)]`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,.35),transparent_24%)]" />
      <div className="absolute inset-[3px] rounded-[inherit] border border-white/20" />
      <span className="relative tracking-[-0.08em] drop-shadow-lg">IX</span>
      <span className="absolute bottom-1.5 h-0.5 w-1/2 rounded-full bg-white/25" />
    </div>
  );
}

function Button({ children, onClick, variant = "primary", className = "" }) {
  const styles =
    variant === "primary"
      ? "bg-[#d93636] text-white hover:bg-[#ef4444] shadow-lg shadow-red-950/30"
      : "border border-white/10 bg-[#1b1b1b] text-white/75 hover:bg-[#222] hover:text-white";

  return (
    <button onClick={onClick} className={`rounded-xl px-6 py-3 font-black transition active:scale-95 ${styles} ${className}`}>
      {children}
    </button>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="group rounded-[26px] border border-white/10 bg-[#151515]/95 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#d93636]/45 hover:bg-[#191919]">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d93636]/15 text-2xl font-black text-[#ff7777] ring-1 ring-[#d93636]/25 transition group-hover:bg-[#d93636] group-hover:text-white">{icon}</div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-white/52">{text}</p>
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const discordUrl = "https://discord.gg/Upd7zRr4qm";
  const forumUrl = "https://forum-ix.site/";
  const tiktokUrl = "https://www.tiktok.com/@ixrpge";

  const goTo = (url) => window.open(url, "_blank");

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const handleMenu = (index) => {
    if (index === 0) window.scrollTo({ top: 0, behavior: "smooth" });
    if (index === 1) scrollToSection("#start");
    if (index === 2) goTo(forumUrl);
    if (index === 3) scrollToSection("#project");
  };

  const factions = useMemo(
    () => [
      { name: "LSPD", text: "წესრიგი, გამოძიება და ქალაქის უსაფრთხოება", icon: "🚓" },
      { name: "EMS", text: "სამედიცინო დახმარება და გადაუდებელი სიტუაციები", icon: "🚑" },
      { name: "Business", text: "ეკონომიკა, კომპანიები და საკუთარი შემოსავალი", icon: "💼" },
      { name: "Crime RP", text: "ოჯახები, ქუჩის გავლენა და კრიმინალური ისტორია", icon: "🕶" },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white selection:bg-[#d93636]/40">
      {loading && (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 0.55, duration: 0.35 }} className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0b0b]">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.35 }} className="text-center">
            <IXLogo size="lg" />
            <p className="mt-5 text-sm font-black uppercase tracking-[0.45em] text-[#ffb4b4]">Loading</p>
          </motion.div>
        </motion.div>
      )}

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,54,54,.24),transparent_31%),radial-gradient(circle_at_88%_24%,rgba(217,54,54,.10),transparent_26%),linear-gradient(180deg,#111_0%,#0b0b0b_55%,#090909_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.055]" />
        <motion.div animate={{ y: [0, -18, 0], opacity: [0.16, 0.35, 0.16] }} transition={{ duration: 7, repeat: Infinity }} className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full bg-[#ff7777] shadow-[0_0_28px_rgba(255,119,119,.9)]" />
        <motion.div animate={{ y: [0, 22, 0], opacity: [0.12, 0.28, 0.12] }} transition={{ duration: 9, repeat: Infinity }} className="absolute right-[14%] top-[44%] h-2 w-2 rounded-full bg-[#ff7777] shadow-[0_0_28px_rgba(255,119,119,.9)]" />
        <motion.div animate={{ y: [0, -14, 0], opacity: [0.10, 0.24, 0.10] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-[18%] left-[28%] h-1.5 w-1.5 rounded-full bg-[#ff7777] shadow-[0_0_24px_rgba(255,119,119,.8)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101010]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 text-left">
            <IXLogo />
            <div>
              <p className="text-lg font-black leading-none">IX RolePlay</p>
              <p className="mt-1 text-xs text-white/38">Georgian GTA V RP</p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {menu.map((item, index) => (
              <button key={item} onClick={() => handleMenu(index)} className="rounded-xl px-4 py-2.5 text-sm font-bold text-white/62 transition hover:bg-white/[0.055] hover:text-white">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button onClick={() => goTo(discordUrl)} className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1b1b1b] px-4 py-3 font-black text-white/75 transition hover:bg-[#222] hover:text-white">
              <DiscordIcon className="h-5 w-5" /> Discord
            </button>
            <button onClick={() => goTo(tiktokUrl)} className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1b1b1b] px-4 py-3 font-black text-white/75 transition hover:bg-[#222] hover:text-white">
              <TikTokIcon className="h-5 w-5" /> TikTok
            </button>
            <Button onClick={() => goTo(forumUrl)}>Forum</Button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-xl border border-white/10 bg-[#1b1b1b] px-4 py-2.5 font-black md:hidden">☰</button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#101010] px-4 py-3 md:hidden">
            <div className="grid gap-2">
              {menu.map((item, index) => (
                <button key={item} onClick={() => handleMenu(index)} className="rounded-xl px-4 py-3 text-left font-bold text-white/65 hover:bg-white/[0.055] hover:text-white">
                  {item}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button onClick={() => goTo(discordUrl)} variant="secondary">
                  <span className="inline-flex items-center gap-2"><DiscordIcon className="h-5 w-5" /> Discord</span>
                </Button>
                <Button onClick={() => goTo(tiktokUrl)} variant="secondary">
                  <span className="inline-flex items-center gap-2"><TikTokIcon className="h-5 w-5" /> TikTok</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d93636]/30 bg-[#d93636]/12 px-4 py-2 text-sm font-black text-[#ffb4b4] shadow-lg shadow-red-950/20">
            <span className="h-2 w-2 rounded-full bg-[#ff7777] shadow-[0_0_16px_rgba(255,119,119,.85)]" />
            IX RolePlay Official Website
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] md:text-7xl lg:text-[82px]">
            აირჩიე შენი როლი და დაიწყე თამაში
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
            IX RolePlay არის ქართული GTA V RP პროექტი, სადაც შეგიძლია გახდე პოლიციელი, ექიმი, ბიზნესმენი ან შექმნა საკუთარი კრიმინალური ისტორია.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button onClick={() => goTo(discordUrl)} className="px-9 py-4 text-lg">დაიწყე თამაში</Button>
            <Button onClick={() => goTo(forumUrl)} variant="secondary" className="px-9 py-4 text-lg">ფორუმი</Button>
            <Button onClick={() => goTo(tiktokUrl)} variant="secondary" className="px-9 py-4 text-lg">
              <span className="inline-flex items-center gap-2"><TikTokIcon className="h-5 w-5" /> TikTok</span>
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5 shadow-xl shadow-black/20">
              <p className="text-sm text-white/40">სტატუსი</p>
              <p className="mt-2 text-2xl font-black text-[#ff7777]">მზადდება</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5 shadow-xl shadow-black/20">
              <p className="text-sm text-white/40">ფორუმი</p>
              <p className="mt-2 text-2xl font-black">Active</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5 shadow-xl shadow-black/20">
              <p className="text-sm text-white/40">სოციალები</p>
              <p className="mt-2 text-2xl font-black">Discord / TikTok</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }}>
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#151515] p-6 shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(217,54,54,.28),transparent_32%)]" />
            <div className="relative rounded-[30px] border border-white/10 bg-black/35 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <IXLogo size="hero" />
                <div>
                  <p className="text-3xl font-black">IX RolePlay</p>
                  <p className="mt-1 text-white/42">Forum • Rules • Applications</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {["სერვერის წესები", "ვაკანსიები", "საჩივრები", "RP ბიოგრაფიები"].map((item) => (
                  <button key={item} onClick={() => goTo(forumUrl)} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#151515] p-4 text-left transition hover:border-[#d93636]/40 hover:bg-[#1b1b1b]">
                    <span className="font-black">{item}</span>
                    <span className="text-[#ff7777]">›</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="start" className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff7777]">როგორ დავიწყოთ</p>
          <h2 className="mt-3 text-4xl font-black">როგორ დაიწყო თამაში?</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <Feature icon="1" title="შედი Discord-ზე" text="ყველა ოფიციალური ინფორმაცია და გახსნის დეტალები Discord-ზე გამოქვეყნდება." />
          <Feature icon="2" title="წაიკითხე წესები" text="ფორუმზე გაეცანი სერვერის წესებს, RP ფორმატს და განაცხადების პირობებს." />
          <Feature icon="3" title="დაიწყე RP" text="შექმენი პერსონაჟი, აირჩიე როლი და დაიწყე შენი ისტორია IX RolePlay-ში." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff7777]">RP მიმართულებები</p>
          <h2 className="mt-3 text-4xl font-black">აირჩიე მიმართულება</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {factions.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -6 }} className="rounded-[26px] border border-white/10 bg-[#151515]/95 p-6 shadow-xl shadow-black/20 transition hover:border-[#d93636]/45 hover:bg-[#191919]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d93636]/15 text-2xl ring-1 ring-[#d93636]/25">{item.icon}</div>
              <h3 className="text-xl font-black">{item.name}</h3>
              <p className="mt-3 leading-7 text-white/50">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-5 lg:grid-cols-[1fr_.8fr]">
          <div className="rounded-[30px] border border-white/10 bg-[#151515] p-7 shadow-2xl shadow-black/25">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff7777]">რატომ IX</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">სერიოზული RP გარემო ერთ სივრცეში</h2>
            <p className="mt-4 leading-8 text-white/55">ფორუმი, წესები, განაცხადები, Discord და TikTok გაერთიანებულია ერთ ოფიციალურ გვერდზე, რომ ახალ მოთამაშეს ყველაფერი მარტივად ჰქონდეს.</p>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_80%_20%,rgba(217,54,54,.22),transparent_38%),#151515] p-7 shadow-2xl shadow-black/25">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff7777]">IX სტატუსი</p>
            <h3 className="mt-3 text-3xl font-black">გახსნა მალე</h3>
            <p className="mt-4 leading-8 text-white/55">დაელოდე სიახლეებს ფორუმსა და Discord-ზე.</p>
            <Button onClick={() => goTo(discordUrl)} className="mt-6">Discord-ზე შესვლა</Button>
          </div>
        </div>
      </section>

      <section id="project" className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#151515] p-8 shadow-2xl shadow-black/30 md:p-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#d93636]/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#ff7777]">სოციალები</p>
            <h2 className="mt-3 text-4xl font-black">შემოგვიერთდი IX საზოგადოებაში</h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/55">
              ფორუმზე ნახავ წესებს, ვაკანსიებს, განაცხადებს და სიახლეებს. Discord-ზე და TikTok-ზე კი მიიღებ ახალ ინფორმაციას და კონტენტს.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <button onClick={() => goTo(forumUrl)} className="rounded-[24px] border border-white/10 bg-[#101010] p-6 text-left transition hover:-translate-y-1 hover:border-[#d93636]/45 hover:bg-[#191919]">
                <div className="mb-5"><IXLogo /></div>
                <h3 className="text-2xl font-black">Forum</h3>
                <p className="mt-2 text-white/45">წესები, განაცხადები და სიახლეები</p>
              </button>
              <button onClick={() => goTo(discordUrl)} className="rounded-[24px] border border-white/10 bg-[#101010] p-6 text-left transition hover:-translate-y-1 hover:border-[#d93636]/45 hover:bg-[#191919]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d93636]/15 text-[#ff7777] ring-1 ring-[#d93636]/25"><DiscordIcon className="h-8 w-8" /></div>
                <h3 className="text-2xl font-black">Discord</h3>
                <p className="mt-2 text-white/45">ოფიციალური community არხი</p>
              </button>
              <button onClick={() => goTo(tiktokUrl)} className="rounded-[24px] border border-white/10 bg-[#101010] p-6 text-left transition hover:-translate-y-1 hover:border-[#d93636]/45 hover:bg-[#191919]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d93636]/15 text-[#ff7777] ring-1 ring-[#d93636]/25"><TikTokIcon className="h-8 w-8" /></div>
                <h3 className="text-2xl font-black">TikTok</h3>
                <p className="mt-2 text-white/45">@ixrpge ვიდეოები და განახლებები</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#101010] px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-white/38 md:flex-row">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
            <IXLogo />
            <span>©2026 IX RolePlay</span>
          </button>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <button onClick={() => goTo(forumUrl)} className="hover:text-white">Forum</button>
            <button onClick={() => goTo(discordUrl)} className="hover:text-white">Discord</button>
            <button onClick={() => goTo(tiktokUrl)} className="hover:text-white">TikTok</button>
            <button onClick={() => goTo(`${forumUrl}login/`)} className="hover:text-white">Login</button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white">Top</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
