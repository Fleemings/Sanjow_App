import { NextPage } from 'next';
import { useRouter } from 'next/router';

type LayoutProps = {
  title?: string;
}

const MainLayout: NextPage<LayoutProps> = ({ children, title }) => {
  const router = useRouter();

  // State

  // Hooks

  // Template
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
