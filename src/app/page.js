import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';
import { getBlogPostList } from '@/helpers/file-helpers';
import { BlogLink, BlogList } from './ui';


async function Home() {
  const posts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      <BlogList>
        {posts.map(({slug, title, abstract, publishedOn}) => <li key={slug}>
          <BlogLink href={`/${slug}`}>
            <BlogSummaryCard
              slug={slug}
              title={title}
              abstract={abstract}
              publishedOn={publishedOn}
            />
          </BlogLink>
        </li>)}
      </BlogList>
    </div>
  );
}

export default Home;
