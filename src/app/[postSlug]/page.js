import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeSnippet from '@/components/CodeSnippet';
import dynamic from 'next/dynamic';

const DivisionGroupsDemo = dynamic(() => import('@/components/DivisionGroupsDemo'));

export async function generateMetadata({params}) {
  const {frontmatter: {title, abstract,} } = await loadBlogPost(params.postSlug);

  return {title, description: abstract}
}

async function BlogPost({params}) {
  const {frontmatter: {title, publishedOn,}, content } = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={title}
        publishedOn={publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={{pre: CodeSnippet, DivisionGroupsDemo}}></MDXRemote>
      </div>
    </article>
  );
}

export default BlogPost;
