# Nihonova — how to edit this site

Everything you will normally want to change lives in **one file**: `js/content.js`.
Open it, change a value, save, reload the browser. No build step, no framework.

```
nihonova/
├── index.html          page structure (rarely needs editing)
├── README-EDITING.md   this file
├── css/style.css       colours, fonts, spacing
├── js/content.js       ← ALL TEXT, PRODUCTS, STATS, CONTACT DETAILS
├── js/app.js           rendering + interactions (form endpoint lives here)
└── assets/             images
```

## 1. The bilingual pattern

Every piece of text is an object with two keys:

```js
title: { en: 'Sectors we trade', ja: '取扱分野' }
```

The EN / 日本語 switch in the header picks between them. If you only care about
English for now, put the same English string in both keys — nothing breaks.

Lists work the same way, with an array per language:

```js
bullets: {
  en: ['First point', 'Second point'],
  ja: ['一点目', '二点目'],
}
```

## 2. Deciding your product type later

The product line is deliberately not baked in. It lives in `SITE.sectors.items`:

```js
{
  enabled: true,                     // false = hidden, text kept
  code: '01',                        // small label on the card
  name: { en: 'Agri & processed food', ja: '農産物・加工食品' },
  desc: { en: '…', ja: '…' },
  tags: { en: ['Reefer', 'FSSAI'], ja: ['冷凍', 'FSSAI'] },
}
```

- **Add a category** — copy any block and paste it into the array.
- **Remove one** — delete the block, or set `enabled: false` to keep the copy for later.
- **Reorder** — move blocks up or down; the grid follows the array order.
- **Fewer or more than six** — the grid reflows automatically at any count.

Once you have chosen, also update `SITE.sectors.intro` and delete
`SITE.sectors.note` (the dashed "not final" pill) — the pill disappears if you
set the note to an empty string.

## 3. Other things you will probably change

| What                       | Where in `js/content.js`         |
| -------------------------- | -------------------------------- |
| Company name, tagline, SEO | `brand`                          |
| Menu items                 | `nav` (`id` must match a section id in `index.html`) |
| Hero headline lines        | `hero.headline` (one array item = one line) |
| Scrolling ticker items     | `ticker`                         |
| The four animated numbers  | `stats`                          |
| India→Japan / Japan→India  | `directions.tabs`                |
| Service list               | `services.items` (`icon` options: search, check, doc, ship, box, shield) |
| Six-step timeline          | `process.steps`                  |
| Selling points             | `advantage.points`               |
| FAQ                        | `faq.items`                      |
| Offices, email, phone      | `contact`                        |
| Footer text                | `footer`                         |

## 4. Colours and fonts

Top of `css/style.css`. Two blocks control the palette — `[data-theme='light']`
and `[data-theme='dark']`. The main levers:

```css
--color-primary: #16324f;  /* indigo — headers, footer, buttons */
--color-accent:  #c1381c;  /* vermillion — CTAs, highlights */
--color-bg:      #f4f2ec;  /* washi paper background */
```

Fonts are set in `:root` (`--font-display`, `--font-body`, `--font-jp`) and
loaded via the `<link>` tags in `index.html`.

## 5. Images

Drop replacements into `assets/` and point the config at them:
`hero.image`, `directions.tabs[n].image`, `advantage.image`.
WebP at ~1800px wide keeps the page fast. Always update the matching
`imageAlt` text.

## 6. Making the quote form actually send

`js/app.js` → `initForm()`. There is a commented `fetch()` block: uncomment it,
point it at your endpoint (Formspree, Basin, a Google Apps Script, or your own
API) and the submitted brief will be delivered there.

## 7. Before you publish

- Replace the placeholder phone number and address in `contact`.
- Replace or delete `footer.legal` (it currently says this is a demo).
- Check the numbers in `stats` are true for your business.
