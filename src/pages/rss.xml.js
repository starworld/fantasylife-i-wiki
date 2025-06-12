import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // すべてのコンテンツを取得
  const stories = await getCollection('story');
  const lives = await getCollection('lives');
  const database = await getCollection('database');
  const news = await getCollection('news');

  // すべてのコンテンツを結合してソート
  const allContent = [
    ...stories.map(post => ({
      ...post,
      url: `/story/${post.slug}`,
      type: 'story'
    })),
    ...lives.map(post => ({
      ...post,
      url: `/lives/${post.slug}`,
      type: 'lives'
    })),
    ...database.map(post => ({
      ...post,
      url: `/database/${post.slug}`,
      type: 'database'
    })),
    ...news.map(post => ({
      ...post,
      url: `/news/${post.slug}`,
      type: 'news'
    }))
  ].sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: 'ファンタジーライフi 攻略Wiki',
    description: 'ファンタジーライフi『グルグルの竜と時をぬすむ少女』の最新攻略情報をお届けします。',
    site: context.site,
    items: allContent.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: post.url,
      categories: [post.type],
    })),
    customData: `<language>ja</language>`,
    stylesheet: '/rss-styles.xsl'
  });
}