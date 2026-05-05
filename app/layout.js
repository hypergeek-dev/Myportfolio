import "./globals.css";

export const metadata = {
  title: "Dennis Jensen | Full-Stack Developer",
  description:
    "Portfolio for Dennis Jensen, a full-stack developer building practical web tools with React, .NET, Python, and cloud services.",
  openGraph: {
    title: "Dennis Jensen | Full-Stack Developer",
    description:
      "Featured work, current projects, skills, and contact details for Dennis Jensen.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
