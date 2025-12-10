export default function Footer() {
  return (
    <footer className="mt-24 py-10 border-t border-zinc-900 text-sm text-zinc-500 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Projects</a>
        <a href="#" className="hover:text-blue-500">Speaking</a>
        <a href="#" className="hover:text-blue-500">Uses</a>
      </div>
      <p className="mt-4 sm:mt-0">© 2025 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
}
