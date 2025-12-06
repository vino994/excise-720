export default function BackButton() {
  return (
    <button className="bg-brand-dark text-white px-5 py-2 rounded-md shadow hover:opacity-90 flex items-center gap-2 cursor-pointer"
    onClick={() => window.history.back()}>
      ← Back
    </button>
  );
}
