'use client';
import { useState } from 'react';
import Hero from '@/components/faq/hero';
import FAQ from '@/components/faq/questions';
import Companion from '@/components/reusables/railCompanion';

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FAQ searchTerm={searchTerm} />
      <Companion />
    </div>
  );
}
