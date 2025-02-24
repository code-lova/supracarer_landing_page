
export const metadata = {
  title: "Supracarer - More Than Care",
  description: "AI generated matchmaking with highly trained caregivers",
};

export default function ServerLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicon.ico"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
