// Shared
import { MealPrepCreateInput } from '@personal-portfolio-website/shared';

/**
 * BATCH 1
 * ========================================================================================================
 * Batch 1 of Meal Preps created around 16.03.2026 - Monday
 * Batch includes: 22 nb of meal preps
 * Expect this file to be moderate in size
 * ========================================================================================================
 */

export const batch1: MealPrepCreateInput[] = [
  {
    cookedAt: new Date('2026-03-01'),
    coverage: 3,
    name: 'Colorful Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773668674/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.05.52_PM_r6wbmd.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773668674/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.05.52_PM_1_fjrfqm.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773668674/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.05.52_PM_2_gigrpj.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1234, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 412, label: 'Bacon' },
        { unit: 'GRAM', amount: 482, label: 'White Rice' },
        { unit: 'GRAM', amount: 401, label: 'Cheddar' },
        {
          unit: 'UNIT',
          amount: 2,
          label: 'Packs of Colored California Peppers',
        },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-03-04'),
    coverage: 4,
    name: 'Classy Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677184/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.05.01_PM_rvyvte.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677184/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.05.01_PM_1_asovpd.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1234, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 412, label: 'Bacon' },
        { unit: 'GRAM', amount: 920, label: 'Potatoes' },
        { unit: 'GRAM', amount: 502, label: 'Cheddar' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 5, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 6, label: 'Red Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-01-04'),
    coverage: 4,
    name: 'Shiny Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773676974/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.20.55_PM_bmdxkf.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773676974/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.20.55_PM_1_hi3k8w.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773676974/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.20.55_PM_2_oxp1xo.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1634, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 512, label: 'Bacon' },
        { unit: 'GRAM', amount: 470, label: 'White Rice' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 2, label: 'Garlic' },
        { unit: 'UNIT', amount: 5, label: 'Red Peppers' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-01-08'),
    coverage: 4,
    name: 'Uneven Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677295/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.20.11_PM_i2i6h7.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677295/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.20.11_PM_1_u2siba.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677294/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.20.11_PM_2_okhziz.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1634, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 512, label: 'Bacon' },
        { unit: 'GRAM', amount: 470, label: 'White Rice' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 2, label: 'Garlic' },
        { unit: 'UNIT', amount: 5, label: 'Red Peppers' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-03-08'),
    coverage: 4,
    name: 'Photogenic Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677405/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.04.26_PM_bfbnae.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677405/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.04.26_PM_2_bfnoky.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677406/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.04.26_PM_1_wxd24o.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1634, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 512, label: 'Bacon' },
        { unit: 'GRAM', amount: 470, label: 'White Rice' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        {
          unit: 'UNIT',
          amount: 2,
          label: 'Packs of Colored California Peppers',
        },
      ],
    },
  },
  {
    cookedAt: new Date('2026-03-11'),
    coverage: 4,
    name: 'Cheesy Rice Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677570/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.02.27_PM_rzqjjr.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677570/Personal%20Website/meal-preps/11.01.2026-forgot_g27q18.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677570/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.02.28_PM_csoe1h.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677570/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.02.27_PM_1_ajomfc.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1634, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 512, label: 'Bacon' },
        { unit: 'GRAM', amount: 470, label: 'White Rice' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 2, label: 'Garlic' },
        { unit: 'UNIT', amount: 5, label: 'Red Peppers' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-01-15'),
    coverage: 4,
    name: 'Gentle Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677665/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.18.53_PM_b2gwly.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677665/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.18.53_PM_1_yrztzs.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1634, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 512, label: 'Bacon' },
        { unit: 'GRAM', amount: 470, label: 'White Rice' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 2, label: 'Garlic' },
        { unit: 'UNIT', amount: 5, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 3, label: 'Red Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-03-15'),
    coverage: 3,
    name: 'Fresh Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677761/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.02.05_PM_eljrqt.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677761/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.02.05_PM_2_hptnei.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677760/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.02.05_PM_1_ipznbm.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1423, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 512, label: 'Bacon' },
        { unit: 'GRAM', amount: 1002, label: 'Potatoes' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 2, label: 'Garlic' },
        { unit: 'UNIT', amount: 3, label: 'Red Onions' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-01-18'),
    coverage: 3,
    name: 'Scarce Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677892/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.15.10_PM_zls8hp.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677892/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.15.10_PM_1_o37gih.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1211, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 403, label: 'Bacon' },
        { unit: 'GRAM', amount: 480, label: 'White Rice' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 2, label: 'Garlic' },
        { unit: 'UNIT', amount: 3, label: 'Red Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2025-12-19'),
    coverage: 3,
    name: 'Sad Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677987/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.22.04_PM_kgd6ez.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773677987/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.22.04_PM_1_n57lee.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1211, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 403, label: 'Bacon' },
        { unit: 'GRAM', amount: 120, label: 'White Rice' },
        { unit: 'GRAM', amount: 632, label: 'Potatoes' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 2, label: 'Garlic' },
        { unit: 'UNIT', amount: 5, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 3, label: 'Red Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-01-22'),
    coverage: 4,
    name: 'Very Powerful Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678085/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.14.47_PM_gxctao.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678085/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.14.48_PM_vgvkwf.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1511, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 403, label: 'Bacon' },
        { unit: 'GRAM', amount: 932, label: 'Potatoes' },
        { unit: 'GRAM', amount: 163, label: 'White Rice' },
        { unit: 'GRAM', amount: 501, label: 'Cheddar' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-02-22'),
    coverage: 3,
    name: 'Oniony Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678203/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.08.21_PM_i49c1w.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678203/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.08.21_PM_1_onnert.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678202/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.08.21_PM_2_vis2sf.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1323, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 403, label: 'Bacon' },
        { unit: 'GRAM', amount: 482, label: 'White Rice' },
        { unit: 'GRAM', amount: 431, label: 'Cheddar' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Onions' },
        { unit: 'UNIT', amount: 4, label: 'Yellow Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-02-25'),
    coverage: 4,
    name: 'Whispers of the Inevitable Rapture Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678339/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.07.31_PM_p88nts.jpg',
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678338/Personal%20Website/meal-preps/WhatsApp_Image_2026-03-16_at_3.07.31_PM_1_xzqx5q.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1623, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 523, label: 'Bacon' },
        { unit: 'GRAM', amount: 431, label: 'Cheddar' },
        { unit: 'GRAM', amount: 164, label: 'White Rice' },
        { unit: 'GRAM', amount: 920, label: 'Potatoes' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
        { unit: 'UNIT', amount: 4, label: 'Yellow Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 2, label: 'Yellow Peppers' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-02-01'),
    coverage: 3,
    name: 'Lovely Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678621/01.02.2026_rbomie.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1222, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 393, label: 'Bacon' },
        { unit: 'GRAM', amount: 532, label: 'Cheddar' },
        { unit: 'GRAM', amount: 920, label: 'Potatoes' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 2, label: 'Yellow Peppers' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-02-05'),
    coverage: 4,
    name: 'Weasly Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678699/05.02.2026_ciqlre.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1612, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 522, label: 'Bacon' },
        { unit: 'GRAM', amount: 532, label: 'Cheddar' },
        { unit: 'GRAM', amount: 433, label: 'White Rice' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'UNIT', amount: 2, label: 'Yellow Peppers' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-02-08'),
    coverage: 3,
    name: 'Sturdy Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678843/08.02.2026_cahook.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1212, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 402, label: 'Bacon' },
        { unit: 'GRAM', amount: 432, label: 'Cheddar' },
        { unit: 'GRAM', amount: 820, label: 'Potatoes' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-02-12'),
    coverage: 4,
    name: 'Cheesy Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773678931/12.02.2026_mhl7nm.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1612, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 502, label: 'Bacon' },
        { unit: 'GRAM', amount: 523, label: 'Cheddar' },
        { unit: 'GRAM', amount: 920, label: 'Potatoes' },
        { unit: 'GRAM', amount: 160, label: 'White Rice' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'STALK', amount: 6, label: 'Green Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Peppers' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-02-15'),
    coverage: 3,
    name: 'Spicy Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773679008/15.02.2026_yqjcmp.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1212, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 402, label: 'Bacon' },
        { unit: 'GRAM', amount: 423, label: 'Cheddar' },
        { unit: 'GRAM', amount: 483, label: 'White Rice' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'UNIT', amount: 2, label: 'Green Jalapenos' },
        { unit: 'UNIT', amount: 3, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 3, label: 'Yellow Peppers' },
      ],
    },
  },
  {
    cookedAt: new Date('2025-12-15'),
    coverage: 4,
    name: 'Boring Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773679187/15.12.2025_kwl98v.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1612, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 502, label: 'Bacon' },
        { unit: 'GRAM', amount: 523, label: 'Cheddar' },
        { unit: 'GRAM', amount: 163, label: 'White Rice' },
        { unit: 'GRAM', amount: 930, label: 'Potatoes' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 3, label: 'Yellow Peppers' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-02-19'),
    coverage: 4,
    name: 'IDK Man Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773679339/19.02.2026_t5tgt2.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1612, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 502, label: 'Bacon' },
        { unit: 'GRAM', amount: 523, label: 'Cheddar' },
        { unit: 'GRAM', amount: 163, label: 'White Rice' },
        { unit: 'GRAM', amount: 930, label: 'Potatoes' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 3, label: 'Yellow Peppers' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-01-25'),
    coverage: 3,
    name: 'I love bacon man',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773679392/25.01.2026_t9dyod.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1212, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 422, label: 'Bacon' },
        { unit: 'GRAM', amount: 523, label: 'Cheddar' },
        { unit: 'GRAM', amount: 930, label: 'Potatoes' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 3, label: 'Yellow Peppers' },
      ],
    },
  },
  {
    cookedAt: new Date('2026-01-29'),
    coverage: 4,
    name: 'Heavenly Meals',
    images: [
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1773679459/29.01.2026_socxor.jpg',
    ],
    ingredients: {
      create: [
        { unit: 'GRAM', amount: 1632, label: 'Chicken Breast' },
        { unit: 'GRAM', amount: 522, label: 'Bacon' },
        { unit: 'GRAM', amount: 523, label: 'Cheddar' },
        { unit: 'GRAM', amount: 930, label: 'Potatoes' },
        { unit: 'GRAM', amount: 162, label: 'White Rice' },
        { unit: 'HEAD', amount: 3, label: 'Garlic' },
        { unit: 'UNIT', amount: 4, label: 'Red Onions' },
        { unit: 'UNIT', amount: 3, label: 'Red Peppers' },
        { unit: 'UNIT', amount: 3, label: 'Yellow Peppers' },
      ],
    },
  },
];
