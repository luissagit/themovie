import { Header, Hero, Layout } from '@themovie/base';
import { Home } from './home';

export function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Home />
    </Layout>
  );
}
