import type { Metadata } from 'next';
import './globals.css';
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
// TODO:
// 1. Add a custom font to the project
// 2. Add the correct favicon
// 3. Add the correct meta tags
// 4. Add a layer of authorization to the project
// 4a I am thnking this will be a middleware (middleware.ts in the root of the project) that checks if the user is logged in and if they are not,
// it will redirect them to the login page. The other option is to create some kind of context provider
// that wraps the entire application and checks if the user is logged in. If they are not, it will redirect them to the login page.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ReactQueryProvider>
          <ToastContainer />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}