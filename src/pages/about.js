import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>Also, I would like to make this site an e-shop using Shopify to help a friend</p>
    </Layout>
  )
};

export const Head = () => <>
  <Seo title="About Me" description="learning the Head tag in Gatsby/React" />
</>;

export default AboutPage;
