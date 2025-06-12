import { defineCollection, z } from 'astro:content';

// ストーリー攻略記事のスキーマ
const storyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chapter: z.number(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    description: z.string(),
    keywords: z.array(z.string()),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    estimatedTime: z.string().optional(), // プレイ時間目安
    prerequisites: z.array(z.string()).optional(), // 前提条件
    featured: z.boolean().default(false),
  }),
});

// ライフ（職業）情報のスキーマ
const livesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['combat', 'crafting', 'gathering']),
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    difficulty: z.number().min(1).max(5), // 難易度（1-5）
    skills: z.array(z.object({
      name: z.string(),
      level: z.number(),
      description: z.string(),
      effect: z.string().optional(),
    })).optional(),
    bestEquipment: z.array(z.string()).optional(),
    tips: z.array(z.string()).optional(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
  }),
});

// データベース記事のスキーマ
const databaseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['items', 'equipment', 'monsters', 'tamagemono', 'recipes']),
    description: z.string(),
    keywords: z.array(z.string()),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
  }),
});

// ニュース・更新情報のスキーマ
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['update', 'event', 'maintenance', 'campaign', 'feature']),
    description: z.string(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
  }),
});

// コレクションをエクスポート
export const collections = {
  'story': storyCollection,
  'lives': livesCollection,
  'database': databaseCollection,
  'news': newsCollection,
};