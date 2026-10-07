import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Listing from './pages/Listing';
import PropertyDetail from './pages/PropertyDetail';
import Contact from './pages/Contact';
import StatusPage from './pages/StatusPage';
import NotFound from './pages/NotFound';

const comingSoon = (title) => (
  <StatusPage title={title} message="This page is coming soon. Get in touch if you need something in the meantime." />
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="listing" element={<Listing />} />
        <Route path="property/:id" element={<PropertyDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="press-release" element={comingSoon('Press Release')} />
        <Route path="terms" element={comingSoon('Terms and conditions')} />
        <Route path="privacy" element={comingSoon('Privacy Policy')} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
