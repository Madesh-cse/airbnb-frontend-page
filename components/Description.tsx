'use client';

import { useState } from 'react';

interface DescriptionProps {
  text: string;
  isTranslated: boolean;
}

export default function Description({ text, isTranslated }: DescriptionProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 240;
  const shown = expanded || !isLong ? text : `${text.slice(0, 240)}…`;

  return (
    <div className="mb-8 pb-8 border-b border-gray-200">
      {isTranslated && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6 text-sm">
          Some info has been automatically translated.{' '}
          <button className="underline font-semibold">Show original</button>
        </div>
      )}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{shown}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 font-semibold underline text-sm flex items-center gap-1"
        >
          {expanded ? 'Show less' : 'Show more'}
          <span aria-hidden="true">{expanded ? '‹' : '›'}</span>
        </button>
      )}
    </div>
  );
}
