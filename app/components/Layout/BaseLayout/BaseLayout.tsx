import {Navbar} from '@/app/components/Navbar/Navbar';
import {ReactNode} from 'react';
import {CenteredContentContainerElement} from '@/app/styles/common';

type BaseLayoutProps = {
  children: ReactNode,
  centeredMainContent?: boolean,
};

export const BaseLayout = ({children, centeredMainContent}: BaseLayoutProps) => {
  return (
    <>
      <Navbar/>
      {centeredMainContent && (
        <CenteredContentContainerElement as={'main'}>
          {children}
        </CenteredContentContainerElement>
      )}
      {!centeredMainContent && (
        <main>
          {children}
        </main>
      )}
    </>
  );
}
