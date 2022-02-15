import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>Cooking well done with Gerold Hans Wilhelm Ibach.</p>
      <StaticImage
        alt='cooking cap'
        src='https://cdn.pixabay.com/photo/2014/04/03/00/42/chef-hat-309146_960_720.png'
      />
    </Layout>
  );
};

export default IndexPage;
