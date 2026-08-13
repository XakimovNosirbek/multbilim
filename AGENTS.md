# AGENTS.md

Bu repoda ishlaydigan AI agentlar uchun ko'rsatma. Odam uchun umumiy ma'lumot —
`README.md` da.

---

## 1. Loyiha nima va nima emas

**Nima:** MultBilim animatsiya studiyasi uchun **Astro** sayti — uch tilda, statik
chiqish, GitHub Actions orqali Pages'ga. Maqsad — studiya egalariga ko'rsatish va
fikr olish.

**Nima emas:** bu hali ham produksiya sayti emas — kontentning bir qismi namunaviy
(§7). SSR, ma'lumotlar bazasi, autentifikatsiya, tahlil skriptlari qo'shmang.

**Ikki qism, ikki xil qoida:**

| | Yangi sayt (`src/`) | Eski versiya (`public/html/`) |
|---|---|---|
| Build | Astro, `npm run build` | yo'q — fayl qanday bo'lsa shunday beriladi |
| Tuzilishi | komponentlar, `src/data`, `src/content` | bitta `index.html`, CSS `<style>` da |
| Yo'llar | `base` bilan (`/multbilim/…`) | nisbiy (`img/x.jpg`) |
| Tegish | ishlaymiz | **tegilmaydi** |

`public/html/` — audit qilingan va tasdiqlangan holat, zaxira va taqqoslash uchun
turadi. Uni «yaxshilash» kerak emas.

---

## 2. Buzilmaydigan qoidalar

| Qoida | Sabab |
|---|---|
| **`base: '/multbilim'`** | Sayt ost-yo'lda. Olib tashlansa butun sayt 404. Ichki havola `getRelativeLocaleUrl` / `src/i18n/utils.ts` orqali, qo'lda `/…` yozilmaydi. |
| **Veb-shrift yo'q** | Ataylab. `@font-face`, Google Fonts, CDN link qo'shmang. Tizim shrifti ishlatiladi. |
| **Tashqi bog'liqlik yo'q** | Yagona istisno — YouTube (`i.ytimg.com` preview, `youtube-nocookie.com` pleer). jQuery, GSAP, Tailwind, analytics — yo'q. |
| **Rasm `src/assets/img/` da** | `public/` dagi rasm optimizatsiya qilinmaydi. Base64 data URI qilmang. |
| **Uch tilning uchtasi ham** | `zod` va `Record<UiKey,string>` shuni majburlaydi. Tarjimasiz matn qo'shilsa build yiqiladi — bu ataylab. |
| **`public/html/` o'zgarmaydi** | Audit qilingan holat. |

---

## 3. Dizayn tizimi — o'zgartirishdan oldin o'qing

`src/styles/global.css` **ikki qismdan** iborat:

1. 1–397 qator — eski `index.html` dan ko'chirilgan. **Faqat 4 ta selektor**
   o'zgargan: loyiha sahifasida sarlavha darajalari bir pog'ona ko'tarildi
   (`.pd-hi h1`, `.pd-sec > h2`, `.pd-sec > h2::after`, `.pdc h3`) — sabab §4 da.
   Deklaratsiyalar o'zgarmagan
2. oxiridagi `═══` bilan belgilangan blok — Astro'ga ko'chirishda qo'shilgan

Qo'shimcha blokda yangi rang, yangi shrift pog'onasi va yangi oltin **yo'q**. Shu
qoidani saqlang: yangi CSS faqat o'sha blokga va faqat mavjud tokenlar bilan.

### Ranglar

Faqat mavjud tokenlarni ishlating. **Yangi rang o'ylab topmang.**

```
--page-bg  --page-text  --muted  --line  --line-2
--panel  --panel-2  --header-bg  --btn-bg  --btn-text
--blue   (asosiy urg'u)
--gold   (ta'kid — faqat 6 joyda)
```

Loyiha sahifalarining palitrasi alohida: `.pd[data-pal="…"]` → `--pa --pbg --pbg2
--pfg --pmut --pln`. Loyiha ichida global tokenlar emas, shular ishlatiladi.

Tokenlar **to'rt blokda** e'lon qilingan:

1. `:root` — qorong'i (asosiy)
2. `@media (prefers-color-scheme:light) { :root:not([data-theme="dark"]) }`
3. `:root[data-theme="light"]`
4. `:root[data-theme="dark"]`

**Rangni o'zgartirsangiz to'rttasini ham yangilang.** Bittasini o'tkazib yuborsangiz,
tema tugmasi bilan almashtirilganda rang tushib qoladi va matn ko'rinmay qolishi mumkin.

### Oltin kvotasi

`var(--gold)` **aynan 6 marta**: `.logo .mark::after` · `.logo .l1` ·
`.hero h1 span:nth-child(2)` · `.big em` · `.dots button[aria-current]` ·
`.vcard.playing` (ramka).

Oltinning yagona vazifasi — **brend belgisi va faol/ta'kidlangan element**.
Interaktiv yoki strukturaviy element uchun **har doim `--blue`**.

### Shrift shkalasi

**Aynan 8 pog'ona.** Yangi qiymat (`15px`, `18px`, `13.5px`) qo'shmang:

```
11 · 12 · 13 · 14 · 16 · 17 · 19 · 22
```

Katta sarlavhalar `clamp(min, vw, max)` bilan. Forma maydonlari **16px dan past
bo'lmasin** — iOS Safari fokusda sahifani kattalashtiradi va layout buziladi.

### Bo'shliq

`4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 24 · 28 · 40`. Toq qiymat (5, 7, 9, 11) qo'shmang.
`1px` va `2px` faqat hairline chegara/grid uchun.

---

## 4. Buzilmasligi kerak bo'lgan a11y invariantlari

- **Har sahifada aynan bitta `<h1>`, daraja sakramaydi.** Eski versiyada loyiha
  tafsiloti modal edi va sahifaning `h1` i hero'da turardi, shuning uchun modal
  ichida `h2 → h3 → h4` ishlatilgan. Alohida sahifada `h1` yo'q qolardi —
  shu sababli loyiha sahifasida darajalar bir pog'ona ko'tarilgan:
  `h1` (loyiha nomi) → `h2` (bo'lim) → `h3` (qahramon). CSS selektorlari ham
  shunga moslangan. Tekshiruv: §5 dagi sarlavha skripti
- Teginish nishoni: interaktiv element **≥ 24×24px** (WCAG 2.5.8), shapka
  tugmalari 44×44, til almashtirgich 30×51 (mobil menyuda 44×44)
- Forma maydoni ≥ 16px
- Har `<img>` da `alt`. Bezak rasmda bo'sh `alt` — Astro uni `alt` (qiymatsiz)
  qilib chiqaradi, bu HTML5 da `alt=""` bilan bir xil
- Matnli bo'lmagan tugmada `aria-label`
- `:focus-visible` uslubi saqlanadi
- `@media (prefers-reduced-motion:reduce)` bloki saqlanadi. **`.pd .st` uchun
  `opacity:1` qaytarish shart** — bo'lmasa animatsiya o'chirilganda loyiha sahifasi
  bo'sh ko'rinadi
- Mobil menyu ochilganda orqa fon (`#main`, `footer`) `inert` + `aria-hidden`
- Rasm ko'rgich: `Esc` yopadi, fokus chaqirgan elementga qaytadi, Tab halqasi
  ko'rgich ichida qoladi, `←` `→` ishlaydi
- Rang **yagona signal bo'lmasin** — faol slayd nuqtasi kengayadi ham
- `minmax(min(320px,100%),1fr)` — oddiy `minmax(320px,1fr)` 320px ekranda toshadi
- `env(safe-area-inset-*)` 7 joyda, `viewport-fit=cover` bilan birga

---

## 5. Tekshirish skriptlari

O'zgarish kiritgandan keyin **push qilishdan oldin** ishga tushiring.

### Majburiy minimum

```bash
npm run check     # astro check — 0 xato, 0 ogohlantirish, 0 maslahat bo'lishi kerak
npm run build     # 22 sahifa qurilishi kerak
```

### Dizayn invariantlari

```bash
grep -o 'var(--gold)' src/styles/global.css | wc -l    # 6
grep -o 'var(--cyan)' src/styles/global.css | wc -l   # 0 — cyan olib tashlangan
grep -o 'font-size:[0-9.]*px' src/styles/global.css | sort -u   # 8 pog'ona
grep -o 'env(safe-area-inset' src/styles/global.css | wc -l   # 7 (grep -c qatorni sanaydi, 5 chiqadi)
```

### Markup butunligi (build'dan keyin)

```python
import re, io, glob, sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
for f in glob.glob('dist/**/*.html', recursive=True):
    if '/html/' in f.replace('\\','/'): continue          # eski versiya
    h = io.open(f, encoding='utf-8').read()
    for t in ['html','head','body','div','section','a','span','p','h1','h2','h3','h4',
              'article','aside','form','label','select','option','textarea','button',
              'ul','li','nav','header','footer','main','svg','picture','i','b','em','small']:
        o = len(re.findall(r'<'+t+r'[\s>]', h)); c = h.count('</'+t+'>')
        if o != c: print(f'{f} MISMATCH <{t}>: {o} vs {c}')
    ids = re.findall(r'\sid="([^"]+)"', h)
    d = {i for i in ids if ids.count(i) > 1}
    if d: print(f'{f} dupe id: {d}')
    miss = sorted(set(re.findall(r'href="#([\w-]+)"', h)) - set(ids))
    if miss: print(f'{f} yechilmagan anchor: {miss}')
    n = len(re.findall(r'<img(?![^>]*\salt[=\s>])[^>]*>', h))
    if n: print(f'{f} altsiz img: {n}')
```

### Sarlavha ierarxiyasi

Har sahifada bitta `h1` va daraja sakramasligi kerak (futerdagi `.fcols h4`
sakrashi eski versiyadan meros — u hisobga olinmaydi).

```python
import glob, io, os, re, sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
for p in sorted(glob.glob('dist/**/*.html', recursive=True)):
    if '/html/' in p.replace(os.sep, '/'): continue
    h = re.sub(r'<script.*?</script>', ' ', io.open(p, encoding='utf-8').read(), flags=re.S)
    lv = [int(m.group(1)) for m in re.finditer(r'<h([1-6])[\s>]', h)]
    skips = [(lv[i], lv[i+1]) for i in range(len(lv)-1) if lv[i+1]-lv[i] > 1 and lv[i+1] != 4]
    if lv.count(1) != 1 or skips:
        print(f'MUAMMO {p}: h1={lv.count(1)} sakrash={skips}')
```

### Tarjima to'liqligi

```bash
# ma'lumot fayllarida bo'sh tarjima qolmasin
grep -rnE 'ru: ""|en: ""' src/data src/content && echo "BO'SH TARJIMA BOR" || echo ok
```

`src/i18n/ui.ts` uchun alohida skript kerak emas — `npm run check` kalit tushib
qolsa tip xatosi beradi.

### Kontrast (WCAG)

Ranglar o'zgarsa qayta o'lchang.

```python
def lum(x):
    x=x.lstrip('#'); r,g,b=[int(x[i:i+2],16)/255 for i in (0,2,4)]
    f=lambda c: c/12.92 if c<=0.04045 else ((c+0.055)/1.055)**2.4
    return .2126*f(r)+.7152*f(g)+.0722*f(b)
def cr(a,b):
    la,lb=lum(a),lum(b); hi,lo=max(la,lb),min(la,lb); return (hi+.05)/(lo+.05)

# matn uchun >= 4.5, katta matn va UI element uchun >= 3.0
for a,b,label in [('#f7f8fb','#060912','matn/qorongi'), ('#9ba6b7','#060912','muted/qorongi'),
                  ('#5B9BFF','#060912','kok/qorongi'),  ('#ffc928','#060912','oltin/qorongi'),
                  ('#101621','#f2f0ea','matn/yorug'),   ('#626c7b','#f2f0ea','muted/yorug'),
                  ('#0f5fd6','#f2f0ea','kok/yorug'),    ('#7d5600','#f2f0ea','oltin/yorug')]:
    r=cr(a,b); print(f'{label:16} {r:5.2f}:1 {"OK" if r>=4.5 else "FAIL"}')
```

### Jonli tekshiruv (push'dan keyin)

```bash
gh run watch
gh api repos/XakimovNosirbek/multbilim/pages/builds/latest \
  --jq '"\(.status) \(.commit[0:7]) \(.error.message // "")"'
for p in "" ru/ en/ loyihalar/alpomish/ html/; do
  curl -s -o /dev/null -w "$p %{http_code}\n" "https://xakimovnosirbek.github.io/multbilim/$p"
done
```

Actions build ~1 daqiqa oladi. Darrov tekshirmang.

---

## 6. Muhit tuzoqlari

### GitHub CLI shu mashinada oddiy usulda ishlamaydi

`gh auth login` tokenni Windows Credential Manager'ga yozadi, u esa buzuq —
`hosts.yml` da `oauth_token` maydoni umuman paydo bo'lmaydi va `gh auth status`
"token is invalid" deydi.

**Ishlaydigan buyruq:**

```bash
gh auth logout -h github.com -u XakimovNosirbek
gh auth login --hostname github.com --git-protocol https --web \
  --scopes repo,workflow --insecure-storage
```

Config yo'li: `C:\Users\user\AppData\Roaming\GitHub CLI\hosts.yml`
(`~/.config/gh` **emas**).

### PowerShell bilan loyiha tashqarisiga yozmang

Bu muhitda PowerShell orqali loyiha katalogidan tashqariga yozish **jim yo'qoladi**.
Fayl yozish uchun `Write`/`Edit` asboblarini yoki Bash'ni ishlating.
PowerShell — faqat o'qish va build uchun.

### Bash heredoc va regexdagi teskari chiziq

`python - <<'PY'` ichida `\\` bir `\` ga aylanib ketadi va regex buziladi
(`[^"\\]` → `[^"\]` → PatternError). Regexda `\\` kerak bo'lsa skriptni `Write`
asbobi bilan faylga yozib, so'ng ishga tushiring.

### Konsol kodlashi

Windows konsoli cp1251 — kirill va `—` belgilar `?` bo'lib chiqadi. Bu **displey
artefakti**, fayl UTF-8 da to'g'ri. Skriptda:
`sys.stdout.reconfigure(encoding='utf-8', errors='replace')`.

---

## 7. Kontent halolligi — eng muhim qoida

Saytda **haqiqiy** va **namunaviy** ma'lumot aralash. Ularni chalkashtirmang.

### Haqiqiy (o'zgartirmang, tekshirmasdan tuzatmang)

- 6 ta loyihaning nomi, janri, sinopsisi, personajlari — studiyaning PDF
  taqdimotlaridan olingan
- Barcha 49 rasm — o'sha PDF'lardan
- YouTube video ID'lari, sarlavhalari, ko'rish sonlari va sanalari — kanallarning
  ochiq RSS feed'idan (2026-08-12, har kanalning oxirgi 15 chiqishi)
- Studiya nomi va logotip ranglari

### Namunaviy (saytda shunday belgilangan)

| Nima | Fayl |
|---|---|
| Jamoa: Aziza Karimova, Sardor Rahimov, Madina Usmonova, Kamol Nurmatov | `src/data/team.ts` |
| 5 ta vakansiya | `src/data/careers.ts` |
| `hello@`, `loyiha@`, `karyera@multbilim.uz` | `src/data/site.ts` |
| «40+ ijodiy mutaxassis» | `src/data/stats.ts` |
| Savol-javob javoblari | `src/data/faq.ts` |
| Ofis manzili | `src/i18n/ui.ts` → `contact.studio*` |

**Namunaviy ma'lumotni haqiqiy deb ko'rsatmang.** Yorliqlarni (`team.placeholder`,
`projects.note`, `contact.note`, `team.lede`, `careers.lede`, `footer.disclaimer`)
o'z ixtiyoringiz bilan olib tashlamang — faqat foydalanuvchi real ma'lumot
bergandan keyin.

JSON-LD ga namunaviy ma'lumot **qo'shilmadi** (email, ofis manzili): strukturaviy
ma'lumotda «namunaviy» izohini ko'rsatib bo'lmaydi. Shu qoidani saqlang.

Yangi ma'lumot o'ylab topsangiz, uni ham belgilang.

---

## 8. Commit uslubi

- **`Co-Authored-By` yoki AI atributsiyasi YOZILMAYDI.** Bu qat'iy qoida.
- Xabar o'zbek tilida
- Birinchi qator — nima o'zgargani, 60 belgigacha
- So'ng bo'sh qator va bulletlar: nima va **nega**

Namuna:

```
Tipografika va o'lchamlar UI/UX me'yorlariga keltirildi

- Shrift shkalasi: 16 ta tasodifiy qiymat -> 8 pog'ona
- Forma maydonlari 15.5 -> 16px: iOS'da fokusda sahifa
  kattalashib ketishining oldini oladi
- Slayd nuqtasi teginish nishoni 24x3px edi -> 24x24px (WCAG 2.5.8)
```

---

## 9. Nima uchun shunday qilingan

Qaror qayta ko'rib chiqilishidan oldin sababini biling.

**Nega veb-shrift yo'q?** Referens sifatida olingan sayt ham tizim shriftidan
foydalanadi. Archivo + JetBrains Mono 122 KB edi va matn kechikib chiqardi.
Tizim shrifti darrov chizadi va har platformada tanish ko'rinadi.

**Nega ko'k asosiy, oltin ta'kid?** Logotipda ko'k maydon ~70% ni egallaydi, sariq
esa harflar. Avvalgi versiyada oltin 13 joyda, ko'k esa faqat fokus halqasida edi —
ya'ni brendning asosiy rangi saytda ko'rinmasdi. Endi teskari.

**Nega logo hexi nusxa ko'chirilmagan?** O'lchangan: logo sarig'i `#FDE05A` yorug'
fonda 1,15:1 — ko'rinmaydi. Logo ko'ki `#3774EA` yorug' fonda 3,80:1 — matn uchun
yiqiladi. Brend rangi belgida ishlaydi, interfeysda emas.

**Nega loyihalar endi modal emas, sahifa?** Modalning ikki narxi bor edi: loyihaga
ulashiladigan manzil yo'q va Google indekslamaydi. Astro'da router bor, shuning
uchun har loyiha `/loyihalar/<slug>` bo'ldi — o'z `title`, `og:image` va JSON-LD
bilan. Palitralar va markup o'sha-o'sha qoldi.

**Nega uch til alohida HTML, JS lug'at emas?** JS o'chsa ham ishlaydi, har til
alohida indekslanadi, `hreflang` to'g'ri ishlaydi. Eski versiyadagi JS lug'at
yechimi dizayn qayta qurilganda mos kelmay qolgani uchun olib tashlangan edi.

**Nega matn `{uz, ru, en}` uchligida saqlanadi, har til uchun alohida fayl emas?**
Rasm yo'li, palitra, video ID kabi tildan qat'i nazar bir xil narsalar bir joyda
qoladi — yangi qahramon qo'shganda uchta fayl tahrirlanmaydi. Tarjima tushib
qolsa `zod` va TypeScript darhol aytadi.

**Nega `youtube-nocookie` va bosilganda yuklash?** Sahifa ochilishida 8 ta iframe
yuklansa ~2 MB va o'nlab so'rov bo'lardi. Endi faqat preview rasmi (har biri ~15 KB),
pleer esa foydalanuvchi bosganda.

**Nega hero slaydlarida `loading="lazy"` yetarli emas edi?** Slaydlar `inset:0` bilan
ko'rish maydonini to'ldiradi, shuning uchun brauzer ularni lazy bo'lsa ham darhol
yuklaydi. `fetchpriority="low"` qo'shildi: birinchi slayd (LCP) qolganlari bilan
tarmoq uchun raqobatlashmaydi.

**Nega `prune-unused-assets.mjs` kerak?** Content collection sxemasi orqali import
qilingan rasmning **asl** nusxasini Vite ham `_astro/` ga chiqaradi, hatto faqat
o'zgartirilgan variantlari ishlatilsa ham — 49 fayl, 4 MB o'lik yuk. Hook build
oxirida `dist` ichidagi barcha matnli fayllardan havolalarni yig'ib, havolasiz
rasmlarni o'chiradi.

**Nega robots.txt amalda ishlamaydi?** Sayt `/multbilim/` ost-yo'lida, robotlar esa
`robots.txt` ni faqat domen ildizidan o'qiydi. Fayl niyatni hujjatlashtirish uchun
turadi; eski versiyani indeksdan chetda tutish uchun ishlaydigan chora — uni
sitemapdan chiqarish (qilingan).

---

## 10. Tez-tez uchraydigan vazifalar

**Yangi loyiha:** `src/content/projects/<slug>.md`. Sxema `src/content.config.ts` da;
`palette` `global.css` dagi `.pd[data-pal]` bloklaridan biri bo'lishi kerak.
Loyiha o'zi bosh sahifa kartochkasiga, hero slayderiga, sitemapga va
oldingi/keyingi halqasiga tushadi. Yangi palitra qo'shsangiz `z.enum` ga ham nom
qo'shing.

**Video almashtirish:** `src/data/videos.ts` da `yt`, sarlavha va meta. Ko'rish
sonini RSS'dan qayta oling, **taxmin qilmang** (`README.md` da buyruq bor).

**Yangi interfeys matni:** `src/i18n/ui.ts` ning `uz` blokiga kalit qo'shing —
`ru` va `en` da yo'qligini `npm run check` darhol aytadi. Avval `i18n-seed.json`
(400 juftlik) da qidiring.

**Rang o'zgartirish:** to'rtta token blokini ham yangilang, so'ng kontrast
skriptini ishga tushiring.

**Rasm qo'shish:** PDF'dan PyMuPDF bilan ajratib (`README.md` da retsept)
`src/assets/img/` ga qo'ying, `.md` da nisbiy yo'l bilan ko'rsatib, uch tilda `alt`
bering. `widths` manba o'lchamidan oshmasin (muqova 1400, personaj 860, kadr 1000–1100).

**Yangi sahifa:** uchta fayl kerak — `src/pages/x.astro`, `src/pages/ru/x.astro`,
`src/pages/en/x.astro`. Mantiq bitta komponentda, sahifa fayllari faqat `lang`
uzatadi (`Home.astro` va `ProjectPage.astro` shu naqsh bilan qilingan).
