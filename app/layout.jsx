"use client";

import AuthListenerWrapper from "../components/AuthListenerWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthListenerWrapper />
        {children}
      </body>
    </html>
  );
}
