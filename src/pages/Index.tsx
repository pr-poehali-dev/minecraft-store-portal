import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_BG =
  'https://cdn.poehali.dev/projects/0476f28d-fa01-44ea-9215-0abd702faae8/bucket/d7b99b93-b456-4dfe-a4d1-c6daa6287d3e.jpg';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'plus', label: 'Плюс' },
  { id: 'rules', label: 'Правила' },
];

const PRIVILEGES = [
  {
    name: 'VIP',
    price: '149₽',
    color: 'bg-primary',
    icon: 'Sparkles',
    perks: ['Цветной ник в чате', 'Доступ к /kit vip', '3 точки дома', 'Префикс [VIP]'],
  },
  {
    name: 'PREMIUM',
    price: '349₽',
    color: 'bg-secondary',
    icon: 'Crown',
    perks: ['Всё из VIP', 'Полёт /fly', '5 точек дома', 'Доступ к /hat'],
    featured: true,
  },
  {
    name: 'LEGEND',
    price: '699₽',
    color: 'bg-accent',
    icon: 'Gem',
    perks: ['Всё из PREMIUM', 'Команда /god', '10 точек дома', 'Свой цвет ника'],
  },
];

const CASES = [
  { name: 'Обычный кейс', price: '49₽', emoji: '📦', drop: 'Ресурсы и еда' },
  { name: 'Редкий кейс', price: '99₽', emoji: '🎁', drop: 'Зачар. предметы' },
  { name: 'Алмазный кейс', price: '199₽', emoji: '💎', drop: 'Элитный лут' },
  { name: 'Эндер кейс', price: '299₽', emoji: '🟣', drop: 'Уникальные скины' },
];

const RULES = [
  { icon: 'Ban', title: 'Без читов', text: 'Запрещены любые читы, X-Ray и сторонние модификации, дающие преимущество.' },
  { icon: 'MessageSquareOff', title: 'Уважение в чате', text: 'Никаких оскорблений, спама, флуда и рекламы других серверов.' },
  { icon: 'Pickaxe', title: 'Не гриферь', text: 'Разрушение и кража чужих построек строго запрещены и караются баном.' },
  { icon: 'UserX', title: 'Один аккаунт', text: 'Использование нескольких аккаунтов для обхода наказаний запрещено.' },
  { icon: 'Bug', title: 'Сообщай о багах', text: 'Использование багов и дюпов ведёт к блокировке. Сообщай админам.' },
  { icon: 'Heart', title: 'Будь дружелюбным', text: 'Помогай новичкам и создавай приятную атмосферу для всех игроков.' },
];

export default function Index() {
  const [active, setActive] = useState('home');

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 grass-stripe border-b-4">
        <div className="container flex items-center justify-between py-3">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3">
            <div className="w-9 h-9 overflow-hidden border border-purple-500/60 rounded-sm">
              <img src="https://cdn.poehali.dev/projects/0476f28d-fa01-44ea-9215-0abd702faae8/bucket/1a446157-4df0-4537-aebb-a807c202bb31.jpg" alt="logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-pixel text-sm text-white glow-text">
              VanillaMist
            </span>
          </button>
          <nav className="flex gap-2">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`pixel-btn px-3 py-2 text-white ${
                  active === n.id ? 'bg-accent !text-accent-foreground' : 'bg-secondary'
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="container relative py-24 md:py-36 text-center">
          <h1 className="font-pixel text-2xl md:text-5xl text-white leading-relaxed mb-8 glow-text">
            <span className="text-accent">VANILLAMIST</span>
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => scrollTo('plus')} className="pixel-btn bg-card/80 text-white/90 px-8 py-6 text-xs h-auto hover:bg-card border-purple-500/40">
              Начать играть
            </Button>
            <Button onClick={() => scrollTo('rules')} className="pixel-btn bg-transparent text-white/70 px-8 py-6 text-xs h-auto hover:bg-card/50 border-white/20">
              Правила
            </Button>
          </div>

          <div className="mt-36 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-3 bg-card/95 pixel-card px-5 py-3">
              <Icon name="Server" size={20} className="text-accent" />
              <code className="font-pixel text-[10px] md:text-xs text-foreground">play.vanillamist.ru</code>
              <span className="font-pixel text-[8px] text-muted-foreground">COPY</span>
            </div>
            <div className="inline-flex items-center gap-3 bg-card/95 pixel-card px-5 py-3">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.6)]" />
              <span className="font-pixel text-[10px] md:text-xs text-foreground">1 247 ИГРОКОВ</span>
            </div>
          </div>
        </div>
      </section>



      {/* PLUS / PRIVILEGES */}
      <section id="plus" className="py-20 grass-stripe border-y-4">
        <div className="container">
          <h2 className="font-pixel text-xl md:text-2xl text-center mb-3 text-accent glow-text">
            ⭐ ПЛЮС
          </h2>
          <p className="text-center text-white/80 mb-12 font-medium">
            Выбери привилегию и получи преимущества на сервере
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRIVILEGES.map((p, i) => (
              <div
                key={p.name}
                className={`pixel-card p-7 animate-fade-in ${p.featured ? 'md:-translate-y-4' : ''}`}
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                {p.featured && (
                  <div className="font-pixel text-[8px] bg-accent text-accent-foreground inline-block px-3 py-1 mb-3 pixel-btn">
                    ПОПУЛЯРНОЕ
                  </div>
                )}
                <div className={`${p.color} w-14 h-14 flex items-center justify-center mb-4 pixel-btn`}>
                  <Icon name={p.icon} size={26} className="text-white" />
                </div>
                <h3 className="font-pixel text-base mb-1 text-foreground">{p.name}</h3>
                <div className="font-pixel text-2xl text-accent mb-5 glow-text">{p.price}</div>
                <ul className="space-y-3 mb-7">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={18} className="text-accent mt-0.5 shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Button className="pixel-btn w-full bg-card/80 text-white/90 py-6 h-auto hover:bg-card border-purple-500/40">
                  Купить
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="rules" className="container py-20">
        <h2 className="font-pixel text-xl md:text-2xl text-center mb-3 text-accent glow-text">📜 ПРАВИЛА СЕРВЕРА</h2>
        <p className="text-center text-muted-foreground mb-12 font-medium">
          Соблюдай правила, чтобы игра была честной и приятной для всех
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {RULES.map((r, i) => (
            <div
              key={r.title}
              className="pixel-card p-6 animate-fade-in"
              style={{ animationDelay: `${i * 0.07}s`, opacity: 0 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-secondary w-11 h-11 flex items-center justify-center shrink-0 pixel-btn">
                  <Icon name={r.icon} fallback="ShieldAlert" size={22} className="text-accent" />
                </div>
                <h3 className="font-pixel text-[11px] leading-relaxed">{r.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="grass-stripe border-t-4 py-10">
        <div className="container text-center">
          <div className="font-pixel text-sm text-accent glow-text mb-3">
            💎 VANILLAMIST
          </div>
          <p className="text-white/75 text-sm font-medium">
            play.vanillamist.ru · © 2026 · Лучший Minecraft-сервер
          </p>
        </div>
      </footer>
    </div>
  );
}