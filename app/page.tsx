import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tree Inspections</h1>
        <Link href="/inspection/new" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          + New Inspection
        </Link>
      </div>
      <p className="text-gray-500">No inspections yet.</p>
    </div>
  );
}