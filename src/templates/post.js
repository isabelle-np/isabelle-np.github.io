import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Title from '../components/title';
import styles from './post.module.scss';

export default ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <div className={styles.container}>
                <Title title={post.frontmatter.title} subtitle={post.frontmatter.subtitle}/>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html}}></div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`