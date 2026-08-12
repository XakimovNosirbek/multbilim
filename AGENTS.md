# AGENTS.md

Bu repoda ishlaydigan AI agentlar uchun ko'rsatma. Odam uchun umumiy ma'lumot —
`README.md` da.

---

## 1. Loyiha nima va nima emas

**Nima:** MultBilim animatsiya studiyasi uchun **vaqtinchalik** bir sahifali statik sayt.
Maqsad — studiya egalariga ko'rsatish va fikr olish.

**Nima emas:** bu doimiy produksiya sayti emas. Framework qo'shmang, build quvuri
o'rnatmang, `package.json` yaratmang. Doimiy versiya alohida Astro loyihasi
sifatida qurilishi rejalashtirilgan (`README.md` → Keyingi bosqich).

---

## 2. Buzilmaydigan qoidalar

| Qoida | Sabab |
|---|---|
| **Build bosqichi yo'q** | GitHub Pages `main` dan to'g'ridan-to'g'ri beradi. `npm`, bundler, preprocessor qo'shmang. |
| **Bitta `index.html`** | CSS `<style>` da, JS `<script>` da. Alohida `.css` / `.js` fayl ajratmang. |
| **Veb-shrift yo'q** | Ataylab. `@font-face`, Google Fonts, CDN link qo'shmang. Tizim shrifti ishlatiladi. |
| **Tashqi bog'liqlik yo'q** | Yagona istisno — YouTube (`i.ytimg.com` preview, `youtube-nocookie.com` pleer). jQuery, GSAP, Tailwind CDN — yo'q. |
| **Rasmlar `img/` da** | Base64 data URI qilmang. Ular alohida fayl bo'lgani uchun brauzer keshlaydi. |
| **Nisbiy yo'llar** | `img/x.jpg`, `/img/x.jpg` EMAS. Sayt `/multbilim/` ost-yo'lida turadi. |

---

## 3. Dizayn tizimi — o'zgartirishdan oldin o'qing

### Ranglar

Faqat mavjud tokenlarni ishlating. **Yangi rang o'ylab topmang.**

```
--page-bg  --page-text  --muted  --line  --line-2
--panel  --panel-2  --header-bg  --btn-bg  --btn-text
--blue   (asosiy urg'u)
--gold   (ta'kid — faqat 5 joyda)
```

Tokenlar **to'rt blokda** e'lon qilingan:

1. `:root` — qorong'i (asosiy)
2. `@media (prefers-color-scheme:light) { :root:not([data-theme="dark"]) }`
3. `:root[data-theme="light"]`
4. `:root[data-theme="dark"]`

**Rangni o'zgartirsangiz to'rttasini ham yangilang.** Bittasini o'tkazib yuborsangiz,
tema tugmasi bilan almashtirilganda rang tushib qoladi va matn ko'rinmay qolishi mumkin.

### Oltin kvotasi

`var(--gold)` **aynan 5 marta** ishlatilishi kerak:
`.logo .mark::after` · `.logo .l1` · `.hero h1 span:nth-child(2)` · `.big em` ·
`.dots button[aria-current]`

Oltinni ko'paytirish — bu dizaynni buzadigan eng oson yo'l. Interaktiv yoki
strukturaviy element uchun **har doim `--blue`**.

Tekshirish:

```bash
grep -o 'var(--gold)' index.html | wc -l   # 5 bo'lishi kerak
grep -c 'var(--cyan)' index.html           # 0 — cyan olib tashlangan, qaytarmang
```

### Shrift shkalasi

**Aynan 8 pog'ona.** Yangi qiymat (masalan `15px`, `18px`, `13.5px`) qo'shmang:

```
11 · 12 · 13 · 14 · 16 · 17 · 19 · 22
```

Katta sarlavhalar `clamp(min, vw, max)` bilan.
Forma maydonlari **16px dan past bo'lmasin** — iOS Safari fokusda sahifani
kattalashtiradi va layout buziladi.

Tekshirish:

```bash
grep -o 'font-size:[0-9.]*px' index.html | sort -u
```

### Bo'shliq

`4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 24 · 28 · 40`. Toq qiymat (5, 7, 9, 11) qo'shmang.
`1px` va `2px` faqat hairline chegara/grid uchun.

---

## 4. Buzilmasligi kerak bo'lgan a11y invariantlari

- Teginish nishoni: interaktiv element **≥ 24×24px** (WCAG 2.5.8), shapka
  tugmalari 44×44
- Forma maydoni ≥ 16px
- Har `<img>` da `alt`
- Matnli bo'lmagan tugmada `aria-label`
- `:focus-visible` uslubi saqlanadi
- `@media (prefers-reduced-motion:reduce)` bloki saqlanadi
- Modal/lightbox: `Esc` yopadi, fokus chaqirgan elementga qaytadi
- Rang **yagona signal bo'lmasin** — holat rangdan tashqari shakl/o'lcham bilan ham
  ko'rsatilsin (masalan faol slayd nuqtasi kengayadi)

---

## 5. Tekshirish skriptlari

O'zgarish kiritgandan keyin **push qilishdan oldin** ishga tushiring.

### Kontrast (WCAG)

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

### Markup butunligi

```python
import re, io, os
h = io.open('index.html', encoding='utf-8').read()
for t in ['html','head','body','div','section','a','span','p','h1','h2','h3','h4',
          'article','aside','form','label','select','option','textarea','button',
          'ul','li','nav','header','footer','main','svg','script','style','i','b','em','small']:
    o = len(re.findall(r'<'+t+r'[\s>]', h)); c = h.count('</'+t+'>')
    if o != c: print(f'MISMATCH <{t}>: {o} vs {c}')

ids = re.findall(r'\sid="([^"]+)"', h)
print('dupe id:', {i for i in ids if ids.count(i) > 1} or 'yoq')
print('yechilmagan anchor:', sorted(set(re.findall(r'href="#([\w-]+)"', h)) - set(ids)) or 'yoq')
for r in set(re.findall(r"getElementById\('([^']+)'\)", h)):
    if r not in ids: print('YOQ id:', r)

imgs = set(re.findall(r'src="(img/[\w-]+\.jpg)"', h)) | set(re.findall(r'url\((img/[\w-]+\.jpg)\)', h))
print('yoq rasm:', [x for x in imgs if not os.path.exists(x)] or 'yoq')
print('altsiz img:', len(re.findall(r'<img(?![^>]*\salt=)[^>]*>', h)))
print('CSS qavs muvozanati:', h.count('{') == h.count('}'))
```

### Jonli tekshiruv (push'dan keyin)

```bash
gh api repos/XakimovNosirbek/multbilim/pages/builds/latest \
  --jq '"\(.status) \(.commit[0:7]) \(.error.message // "")"'
curl -s -o /dev/null -w "%{http_code} %{size_download}B %{time_total}s\n" \
  https://xakimovnosirbek.github.io/multbilim/
```

Pages build ~30 soniya oladi. Darrov tekshirmang — kuting yoki tsiklda so'rang.

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

### Konsol kodlashi

Windows konsoli cp1251 — kirill va `—` belgilar `?` bo'lib chiqadi. Bu **displey
artefakti**, fayl UTF-8 da to'g'ri. Tekshirish uchun baytlarga qarang:

```python
raw = open('index.html','rb').read()
print(raw[raw.index(b'<title>'):][:60])   # \xe2\x80\x94 = —, to'g'ri
```

Skriptda: `sys.stdout.reconfigure(encoding='utf-8', errors='replace')`.

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

- Jamoa: Aziza Karimova, Sardor Rahimov, Madina Usmonova, Kamol Nurmatov
- 5 ta vakansiya
- `hello@multbilim.uz`, `loyiha@multbilim.uz`, `karyera@multbilim.uz`
- «40+ ijodiy mutaxassis»
- Savol-javob javoblari
- Ofis manzili

**Namunaviy ma'lumotni haqiqiy deb ko'rsatmang.** Belgilarni (`Namunaviy`,
`namunaviy`, `.note`, `.mate small`) o'z ixtiyoringiz bilan olib tashlamang —
faqat foydalanuvchi real ma'lumot bergandan keyin.

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
yiqiladi. Brend rangi belgida ishlaydi, interfeysda emas. Ton saqlangan
(220° → 217°/216°), yorqinlik sozlangan.

**Nega modal, alohida sahifa emas?** Statik sayt, router yo'q. Modal bitta faylda
qoladi, tarix bilan ishlash shart emas, va loyihalar orasida o'tish tez.

**Nega `youtube-nocookie` va bosilganda yuklash?** Sahifa ochilishida 8 ta iframe
yuklansa ~2 MB va o'nlab so'rov bo'lardi. Endi faqat preview rasmi (har biri ~15 KB),
pleer esa foydalanuvchi bosganda.

**Nega til almashtirgichi yo'q?** Dizayn qayta qurilganda butun matn yangilandi va
eski uz/ru/en lug'ati mos kelmay qoldi. Ishlamaydigan tugma qoldirishdan ko'ra olib
tashlash to'g'ri. Doimiy saytda Astro'ning tug'ma i18n marshrutlashi ishlatiladi.

---

## 10. Tez-tez uchraydigan vazifalar

**Yangi loyiha qo'shish:** `#loyihalar` ga `.pcard` (`data-open="pd-xxx"` bilan),
so'ng `#modal` ichiga `.pd` bo'limi (`data-pal="xxx"`), so'ng CSS ga
`.pd[data-pal="xxx"]{--pa:…;--pbg:…;--pbg2:…;--pfg:…;--pmut:…;--pln:…}`.
Hero slayderiga ham qo'shsangiz — `#slides` ga `div` va JS'dagi `names` massiviga nom.

**Video almashtirish:** `data-yt="VIDEO_ID"` va `i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg`
ni yangilang. Ko'rish sonini RSS'dan qayta oling, taxmin qilmang.

**Rang o'zgartirish:** to'rtta token blokini ham yangilang, so'ng kontrast skriptini
ishga tushiring.

**Rasm qo'shish:** PDF'dan PyMuPDF bilan ajrating (`README.md` da retsept), `img/` ga
qo'ying, `alt` bering, `loading="lazy"` qo'shing.
