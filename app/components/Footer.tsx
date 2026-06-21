"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/70 border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-sm sm:text-base font-medium">
            © {currentYear} Yoskie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}