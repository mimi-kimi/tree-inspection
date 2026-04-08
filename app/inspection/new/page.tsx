'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function NewInspectionPage() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch('/api/inspections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      router.push(`/inspection/${result.id}`);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">New Tree Inspection</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Client Info */}
        <section>
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Client Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Client Name</label>
              <input {...register('client')} className="border rounded w-full p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Client Address</label>
              <input {...register('client_address')} className="border rounded w-full p-2" />
            </div>
          </div>
        </section>

        {/* Tree Info */}
        <section>
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Tree Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tree Location</label>
              <input {...register('tree_location')} className="border rounded w-full p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tree Species</label>
              <input {...register('tree_species')} className="border rounded w-full p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">DBH</label>
              <input {...register('dbh')} className="border rounded w-full p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Height</label>
              <input {...register('height')} className="border rounded w-full p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Crown Spread DIA</label>
              <input {...register('crown_spread_dia')} className="border rounded w-full p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tree Circumference</label>
              <input {...register('tree_circumference')} className="border rounded w-full p-2" />
            </div>
          </div>
        </section>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Inspection'}
        </button>

      </form>
    </div>
  );
}