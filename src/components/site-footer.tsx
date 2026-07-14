export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-4xl flex-col gap-1 px-4 py-8 text-sm text-muted-foreground sm:px-6 sm:py-10 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Nachiket Kale. All rights reserved.</p>
        <p className="text-xs">Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
