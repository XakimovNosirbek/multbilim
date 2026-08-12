# MultBilim — studiya sayti

O'zbekistondagi **MultBilim** animatsiya studiyasi uchun bir sahifali sayt.

**Jonli:** https://xakimovnosirbek.github.io/multbilim/

> **Holat: prototip.** Loyiha tasvirlari va tavsiflari studiyaning haqiqiy taqdimot
> hujjatlaridan olingan. Jamoa ismlari, vakansiyalar, aloqa manzillari va ba'zi
> raqamlar **namunaviy** — saytda ham shunday belgilangan.
> [Real ma'lumot bilan almashtirish](#real-malumot-bilan-almashtirish) bo'limiga qarang.

---

## Nima bu

Statik sayt. **Build bosqichi yo'q, bog'liqliklar yo'q, paket menejeri yo'q.**
`index.html` — bitta fayl, ichida butun CSS va JS. GitHub Pages uni to'g'ridan-to'g'ri
`main` branchdan beradi.

Nega shunday: sayt vaqtinchalik, studiya egalariga ko'rsatish uchun. Build quvuri
qo'shish uni tezlashtirmaydi, faqat murakkablashtiradi. Doimiy versiya uchun
[Keyingi bosqich](#keyingi-bosqich) ga qarang.

### O'lchamlar

| | |
|---|---|
| `index.html` | ~75 KB (CSS va JS ichida) |
| Rasmlar | 49 ta fayl, ~4 MB |
| Veb-shrift | **yo'q** — tizim shrifti ishlatiladi |
| Tashqi so'rov | faqat YouTube (preview rasmi + pleer) |
| Yuklanish | ~0,65 s |

---

## Tuzilishi

```
multbilim/
├─ index.html      butun sayt: markup + CSS + JS
├─ favicon.svg     ko'k kvadrat, MULT/BILIM harflari
├─ .nojekyll       GitHub Pages Jekyll'ni o'tkazib yuborsin
├─ README.md       shu fayl
├─ AGENTS.md       AI agentlar uchun ish qoidalari
└─ img/            49 ta rasm, PDF taqdimotlardan ajratilgan
   ├─ cov-*.jpg    6 ta loyiha muqovasi (1400px)
   ├─ a-*.jpg      Alpomish personajlari
   ├─ i-*.jpg      Ikki Dunyo personajlari
   ├─ z-*.jpg      Zij personajlari va kadrlari
   ├─ m-*.jpg      Megavoylar personajlari
   ├─ q-*.jpg      Sehrli Qalpoqcha personajlari
   ├─ v-*.jpg      Meva-Cheva personajlari
   └─ st-*.jpg     umumiy kadrlar (portal, rasadxona, jamoa...)
```

### Sahifa bo'limlari

| Anchor | Bo'lim |
|---|---|
| `#top` | Bosh ekran — 6 ta muqova aylanadi |
| `#studiya` | Studio manifesti — «Animatsiya bu chizish emas» |
| `#loyihalar` | 6 ta loyiha kartochkasi + statistika |
| `#tomosha` | Efirdagi 2 serial, 8 ta ichki video pleer |
| `#xizmatlar` | 5 ta xizmat |
| `#jarayon` | 5 bosqich |
| `#texnologiya` | 4 ta pipeline yo'nalishi |
| `#jamoa` | 4 kishi (namunaviy) |
| `#karyera` | 5 vakansiya (namunaviy) |
| `#savollar` | 6 savol-javob, akkordeon |
| `#aloqa` | Forma + bo'limlar |

Har loyiha kartochkasi bosilganda **to'liq ekranli ichki sahifa** ochiladi
(`#pd-alpomish`, `#pd-ikkidunyo`, `#pd-zij`, `#pd-megavoylar`, `#pd-qalpoqcha`,
`#pd-mevacheva`) — har biri o'z rang uslubida.

---

## Lokal ishga tushirish

`file://` bilan ochsangiz ham ishlaydi, lekin to'g'ri tekshirish uchun HTTP server:

```bash
cd multbilim
python -m http.server 8000
# → http://localhost:8000
```

---

## Deploy

`main` branchga push qilish yetarli. GitHub Pages avtomatik qayta quradi (~30 soniya).

```bash
git add -A
git commit -m "O'zgarish tavsifi"
git push origin main
```

Tekshirish:

```bash
gh api repos/XakimovNosirbek/multbilim/pages/builds/latest --jq '.status'
curl -s -o /dev/null -w "%{http_code}\n" https://xakimovnosirbek.github.io/multbilim/
```

### Muhim: repozitoriy ochiq bo'lishi shart

Bepul GitHub akkauntida Pages **faqat ochiq (public)** repodan ishlaydi. Ya'ni hali
chiqmagan loyihalarning konsept materiallari internetda ochiq turadi.

Ko'rsatib bo'lgach:

```bash
gh repo delete XakimovNosirbek/multbilim --yes
```

Privat saqlash kerak bo'lsa — GitHub Pro (~$4/oy).

---

## Dizayn tizimi

Ranglar logotipdan olingan (ko'k `#3774EA`, sariq `#FDE05A`), lekin **hex nusxa
ko'chirilmagan** — ton saqlanib, yorqinlik ekranda o'qilishi uchun sozlangan.
Logo sarig'i yorug' fonda 1,15:1 beradi, ya'ni ko'rinmaydi.

### Tokenlar

| Token | Qorong'i | Yorug' | Vazifasi |
|---|---|---|---|
| `--page-bg` | `#060912` | `#f2f0ea` | fon (yorug'da iliq qog'oz) |
| `--page-text` | `#f7f8fb` | `#101621` | asosiy matn |
| `--muted` | `#9ba6b7` | `#626c7b` | ikkilamchi matn |
| `--line` | `rgba(255,255,255,.12)` | `rgba(14,21,32,.14)` | chegara |
| `--panel` | `rgba(255,255,255,.035)` | `rgba(13,22,36,.043)` | sirt |
| `--blue` | `#5B9BFF` | `#0f5fd6` | **asosiy urg'u** |
| `--gold` | `#ffc928` | `#7d5600` | **ta'kid, faqat 5 joyda** |

Uchta joyda e'lon qilinadi: `:root`, `@media (prefers-color-scheme:light)` +
`:root[data-theme="light"]`, `:root[data-theme="dark"]`. **Uchalasini ham
yangilash shart**, aks holda tugma bilan almashtirilganda rang tushib qoladi.

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

### Oltin faqat 5 joyda

Kam ishlatilgani uchun kuchli. Yangi oltin qo'shsangiz, u ta'kid bo'lishdan to'xtaydi:

1. `.logo .mark::after` — logotipdagi nuqta
2. `.logo .l1` — MULT so'zi
3. `.hero h1 span:nth-child(2)` — bosh sarlavhadagi bitta so'z
4. `.big em` — manifestdagi ta'kid
5. `.dots button[aria-current]` — faol slayd
6. `.vcard.playing` — hozir o'ynayotgan video ramkasi

Boshqa hamma joyda **ko'k**.

### Tipografika

Veb-shrift yo'q — `ui-sans-serif, system-ui`. Har OS o'z shriftini beradi
(macOS: SF Pro, Windows: Segoe UI, Android: Roboto). 122 KB tejaydi, matn darrov chiqadi.

**Shkala — 8 pog'ona, boshqa qiymat qo'shilmaydi:**

```
11px  micro yorliqlar
12px  eyebrow, k-yorliqlar
13px  kichik matn, meta
14px  ikkilamchi matn
16px  forma maydonlari (iOS zoom chegarasi)
17px  asosiy matn
19px  kichik sarlavha
22px  logotip
```

Katta sarlavhalar `clamp()` bilan.
**Qatorlar orasi:** `.86` `1` `1.06` (display), `1.3` `1.5` `1.6` (matn).
**Matn kengligi:** 45–75 belgi, eng uzuni 78ch.

### Bo'shliq

4pt shkalasiga yaqin: `4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 24 · 28 · 40`.
`1px` va `2px` faqat hairline chegaralar uchun.

---

## Foydalanish qulayligi

Quyidagilar sinovdan o'tgan va **buzilmasligi kerak**:

- Teginish nishonlari: shapka tugmalari 44×44, slayd nuqtalari 24×24 (WCAG 2.5.8)
- Forma maydonlari 16px — iOS Safari fokusda sahifani kattalashtirmaydi
- `:focus-visible` — klaviatura bilan yurish ko'rinadi
- `prefers-reduced-motion` — barcha animatsiya o'chadi
- Skip-link — menyuni aylanib o'tish
- 49 ta rasmning hammasida `alt`
- Rang yagona signal emas — faol slayd nuqtasi **kengligi** bilan ham ajraladi
- Modal va lightbox: `Esc`, fokus qaytishi, `aria-modal`
- Lightbox'da `←` `→` klavishlari

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

Muqovalar 1400px / sifat 74 · personaj varaqlari 860px / 68 · kadrlar 1000–1100px / 70–72.

```python
import pymupdf
from PIL import Image
doc = pymupdf.open("Alpomish.pdf"); p = doc[0]
m = pymupdf.Matrix(1400/p.rect.width, 1400/p.rect.width)
pix = p.get_pixmap(matrix=m)
Image.frombytes('RGB', (pix.width, pix.height), pix.samples) \
     .save("img/cov-alpomish.jpg", quality=74, optimize=True, progressive=True)
```

### YouTube raqamlari

Ikki kanalning **ochiq RSS** feed'idan olingan (2026-08-12). Har kanalning
**oxirgi 15 chiqishi** qamrab olingan — kanal jami undan yuqori.

```bash
curl -s "https://www.youtube.com/feeds/videos.xml?channel_id=UC-wrA-QvS7dwDO-bZZzDmPw"  # Bek va Lola
curl -s "https://www.youtube.com/feeds/videos.xml?channel_id=UCTKIXsv9PijMNmUZ8iPC7Lg"  # Yashil makon
```

Preview rasmlari `i.ytimg.com/vi/<ID>/maxresdefault.jpg` (1280×720). Agar video HD
yuklanmagan bo'lsa `onerror` orqali `hqdefault.jpg` ga tushadi. **`hqdefault` ni
asosiy qilib qo'ymang** — u 480×360 va retina ekranda xira ko'rinadi.

Pleer `youtube-nocookie.com` orqali va faqat bosilganda yuklanadi: sahifa ochilishida
8 ta iframe ~2 MB bo'lardi, hozir esa faqat preview rasmi.

---

## Real ma'lumot bilan almashtirish

| Nima | Qayerda | Nima kerak |
|---|---|---|
| Jamoa (4 ism) | `#jamoa` | Haqiqiy ismlar, lavozimlar, portretlar |
| Vakansiyalar (5 ta) | `#karyera` | Ochiq o'rinlar bor-yo'qligi |
| Email manzillar | `#aloqa`, footer | `@multbilim.uz` — haqiqiy domen |
| «40+ ijodiy mutaxassis» | statistika | Aniq son |
| Loyiha bosqichlari | kartochka meta | Qaysi biri ssenariyda / animatikda |
| Ofis manzili | `#aloqa` | To'liq manzil, telefon |

Almashtirilgach «namunaviy» yozuvlarini ham olib tashlang: `.note` (2 joy),
`.mate small` (4 joy), `#jamoa .lede`, `#karyera .lede`, footer `.fnote2`.

---

## Brauzer qo'llab-quvvatlashi

Zamonaviy brauzerlar (2023+):
`clamp()` · `aspect-ratio` · `:focus-visible` · `backdrop-filter` ·
`grid-template-rows: 0fr→1fr` · `100svh` · `IntersectionObserver` · `localStorage`

JavaScript o'chirilgan bo'lsa: butun kontent ko'rinadi, faqat modal, lightbox,
video pleer va tema tugmasi ishlamaydi.

---

## Keyingi bosqich

1. **Astro** ga ko'chirish — komponentlar, `astro:assets` rasm optimizatsiyasi
2. **CMS** (Sanity yoki Payload) — xodimlar kontentni o'zi to'ldiradi, admin o'zbekcha
3. **uz / ru / en** — Astro tug'ma i18n (`/uz/`, `/ru/`, `/en/`)
4. **eskiz.uz VPS** — TAS-IX orqali O'zbekistonda tez ochiladi. GitHub Pages Fastly
   CDN orqali beriladi, O'zbekistonda serveri yo'q.
5. **Aloqa formasi** — hozir `mailto:` ochadi; server tomoni yoki Formspree kerak

Qarorlarning sabablari: `AGENTS.md`.
