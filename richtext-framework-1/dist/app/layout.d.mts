import * as react from 'react';
import { Metadata } from 'next';

declare const metadata: Metadata;
declare function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>): react.JSX.Element;

export { RootLayout as default, metadata };
