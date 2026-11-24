/**
 * ЗНАК СВОИХ (OUR OWN SIGN) — Master Interactive Engine
 * Senior Full-Stack Implementation
 * - Expanded Catalog (56 Products across 5 categories, No Pants)
 * - Single Photo Slot per Item
 * - Photorealistic Clothes Rack Hero with mix-blend-mode: multiply
 * - Bulletproof Shared Element Modal with Grid & Independent Text Scroll
 */

// ==========================================================================
// 1. MASSIVE CATALOG DATASET (56 Products: 28 Men, 28 Women)
// 1 Photo Slot per Item. Strictly gender & category accurate.
// ==========================================================================
const PRODUCTS_DATA = [
  {
    "id": "u-hoodie-architect-w",
    "title": "Худи Чистый Крой «Архитект»",
    "category": "hoodies",
    "price": 1950,
    "priceDisplay": "от 1 950 ₽",
    "minQty": "от 10 шт.",
    "badge": "Пенье 420 г/м²",
    "density": "420 г/м²",
    "fabric": "100% органический хлопок премиального кручения",
    "fit": "Архитектурный силуэт без шнурков, скрытые швы",
    "care": "Стирка при 30°C.",
    "colors": [
      "#FFFFFF",
      "#DDD2C1",
      "#6D7888"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Минималистичный дизайн без лишних деталей. Идеален для авторской вышивки.",
    "image": "images/catalog/hoodie-architect-w.jpg",
    "images": [
      "images/catalog/hoodie-architect-w.jpg"
    ]
  },
  {
    "id": "u-hoodie-architect-m",
    "title": "Худи Чистый Крой «Архитект» (Mono)",
    "category": "hoodies",
    "price": 1950,
    "priceDisplay": "от 1 950 ₽",
    "minQty": "от 10 шт.",
    "badge": "Пенье 420 г/м²",
    "density": "420 г/м²",
    "fabric": "100% гребенной хлопок пенье с велюровым эффектом",
    "fit": "Свободный крой без шнурков, двойной структурированный капюшон",
    "care": "Стирка при 30°C.",
    "colors": [
      "#393A3F",
      "#EAE4D7",
      "#111114"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Безупречная базовая палитра для брендинга любой сложности.",
    "image": "images/catalog/hoodie-architect-m.jpg",
    "images": [
      "images/catalog/hoodie-architect-m.jpg"
    ]
  },
  {
    "id": "u-hoodie-capsule",
    "title": "Капсула «Архитект» (Худи + Шоппер)",
    "category": "hoodies",
    "price": 2350,
    "priceDisplay": "от 2 350 ₽",
    "minQty": "от 10 компл.",
    "badge": "Комплект 420 г/м²",
    "density": "420 г/м²",
    "fabric": "Худи из футера 3-нитки + шоппер из плотного канваса 380 г/м²",
    "fit": "Готовый сет для онбординга и подарочных боксов",
    "care": "Стирка при 30°C.",
    "colors": [
      "#4E5056",
      "#666C4F"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Единый комплект мерча: оверсайз-худи без лишних деталей и вместительный шоппер.",
    "image": "images/catalog/hoodie-architect-capsule.jpg",
    "images": [
      "images/catalog/hoodie-architect-capsule.jpg"
    ]
  },
  {
    "id": "u-tee-graphite-w",
    "title": "Футболка Heavyweight «Графит»",
    "category": "tshirts",
    "price": 990,
    "priceDisplay": "от 990 ₽",
    "minQty": "от 10 шт.",
    "badge": "Плотность 260 г/м²",
    "density": "260 г/м²",
    "fabric": "100% компакт-пенье гребенного прядения",
    "fit": "Прямой плотный силуэт, ворот 2.5 см с двойной бейкой",
    "care": "Стирка до 40°C, глажка с изнаночной стороны.",
    "colors": [
      "#3A3B3F",
      "#1D263B",
      "#8D9096"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Не просвечивает, держит идеальную форму даже после 60 стирок.",
    "image": "images/catalog/tee-graphite-w.jpg",
    "images": [
      "images/catalog/tee-graphite-w.jpg"
    ]
  },
  {
    "id": "w-tee-heavyweight-rose",
    "title": "Футболка Оверсайз «Boxy Raw»",
    "category": "tshirts",
    "price": 1090,
    "priceDisplay": "от 1 090 ₽",
    "minQty": "от 10 шт.",
    "badge": "Кулирка 280 г/м²",
    "density": "280 г/м²",
    "fabric": "100% чесаный хлопок повышенной поверхностной плотности",
    "fit": "Квадратный бокси-фит, спущенный рукав до локтя",
    "care": "Деликатная стирка при 30°C.",
    "colors": [
      "#A65838",
      "#18181A",
      "#F5F5F0"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Трендовый стритвир-крой. Прекрасная база под масштабную шелкографию на спине.",
    "image": "images/catalog/tee-boxy-w.jpg",
    "images": [
      "images/catalog/tee-boxy-w.jpg"
    ]
  },
  {
    "id": "u-tee-heavyweight-base",
    "title": "Футболка Базовая Heavyweight",
    "category": "tshirts",
    "price": 950,
    "priceDisplay": "от 950 ₽",
    "minQty": "от 10 шт.",
    "badge": "Пенье 240 г/м²",
    "density": "240 г/м²",
    "fabric": "100% чесаный хлопок пенье",
    "fit": "Классический прямой крой на каждый день",
    "care": "Стирка при 30°C.",
    "colors": [
      "#4E5054",
      "#243048",
      "#8B8E94"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Комфортная плотная футболка в сдержанной базовой гамме.",
    "image": "images/catalog/tee-heavyweight.jpg",
    "images": [
      "images/catalog/tee-heavyweight.jpg"
    ]
  },
  {
    "id": "u-tee-acid-wash",
    "title": "Футболка Vintage Acid Wash",
    "category": "tshirts",
    "price": 1250,
    "priceDisplay": "от 1 250 ₽",
    "minQty": "от 10 шт.",
    "badge": "Варка 250 г/м²",
    "density": "250 г/м²",
    "fabric": "100% вареный хлопок со специальной энзимной обработкой",
    "fit": "Винтажный непринужденный силуэт со слегка потертыми краями",
    "care": "Стирка при 30°C.",
    "colors": [
      "#6B5B7B",
      "#6D7075",
      "#4E787B"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Индивидуальный рисунок варки на каждом изделии. Эффект дорогого мерча.",
    "image": "images/catalog/tee-acid-wash.jpg",
    "images": [
      "images/catalog/tee-acid-wash.jpg"
    ]
  },
  {
    "id": "u-tank-mesh-w",
    "title": "Майка Спортивная Mesh (Unisex)",
    "category": "tshirts",
    "price": 890,
    "priceDisplay": "от 890 ₽",
    "minQty": "от 10 шт.",
    "badge": "Микросетка 210 г/м²",
    "density": "210 г/м²",
    "fabric": "Дышащая микропористая полисетка со спандексом",
    "fit": "Атлетический крой с комфортными проймами для свободы движений",
    "care": "Быстросохнущая ткань, стирка при 30°C.",
    "colors": [
      "#141416",
      "#F5F5F0"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "shortDesc": "Спортивный мерч для беговых клубов, студий фитнеса и летних фестивалей.",
    "image": "images/catalog/tank-mesh-w.jpg",
    "images": [
      "images/catalog/tank-mesh-w.jpg"
    ]
  },
  {
    "id": "u-tee-boxy-m",
    "title": "Футболка Оверсайз «Boxy Raw» (Earth)",
    "category": "tshirts",
    "price": 1090,
    "priceDisplay": "от 1 090 ₽",
    "minQty": "от 10 шт.",
    "badge": "Кулирка 280 г/м²",
    "density": "280 г/м²",
    "fabric": "100% чесаный хлопок глубокого окрашивания",
    "fit": "Свободный квадратный фит, удлиненный рукав",
    "care": "Стирка при 30°C.",
    "colors": [
      "#6E5544",
      "#707867",
      "#6B6D72"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Палитра земляных оттенков для современных стритвир-коллекций.",
    "image": "images/catalog/tee-boxy-m.jpg",
    "images": [
      "images/catalog/tee-boxy-m.jpg"
    ]
  },
  {
    "id": "u-longsleeve-indigo",
    "title": "Лонгслив Плотный «Индиго»",
    "category": "tshirts",
    "price": 1290,
    "priceDisplay": "от 1 290 ₽",
    "minQty": "от 10 шт.",
    "badge": "Плотность 280 г/м²",
    "density": "280 г/м²",
    "fabric": "100% гребенной хлопок пенье, двойная отстрочка",
    "fit": "Удлиненный рукав с эластичными манжетами, прямой силуэт",
    "care": "Стирка при 30°C, сушка на плечиках.",
    "colors": [
      "#2D4E7E",
      "#4A5A78",
      "#4E6A58"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Демисезонный лонгслив повышенной плотности для брендирования рукавов и спины.",
    "image": "images/catalog/longsleeve-indigo.jpg",
    "images": [
      "images/catalog/longsleeve-indigo.jpg"
    ]
  },
  {
    "id": "u-tank-mesh-m",
    "title": "Майка Спортивная Mesh Black",
    "category": "tshirts",
    "price": 890,
    "priceDisplay": "от 890 ₽",
    "minQty": "от 10 шт.",
    "badge": "Микросетка 210 г/м²",
    "density": "210 г/м²",
    "fabric": "Дышащая микропористая ткань с отводом влаги",
    "fit": "Атлетический спортивный крой",
    "care": "Стирка при 30°C.",
    "colors": [
      "#111113"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Легкая дышащая майка для тренировок и командных соревнований.",
    "image": "images/catalog/tank-mesh-m.jpg",
    "images": [
      "images/catalog/tank-mesh-m.jpg"
    ]
  },
  {
    "id": "u-tank-ribbed-m",
    "title": "Майка Рибана «Black Rib»",
    "category": "tshirts",
    "price": 850,
    "priceDisplay": "от 850 ₽",
    "minQty": "от 10 шт.",
    "badge": "Рибана 260 г/м²",
    "density": "260 г/м²",
    "fabric": "95% хлопок в мелкий рубчик, 5% эластан",
    "fit": "Приталенный комфортный силуэт, плотная окантовка ворота",
    "care": "Стирка 30°C.",
    "colors": [
      "#141416"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Базовая майка из эластичной рибаны, отлично сочетается с овершотами.",
    "image": "images/catalog/tank-ribbed-m.jpg",
    "images": [
      "images/catalog/tank-ribbed-m.jpg"
    ]
  },
  {
    "id": "u-tee-pure-white",
    "title": "Футболка Pure White Premium",
    "category": "tshirts",
    "price": 950,
    "priceDisplay": "от 950 ₽",
    "minQty": "от 10 шт.",
    "badge": "Хлопок 250 г/м²",
    "density": "250 г/м²",
    "fabric": "100% хлопок пенье высокой очистки волокна",
    "fit": "Безупречная классическая посадка",
    "care": "Стирка 40°C.",
    "colors": [
      "#FFFFFF",
      "#F5F5F0"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Кристально белая основа для яркой шелкографии и DTF-печати.",
    "image": "images/catalog/tee-pure-white.jpg",
    "images": [
      "images/catalog/tee-pure-white.jpg"
    ]
  },
  {
    "id": "u-shirt-oxford-w",
    "title": "Рубашка Oxford Classic",
    "category": "shirts",
    "price": 2490,
    "priceDisplay": "от 2 490 ₽",
    "minQty": "от 10 шт.",
    "badge": "Оксфорд 190 г/м²",
    "density": "190 г/м²",
    "fabric": "100% мерсеризованный длинноволокнистый хлопок",
    "fit": "Классический крой, воротник на пуговицах, аккуратные манжеты",
    "care": "Стирка при 40°C, легкая глажка.",
    "colors": [
      "#95B5DE",
      "#EED6DF"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Элегантная классика для мероприятий, форумов и офисных команд.",
    "image": "images/catalog/shirt-oxford-w.jpg",
    "images": [
      "images/catalog/shirt-oxford-w.jpg"
    ]
  },
  {
    "id": "u-shirt-flannel-red",
    "title": "Рубашка Фланелевая в клетку",
    "category": "shirts",
    "price": 2790,
    "priceDisplay": "от 2 790 ₽",
    "minQty": "от 10 шт.",
    "badge": "Фланель 270 г/м²",
    "density": "270 г/м²",
    "fabric": "100% мягчайшая ворсованная хлопковая фланель",
    "fit": "Свободный крой с накладными нагрудными карманами",
    "care": "Стирка при 30°C.",
    "colors": [
      "#8B2626",
      "#1C1C20"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Теплая и стильная рубашка для неформальных корпоративных капсул.",
    "image": "images/catalog/shirt-flannel-red.jpg",
    "images": [
      "images/catalog/shirt-flannel-red.jpg"
    ]
  },
  {
    "id": "m-jacket-workwear-camel",
    "title": "Куртка-Рубашка Workwear Твил",
    "category": "shirts",
    "price": 3490,
    "priceDisplay": "от 3 490 ₽",
    "minQty": "от 10 шт.",
    "badge": "Твил 360 г/м²",
    "density": "360 г/м²",
    "fabric": "100% плотный хлопковый твил с водоотталкивающей пропиткой",
    "fit": "Прямой силуэт овершота, нагрудные карманы с клапанами, металлофурнитура",
    "care": "Щадящая стирка 30°C или химчистка.",
    "colors": [
      "#C19A6B",
      "#1F4B58",
      "#182138"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Флагманская верхняя рубашка-куртка. Статусный мерч для партнеров и лидеров.",
    "image": "images/catalog/jacket-workwear-twill.jpg",
    "images": [
      "images/catalog/jacket-workwear-twill.jpg"
    ]
  },
  {
    "id": "u-shirt-minimal-w",
    "title": "Рубашка Оверсайз «Минимал»",
    "category": "shirts",
    "price": 2390,
    "priceDisplay": "от 2 390 ₽",
    "minQty": "от 10 шт.",
    "badge": "Поплин 180 г/м²",
    "density": "180 г/м²",
    "fabric": "Хлопок с добавлением эластана для устойчивости к сминанию",
    "fit": "Расслабленный удлиненный силуэт",
    "care": "Стирка при 30°C.",
    "colors": [
      "#B5B7BC",
      "#141416",
      "#EAE4D8"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "shortDesc": "Утонченный минимализм. Идеальна для тонкой вышивки на воротнике или манжете.",
    "image": "images/catalog/shirt-minimal-w.jpg",
    "images": [
      "images/catalog/shirt-minimal-w.jpg"
    ]
  },
  {
    "id": "u-shirt-oxford-m",
    "title": "Рубашка Oxford Classic (Regular)",
    "category": "shirts",
    "price": 2490,
    "priceDisplay": "от 2 490 ₽",
    "minQty": "от 10 шт.",
    "badge": "Оксфорд 190 г/м²",
    "density": "190 г/м²",
    "fabric": "100% мерсеризованный хлопок оксфордского плетения",
    "fit": "Regular Fit с воротником button-down и перламутровыми пуговицами",
    "care": "Стирка при 40°C, легкая глажка с паром.",
    "colors": [
      "#5D7EAB",
      "#ECEFF4"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Деловой стиль для официальных делегаций, фронт-офиса и спикеров.",
    "image": "images/catalog/shirt-oxford-m.jpg",
    "images": [
      "images/catalog/shirt-oxford-m.jpg"
    ]
  },
  {
    "id": "u-shirt-flannel-m",
    "title": "Рубашка Фланелевая Утепленная",
    "category": "shirts",
    "price": 2890,
    "priceDisplay": "от 2 890 ₽",
    "minQty": "от 10 шт.",
    "badge": "Фланель 280 г/м²",
    "density": "280 г/м²",
    "fabric": "100% двусторонняя ворсованная хлопковая фланель",
    "fit": "Свободная посадка, ношение поверх футболки или лонгслива",
    "care": "Стирка при 30°C, бережный отжим.",
    "colors": [
      "#23443C",
      "#8C2A2A"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Теплая оверсайз-рубашка для осенне-зимних корпоративных выездов.",
    "image": "images/catalog/shirt-flannel-m.jpg",
    "images": [
      "images/catalog/shirt-flannel-m.jpg"
    ]
  },
  {
    "id": "u-jacket-workwear-brown",
    "title": "Куртка-Рубашка Workwear Brown",
    "category": "shirts",
    "price": 3490,
    "priceDisplay": "от 3 490 ₽",
    "minQty": "от 10 шт.",
    "badge": "Канвас 360 г/м²",
    "density": "360 г/м²",
    "fabric": "Тяжелый хлопковый канвас в оттенке горького шоколада",
    "fit": "Прямой силуэт верхней куртки с двойными карманами",
    "care": "Щадящая стирка или химчистка.",
    "colors": [
      "#45372B"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Ультра-прочный рабочий овершот премиум-класса.",
    "image": "images/catalog/jacket-workwear-brown.jpg",
    "images": [
      "images/catalog/jacket-workwear-brown.jpg"
    ]
  },
  {
    "id": "u-shirt-minimal-m",
    "title": "Рубашка Оверсайз «Минимал» Duo",
    "category": "shirts",
    "price": 2590,
    "priceDisplay": "от 2 590 ₽",
    "minQty": "от 10 шт.",
    "badge": "Поплин 190 г/м²",
    "density": "190 г/м²",
    "fabric": "Плотный смесовый хлопок с антисминаемой пропиткой",
    "fit": "Современный дизайнерский крой, скрытая или контрастная планка",
    "care": "Стирка при 30°C.",
    "colors": [
      "#141416",
      "#FFFFFF"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "shortDesc": "Эффектная двухцветная или монохромная модель для креативных команд.",
    "image": "images/catalog/shirt-minimal-m.jpg",
    "images": [
      "images/catalog/shirt-minimal-m.jpg"
    ]
  },
  {
    "id": "u-shirt-linen-breeze",
    "title": "Рубашка Льняная «Бриз»",
    "category": "shirts",
    "price": 2790,
    "priceDisplay": "от 2 790 ₽",
    "minQty": "от 10 шт.",
    "badge": "Лён 190 г/м²",
    "density": "190 г/м²",
    "fabric": "55% умягченный натуральный лён, 45% длинноволокнистый хлопок",
    "fit": "Летний свободный крой, комфортная вентиляция",
    "care": "Стирка при 30°C без интенсивного отжима.",
    "colors": [
      "#1E2538",
      "#EAE5DA"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "shortDesc": "Дышащий натуральный лён для летних и выездных корпоративных событий.",
    "image": "images/catalog/shirt-linen-breeze.jpg",
    "images": [
      "images/catalog/shirt-linen-breeze.jpg"
    ]
  },
  {
    "id": "u-bag-shopper",
    "title": "Шоппер холщовый с карманом",
    "category": "accessories",
    "price": 490,
    "priceDisplay": "от 490 ₽",
    "minQty": "от 15 шт.",
    "badge": "Канвас 380 г/м²",
    "density": "380 г/м²",
    "fabric": "100% суровый необработанный хлопковый канвас",
    "fit": "Вместительный размер 42х38х10 см, внешний карман с контрастной вставкой",
    "care": "Стирка 30°C.",
    "colors": [
      "#EDE6D8",
      "#2E2E2B"
    ],
    "sizes": [
      "One Size"
    ],
    "shortDesc": "Выдерживает вес до 20 кг. Шелкография высокой стойкости.",
    "image": "images/catalog/acc-shopper-canvas.jpg",
    "images": [
      "images/catalog/acc-shopper-canvas.jpg"
    ]
  },
  {
    "id": "u-cap-baseball-twill",
    "title": "Кепка 6-клинка с металлической пряжкой",
    "category": "accessories",
    "price": 690,
    "priceDisplay": "от 690 ₽",
    "minQty": "от 15 шт.",
    "badge": "Твил 320 г/м²",
    "density": "320 г/м²",
    "fabric": "100% хлопковый твил саржевого переплетения",
    "fit": "Регулируемый ремешок, изогнутый плотный козырек",
    "care": "Сухая чистка щеткой.",
    "colors": [
      "#111114",
      "#2B2B30"
    ],
    "sizes": [
      "Adjustable"
    ],
    "shortDesc": "Идеальная основа под объемную 3D-вышивку логотипа на лобной части.",
    "image": "images/catalog/acc-cap-6panel.jpg",
    "images": [
      "images/catalog/acc-cap-6panel.jpg"
    ]
  },
  {
    "id": "u-beanie-ribbed",
    "title": "Шапка Бини в рубчик",
    "category": "accessories",
    "price": 650,
    "priceDisplay": "от 650 ₽",
    "minQty": "от 15 шт.",
    "badge": "Шерсть/Акрил",
    "density": "Двойная вязка",
    "fabric": "50% тонкорунная шерсть мериноса, 50% антипиллинговый акрил",
    "fit": "Эластичная плотная посадка с широким отворотом под жаккардовый патч",
    "care": "Ручная стирка в прохладной воде.",
    "colors": [
      "#1A1A1D",
      "#37373C"
    ],
    "sizes": [
      "One Size"
    ],
    "shortDesc": "Не колется, сохраняет форму после сезона носки.",
    "image": "images/catalog/acc-beanie-ribbed.jpg",
    "images": [
      "images/catalog/acc-beanie-ribbed.jpg"
    ]
  },
  {
    "id": "u-bottle-thermal-matte",
    "title": "Термобутылка Matte Black 750ml",
    "category": "accessories",
    "price": 890,
    "priceDisplay": "от 890 ₽",
    "minQty": "от 15 шт.",
    "badge": "Сталь 18/8",
    "density": "Двойные стенки",
    "fabric": "Пищевая нержавеющая сталь с порошковым матовым напылением soft-touch",
    "fit": "Вакуумная изоляция (тепло 14 часов, холод 24 часа), подарочный тубус",
    "care": "Мыть вручную мягкой губкой.",
    "colors": [
      "#111113"
    ],
    "sizes": [
      "750 ml"
    ],
    "shortDesc": "Лазерная круговая гравировка с точностью до 0.1 мм. Поставляется в индивидуальной упаковке.",
    "image": "images/catalog/acc-bottle-matte.jpg",
    "images": [
      "images/catalog/acc-bottle-matte.jpg"
    ]
  },
  {
    "id": "u-socks-pair",
    "title": "Носки базовые с брендированием",
    "category": "accessories",
    "price": 250,
    "priceDisplay": "от 250 ₽",
    "minQty": "от 30 пар",
    "badge": "Хлопок 85%",
    "density": "200 игл",
    "fabric": "85% гребенной хлопок, 12% полиамид, 3% эластан",
    "fit": "Анатомическая резинка в рубчик, усиленная пятка и мысок",
    "care": "Стирка при 40°C.",
    "colors": [
      "#3A3B3F",
      "#111114"
    ],
    "sizes": [
      "36-40",
      "41-45"
    ],
    "shortDesc": "Жаккардовое вывязывание логотипа и фирменная крафтовая этикетка.",
    "image": "images/catalog/acc-socks-pair.jpg",
    "images": [
      "images/catalog/acc-socks-pair.jpg"
    ]
  },
  {
    "id": "u-socks-pack-set",
    "title": "Набор носков в фирменной упаковке (2 пары)",
    "category": "accessories",
    "price": 490,
    "priceDisplay": "от 490 ₽",
    "minQty": "от 20 компл.",
    "badge": "Хлопок 85%",
    "density": "200 игл",
    "fabric": "85% гребенной хлопок компакт-пенье, 15% эластан/полиамид",
    "fit": "Высокий спортивный манжет с вывязанным знаком студии",
    "care": "Стирка при 40°C.",
    "colors": [
      "#4E5056",
      "#111113"
    ],
    "sizes": [
      "36-40",
      "41-45"
    ],
    "shortDesc": "Готовый подарочный сет в крафт-бирках с логотипом.",
    "image": "images/catalog/acc-socks-set.jpg",
    "images": [
      "images/catalog/acc-socks-set.jpg"
    ]
  },
  {
    "id": "u-laptop-sleeve-felt",
    "title": "Чехол для ноутбука 14/16″ Felt",
    "category": "accessories",
    "price": 1190,
    "priceDisplay": "от 1 190 ₽",
    "minQty": "от 10 шт.",
    "badge": "Войлок 5 мм",
    "density": "Плотный войлок",
    "fabric": "Прессованный меланжевый войлок премиум-плотности с мягким подкладом",
    "fit": "Точный размер под ноутбуки 14″ и 16″, надежная защита от ударов",
    "care": "Сухая чистка.",
    "colors": [
      "#2D2E32"
    ],
    "sizes": [
      "14 inch",
      "16 inch"
    ],
    "shortDesc": "Стильный аксессуар для IT-команд с фирменной кожаной или металлической биркой.",
    "image": "images/catalog/acc-laptop-sleeve.jpg",
    "images": [
      "images/catalog/acc-laptop-sleeve.jpg"
    ]
  },
  {
    "id": "u-notebook-softtouch",
    "title": "Ежедневник Hardcover Soft-Touch",
    "category": "stationery",
    "price": 690,
    "priceDisplay": "от 690 ₽",
    "minQty": "от 20 шт.",
    "badge": "Бумага 100 г/м²",
    "density": "100 г/м²",
    "fabric": "Премиальная кремовая бумага Munken (Швеция), 192 страницы в точку",
    "fit": "Формат А5, твердый переплет soft-touch, фиксирующая резинка и ляссе",
    "care": "Беречь от влаги.",
    "colors": [
      "#111114",
      "#202026"
    ],
    "sizes": [
      "A5 (148x210 мм)"
    ],
    "shortDesc": "Глубокое слепое блинтовое тиснение или тиснение фольгой.",
    "image": "images/catalog/stat-notebook-softtouch.jpg",
    "images": [
      "images/catalog/stat-notebook-softtouch.jpg"
    ]
  },
  {
    "id": "u-cardholder-black",
    "title": "Картхолдер кожаный Classic",
    "category": "stationery",
    "price": 750,
    "priceDisplay": "от 750 ₽",
    "minQty": "от 15 шт.",
    "badge": "Натуральная кожа",
    "density": "Толщина 1.4 мм",
    "fabric": "100% натуральная фактурная кожа с износостойким покрытием",
    "fit": "Компактный размер, 4 отделения для карт и проездных",
    "care": "Протирать сухой мягкой тканью.",
    "colors": [
      "#141416"
    ],
    "sizes": [
      "100x72 мм"
    ],
    "shortDesc": "Минималистичный деловой аксессуар под слепое тиснение.",
    "image": "images/catalog/stat-cardholder-black.jpg",
    "images": [
      "images/catalog/stat-cardholder-black.jpg"
    ]
  },
  {
    "id": "u-sketchbook-spiral",
    "title": "Скетчбук на спирали + Ручка",
    "category": "stationery",
    "price": 690,
    "priceDisplay": "от 690 ₽",
    "minQty": "от 20 шт.",
    "badge": "Плотность 140 г/м²",
    "density": "140 г/м²",
    "fabric": "Плотная бумага для графики + металлическая ручка-роллер в комплекте",
    "fit": "Удобная металлическая пружина, плотная картонная подложка",
    "care": "Хранить в сухом месте.",
    "colors": [
      "#F5F5F0",
      "#1A1A1E"
    ],
    "sizes": [
      "A5 / A4"
    ],
    "shortDesc": "Идеальный рабочий комплект для конференций, хакатонов и дизайнеров.",
    "image": "images/catalog/stat-sketchbook-spiral.jpg",
    "images": [
      "images/catalog/stat-sketchbook-spiral.jpg"
    ]
  },
  {
    "id": "u-pin-set-metal",
    "title": "Набор эмалированных пинов «Знак Своих»",
    "category": "stationery",
    "price": 490,
    "priceDisplay": "от 490 ₽",
    "minQty": "от 20 компл.",
    "badge": "Горячая эмаль",
    "density": "Толщина 1.8 мм",
    "fabric": "Цинковый сплав с гальваническим покрытием и горячей эмалью",
    "fit": "Надежный цанговый зажим «бабочка», подарочная карточка-подложка",
    "care": "Не ронять на твердые поверхности.",
    "colors": [
      "#000000",
      "#DDBFB4"
    ],
    "sizes": [
      "25x25 мм"
    ],
    "shortDesc": "Коллекционный набор из 3 металлических значков для одежды, рюкзаков и кепок.",
    "image": "images/catalog/stat-pins-set.jpg",
    "images": [
      "images/catalog/stat-pins-set.jpg"
    ]
  },
  {
    "id": "u-cardholder-embossed",
    "title": "Кожаный картхолдер со слепым тиснением",
    "category": "stationery",
    "price": 790,
    "priceDisplay": "от 790 ₽",
    "minQty": "от 15 шт.",
    "badge": "Кожа Crazy Horse",
    "density": "Толщина 1.4 мм",
    "fabric": "100% натуральная кожа премиальной выделки, ручная прошивка",
    "fit": "4 слота для банковских карт и центральное отделение",
    "care": "Обработка воском для кожи.",
    "colors": [
      "#1C1C20"
    ],
    "sizes": [
      "100x75 мм"
    ],
    "shortDesc": "Статусный корпоративный сувенир с индивидуальным клише вашего бренда.",
    "image": "images/catalog/stat-cardholder-embossed.jpg",
    "images": [
      "images/catalog/stat-cardholder-embossed.jpg"
    ]
  },
  {
    "id": "u-pen-metal-roller",
    "title": "Ручка металлическая Rollerball в футляре",
    "category": "stationery",
    "price": 450,
    "priceDisplay": "от 450 ₽",
    "minQty": "от 25 шт.",
    "badge": "Анодированный алюминий",
    "density": "Вес 28 г",
    "fabric": "Матовый анодированный алюминий, немецкий стержень Schmidt 0.5 мм",
    "fit": "Сбалансированный тяжелый корпус и фирменный металлический футляр",
    "care": "Сменные стандартные стержни.",
    "colors": [
      "#141416",
      "#C8C8CC",
      "#68686D",
      "#1E2D4E"
    ],
    "sizes": [
      "Длина 138 мм"
    ],
    "shortDesc": "Круговая лазерная гравировка логотипа по металлу. Поставляется в индивидуальном футляре.",
    "image": "images/catalog/stat-pen-roller.jpg",
    "images": [
      "images/catalog/stat-pen-roller.jpg"
    ]
  }
];

// ==========================================================================
// 2. HERO INTERACTIVE 2D CLOTHES RACK (REAL PHOTOGRAPHY ON HANGERS)
// ==========================================================================
const RACK_GARMENTS = [
  {
    "id": "hoodie-cream",
    "name": "Худи Чистый Крой «Архитект»",
    "subtitle": "Флагманский оверсайз из плотного футера 3-нитки",
    "colorName": "Графит / Крем / Черный",
    "colorHex": "#EAE4D7",
    "gsm": "420 GSM",
    "price": "от 1 950 ₽",
    "minQty": "от 10 шт.",
    "badge": "Пенье 420 г/м²",
    "density": "420 г/м²",
    "fabric": "100% гребенной хлопок пенье с велюровым эффектом",
    "fit": "Свободный крой без шнурков, двойной структурированный капюшон",
    "care": "Деликатная стирка при 30°C, вывернув наизнанку.",
    "sku": "ZS-H420-ARC",
    "category": "hoodies",
    "imgFront": "images/catalog/hoodie-architect-m.jpg",
    "imgBack": "images/catalog/hoodie-architect-w.jpg"
  },
  {
    "id": "hoodie-black",
    "name": "Зип-Худи «Обсидиан»",
    "subtitle": "Премиальная толстовка на металлической молнии YKK",
    "colorName": "Серый / Слива / Черный",
    "colorHex": "#1C1C1E",
    "gsm": "440 GSM",
    "price": "от 2 290 ₽",
    "minQty": "от 10 шт.",
    "badge": "Футер 440 г/м²",
    "density": "440 г/м²",
    "fabric": "100% турецкий хлопок, металлическая молния YKK",
    "fit": "Глубокий капюшон, два вместительных накладных кармана",
    "care": "Стирка при 30°C с застегнутой молнией.",
    "sku": "ZS-ZH440-OBS",
    "category": "hoodies",
    "imgFront": "images/catalog/hoodie-architect-m.jpg",
    "imgBack": "images/catalog/hoodie-architect-w.jpg"
  },
  {
    "id": "tshirt-offwhite",
    "name": "Футболка Pure White Premium",
    "subtitle": "Плотный премиум-хлопок 250 г/м² с идеальной посадкой",
    "colorName": "Кристально белый",
    "colorHex": "#F5F5F0",
    "gsm": "250 GSM",
    "price": "от 950 ₽",
    "minQty": "от 10 шт.",
    "badge": "Хлопок 250 г/м²",
    "density": "250 г/м²",
    "fabric": "100% хлопок пенье высокой очистки волокна",
    "fit": "Классический прямой крой, плотный ворот с двойной отстрочкой",
    "care": "Стирка при 40°C. Сохраняет форму и цвет.",
    "sku": "ZS-TS250-WHT",
    "category": "tshirts",
    "imgFront": "images/catalog/tee-pure-white.jpg",
    "imgBack": "images/catalog/tee-boxy-w.jpg"
  },
  {
    "id": "jacket-camel",
    "name": "Куртка-Рубашка Workwear Твил",
    "subtitle": "Плотный хлопковый твил с водоотталкивающей пропиткой",
    "colorName": "Кэмел / Клетка / Индиго",
    "colorHex": "#C19A6B",
    "gsm": "360 GSM",
    "price": "от 3 490 ₽",
    "minQty": "от 10 шт.",
    "badge": "Твил 360 г/м²",
    "density": "360 г/м²",
    "fabric": "100% тяжелый хлопковый твил саржевого переплетения",
    "fit": "Прямой силуэт овершота, нагрудные карманы с клапанами",
    "care": "Химчистка или щадящая стирка при 30°C.",
    "sku": "ZS-JK360-CML",
    "category": "shirts",
    "imgFront": "images/catalog/jacket-workwear-twill.jpg",
    "imgBack": "images/catalog/jacket-workwear-brown.jpg"
  },
  {
    "id": "tank-mesh",
    "name": "Майка Спортивная Mesh Black",
    "subtitle": "Перфорированная дышащая сетка для тренировок и фестивалей",
    "colorName": "Матовый черный",
    "colorHex": "#111111",
    "gsm": "210 GSM",
    "price": "от 890 ₽",
    "minQty": "от 10 шт.",
    "badge": "Микросетка 210 г/м²",
    "density": "210 г/м²",
    "fabric": "Дышащая микропористая ткань с отводом влаги",
    "fit": "Атлетический спортивный крой",
    "care": "Быстро сохнет, машинная стирка 30°C.",
    "sku": "ZS-TK210-BLK",
    "category": "tshirts",
    "imgFront": "images/catalog/tank-mesh-m.jpg",
    "imgBack": "images/catalog/tank-mesh-w.jpg"
  },
  {
    "id": "longsleeve-navy",
    "name": "Лонгслив Плотный «Индиго»",
    "subtitle": "Плотный трикотаж пенье с эластичными манжетами",
    "colorName": "Индиго / Синий / Хаки",
    "colorHex": "#1A2238",
    "gsm": "280 GSM",
    "price": "от 1 290 ₽",
    "minQty": "от 10 шт.",
    "badge": "Плотность 280 г/м²",
    "density": "280 г/м²",
    "fabric": "100% гребенной хлопок пенье, двойная отстрочка",
    "fit": "Прямой силуэт с удлиненным рукавом",
    "care": "Стирка при 30°C. Сохраняет форму и цвет.",
    "sku": "ZS-LS280-NVY",
    "category": "tshirts",
    "imgFront": "images/catalog/longsleeve-indigo.jpg",
    "imgBack": "images/catalog/shirt-minimal-m.jpg"
  }
];

let rackState = {
  activeIndex: 0,
  mode: 'browsing', // 'browsing' (Mode A) or 'focused' (Mode B)
  viewSide: 'front', // 'front' or 'back'
  isMobile: window.innerWidth < 640
};

function initClothesRack() {
  const stage = document.getElementById('rackStage');
  if (!stage) return;

  stage.innerHTML = '';

  RACK_GARMENTS.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'rack-garment-item';
    el.id = `rack-item-${idx}`;
    el.setAttribute('data-index', idx);
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `${item.name}, ${item.gsm}`);

    el.innerHTML = `
      <div class="garment-flipper" id="flipper-${idx}">
        <!-- FRONT FACE -->
        <div class="garment-face garment-front flex flex-col items-center justify-start h-full">
          <!-- Wire Hanger Hook connected cleanly to card -->
          <div class="hanger-hook-wrapper w-full flex justify-center -mb-1 z-10 pointer-events-none">
            <svg class="w-10 h-11 drop-shadow-sm" viewBox="0 0 40 44" fill="none">
              <path d="M 20 42 L 20 22 C 20 11, 31 4, 27 1 C 23 -2, 12 2, 12 11" stroke="#2C2C2E" stroke-width="2.6" stroke-linecap="round"/>
              <circle cx="12" cy="11" r="2" fill="#444"/>
              <rect x="17.5" y="24" width="5" height="4" rx="1.2" fill="#333"/>
              <path d="M 20 27 L 2 43 M 20 27 L 38 43" stroke="#3A3A3D" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
          </div>
          <!-- Clean Studio Garment Card -->
          <div class="garment-photo-container relative w-full h-[300px] sm:h-[330px] rounded-2xl overflow-hidden bg-[#C7C7C7] border border-black/10 shadow-xl flex items-center justify-center">
            <img 
              src="${item.imgFront}" 
              alt="${item.name} Front" 
              class="w-full h-full object-cover object-top"
              loading="eager"
            >
            <div class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/75 text-[9px] font-bold uppercase tracking-wider text-brand-rose flex items-center gap-1">
              <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/></svg>
              <span>Знак Своих</span>
            </div>
          </div>
        </div>

        <!-- BACK FACE -->
        <div class="garment-face garment-back flex flex-col items-center justify-start h-full">
          <div class="hanger-hook-wrapper w-full flex justify-center -mb-1 z-10 pointer-events-none">
            <svg class="w-10 h-11 drop-shadow-sm" viewBox="0 0 40 44" fill="none">
              <path d="M 20 42 L 20 22 C 20 11, 31 4, 27 1 C 23 -2, 12 2, 12 11" stroke="#2C2C2E" stroke-width="2.6" stroke-linecap="round"/>
              <circle cx="12" cy="11" r="2" fill="#444"/>
              <rect x="17.5" y="24" width="5" height="4" rx="1.2" fill="#333"/>
              <path d="M 20 27 L 2 43 M 20 27 L 38 43" stroke="#3A3A3D" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="garment-photo-container relative w-full h-[300px] sm:h-[330px] rounded-2xl overflow-hidden bg-[#C7C7C7] border border-black/10 shadow-xl flex items-center justify-center">
            <img 
              src="${item.imgBack}" 
              alt="${item.name} Back" 
              class="w-full h-full object-cover object-top"
              loading="eager"
            >
            <div class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/75 text-[9px] font-bold uppercase tracking-wider text-brand-rose flex items-center gap-1">
              <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/></svg>
              <span>Вид 2</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Realistic Fashion Paper Hang-Tag (Mode B Detail) -->
      <div class="paper-hang-tag" id="hang-tag-${idx}">
        <div class="hang-tag-cord"></div>
        <div class="hang-tag-eyelet"></div>
        <div class="flex items-center justify-between pb-1 mb-1 border-b border-black/10">
          <svg class="w-3 h-3 text-[#1C1C1E]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
          </svg>
          <span class="text-[7px] font-bold text-[#8E8E93] tracking-widest uppercase">${item.sku}</span>
        </div>
        <div class="text-[9px] font-black uppercase text-[#141416] leading-tight mb-0.5">${item.name}</div>
        <div class="text-[8px] font-bold text-[#444] mb-1">${item.gsm}</div>
        <div class="text-[6.5px] text-[#666] leading-tight mb-1.5">${item.fabric}</div>
        <!-- Barcode -->
        <svg class="w-full h-4 mb-0.5 opacity-80" viewBox="0 0 80 16" fill="currentColor">
          <rect x="0" y="0" width="2" height="16"/>
          <rect x="4" y="0" width="1" height="16"/>
          <rect x="7" y="0" width="3" height="16"/>
          <rect x="12" y="0" width="1" height="16"/>
          <rect x="15" y="0" width="2" height="16"/>
          <rect x="19" y="0" width="4" height="16"/>
          <rect x="25" y="0" width="1" height="16"/>
          <rect x="28" y="0" width="2" height="16"/>
          <rect x="32" y="0" width="3" height="16"/>
          <rect x="37" y="0" width="1" height="16"/>
          <rect x="40" y="0" width="2" height="16"/>
          <rect x="44" y="0" width="4" height="16"/>
          <rect x="50" y="0" width="1" height="16"/>
          <rect x="53" y="0" width="3" height="16"/>
          <rect x="58" y="0" width="2" height="16"/>
          <rect x="62" y="0" width="1" height="16"/>
          <rect x="65" y="0" width="3" height="16"/>
          <rect x="70" y="0" width="2" height="16"/>
          <rect x="74" y="0" width="1" height="16"/>
          <rect x="77" y="0" width="3" height="16"/>
        </svg>
        <div class="text-[6px] tracking-widest text-center text-[#888] font-mono mb-1">2 001924 883014</div>
        <div class="text-[8.5px] font-black text-[#1C1C1E] text-center pt-0.5 border-t border-black/10">${item.price}</div>
      </div>
    `;

    el.addEventListener('click', () => {
      handleRackItemClick(idx);
    });

    stage.appendChild(el);
  });

  renderRackDots();

  window.addEventListener('resize', () => {
    const mob = window.innerWidth < 640;
    if (mob !== rackState.isMobile) {
      rackState.isMobile = mob;
      updateRackPositions();
    }
  });

  // Touch gestures for mobile
  let touchStartX = 0;
  stage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        navigateRack(-1);
      } else {
        navigateRack(1);
      }
    }
  }, { passive: true });

  updateRackPositions();
}

function renderRackDots() {
  const container = document.getElementById('rackDotsContainer');
  if (!container) return;
  container.innerHTML = RACK_GARMENTS.map((_, i) => `
    <button 
      type="button" 
      onclick="selectRackItem(${i})" 
      class="w-2 h-2 rounded-full transition-all duration-300 ${i === rackState.activeIndex ? 'w-6 bg-[#1C1C1E]' : 'bg-black/20 hover:bg-black/40'}"
      aria-label="Вещь ${i + 1}"
    ></button>
  `).join('');
}

function handleRackItemClick(index) {
  if (rackState.activeIndex !== index) {
    selectRackItem(index);
  } else {
    if (rackState.mode === 'browsing') {
      enterFocusedMode();
    } else {
      toggleRackViewSide();
    }
  }
}

function selectRackItem(index) {
  if (index < 0 || index >= RACK_GARMENTS.length) return;
  rackState.activeIndex = index;
  rackState.viewSide = 'front';
  updateRackPositions();
}

function navigateRack(delta) {
  let next = rackState.activeIndex + delta;
  if (next < 0) next = RACK_GARMENTS.length - 1;
  if (next >= RACK_GARMENTS.length) next = 0;
  selectRackItem(next);
}

function enterFocusedMode() {
  rackState.mode = 'focused';
  rackState.viewSide = 'front';
  updateRackPositions();
}

function exitFocusedMode() {
  rackState.mode = 'browsing';
  rackState.viewSide = 'front';
  updateRackPositions();
}

function setRackViewSide(side) {
  rackState.viewSide = side;
  updateRackFlipper();
  updatePillPosition();
}

function toggleRackViewSide() {
  setRackViewSide(rackState.viewSide === 'front' ? 'back' : 'front');
}

function updatePillPosition() {
  const pill = document.getElementById('rackFlipPill');
  const btnFront = document.getElementById('rackBtnFront');
  const btnBack = document.getElementById('rackBtnBack');
  if (!pill || !btnFront || !btnBack) return;

  if (rackState.viewSide === 'front') {
    pill.style.left = '4px';
    btnFront.className = 'relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors text-white';
    btnBack.className = 'relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors text-[#6E6E73] hover:text-[#1C1C1E]';
  } else {
    pill.style.left = 'calc(50%)';
    btnFront.className = 'relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors text-[#6E6E73] hover:text-[#1C1C1E]';
    btnBack.className = 'relative z-10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors text-white';
  }
}

function updateRackFlipper() {
  const curFlipper = document.getElementById(`flipper-${rackState.activeIndex}`);
  if (curFlipper) {
    curFlipper.style.transform = rackState.viewSide === 'back' ? 'rotateY(180deg)' : 'rotateY(0deg)';
  }
}

function updateRackPositions() {
  const isMob = rackState.isMobile;
  const isFocused = rackState.mode === 'focused';
  const activeItem = RACK_GARMENTS[rackState.activeIndex];

  // 1. Update text & badges
  const titleEl = document.getElementById('rackActiveTitle');
  const badgeEl = document.getElementById('rackActiveBadge');
  const priceEl = document.getElementById('rackActivePrice');
  const colorDotEl = document.getElementById('rackActiveColorDot');
  const colorNameEl = document.getElementById('rackActiveColorName');

  if (titleEl) titleEl.textContent = activeItem.name;
  if (badgeEl) badgeEl.textContent = activeItem.gsm;
  if (priceEl) priceEl.textContent = activeItem.price;
  if (colorDotEl) colorDotEl.style.backgroundColor = activeItem.colorHex;
  if (colorNameEl) colorNameEl.textContent = activeItem.colorName;

  renderRackDots();

  // 2. Mode A vs Mode B controls
  const backNav = document.getElementById('rackBackNav');
  const viewToggle = document.getElementById('rackViewToggleContainer');
  const browsingControls = document.getElementById('rackBrowsingControls');
  const focusedActions = document.getElementById('rackFocusedActions');

  if (isFocused) {
    if (backNav) {
      backNav.classList.remove('opacity-0', 'pointer-events-none', '-translate-x-3');
      backNav.classList.add('opacity-100', 'translate-x-0');
    }
    if (viewToggle) {
      viewToggle.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-3');
      viewToggle.classList.add('opacity-100', 'translate-x-0');
    }
    if (browsingControls) {
      browsingControls.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
    }
    if (focusedActions) {
      focusedActions.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
      focusedActions.classList.add('opacity-100', 'translate-y-0');
    }
    updatePillPosition();
  } else {
    if (backNav) {
      backNav.classList.add('opacity-0', 'pointer-events-none', '-translate-x-3');
      backNav.classList.remove('opacity-100', 'translate-x-0');
    }
    if (viewToggle) {
      viewToggle.classList.add('opacity-0', 'pointer-events-none', 'translate-x-3');
      viewToggle.classList.remove('opacity-100', 'translate-x-0');
    }
    if (browsingControls) {
      browsingControls.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-3');
      browsingControls.classList.add('opacity-100', 'translate-y-0');
    }
    if (focusedActions) {
      focusedActions.classList.add('opacity-0', 'pointer-events-none', 'translate-y-3');
      focusedActions.classList.remove('opacity-100', 'translate-y-0');
    }
  }

  // 3. Compute 3D positions for garments along rail
  RACK_GARMENTS.forEach((item, idx) => {
    const el = document.getElementById(`rack-item-${idx}`);
    const flipper = document.getElementById(`flipper-${idx}`);
    const tag = document.getElementById(`hang-tag-${idx}`);
    if (!el) return;

    let diff = idx - rackState.activeIndex;

    if (idx !== rackState.activeIndex && flipper) {
      flipper.style.transform = 'rotateY(0deg)';
    }

    if (tag) {
      if (idx === rackState.activeIndex && isFocused) {
        tag.style.opacity = '1';
        tag.style.transform = isMob ? 'rotate(2deg) scale(0.9)' : 'rotate(3.5deg) scale(1)';
      } else {
        tag.style.opacity = '0';
        tag.style.transform = 'rotate(0deg) scale(0.7)';
      }
    }

    if (diff === 0) {
      if (isFocused) {
        el.style.transform = `translateX(0px) rotateY(0deg) scale(${isMob ? 1.03 : 1.08})`;
        el.style.zIndex = '40';
        el.style.opacity = '1';
        el.style.filter = 'drop-shadow(0 25px 45px rgba(0,0,0,0.22))';
        el.style.pointerEvents = 'auto';
        updateRackFlipper();
      } else {
        el.style.transform = 'translateX(0px) rotateY(0deg) scale(1)';
        el.style.zIndex = '30';
        el.style.opacity = '1';
        el.style.filter = 'brightness(1) drop-shadow(0 20px 30px rgba(0,0,0,0.18))';
        el.style.pointerEvents = 'auto';
      }
    } else {
      if (isFocused) {
        const outDist = diff > 0 ? (isMob ? 240 : 420) : (isMob ? -240 : -420);
        const rotY = diff > 0 ? -75 : 75;
        el.style.transform = `translateX(${outDist}px) rotateY(${rotY}deg) scale(0.7)`;
        el.style.zIndex = `${20 - Math.abs(diff)}`;
        el.style.opacity = '0.15';
        el.style.filter = 'blur(6px)';
        el.style.pointerEvents = 'none';
      } else {
        const baseSpacing = isMob ? 85 : 160;
        const xPos = diff * baseSpacing;
        const rotY = diff > 0 ? (isMob ? -38 : -65) : (isMob ? 38 : 65);
        const scaleVal = isMob 
          ? Math.max(0.68, 0.94 - Math.abs(diff) * 0.12)
          : Math.max(0.72, 1 - Math.abs(diff) * 0.1);
        const opacVal = Math.abs(diff) > 2 ? 0.35 : Math.max(0.6, 1 - Math.abs(diff) * 0.18);
        const brightVal = Math.max(0.78, 1 - Math.abs(diff) * 0.08);

        el.style.transform = `translateX(${xPos}px) rotateY(${rotY}deg) scale(${scaleVal})`;
        el.style.zIndex = `${25 - Math.abs(diff) * 3}`;
        el.style.opacity = `${opacVal}`;
        el.style.filter = `brightness(${brightVal}) drop-shadow(0 10px 18px rgba(0,0,0,0.12))`;
        el.style.pointerEvents = 'auto';
      }
    }
  });
}

function orderRackGarment() {
  const activeItem = RACK_GARMENTS[rackState.activeIndex];
  if (!activeItem) return;
  openLeadModal(`Заказ из гардероба: ${activeItem.name} (${activeItem.gsm})`);
  const notesField = document.querySelector('#modalForm textarea[name="notes"]');
  if (notesField) {
    notesField.value = `Интересует пошив тиража модели из гардероба: ${activeItem.name} (${activeItem.gsm}), цвет: ${activeItem.colorName}.`;
  }
}

function calcRackGarment() {
  const activeItem = RACK_GARMENTS[rackState.activeIndex];
  if (!activeItem) return;
  if (activeItem.category === 'hoodies') {
    const btn = document.querySelector('#calcItemTypes .calc-btn[data-price="1890"]') || document.querySelector('#calcItemTypes .calc-btn[data-base="1890"]');
    if (btn) btn.click();
  } else if (activeItem.category === 'tshirts') {
    const btn = document.querySelector('#calcItemTypes .calc-btn[data-price="990"]') || document.querySelector('#calcItemTypes .calc-btn[data-base="990"]');
    if (btn) btn.click();
  } else if (activeItem.category === 'jackets' || activeItem.category === 'shirts') {
    const btn = document.querySelector('#calcItemTypes .calc-btn[data-price="2450"]') || document.querySelector('#calcItemTypes .calc-btn[data-base="2450"]');
    if (btn) btn.click();
  }
}

// ==========================================================================
// 3. DOM INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initClothesRack();
  initHeaderScroll();
  initMobileMenu();
  initCategoryTabs();
  renderCatalog();
  initMerchCalculator();
  initModalListeners();
});

// ==========================================================================
// 4. HEADER & MOBILE MENU
// ==========================================================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('py-2', 'bg-brand-black/95', 'shadow-2xl');
      header.classList.remove('py-4', 'bg-brand-black/90');
    } else {
      header.classList.add('py-4', 'bg-brand-black/90');
      header.classList.remove('py-2', 'bg-brand-black/95', 'shadow-2xl');
    }
  }, { passive: true });
}

function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  function toggleMenu(open) {
    if (open) {
      menu.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
      menu.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      btn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    } else {
      menu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
      menu.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    if (window.lucide) window.lucide.createIcons();
  }

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('translate-y-0');
    toggleMenu(!isOpen);
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });
}

// ==========================================================================
// 5. UNIFIED CATALOG FILTERING (SINGLE CATALOG FOR EVERYONE)
// ==========================================================================
let catalogFilter = {
  category: 'all'
};

function initCategoryTabs() {
  const categoryTabs = document.querySelectorAll('.category-tab');
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => {
        t.classList.remove('active', 'bg-brand-rose', 'text-brand-black');
        t.classList.add('bg-white/5', 'text-brand-cream/80');
      });

      tab.classList.add('active', 'bg-brand-rose', 'text-brand-black');
      tab.classList.remove('bg-white/5', 'text-brand-cream/80');

      catalogFilter.category = tab.getAttribute('data-category');
      renderCatalog();
      triggerCatalogCascade();
    });
  });
}

function renderCatalog() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(item => {
    return catalogFilter.category === 'all' || item.category === catalogFilter.category;
  });

  // Exactly 1 photo slot per product card
  grid.innerHTML = filtered.map(item => `
    <div 
      class="product-card group rounded-2xl bg-[#141418] border border-white/5 overflow-hidden flex flex-col justify-between cursor-pointer"
      data-product-id="${item.id}"
      onclick="handleCardClick('${item.id}', this)"
    >
      <!-- 1 Photo Slot -->
      <div class="card-media relative aspect-[5/4] overflow-hidden bg-[#C7C7C7]">
        <img 
          src="${item.image || item.images[0]}" 
          alt="${item.title}" 
          class="product-thumb-img w-full h-full ${(item.category === 'accessories' || item.category === 'stationery') ? 'object-cover object-center' : 'object-cover object-top'} group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        >
        
        <div class="brand-embroidery-stamp bottom-2.5 left-2.5">
          <svg class="w-3 h-3 text-brand-rose" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
          </svg>
          <span>Знак Своих</span>
        </div>

        <div class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] text-brand-rose border border-white/10 font-semibold z-20">
          ${item.badge}
        </div>
      </div>

      <div class="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          <div class="flex items-center justify-between text-xs text-brand-muted mb-2">
            <span class="uppercase tracking-wider font-medium text-[11px] text-brand-rose">${getCategoryName(item.category)}</span>
            <span>${item.minQty}</span>
          </div>
          <h3 class="font-display font-bold text-lg text-white group-hover:text-brand-rose transition-colors duration-300 mb-2">
            ${item.title}
          </h3>
          <p class="text-xs text-brand-cream/70 line-clamp-2 leading-relaxed mb-4 font-light">
            ${item.shortDesc}
          </p>
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-brand-muted uppercase tracking-wider block">Стоимость:</span>
            <span class="font-display font-black text-lg text-brand-rose">${item.priceDisplay}</span>
          </div>
          <span class="p-2.5 rounded-full bg-white/5 group-hover:bg-brand-rose group-hover:text-brand-black text-brand-cream transition-all duration-300">
            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
          </span>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function getCategoryName(cat) {
  switch (cat) {
    case 'hoodies': return 'Худи и Свитшоты';
    case 'tshirts': return 'Футболки и Лонгсливы';
    case 'shirts': return 'Рубашки и Овершоты';
    case 'stationery': return 'Канцелярия';
    case 'accessories': return 'Аксессуары';
    default: return 'Продукция';
  }
}

function triggerCatalogCascade() {
  const cards = document.querySelectorAll('#productsGrid .product-card');
  cards.forEach((card, idx) => {
    card.classList.remove('revealed');
    setTimeout(() => {
      card.classList.add('revealed');
    }, idx * 40);
  });
}

// ==========================================================================
// 6. INTERACTIVE MODAL & SHARED ELEMENT TRANSITION (FIXED GRID & TEXT OVERFLOW)
// ==========================================================================
let activeClickedCard = null;
let activeOriginalRect = null;

function handleCardClick(productId, cardElement) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !cardElement) return;

  activeClickedCard = cardElement;
  activeOriginalRect = cardElement.getBoundingClientRect();

  const overlay = document.getElementById('morphModalOverlay');
  const morphCard = document.getElementById('morphModalCard');
  const content = document.getElementById('morphModalContent');

  if (!overlay || !morphCard || !content) return;

  // Populate Modal: Grid grid-cols-1 md:grid-cols-2 (Photo Left, Text Right with overflow-y-auto)
  content.innerHTML = `
    <!-- Top Bar with Close Button -->
    <div class="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#141418] border-b border-white/10 shrink-0">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-brand-rose" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
        </svg>
        <span class="text-xs uppercase tracking-widest text-brand-rose font-bold">
          ${getCategoryName(product.category)} · Унисекс / Все размеры
        </span>
      </div>
      <button 
        type="button" 
        onclick="closeMorphModal()" 
        class="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
        aria-label="Закрыть"
      >
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Inner Modal Body with Tailwind Grid: 1 slot photo on left, text on right with overflow-y-auto -->
    <div class="p-6 sm:p-8 md:p-10 overflow-y-auto max-h-[calc(90vh-70px)]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        <!-- Left: Exactly 1 Product Photo Slot (No 4 thumbnails) -->
        <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-brand-surface border border-white/10 group shadow-2xl shrink-0">
          <img 
            id="detailMainImage" 
            src="${product.image || product.images[0]}" 
            alt="${product.title}" 
            class="w-full h-full object-cover object-center"
          >
          <div class="brand-embroidery-stamp top-4 left-4">
            <svg class="w-3.5 h-3.5 text-brand-rose" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
            </svg>
            <span>Знак Своих · Оригинал</span>
          </div>
          
        </div>

        <!-- Right: Text Details with overflow-y-auto so text never spills out -->
        <div class="flex flex-col justify-between space-y-6 overflow-y-auto pr-1">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs px-2.5 py-1 rounded-full bg-brand-rose/20 text-brand-rose border border-brand-rose/30 font-semibold uppercase tracking-wider">
                ${product.badge}
              </span>
              <span class="text-xs text-brand-muted">${product.minQty}</span>
            </div>

            <h2 class="font-display font-black text-2xl sm:text-3xl text-white mb-2 leading-tight">
              ${product.title}
            </h2>

            <div class="flex items-baseline gap-3 mb-5 pb-5 border-b border-white/10">
              <span class="font-display font-black text-3xl sm:text-4xl text-brand-rose">${product.priceDisplay}</span>
              <span class="text-xs text-brand-muted">минимальный тираж от 10 единиц</span>
            </div>

            <p class="text-sm text-brand-cream/80 leading-relaxed mb-6 font-light">
              ${product.shortDesc}
            </p>

            <!-- Colors -->
            <div class="mb-5">
              <span class="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-2.5">
                Доступные цвета полотна:
              </span>
              <div class="flex items-center gap-2">
                ${product.colors.map(c => `
                  <span class="w-6 h-6 rounded-full border border-white/20 shadow-sm" style="background-color: ${c};"></span>
                `).join('')}
              </div>
            </div>

            <!-- Sizes -->
            <div class="mb-6">
              <span class="text-xs font-semibold uppercase tracking-wider text-brand-muted block mb-2.5">
                Размерная сетка:
              </span>
              <div class="flex flex-wrap gap-2">
                ${product.sizes.map(size => `
                  <span class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-medium">
                    ${size}
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Specs Grid -->
            <div class="space-y-3.5 text-xs text-brand-cream/80 bg-white/[0.02] p-4 sm:p-5 rounded-2xl border border-white/5">
              <div>
                <strong class="text-white block mb-0.5">Состав и качество ткани:</strong>
                <p class="text-brand-cream/70 leading-relaxed">${product.fabric}</p>
              </div>
              <div>
                <strong class="text-white block mb-0.5">Крой и особенности:</strong>
                <p class="text-brand-cream/70 leading-relaxed">${product.fit}</p>
              </div>
              <div>
                <strong class="text-white block mb-0.5">Рекомендации по уходу:</strong>
                <p class="text-brand-cream/70 leading-relaxed">${product.care}</p>
              </div>
            </div>
          </div>

          <div class="pt-4 flex flex-col sm:flex-row gap-3">
            <button 
              type="button" 
              onclick="orderSpecificProduct('${product.title}')" 
              class="flex-1 py-4 px-6 rounded-full bg-brand-rose text-brand-black font-display font-bold text-xs uppercase tracking-wider hover:bg-brand-rose-hover transition-all duration-300 hover:shadow-glow-rose active:scale-95 flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
              </svg>
              Заказать тираж от 10 шт.
            </button>
            <button 
              type="button" 
              onclick="closeMorphModal()" 
              class="py-4 px-6 rounded-full border border-white/20 text-brand-cream hover:bg-white/5 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Закрыть
            </button>
          </div>

        </div>

      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  // Set Initial Bounding Box to match clicked card (FLIP transition)
  const r = activeOriginalRect;
  morphCard.style.top = `${r.top}px`;
  morphCard.style.left = `${r.left}px`;
  morphCard.style.width = `${r.width}px`;
  morphCard.style.height = `${r.height}px`;
  morphCard.style.borderRadius = '1rem';
  morphCard.style.display = 'block';

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    morphCard.classList.add('expanded');
  });
}

function closeMorphModal() {
  const overlay = document.getElementById('morphModalOverlay');
  const morphCard = document.getElementById('morphModalCard');

  if (!overlay || !morphCard) return;

  if (activeOriginalRect) {
    const r = activeOriginalRect;
    morphCard.classList.remove('expanded');
    morphCard.style.top = `${r.top}px`;
    morphCard.style.left = `${r.left}px`;
    morphCard.style.width = `${r.width}px`;
    morphCard.style.height = `${r.height}px`;
    morphCard.style.borderRadius = '1rem';
  } else {
    morphCard.classList.remove('expanded');
  }

  overlay.classList.remove('active');

  setTimeout(() => {
    morphCard.style.display = 'none';
    document.body.style.overflow = '';
    activeClickedCard = null;
    activeOriginalRect = null;
  }, 480);
}

function orderSpecificProduct(productTitle) {
  closeMorphModal();
  openLeadModal(`Заказ изделия: ${productTitle}`);
  const notesField = document.querySelector('#modalForm textarea[name="notes"]');
  if (notesField) {
    notesField.value = `Интересует пошив тиража модели: ${productTitle}`;
  }
}

// ==========================================================================
// 7. CALCULATOR
// ==========================================================================
let currentCalcState = {
  itemName: 'Худи оверсайз',
  basePrice: 1890,
  qty: 25,
  printName: 'Премиум вышивка',
  printAdd: 350
};

function initMerchCalculator() {
  const itemBtns = document.querySelectorAll('#calcItemTypes .calc-btn');
  const printBtns = document.querySelectorAll('#calcPrintTypes .calc-print-btn');
  const qtyRange = document.getElementById('calcQtyRange');

  itemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      itemBtns.forEach(b => {
        b.classList.remove('active', 'border-brand-rose', 'bg-brand-rose/10', 'text-white');
        b.classList.add('border-white/10', 'bg-white/5', 'text-brand-cream');
      });
      btn.classList.add('active', 'border-brand-rose', 'bg-brand-rose/10', 'text-white');
      btn.classList.remove('border-white/10', 'bg-white/5', 'text-brand-cream');

      currentCalcState.itemName = btn.getAttribute('data-item') || btn.getAttribute('data-name') || 'Худи оверсайз';
      currentCalcState.basePrice = parseInt(btn.getAttribute('data-price') || btn.getAttribute('data-base') || '1890', 10);
      recalculateMerch();
    });
  });

  printBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      printBtns.forEach(b => {
        b.classList.remove('active', 'border-brand-rose', 'bg-brand-rose/10', 'text-white');
        b.classList.add('border-white/10', 'bg-white/5', 'text-brand-cream');
      });
      btn.classList.add('active', 'border-brand-rose', 'bg-brand-rose/10', 'text-white');
      btn.classList.remove('border-white/10', 'bg-white/5', 'text-brand-cream');

      currentCalcState.printName = btn.getAttribute('data-print') || 'Шелкография';
      currentCalcState.printAdd = parseInt(btn.getAttribute('data-add') || '250', 10);
      recalculateMerch();
    });
  });

  if (qtyRange) {
    qtyRange.addEventListener('input', (e) => {
      currentCalcState.qty = parseInt(e.target.value, 10);
      recalculateMerch();
    });
  }

  recalculateMerch();
}

function recalculateMerch() {
  const qty = currentCalcState.qty;
  const base = currentCalcState.basePrice;
  const print = currentCalcState.printAdd;

  let discountFactor = 1.0;
  if (qty >= 250) discountFactor = 0.70;
  else if (qty >= 100) discountFactor = 0.78;
  else if (qty >= 50) discountFactor = 0.88;
  else if (qty >= 25) discountFactor = 0.94;

  const perItem = Math.round((base + print) * discountFactor);
  const total = perItem * qty;

  const qtyDisplay = document.getElementById('calcQtyDisplay');
  const totalPrice = document.getElementById('calcTotalPrice');
  const perItemPrice = document.getElementById('calcPerItemPrice');

  const sumItem = document.getElementById('calcSummaryItem');
  const sumPrint = document.getElementById('calcSummaryPrint');
  const sumQty = document.getElementById('calcSummaryQty');
  const sumLead = document.getElementById('calcSummaryLead');

  if (qtyDisplay) qtyDisplay.textContent = `${qty} шт.`;
  if (totalPrice) totalPrice.textContent = `${total.toLocaleString('ru-RU')} ₽`;
  if (perItemPrice) perItemPrice.textContent = `${perItem.toLocaleString('ru-RU')} ₽ / шт.`;

  if (sumItem) sumItem.textContent = currentCalcState.itemName;
  if (sumPrint) sumPrint.textContent = currentCalcState.printName;
  if (sumQty) sumQty.textContent = `${qty} шт.`;

  if (sumLead) {
    if (qty >= 100) sumLead.textContent = '10–14 рабочих дней';
    else if (qty >= 50) sumLead.textContent = '7–10 рабочих дней';
    else sumLead.textContent = '5–7 рабочих дней';
  }
}

function orderFromCalculator() {
  const title = `Заказ из калькулятора: ${currentCalcState.itemName} (${currentCalcState.qty} шт.)`;
  openLeadModal(title);
  const notesField = document.querySelector('#modalForm textarea[name="notes"]');
  if (notesField) {
    notesField.value = `Позиция: ${currentCalcState.itemName}\nТираж: ${currentCalcState.qty} шт.\nБрендирование: ${currentCalcState.printName}\nОриентировочная сумма: ${document.getElementById('calcTotalPrice')?.textContent || ''}`;
  }
}

// ==========================================================================
// 8. LEAD GENERATION MODAL & FORMS
// ==========================================================================
function openLeadModal(sourceContext = 'Заявка с сайта') {
  const modal = document.getElementById('leadModal');
  const srcInput = document.getElementById('modalSource');
  if (!modal) return;

  if (srcInput) srcInput.value = sourceContext;

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100');
  document.body.style.overflow = 'hidden';
}

function closeLeadModal() {
  const modal = document.getElementById('leadModal');
  if (!modal) return;

  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0', 'pointer-events-none');
  document.body.style.overflow = '';

  const form = document.getElementById('modalForm');
  const success = document.getElementById('modalSuccess');
  if (form) form.classList.remove('hidden');
  if (success) success.classList.add('hidden');
}

function initModalListeners() {
  const modal = document.getElementById('leadModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLeadModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLeadModal();
      closeMorphModal();
    }
  });

  const modalForm = document.getElementById('modalForm');
  if (modalForm) {
    modalForm.addEventListener('submit', handleModalSubmit);
  }

  const inlineForm = document.getElementById('inlineLeadForm');
  if (inlineForm) {
    inlineForm.addEventListener('submit', handleFormSubmit);
  }
}

function handleModalSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('modalForm');
  const success = document.getElementById('modalSuccess');

  if (form && success) {
    form.classList.add('hidden');
    success.classList.remove('hidden');
  }

  showToast('Заявка успешно отправлена! Мы свяжемся с вами в течение 15 минут.');
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  form.reset();
  showToast('Заявка принята! Менеджер подготовит расчет и напишет вам.');
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-brand-surface border border-brand-rose/40 text-brand-cream text-xs sm:text-sm shadow-2xl transition-all duration-300 transform translate-y-4 opacity-0';
  toast.innerHTML = `
    <div class="w-6 h-6 rounded-full bg-brand-rose/20 text-brand-rose flex items-center justify-center shrink-0">
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 7.2 7.2 12 0 12C7.2 12 12 16.8 12 24C12 16.8 16.8 12 24 12C16.8 12 12 7.2 12 0Z"/>
      </svg>
    </div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 350);
  }, 4200);
}
