# MultBilim — studiya sayti

O'zbekistondagi **MultBilim** animatsiya studiyasi uchun sayt. **Astro**, uch tilda,
statik chiqish.

**Jonli:** https://xakimovnosirbek.github.io/multbilim/
**Oldingi (bir fayllik) versiya:** https://xakimovnosirbek.github.io/multbilim/html/

> **Holat: prototip.** Loyiha tasvirlari va tavsiflari studiyaning haqiqiy taqdimot
> hujjatlaridan olingan. Jamoa ismlari, vakansiyalar, aloqa manzillari va ba'zi
> raqamlar **namunaviy** — saytda ham shunday belgilangan.
> [Real ma'lumot bilan almashtirish](#real-malumot-bilan-almashtirish) bo'limiga qarang.

---

## Nima bu

Astro loyihasi. Build natijasi — 22 ta statik HTML: uch tilda bosh sahifa va 6 ta
loyiha sahifasi, plus 404. Server tomoni yo'q, JavaScript faqat interaktiv
elementlar uchun (tema, slayder, video, akkordeon, rasm ko'rgich) va u HTML ichiga
inline qo'yiladi.

`public/html/` ichidagi **eski bir fayllik versiya** o'zgarishsiz saqlanadi va
`/multbilim/html/` da ochiladi — taqqoslash va zaxira uchun. **Uning kodiga
tegilmaydi**, unga eski qoidalar amal qiladi (build yo'q, bitta fayl, nisbiy yo'llar).

### Nima o'zgardi

| | Eski versiya | Hozir |
|---|---|---|
| Takrorlanuvchi blok | 91 ta qo'lda | komponent + ma'lumot fayli |
| Loyiha manzili | yo'q (modal) | `/loyihalar/alpomish` — ulashiladi, indekslanadi |
| Tillar | faqat uz | `uz` · `/ru/` · `/en/`, har biri alohida HTML |
| Rasm | 49 JPEG, bitta o'lchamda | AVIF + WebP, `srcset` bilan |
| Bosh sahifa rasm yuki | 1,07 MB | **331 KB** (mobil) / **702 KB** (desktop) |
| sitemap · robots · JSON-LD | yo'q | bor |

O'lchov `dist` ustida, DPR = 1. Loyiha sahifasi 151–262 KB (html + css + js + rasm).

---

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:4321/multbilim/
npm run build      # -> dist/
npm run preview    # dist/ ni serverdan beradi
npm run check      # astro check: tip xatolari
```

`base` `/multbilim` bo'lgani uchun dev serverda ham manzil ost-yo'lda.

---

## Tuzilishi

```
multbilim/
├─ astro.config.mjs           site + base:'/multbilim', i18n, sitemap
├─ prune-unused-assets.mjs    build oxirida havolasiz rasmlarni o'chiradi
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ favicon.svg  robots.txt  .nojekyll
│  └─ html/                    ← ESKI VERSIYA (o'zgarishsiz)
│     ├─ index.html            butun sayt: markup + CSS + JS
│     └─ img/                  49 rasm
└─ src/
   ├─ assets/img/              49 rasm — astro:assets optimizatsiya qiladi
   ├─ content/projects/*.md    6 loyiha (frontmatter, zod bilan tekshiriladi)
   ├─ content.config.ts        loyiha sxemasi
   ├─ data/                    videos, services, process, tech, team,
   │                           careers, faq, stats, contact, site, projects
   ├─ i18n/{ui.ts, utils.ts}   interfeys matnlari va yo'l yasovchilar
   ├─ layouts/Base.astro       <head>, shapka, futer, hreflang, JSON-LD
   ├─ components/              Header, MobileNav, LangSwitch, Hero,
   │                           ProjectCard, VideoCard, Card, TeamMember,
   │                           Row, Faq, ContactForm, Footer, Lightbox,
   │                           SectionHead, Home, ProjectPage
   ├─ styles/global.css        barcha tokenlar va CSS
   └─ pages/
      ├─ index.astro           uz bosh sahifa
      ├─ loyihalar/[slug].astro
      ├─ ru/… va en/…          o'sha ikkisining tarjimasi
      └─ 404.astro
```

### Sahifa bo'limlari

| Anchor | Bo'lim |
|---|---|
| `#top` | Bosh ekran — 6 ta muqova aylanadi |
| `#studiya` | Studio manifesti |
| `#loyihalar` | 6 ta loyiha kartochkasi + statistika |
| `#tomosha` | Efirdagi 2 serial, 8 ta ichki video pleer |
| `#xizmatlar` · `#jarayon` · `#texnologiya` | 5 + 5 + 4 karta |
| `#jamoa` · `#karyera` | 4 kishi + 5 vakansiya (namunaviy) |
| `#savollar` · `#aloqa` | akkordeon + forma |

---

## Kontent qanday o'zgartiriladi

### Matn

Interfeys matnlari — `src/i18n/ui.ts`. Uchta blok bor: `uz` (manba), `ru`, `en`.
`ru` va `en` `Record<UiKey, string>` bo'lgani uchun **kalitni tushirib qoldirsangiz
`npm run check` tip xatosi beradi** — tarjima jimgina yo'qolmaydi.

Bo'lim ichidagi ma'lumot — `src/data/*.ts`. Har matn uch tilli:

```ts
title: { uz: "Ovoz va musiqa", ru: "Звук и музыка", en: "Sound and music" },
```

`i18n-seed.json` — 400 juftlik tarjima urug'i (`{"<uzbek>": ["<rus>", "<ingliz>"]}`),
oldingi versiyadan qolgan. Yangi matn qo'shsangiz shu yerda qidirib ko'ring.

### Yangi loyiha

`src/content/projects/<slug>.md` yarating. Sxema — `src/content.config.ts`; uch tilning
uchtasi ham majburiy, `palette` esa `global.css` dagi `.pd[data-pal="…"]` bloklaridan
biri bo'lishi kerak. Bo'lim ichidagi tartib qat'iy:

```
paragraflar → sitata → qahramonlar → qadriyatlar → galereya
```

Yangi palitra kerak bo'lsa, `global.css` ga `.pd[data-pal="x"]{--pa:…;--pbg:…;--pbg2:…;
--pfg:…;--pmut:…;--pln:…}` qo'shib, sxemadagi `z.enum` ga nom qo'shing. Loyiha
avtomatik ravishda bosh sahifa kartochkasiga, hero slayderiga, sitemapga va
oldingi/keyingi halqasiga tushadi.

### Rasm

`src/assets/img/` ga qo'ying va `.md` frontmatter'ida nisbiy yo'l bilan ko'rsating
(`../../assets/img/x.jpg`). `alt` uch tilda majburiy. **`public/` ga qo'ymang** — u
yerdagi rasm optimizatsiya qilinmaydi.

Manba o'lchamlari: muqova 1400px, personaj varag'i 860px, kadr 1000–1100px.
`widths` shundan oshmasin, aks holda cho'zilib xiralashadi.

### Video

`src/data/videos.ts` da `yt` (video ID), sarlavha va ko'rish soni. Ko'rish sonini
**taxmin qilmang** — kanallarning ochiq RSS'idan qayta oling:

```bash
curl -s "https://www.youtube.com/feeds/videos.xml?channel_id=UC-wrA-QvS7dwDO-bZZzDmPw"  # Bek va Lola
curl -s "https://www.youtube.com/feeds/videos.xml?channel_id=UCTKIXsv9PijMNmUZ8iPC7Lg"  # Yashil makon
```

Preview `i.ytimg.com/vi/<ID>/maxresdefault.jpg` (1280×720), HD yo'q bo'lsa `onerror`
orqali `hqdefault.jpg` ga tushadi. **`hqdefault` ni asosiy qilmang** — u 480×360 va
retinada xira. Pleer `youtube-nocookie.com` orqali va faqat bosilganda yuklanadi.

---

## Deploy

`main` ga push → GitHub Actions (`withastro/action`) quradi va Pages'ga chiqaradi.
Pages manbasi **workflow** (avvalgi «`main` branch root» emas).

```bash
git push origin main
gh run watch                                        # build jarayoni
gh api repos/XakimovNosirbek/multbilim/pages/builds/latest --jq '.status'
for p in "" ru/ en/ loyihalar/alpomish/ html/; do
  curl -s -o /dev/null -w "$p %{http_code}\n" "https://xakimovnosirbek.github.io/multbilim/$p"
done
```

`base: '/multbilim'` ni olib tashlash butun saytni 404 qiladi. `package-lock.json`
commit qilinadi — `npm ci` shuni talab qiladi.

### Chiqish hajmi haqida

`dist/` ~14 MB, lekin foydalanuvchi bunchani yuklamaydi:

- ~4,2 MB — `public/html/` dagi eski versiya (zaxira)
- ~9 MB — AVIF (2,3 MB) va WebP (6,7 MB) variantlar barcha nuqtalar uchun; brauzer
  bittasini oladi
- asl JPEG'lar `prune-unused-assets.mjs` tomonidan o'chiriladi: Vite ularni content
  collection importi tufayli chiqaradi, lekin hech kim havola qilmaydi (49 fayl, 4 MB)

### Muhim: repozitoriy ochiq bo'lishi shart

Bepul GitHub akkauntida Pages **faqat ochiq (public)** repodan ishlaydi. Ya'ni hali
chiqmagan loyihalarning konsept materiallari internetda ochiq turadi. Ko'rsatib
bo'lgach: `gh repo delete XakimovNosirbek/multbilim --yes`. Privat kerak bo'lsa —
GitHub Pro (~$4/oy).

---

## Dizayn tizimi

Ranglar logotipdan olingan (ko'k `#3774EA`, sariq `#FDE05A`), lekin **hex nusxa
ko'chirilmagan** — ton saqlanib, yorqinlik ekranda o'qilishi uchun sozlangan.
Logo sarig'i yorug' fonda 1,15:1 beradi, ya'ni ko'rinmaydi.

`src/styles/global.css` ning boshidagi 397 qator — eski `index.html` dan
ko'chirilgan; faqat 4 ta sarlavha selektori bir pog'ona ko'tarilgan
(`.pd-hi h1`, `.pd-sec > h2`, `.pdc h3` — loyiha sahifasida `h1` bo'lishi uchun,
`AGENTS.md` §4). Oxirida alohida belgilangan qo'shimcha blok bor (til
almashtirgich, `<img>` bo'lgan hero, futer havolasi, loyiha sahifasi).
Qo'shimcha blokda yangi rang, yangi shrift pog'onasi va yangi oltin yo'q.

### Tokenlar

| Token | Qorong'i | Yorug' | Vazifasi |
|---|---|---|---|
| `--page-bg` | `#060912` | `#f2f0ea` | fon (yorug'da iliq qog'oz) |
| `--page-text` | `#f7f8fb` | `#101621` | asosiy matn |
| `--muted` | `#9ba6b7` | `#626c7b` | ikkilamchi matn |
| `--line` | `rgba(255,255,255,.12)` | `rgba(14,21,32,.14)` | chegara |
| `--panel` | `rgba(255,255,255,.035)` | `rgba(13,22,36,.043)` | sirt |
| `--blue` | `#5B9BFF` | `#0f5fd6` | **asosiy urg'u** |
| `--gold` | `#ffc928` | `#7d5600` | **ta'kid, faqat 6 joyda** |

Tokenlar **to'rt blokda** e'lon qilinadi: `:root` (qorong'i), `@media
(prefers-color-scheme:light)`, `:root[data-theme="light"]`, `:root[data-theme="dark"]`.
**To'rttasini ham yangilash shart** — bittasini o'tkazib yuborsangiz, tema tugmasi
bilan almashtirilganda rang tushib qoladi.

### Kontrast (WCAG AA, o'lchangan)

| Juftlik | Nisbat |
|---|---|
| Asosiy matn / fon (qorong'i) | 18,73:1 ✅ |
| Asosiy matn / fon (yorug') | 15,90:1 ✅ |
| Muted / fon (qorong'i) | 8,08:1 ✅ |
| Muted / fon (yorug') | 4,66:1 ✅ |
| Ko'k / fon (qorong'i) | 7,18:1 ✅ |
| Ko'k / fon (yorug') | 5,08:1 ✅ |
| Oltin / fon (qorong'i) | 12,92:1 ✅ |
| Oltin / fon (yorug') | 5,75:1 ✅ |

**Yiqilgan juftlik yo'q.** Rangni o'zgartirsangiz qayta o'lchang — `AGENTS.md` da
skript bor.

### Oltin faqat 6 joyda

1. `.logo .mark::after` — logotipdagi nuqta
2. `.logo .l1` — MULT so'zi
3. `.hero h1 span:nth-child(2)` — bosh sarlavhadagi bitta so'z
4. `.big em` — manifestdagi ta'kid
5. `.dots button[aria-current]` — faol slayd
6. `.vcard.playing` — hozir o'ynayotgan video ramkasi

Boshqa hamma joyda **ko'k**.

### Tipografika

Veb-shrift yo'q — `ui-sans-serif, system-ui`. **Shkala — 8 pog'ona, boshqa qiymat
qo'shilmaydi:** `11 · 12 · 13 · 14 · 16 · 17 · 19 · 22` (+ katta sarlavhalar `clamp()`).
Forma maydonlari 16px — iOS Safari fokusda sahifani kattalashtirmaydi.
**Bo'shliq:** `4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 24 · 28 · 40`.

---

## Foydalanish qulayligi

Quyidagilar sinovdan o'tgan va **buzilmasligi kerak**:

- Teginish nishonlari: shapka tugmalari 44×44, slayd nuqtalari 24×24 (WCAG 2.5.8),
  til almashtirgich 30×51 (mobilda menyu ichida 44×44)
- Forma maydonlari 16px · `:focus-visible` · `prefers-reduced-motion` · skip-link
- Barcha rasmda `alt` (hero slaydlari bezak — `aria-hidden` konteyner ichida bo'sh `alt`)
- Rang yagona signal emas — faol slayd nuqtasi **kengligi** bilan ham ajraladi
- Mobil menyu: orqa fon `inert` + `aria-hidden`, `Esc` yopadi
- Rasm ko'rgich: `Esc`, fokus qaytishi, `aria-modal`, Tab halqasi, `←` `→`
- `minmax(min(320px,100%),1fr)` — 320px ekranda toshmaydi
- `env(safe-area-inset-*)` 7 joyda, `viewport-fit=cover` bilan birga

---

## Kontent manbalari

### Rasmlar

`Desktop\MultBilim\` papkasidagi 6 ta PDF taqdimotdan **PyMuPDF** bilan ajratilgan,
so'ng web uchun siqilgan (progressive JPEG):

| PDF | Sahifa | Olingan |
|---|---|---|
| Alpomish.pdf | 9 | muqova + 4 personaj + qadriyatlar |
| IkkiDunyo.pdf | 17 | muqova + 3 personaj + 4 kadr |
| Zij.pdf | 10 | muqova + 3 personaj + 5 kadr |
| Megavoylar.pdf | 16 | muqova + 6 personaj + 2 kadr |
| SehirliQalpoqcha.pdf | 12 | muqova + 6 personaj + 2 kadr |
| MevaCheva.pdf | 24 | muqova + 5 personaj + 2 kadr |

```python
import pymupdf
from PIL import Image
doc = pymupdf.open("Alpomish.pdf"); p = doc[0]
m = pymupdf.Matrix(1400/p.rect.width, 1400/p.rect.width)
pix = p.get_pixmap(matrix=m)
Image.frombytes('RGB', (pix.width, pix.height), pix.samples) \
     .save("src/assets/img/cov-alpomish.jpg", quality=74, optimize=True, progressive=True)
```

Bir xil rasm ikki joyda turadi: `src/assets/img/` (yangi sayt, optimizatsiya qilinadi)
va `public/html/img/` (eski versiya, o'zgarishsiz). Eski versiya nisbiy yo'l bilan
o'qigani uchun boshqa yo'l yo'q.

### YouTube raqamlari

Ikki kanalning **ochiq RSS** feed'idan olingan (2026-08-12). Har kanalning
**oxirgi 15 chiqishi** qamrab olingan — kanal jami undan yuqori.

---

## Real ma'lumot bilan almashtirish

| Nima | Qayerda | Nima kerak |
|---|---|---|
| Jamoa (4 ism) | `src/data/team.ts` | Haqiqiy ismlar, lavozimlar, portretlar |
| Vakansiyalar (5 ta) | `src/data/careers.ts` | Ochiq o'rinlar bor-yo'qligi |
| Email manzillar | `src/data/site.ts` | `@multbilim.uz` — haqiqiy domen |
| «40+ ijodiy mutaxassis» | `src/data/stats.ts` | Aniq son |
| Savol-javob | `src/data/faq.ts` | Studiyaning javoblari |
| Loyiha bosqichlari | `src/content/projects/*.md` → `cardMeta`, `badges` | Qaysi biri ssenariyda / animatikda |
| Ofis manzili | `src/i18n/ui.ts` → `contact.studio*` | To'liq manzil, telefon |

Almashtirilgach «namunaviy» yozuvlarini ham olib tashlang: `ui.ts` dagi
`projects.note`, `team.lede`, `team.placeholder`, `careers.lede`, `contact.note`,
`footer.disclaimer`.

---

## Brauzer qo'llab-quvvatlashi

Zamonaviy brauzerlar (2023+): `clamp()` · `aspect-ratio` · `:focus-visible` ·
`backdrop-filter` · `grid-template-rows: 0fr→1fr` · `100svh` ·
`IntersectionObserver` · `localStorage` · **AVIF** (fallback WebP).

JavaScript o'chirilgan bo'lsa: butun kontent, uch til, barcha loyiha sahifalari va
slayd nuqtalari ko'rinadi; faqat slayd almashishi, video pleer, akkordeon, rasm
ko'rgich, tema tugmasi va mobil menyu ishlamaydi.

---

## Keyingi bosqich

1. **CMS** (Sanity yoki Payload) — xodimlar kontentni o'zi to'ldiradi, admin o'zbekcha
2. **eskiz.uz VPS** — TAS-IX orqali O'zbekistonda tez ochiladi. GitHub Pages Fastly
   CDN orqali beriladi, O'zbekistonda serveri yo'q
3. **Aloqa formasi** — hozir `mailto:` ochadi; server tomoni yoki Formspree kerak
4. Ru/en uchun til bo'yicha manzil segmentlari (`/ru/proekty/…`) — hozir uch tilda
   ham `loyihalar/` ishlatiladi

Qarorlarning sabablari: `AGENTS.md`.
