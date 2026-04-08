'use client';
import { useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useReactToPrint } from 'react-to-print';
import PrintableForm from '@/components/PrintableForm';

export default function InspectionPage({ params }: { params: { id: string } }) {
  const { register, handleSubmit, reset, watch } = useForm();
  const [saved, setSaved] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);
  const formData = watch();

  useEffect(() => {
    fetch(`/api/inspections/${params.id}`)
      .then(r => r.json())
      .then(data => reset(data));
  }, [params.id]);

  const onSubmit = async (data: any) => {
    await fetch(`/api/inspections/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // ✅ v3 syntax — pass the ref directly, not a function
  const handlePrint = useReactToPrint({ contentRef: printRef });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Tree Inspection Form</h1>
        <div className="flex gap-3">
          <button onClick={handleSubmit(onSubmit)} className="bg-green-600 text-white px-4 py-2 rounded">
            {saved ? 'Saved!' : 'Save'}
          </button>
          <button onClick={() => handlePrint()} className="bg-blue-600 text-white px-4 py-2 rounded">
            Print / PDF
          </button>
        </div>
      </div>

      {/* ... your form fields ... */}

      {/* Hidden printable version */}
      <div className="hidden print:block">
        <PrintableForm ref={printRef} data={formData} />
      </div>
    </div>
  );
}