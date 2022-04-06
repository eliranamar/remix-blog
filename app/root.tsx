import { FC } from 'react';
import type { MetaFunction, LinksFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
} from '@remix-run/react';

import stylesUrl from '~/styles/global.css';

export const meta: MetaFunction = () => ({
  title:    'New Remix App',
  keywords: 'react, remix, typescript, javascript'
});

export const links: LinksFunction = () => ([
  { rel: 'stylesheet', href: stylesUrl },
]);

export default function App() {
  return (
    <html lang="en">
      <Document title="Remix Blog App">
        <Layout>
          <Outlet />
        </Layout>
      </Document>
    </html>
  );
}

const Document: FC<{title: string}> = ({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};

const Layout: FC = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">REMIX</Link>

        <ul className="nav">
          <li>
            <Link to="/posts" className="logo">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        {children}
      </div>
    </>
  );
};
