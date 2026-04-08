'use client';
import { forwardRef } from 'react';

const PrintableForm = forwardRef<HTMLDivElement, { data: any }>(({ data }, ref) => (
  <div ref={ref} className="print-form p-8 font-serif text-sm" style={{ width: '210mm', minHeight: '297mm' }}>
    <h1 className="text-center font-bold text-lg underline mb-4">TREE INSPECTION FORM</h1>

    <div className="grid grid-cols-2 gap-2 mb-2">
      <div><span className="font-bold">CLIENT:</span> <span className="border-b border-black inline-block min-w-32">{data.client}</span></div>
      <div><span className="font-bold">CLIENT ADDRESS:</span> <span className="border-b border-black inline-block min-w-48">{data.client_address}</span></div>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-2">
      <div><span className="font-bold">TREE LOCATION:</span> {data.tree_location}</div>
      <div><span className="font-bold">TREE SPECIES:</span> {data.tree_species}</div>
      <div><span className="font-bold">DBH:</span> {data.dbh}</div>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-4">
      <div><span className="font-bold">HEIGHT:</span> {data.height}</div>
      <div><span className="font-bold">CROWN SPREAD DIA:</span> {data.crown_spread_dia}</div>
      <div><span className="font-bold">TREE CIRCUMFERENCE:</span> {data.tree_circumference}</div>
    </div>

    {/* Add all other sections following the same pattern */}
    <div className="text-center font-bold underline mb-2">SITE FACTORS</div>
    {/* ... continue for all sections */}

    <style jsx global>{`
      @media print {
        body * { visibility: hidden; }
        .print-form, .print-form * { visibility: visible; }
        .print-form { position: absolute; left: 0; top: 0; }
      }
    `}</style>
  </div>
));

PrintableForm.displayName = 'PrintableForm';
export default PrintableForm;