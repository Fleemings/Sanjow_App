/* eslint-disable arrow-body-style */
import { NextPage } from 'next';

type LayoutProps = {
  title?: string;
}

const MainLayout: NextPage<LayoutProps> = ({ children }) => {
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
