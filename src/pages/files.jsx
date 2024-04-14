import { Helmet } from 'react-helmet-async';

import Documents from 'src/sections/products/view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Case Documents </title>
      </Helmet>

      <Documents />
    </>
  );
}
