/* ==========================================================================
   NIHONOVA — SITE CONTENT CONFIG
   --------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT.
   Every headline, product category, stat, service, FAQ and contact detail
   on the site is read from this object. Change a value, reload the page.

   Each text field is written as:   { en: "English", ja: "日本語" }
   The header language switch (EN / 日本語) picks between them.

   PRODUCT TYPE IS NOT LOCKED IN. The `categories` array below is a
   placeholder set of trade verticals. Rename them, delete them, add new
   ones, or flip `enabled: false` to hide one without deleting it.
   See README-EDITING.md for a field-by-field guide.
   ========================================================================== */

window.SITE = {
  /* ---------------------------------------------------------------- BRAND */
  brand: {
    name: 'Nihonova',
    // Shown next to the logo in the header
    descriptor: { en: 'India · Japan Trade', ja: 'インド・日本 貿易' },
    // Appears in the browser tab and share previews
    metaTitle: {
      en: 'Nihonova — India ⇄ Japan Import & Export',
      ja: 'Nihonova — インド⇄日本 輸入・輸出',
    },
    metaDescription: {
      en: 'Nihonova moves goods both ways between India and Japan — sourcing, quality control, customs, freight and last-mile, run as one accountable line.',
      ja: 'Nihonovaはインドと日本の双方向で貨物を動かします。調達、品質管理、通関、輸送、ラストマイルを一つの責任体制で。',
    },
  },

  /* ------------------------------------------------------------------ NAV */
  nav: [
    { id: 'corridor', label: { en: 'Corridor', ja: '貿易回廊' } },
    { id: 'sectors', label: { en: 'Sectors', ja: '取扱分野' } },
    { id: 'services', label: { en: 'Services', ja: 'サービス' } },
    { id: 'process', label: { en: 'Process', ja: 'プロセス' } },
    { id: 'faq', label: { en: 'FAQ', ja: 'よくある質問' } },
  ],
  navCta: { en: 'Request a quote', ja: '見積依頼' },

  /* ----------------------------------------------------------------- HERO */
  hero: {
    // Small line above the headline
    eyebrow: { en: 'Kolkata · Mumbai · Tokyo · Osaka', ja: 'コルカタ・ムンバイ・東京・大阪' },
    // Headline is split into lines so you control the line breaks
    headline: {
      en: ['Two markets.', 'One corridor.', 'Zero guesswork.'],
      ja: ['二つの市場', '一つの回廊', '推測はゼロ'],
    },
    body: {
      en: 'Nihonova is a bidirectional import–export house built for the India–Japan lane. We source, inspect, clear and deliver — and we own the shipment end to end, in both directions.',
      ja: 'Nihonovaはインド・日本間の双方向輸入輸出商社です。調達から検品、通関、配送まで、往復ともに一貫して当社が責任を持ちます。',
    },
    primaryCta: { en: 'Start a shipment', ja: '出荷を相談する' },
    secondaryCta: { en: 'See how it works', ja: '仕組みを見る' },
    // Ports drawn on the animated corridor arc in the hero
    originLabel: { en: 'India', ja: 'インド' },
    destinationLabel: { en: 'Japan', ja: '日本' },
    transitLabel: { en: 'Sea 18–24 days · Air 2–4 days', ja: '海上18〜24日・航空2〜4日' },
    image: 'assets/hero-port.webp',
    imageAlt: {
      en: 'Container terminal at dawn with gantry cranes',
      ja: '夜明けのコンテナターミナルとガントリークレーン',
    },
  },

  /* --------------------------------------------------- SCROLLING TICKER
     Short items that scroll across the page under the hero. Add or remove
     freely — the marquee loops whatever is in this list.                */
  ticker: {
    en: [
      'Nhava Sheva → Yokohama',
      'Chennai → Kobe',
      'Kolkata → Osaka',
      'Tokyo → Mundra',
      'Nagoya → Chennai',
      'FCL · LCL · Air · Reefer',
      'Customs cleared in-house',
      'JIS & BIS documentation',
      'Bilingual contracts EN / 日本語',
    ],
    ja: [
      'ナバシェバ → 横浜',
      'チェンナイ → 神戸',
      'コルカタ → 大阪',
      '東京 → ムンドラ',
      '名古屋 → チェンナイ',
      'FCL・LCL・航空・冷凍',
      '通関は自社対応',
      'JIS・BIS書類対応',
      '英語／日本語の二言語契約',
    ],
  },

  /* ---------------------------------------------------------------- STATS
     Animated counters. `value` is the number, `suffix` is what follows.  */
  stats: [
    {
      value: 2,
      suffix: '',
      label: { en: 'Directions served', ja: '対応方向' },
      note: { en: 'India→Japan and Japan→India', ja: 'インド→日本／日本→インド' },
    },
    {
      value: 11,
      suffix: '',
      label: { en: 'Ports & airports', ja: '対応港・空港' },
      note: { en: 'Across both coasts', ja: '両国の主要拠点' },
    },
    {
      value: 21,
      suffix: ' days',
      label: { en: 'Typical sea transit', ja: '海上輸送日数' },
      note: { en: 'Port to port, west coast', ja: '西海岸発、港から港' },
    },
    {
      value: 100,
      suffix: '%',
      label: { en: 'Pre-shipment inspection', ja: '出荷前検品' },
      note: { en: 'Photo and video evidence', ja: '写真・動画で記録' },
    },
  ],

  /* ------------------------------------------------------- TRADE DIRECTIONS
     The two-way tab section. Bullets are editable lists.                 */
  directions: {
    title: { en: 'The lane runs both ways', ja: '回廊は双方向に走る' },
    intro: {
      en: 'Most brokers are good at one direction. We are built for the round trip, which is why our containers rarely travel empty.',
      ja: '多くの仲介業者は片方向にしか強くありません。Nihonovaは往復を前提に設計されているため、空コンテナはほとんど発生しません。',
    },
    tabs: [
      {
        id: 'in-jp',
        label: { en: 'India → Japan', ja: 'インド → 日本' },
        heading: {
          en: 'Indian supply, Japanese standards',
          ja: 'インドの供給力を、日本の基準で',
        },
        body: {
          en: 'We qualify Indian manufacturers against Japanese buyer expectations before a single sample ships — documentation, tolerances, packaging, labelling and delivery discipline.',
          ja: '日本のバイヤーの期待水準に照らしてインドの製造業者を事前審査します。書類、公差、梱包、表示、納期規律のすべてを対象とします。',
        },
        bullets: {
          en: [
            'Supplier audit and factory visit reports',
            'Sample rounds managed to a fixed calendar',
            'Japanese-language spec sheets and packing lists',
            'Consolidation at origin to cut freight cost',
          ],
          ja: [
            'サプライヤー監査と工場訪問レポート',
            '固定スケジュールでのサンプル管理',
            '日本語の仕様書・パッキングリスト',
            '積地混載による輸送コスト削減',
          ],
        },
        image: 'assets/india-dock.webp',
        imageAlt: {
          en: 'Trucks queued along an Indian port quay at sunrise',
          ja: '朝日の中、インドの港の埠頭に並ぶトラック',
        },
      },
      {
        id: 'jp-in',
        label: { en: 'Japan → India', ja: '日本 → インド' },
        heading: {
          en: 'Japanese quality, Indian reach',
          ja: '日本の品質を、インド全域へ' ,
        },
        body: {
          en: 'For Japanese exporters we handle the parts of India that are hard to handle from Tokyo: duty classification, state-level logistics, distributor vetting and payment security.',
          ja: '日本の輸出企業に代わり、東京からは扱いにくいインド側の業務を担います。関税分類、州単位の物流、販売代理店の審査、決済保全まで。',
        },
        bullets: {
          en: [
            'HS classification and duty modelling before you commit',
            'Bonded warehousing and pan-India distribution',
            'Distributor and buyer credit checks',
            'CEPA benefit review on eligible goods',
          ],
          ja: [
            '契約前のHS分類と関税シミュレーション',
            '保税倉庫とインド全国への配送',
            '取引先・バイヤーの信用調査',
            '対象品目のCEPA特恵の確認',
          ],
        },
        image: 'assets/japan-harbor.webp',
        imageAlt: {
          en: 'Japanese industrial harbour at dusk',
          ja: '夕暮れの日本の工業港',
        },
      },
    ],
  },

  /* --------------------------------------------------------- SECTORS ▸ EDIT
     >>> THIS IS THE PLACEHOLDER PRODUCT LIST. <<<
     Rename, reorder, delete or add entries. Set enabled:false to hide one
     without losing the text. `code` is the small label on the card.      */
  sectors: {
    title: { en: 'Sectors we trade', ja: '取扱分野' },
    intro: {
      en: 'Placeholder verticals — edit these in js/content.js once you lock your product line. Every card below is a single object in the config.',
      ja: 'これは仮の分野リストです。取扱品目が決まり次第、js/content.js で編集してください。各カードは設定ファイル内の一つのオブジェクトです。',
    },
    note: {
      en: 'Not final. Swap in your own categories any time.',
      ja: '暫定です。いつでも自由に差し替えられます。',
    },
    items: [
      {
        enabled: true,
        code: '01',
        name: { en: 'Agri & processed food', ja: '農産物・加工食品' },
        desc: {
          en: 'Rice, spices, pulses, tea and marine products, moved under cold-chain and phytosanitary control.',
          ja: '米、香辛料、豆類、茶、水産物をコールドチェーンと植物検疫管理のもとで輸送。',
        },
        tags: { en: ['Reefer', 'FSSAI', 'Phytosanitary'], ja: ['冷凍', 'FSSAI', '植物検疫'] },
      },
      {
        enabled: true,
        code: '02',
        name: { en: 'Textiles & apparel', ja: '繊維・アパレル' },
        desc: {
          en: 'Woven and knit fabric, home textiles and finished garments with graded QC and shade approval.',
          ja: '織物・編物、ホームテキスタイル、完成衣料を段階的な品質管理と色見本承認のもとで供給。',
        },
        tags: { en: ['Shade cards', 'AQL 2.5', 'Private label'], ja: ['色見本', 'AQL 2.5', 'OEM'] },
      },
      {
        enabled: true,
        code: '03',
        name: { en: 'Auto components', ja: '自動車部品' },
        desc: {
          en: 'Machined and forged parts for Japanese tier-1 and aftermarket buyers, with PPAP-style documentation.',
          ja: '日本のティア1およびアフターマーケット向け機械加工・鍛造部品。PPAP準拠の書類を整備。',
        },
        tags: { en: ['Drawings', 'Tolerance', 'PPAP'], ja: ['図面', '公差', 'PPAP'] },
      },
      {
        enabled: true,
        code: '04',
        name: { en: 'Industrial machinery', ja: '産業機械' },
        desc: {
          en: 'Japanese machine tools, robotics and spares into India, including installation logistics.',
          ja: '日本製工作機械、ロボティクス、補修部品をインドへ。設置に伴う物流も対応。',
        },
        tags: { en: ['Heavy lift', 'Spares', 'Install'], ja: ['重量物', '補修部品', '設置'] },
      },
      {
        enabled: true,
        code: '05',
        name: { en: 'Speciality chemicals', ja: '機能性化学品' },
        desc: {
          en: 'Dyes, intermediates and additives with MSDS, UN packing and hazmat routing handled in-house.',
          ja: '染料、中間体、添加剤。MSDS、国連規格梱包、危険物ルート手配を自社対応。',
        },
        tags: { en: ['MSDS', 'UN packing', 'DG'], ja: ['MSDS', 'UN梱包', '危険物'] },
      },
      {
        enabled: true,
        code: '06',
        name: { en: 'Craft & lifestyle', ja: '工芸・ライフスタイル' },
        desc: {
          en: 'Handloom, brassware, ceramics and interior objects for Japanese retail and hospitality.',
          ja: '手織物、真鍮製品、陶磁器、インテリア雑貨を日本の小売・ホスピタリティ向けに。',
        },
        tags: { en: ['Small batch', 'Retail-ready', 'Story'], ja: ['小ロット', '店頭対応', 'ストーリー'] },
      },
    ],
  },

  /* ------------------------------------------------------------- SERVICES */
  services: {
    title: { en: 'One desk, whole shipment', ja: '一つの窓口で、出荷のすべて' },
    intro: {
      en: 'You get one point of contact and one invoice. Behind it sit six functions that usually come from six different vendors.',
      ja: '窓口は一つ、請求も一つ。その背後で通常は六社に分かれる六つの機能を当社が担います。',
    },
    items: [
      {
        icon: 'search',
        name: { en: 'Sourcing & supplier vetting', ja: '調達・サプライヤー審査' },
        desc: {
          en: 'Shortlists with capacity, certification and reference checks — not a list of email addresses.',
          ja: '生産能力、認証、取引実績を確認した候補リストを提示します。単なる連絡先一覧ではありません。',
        },
      },
      {
        icon: 'check',
        name: { en: 'Inspection & quality control', ja: '検品・品質管理' },
        desc: {
          en: 'In-line and pre-shipment inspection against an agreed AQL, with photo and video evidence.',
          ja: '合意したAQLに基づく工程内・出荷前検品を実施し、写真と動画で記録します。',
        },
      },
      {
        icon: 'doc',
        name: { en: 'Customs & compliance', ja: '通関・法令対応' },
        desc: {
          en: 'HS classification, licences, CEPA origin review, JIS and BIS paperwork prepared before cut-off.',
          ja: 'HS分類、許認可、CEPA原産地確認、JIS・BIS書類をカットオフ前に整備します。',
        },
      },
      {
        icon: 'ship',
        name: { en: 'Freight & routing', ja: '輸送・ルーティング' },
        desc: {
          en: 'FCL, LCL, air and reefer priced against three carriers so you can see the trade-off yourself.',
          ja: 'FCL、LCL、航空、冷凍を三社見積で比較提示。判断材料をそのまま共有します。',
        },
      },
      {
        icon: 'box',
        name: { en: 'Warehousing & fulfilment', ja: '倉庫・出荷代行' },
        desc: {
          en: 'Bonded and free storage at both ends, with pick-pack and distributor replenishment.',
          ja: '両国での保税・通常保管に加え、ピッキング梱包と代理店向け補充に対応。',
        },
      },
      {
        icon: 'shield',
        name: { en: 'Payment & risk', ja: '決済・リスク管理' },
        desc: {
          en: 'LC, DA/DP and escrow structures, plus cargo insurance and buyer credit checks.',
          ja: 'L/C、D/A・D/P、エスクロー構成に加え、貨物保険と与信調査を提供します。',
        },
      },
    ],
  },

  /* -------------------------------------------------------------- PROCESS */
  process: {
    title: { en: 'How a shipment actually runs', ja: '出荷の実際の流れ' },
    intro: {
      en: 'Six steps, fixed owners, dates agreed in writing before we start.',
      ja: '六つのステップ、担当は固定、開始前に日程を書面で合意します。',
    },
    steps: [
      {
        name: { en: 'Brief & feasibility', ja: 'ヒアリングと実現性確認' },
        time: { en: 'Day 1–3', ja: '1〜3日目' },
        desc: {
          en: 'Product, volume, target landed cost and compliance constraints. We tell you early if the lane does not work.',
          ja: '品目、数量、目標着地コスト、法規制上の制約を確認。成立しない案件は早い段階でお伝えします。',
        },
      },
      {
        name: { en: 'Sourcing & samples', ja: '調達とサンプル' },
        time: { en: 'Week 1–3', ja: '1〜3週目' },
        desc: {
          en: 'Three to five vetted suppliers, samples shipped in one consolidated batch to save cost and time.',
          ja: '審査済みの3〜5社を選定し、サンプルは一括混載で発送してコストと時間を削減します。',
        },
      },
      {
        name: { en: 'Contract & costing', ja: '契約と原価確定' },
        time: { en: 'Week 3–4', ja: '3〜4週目' },
        desc: {
          en: 'Bilingual contract, Incoterms fixed, full landed-cost sheet including duty, freight and handling.',
          ja: '二言語契約、インコタームズ確定、関税・輸送・荷役を含む着地原価表を提示します。',
        },
      },
      {
        name: { en: 'Production & QC', ja: '生産と品質管理' },
        time: { en: 'Week 4–10', ja: '4〜10週目' },
        desc: {
          en: 'Weekly production updates, in-line checks, then pre-shipment inspection with a signed report.',
          ja: '週次の生産報告、工程内検査、出荷前検品と署名入り報告書を提出します。',
        },
      },
      {
        name: { en: 'Documents & clearance', ja: '書類と通関' },
        time: { en: 'Week 10–11', ja: '10〜11週目' },
        desc: {
          en: 'Invoice, packing list, BL, certificate of origin and inspection certificates prepared before vessel cut-off.',
          ja: 'インボイス、パッキングリスト、B/L、原産地証明、検査証明を本船カットオフ前に準備します。',
        },
      },
      {
        name: { en: 'Transit & delivery', ja: '輸送と納品' },
        time: { en: 'Week 11–14', ja: '11〜14週目' },
        desc: {
          en: 'Tracked transit, destination clearance, and delivery to warehouse or distributor with a closing report.',
          ja: '輸送状況を追跡し、到着地通関を経て倉庫または代理店へ納品。完了報告書を提出します。',
        },
      },
    ],
  },

  /* ------------------------------------------------------------ ADVANTAGE */
  advantage: {
    title: { en: 'Why traders switch to us', ja: '選ばれる理由' },
    body: {
      en: 'The India–Japan lane fails on details: a missing origin certificate, a tolerance nobody converted, a label in the wrong language. We are organised around those details rather than around volume.',
      ja: 'インド・日本間の取引は細部で失敗します。原産地証明の欠落、換算されていない公差、言語の誤った表示。当社は量ではなく、その細部を軸に組織されています。',
    },
    image: 'assets/warehouse.webp',
    imageAlt: {
      en: 'Interior of a modern warehouse with tall racking',
      ja: '高層ラックが並ぶ近代的な倉庫の内部',
    },
    points: [
      {
        name: { en: 'Bilingual by default', ja: '二言語対応が標準' },
        desc: {
          en: 'Contracts, specs and shipment updates issued in English and Japanese, not translated after the fact.',
          ja: '契約書、仕様書、出荷連絡を英語と日本語で発行します。事後翻訳ではありません。',
        },
      },
      {
        name: { en: 'Landed cost, not FOB', ja: 'FOBではなく着地原価' },
        desc: {
          en: 'Quotes include duty, freight, handling and finance cost so the number you see is the number you pay.',
          ja: '見積には関税、輸送、荷役、金融コストを含みます。提示額がそのまま支払額です。',
        },
      },
      {
        name: { en: 'Evidence over assurance', ja: '保証よりも証跡' },
        desc: {
          en: 'Every stage closes with a document or a photo set. Nothing moves on a verbal confirmation.',
          ja: '各工程は書類または写真で完了を記録します。口頭確認だけで先へ進めることはありません。',
        },
      },
      {
        name: { en: 'One accountable owner', ja: '責任者は一人' },
        desc: {
          en: 'A named trade manager owns your shipment from brief to delivery, with a named backup.',
          ja: '担当トレードマネージャーがヒアリングから納品まで一貫して責任を持ち、代替担当も指名します。',
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ FAQ */
  faq: {
    title: { en: 'Questions we get first', ja: 'よくいただく質問' },
    items: [
      {
        q: { en: 'You have not listed my product. Can you still handle it?', ja: '取扱分野に自社の製品がありません。対応可能ですか。' },
        a: {
          en: 'Yes. The sectors on this site are a starting set, not a limit. If a product is legal to trade and can meet destination standards, we will scope it — and tell you plainly if the economics do not work.',
          ja: 'はい。掲載中の分野は出発点であり、制限ではありません。合法的に取引でき、輸入先の基準を満たせる製品であれば検討します。採算が合わない場合は率直にお伝えします。',
        },
      },
      {
        q: { en: 'What is the minimum order you will take?', ja: '最小取引量はどの程度ですか。' },
        a: {
          en: 'For LCL sea freight we work from roughly 2 CBM. Air shipments can be smaller. Below that, consolidation with another buyer is usually the sensible route and we can arrange it.',
          ja: 'LCL海上輸送は概ね2CBMから対応します。航空便はより小口でも可能です。それ以下の場合は他のバイヤーとの混載が現実的で、当社で手配できます。',
        },
      },
      {
        q: { en: 'Who handles customs — you or my broker?', ja: '通関は貴社が行いますか、それとも当方の通関業者ですか。' },
        a: {
          en: 'Either. We clear in-house at both ends by default, but if you have an established broker we will hand over a complete, checked document set rather than duplicate the work.',
          ja: 'どちらでも可能です。標準では両国で自社通関しますが、既存の通関業者がある場合は重複作業を避け、確認済みの書類一式をお渡しします。',
        },
      },
      {
        q: { en: 'How do payments work on a first order?', ja: '初回取引の決済はどのようになりますか。' },
        a: {
          en: 'First orders usually run on a letter of credit or a staged advance against inspection sign-off. Once a track record exists we move to DA/DP terms.',
          ja: '初回はL/Cまたは検品承認に連動した分割前払いが一般的です。取引実績が積み上がった段階でD/A・D/P条件へ移行します。',
        },
      },
      {
        q: { en: 'Does CEPA reduce my duty?', ja: 'CEPAにより関税は下がりますか。' },
        a: {
          en: 'Often, but only with correct origin documentation and an eligible HS code. We run that check during costing, before you commit to a supplier.',
          ja: '多くの場合下がりますが、正しい原産地書類と対象HSコードが必要です。原価計算の段階で、サプライヤー確定前に確認します。',
        },
      },
    ],
  },

  /* -------------------------------------------------------------- CONTACT */
  contact: {
    title: { en: 'Tell us what you want to move', ja: '動かしたい貨物をお知らせください' },
    body: {
      en: 'Send a rough brief — product, direction, volume and target date. You get a feasibility note and an indicative landed cost within two business days.',
      ja: '品目、方向、数量、希望納期の概要をお送りください。二営業日以内に実現性の見解と概算着地原価をお返しします。',
    },
    // Form field labels
    form: {
      name: { en: 'Name', ja: 'お名前' },
      company: { en: 'Company', ja: '会社名' },
      email: { en: 'Email', ja: 'メールアドレス' },
      direction: { en: 'Direction', ja: '輸送方向' },
      directionOptions: {
        en: ['India → Japan', 'Japan → India', 'Both / not sure yet'],
        ja: ['インド → 日本', '日本 → インド', '双方向・未定'],
      },
      product: { en: 'Product & volume', ja: '品目と数量' },
      productPlaceholder: {
        en: 'e.g. 2 × 40ft of cotton home textiles, monthly',
        ja: '例：綿製ホームテキスタイル 40フィート2本、毎月',
      },
      submit: { en: 'Send brief', ja: '概要を送信' },
      success: {
        en: 'Thanks — your brief is noted. Connect this form to your inbox or CRM in js/app.js to receive it live.',
        ja: 'ありがとうございます。内容を受け付けました。実際に受信するには js/app.js でメールやCRMに接続してください。',
      },
    },
    offices: [
      {
        city: { en: 'Kolkata — head office', ja: 'コルカタ（本社）' },
        lines: {
          en: ['Salt Lake Sector V', 'Kolkata 700091, India'],
          ja: ['ソルトレイク セクターV', 'コルカタ 700091, インド'],
        },
      },
      {
        city: { en: 'Tokyo — representative desk', ja: '東京（駐在デスク）' },
        lines: {
          en: ['Chuo-ku, Nihonbashi', 'Tokyo 103-0027, Japan'],
          ja: ['中央区日本橋', '東京 103-0027, 日本'],
        },
      },
    ],
    email: 'trade@nihonova.com',
    phone: '+91 33 0000 0000',
    hours: { en: 'Mon–Fri, 09:30–18:30 IST / JST', ja: '月〜金 9:30〜18:30 IST／JST' },
  },

  /* --------------------------------------------------------------- FOOTER */
  footer: {
    blurb: {
      en: 'Bidirectional import and export between India and Japan. Sourcing, compliance, freight and fulfilment under one accountable line.',
      ja: 'インドと日本を結ぶ双方向の輸入・輸出。調達、法令対応、輸送、出荷を一つの責任体制で。',
    },
    legal: {
      en: 'Nihonova is a demonstration site. Replace copy, figures and registration details in js/content.js before publishing.',
      ja: '本サイトはデモです。公開前に js/content.js の文章、数値、登記情報を差し替えてください。',
    },
  },
};
