import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const [content, setContent] = useState<string>('');
  useEffect(() => {
    if (content == '') {
      axios.get('/content.html').then(function (response) {
        setContent(response.data);
      });
    }
  }, [content]);

  return (
    <Layout>
      <Seo />
      <div className='layout mx-auto pt-24 lg:w-[800px]'>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </Layout>
  );
}
