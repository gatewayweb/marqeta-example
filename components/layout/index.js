import Header from '@components/layout/header';
import Footer from '@components/layout/footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pb-32">{children}</main>
      <Footer />
    </>
  );
}
