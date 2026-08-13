# Topshiriq: MultBilim saytini Astro'ga ko'chirish

> **BAJARILDI (2026-08-13).** Ko'chirish tugadi — hozirgi holat va qoidalar
> `README.md` va `AGENTS.md` da. Bu fayl topshiriq matni sifatida arxivda qoladi.

Bu fayl yangi sessiya uchun to'liq topshiriq. Sessiya sovuqdan boshlanadi —
avval `AGENTS.md` va `README.md` ni **to'liq o'qing**, ularda dizayn tizimi,
tekshirish skriptlari va muhit tuzoqlari bor.

---

## 0. Boshlashdan oldin

```bash
cd D:/Projects/multbilim
cat AGENTS.md          # buzilmaydigan qoidalar, dizayn tokenlari, tuzoqlar
cat README.md          # tuzilish, kontent manbalari, namunaviy ma'lumot ro'yxati
git log --oneline      # 12 ta commit, oxirgisi mobil audit
```

**Muhit tuzoqlari** (AGENTS.md §6 da batafsil, takrorlayman chunki vaqt yeydi):

- `gh auth login` shu mashinada **faqat `--insecure-storage` bilan** ishlaydi
- PowerShell orqali loyiha tashqarisiga yozish **jim yo'qoladi** — Write/Edit yoki Bash ishlating
- Konsol cp1251 — Python skriptda `sys.stdout.reconfigure(encoding='utf-8', errors='replace')`

---

## 1. Maqsad

Hozirgi bir fayldan iborat statik sayt (`index.html`, 83 KB, 1127 qator) **Astro**
loyihasiga ko'chirilsin. Eski HTML versiya ham saqlanib qolsin va ochiladigan bo'lsin.

**Jonli sayt:** https://xakimovnosirbek.github.io/multbilim/
**Repo:** https://github.com/XakimovNosirbek/multbilim (ochiq, GitHub Pages `main` root dan)

---

## 2. Nega ko'chirilyapti — hal qilinishi kerak bo'lgan muammolar

O'lchangan raqamlar (`index.html` tahlilidan):

| Muammo | Hozirgi holat |
|---|---|
| Takrorlanuvchi blok | **91 ta** (28 personaj kartochkasi, 14 karta, 8 video, 8 qadriyat, 6 loyiha, 6 ichki sahifa, 6 savol...) |
| Loyihaga alohida URL | **yo'q** — hammasi modal, ulashib bo'lmaydi, Google indekslamaydi, «orqaga» ishlamaydi |
| uz/ru/en | **yo'q** — oldingi JS lug'at yechimi olib tashlangan |
| Rasm srcset / AVIF | **yo'q** — 49 ta JPEG, 4,07 MB, har biri bitta o'lchamda |
| sitemap.xml, robots.txt | **yo'q** |

---

## 3. Talab qilinadigan natija

### 3.1 Tuzilish

```
multbilim/
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
├─ .github/workflows/deploy.yml     ← Astro build + Pages deploy
├─ public/
│  ├─ favicon.svg
│  ├─ .nojekyll
│  └─ html/                          ← ESKI VERSIYA (index.html + img/) shu yerga
├─ src/
│  ├─ assets/img/                    ← 49 rasm (astro:assets optimizatsiya qiladi)
│  ├─ content/
│  │  ├─ config.ts                   ← zod sxema
│  │  └─ projects/*.md               ← 6 ta loyiha
│  ├─ data/                          ← videos, services, process, tech, team, careers, faq
│  ├─ i18n/{ui.ts, utils.ts}
│  ├─ layouts/Base.astro
│  ├─ components/                    ← Header, Hero, ProjectCard, VideoCard, Card,
│  │                                    TeamMember, Row, Faq, ContactForm, Footer,
│  │                                    Lightbox, MobileNav
│  ├─ styles/global.css              ← barcha tokenlar + CSS (index.html dan ko'chiriladi)
│  └─ pages/
│     ├─ index.astro                 → uz bosh sahifa
│     ├─ loyihalar/[slug].astro      → /loyihalar/alpomish
│     ├─ ru/... va en/...            → i18n marshrutlash
│     └─ 404.astro
```

### 3.2 Eski versiya

`index.html`, `img/`, `favicon.svg` **o'zgarishsiz** `public/html/` ga ko'chirilsin.
Manzili: `/multbilim/html/`. Yangi saytning futerida unga havola bo'lsin
(«Oldingi versiya» yoki shunga o'xshash, kichik matnda).

**Eski versiyaning kodiga tegilmasin** — u audit qilingan va tasdiqlangan holat.

### 3.3 i18n

- `uz` (asosiy, prefiksz: `/`), `ru` (`/ru/`), `en` (`/en/`)
- Astro'ning **tug'ma i18n marshrutlashi** ishlatilsin, JS lug'at emas
- Har til alohida HTML sahifa — JS o'chsa ham ishlaydi, alohida indekslanadi
- `hreflang` teglari qo'shilsin
- **Tarjima urug'i tayyor: `i18n-seed.json`** — 400 ta juftlik, format
  `{"<uzbek>": ["<rus>", "<ingliz>"]}`. Yangi matnlar uchun qolganini yozing.

### 3.4 Rasmlar

- `src/assets/img/` ga qo'ying, `<Image>` / `<Picture>` (astro:assets) ishlating
- AVIF + WebP + responsive `srcset` avtomatik chiqsin
- Maqsad: 4,07 MB → ~1,5 MB, retinada sifat yaxshilansin
- Bosh ekrandagi 1-slayd `loading="eager"`, qolgani lazy
  (hozirgi `heroLazy` mantiqi shuni qo'lda qiladi — Astro'da tabiiyroq yechim toping)

### 3.5 Qo'shilishi kerak

- `@astrojs/sitemap` → sitemap.xml
- `robots.txt`
- Har loyiha sahifasiga alohida `<title>`, `og:image`, `og:description`
- JSON-LD (`Organization` + har loyiha uchun `CreativeWork`)

---

## 4. BUZILMASLIGI KERAK BO'LGAN NARSALAR

Bular audit qilingan va o'lchangan. **Ko'chirishda yo'qotilsa — regressiya.**

### Dizayn tokenlari (AGENTS.md §3)

```
--page-bg  #060912 / #f2f0ea      --page-text  #f7f8fb / #101621
--muted    #9ba6b7 / #626c7b      --line       rgba(255,255,255,.12) / rgba(14,21,32,.14)
--panel    rgba(255,255,255,.035) / rgba(13,22,36,.043)
--blue     #5B9BFF / #0f5fd6      ← asosiy urg'u
--gold     #ffc928 / #7d5600      ← ta'kid, AYNAN 6 joyda
```

To'rt blokda e'lon qilinadi: `:root`, `@media(prefers-color-scheme:light)`,
`:root[data-theme="light"]`, `:root[data-theme="dark"]`.

**Oltin kvotasi — 6 ta, ko'paytirilmasin:** `.logo .mark::after`, `.logo .l1`,
hero'dagi 2-so'z, `.big em`, faol slayd nuqtasi, o'ynayotgan video ramkasi.

### Shrift shkalasi — 8 pog'ona, yangi qiymat qo'shilmasin

`11 · 12 · 13 · 14 · 16 · 17 · 19 · 22` (+ katta sarlavhalar `clamp()`).
Veb-shrift **yo'q** — `ui-sans-serif, system-ui`.
Forma maydonlari **16px dan past bo'lmasin** (iOS zoom).

### Bo'shliq

`4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 24 · 28 · 40`.

### Foydalanish qulayligi — hammasi saqlansin

- Teginish nishoni ≥ 44px (shapka tugmalari, email havolalari, futer havolalari)
- Slayd nuqtasi 24×24 nishon, ko'rinadigan chiziq 3px
- **Ikkita fokus tuzog'i**: loyiha modali/sahifasi va rasm ko'rgichi
- Modal ochilganda orqa fon `inert` + `aria-hidden`
- Mobil menyu ochilganda ham shunday
- `prefers-reduced-motion` bloki
- Rang yagona signal emas (faol slayd nuqtasi kengayadi ham)
- Rasm ko'rgichda `role="dialog"`, `aria-modal`, `←`/`→` klavishlari
- Barcha rasmda `alt`

### Mobil (o'lchangan, 320px da sinalgan)

- `minmax(min(320px,100%),1fr)` — oddiy `minmax(320px,1fr)` 320px ekranda toshadi
- `env(safe-area-inset-*)` — 7 joyda (wrap, modal/ko'rgich yopish tugmalari, futer)
- `viewport-fit=cover` + safe-area birga ishlatiladi
- `100svh`, `playsinline`, `@media (hover:none)` da loyiha tavsifi ochiq

### Kontrast — hammasi WCAG AA dan o'tadi, o'zgartirsangiz qayta o'lchang

AGENTS.md §5 da skript bor. Oxirgi holat: asosiy sahifada 8 juftlik ✅,
6 ta loyiha palitrasida 36 juftlik ✅, UI elementlar 3:1 dan yuqori.

---

## 5. KONTENT HALOLLIGI — eng muhim qoida

Saytda haqiqiy va namunaviy ma'lumot **aralash**. Chalkashtirmang.

**Haqiqiy** (studiyaning PDF taqdimotlaridan va YouTube RSS'dan):
6 loyihaning nomi/janri/sinopsisi/personajlari, 49 rasm, video ID'lari va
ko'rish sonlari, studiya nomi, logo ranglari.

**Namunaviy** (saytda shunday belgilangan — belgilarni olib tashlamang):
jamoa (4 ism), 5 vakansiya, `@multbilim.uz` manzillar, «40+ mutaxassis»,
savol-javob javoblari, ofis manzili.

---

## 6. Deploy

Hozir Pages `main` branch root dan beradi. Astro build kerak bo'lgani uchun
**GitHub Actions** ga o'tkazing:

```yaml
# .github/workflows/deploy.yml
name: Deploy
on: { push: { branches: [main] } }
permissions: { contents: read, pages: write, id-token: write }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v6
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages }
    steps:
      - uses: actions/deploy-pages@v5
```

Pages manbasini o'zgartirish:
```bash
gh api -X PUT repos/XakimovNosirbek/multbilim/pages -f build_type=workflow
```

**`astro.config.mjs` da `base` shart:**
```js
site: 'https://xakimovnosirbek.github.io',
base: '/multbilim',
```
Barcha ichki havola va rasm yo'llari shu bazani hisobga olsin, aks holda
sayt 404 beradi. `package-lock.json` commit qilinsin.

---

## 7. Tekshirish (push'dan oldin)

AGENTS.md §5 dagi skriptlarni ishlating, ustiga:

```bash
npm run build            # xatosiz o'tsin
npx astro check          # tip xatolari
```

Build natijasida tekshiring:
- `dist/index.html`, `dist/ru/index.html`, `dist/en/index.html` bor
- `dist/loyihalar/alpomish/index.html` va qolgan 5 tasi bor
- `dist/html/index.html` — eski versiya
- `dist/sitemap-index.xml`
- Rasmlar `.avif` / `.webp` bo'lib chiqqan, umumiy hajm ~1,5 MB

Deploy'dan keyin:
```bash
gh api repos/XakimovNosirbek/multbilim/pages/builds/latest --jq '.status'
for p in "" ru/ en/ loyihalar/alpomish/ html/; do
  curl -s -o /dev/null -w "$p %{http_code}\n" "https://xakimovnosirbek.github.io/multbilim/$p"
done
```

---

## 8. Ishlash tartibi (tavsiya)

1. Eski versiyani `public/html/` ga ko'chiring va **o'sha zahotiyoq commit qiling** —
   shunda regressiya bo'lsa qaytish nuqtasi bor
2. Astro skeleti: config, package.json, layout, global.css (CSS'ni `index.html` dan
   to'liq ko'chiring, o'zgartirmang)
3. Ma'lumotlarni ajrating: `src/data/*.ts` va `src/content/projects/*.md`
4. Komponentlar: avval `ProjectCard`, `VideoCard`, `Card` — eng ko'p takrorlanadiganlari
5. Bosh sahifa yig'ilsin, `npm run build` bilan uz versiyasini tekshiring
6. Loyiha sahifalari (`[slug].astro`)
7. i18n: `i18n-seed.json` dan boshlang, yetishmaganini yozing
8. Rasm optimizatsiyasi
9. sitemap, robots, JSON-LD
10. Actions workflow, Pages manbasini almashtirish, deploy, tekshirish

Har bosqichdan keyin commit qiling. Commit xabari o'zbekcha, **`Co-Authored-By`
yoki AI atributsiyasi yozilmaydi** (qat'iy qoida).

---

## 9. Ish tugagach

`README.md` va `AGENTS.md` ni yangilang: yangi tuzilish, `npm run dev`/`build`
buyruqlari, i18n qanday qo'shilishi, rasm qanday qo'shilishi. Eski hujjatdagi
«build bosqichi yo'q» degan qoida endi eskirgan — uni almashtiring, lekin
`public/html/` uchun u hamon amal qilishini yozing.
