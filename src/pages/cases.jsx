import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';
import './global.css';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Cases </title>
      </Helmet>

      <BlogView />
    </>
  );
}
