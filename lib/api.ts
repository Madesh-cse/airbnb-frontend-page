import { Listing } from '../types/listing';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function getListing(id: string): Promise<Listing | null> {
  const res = await fetch(`${API_URL}/api/listings/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
}

export async function getListings(): Promise<Listing[]> {
  const res = await fetch(`${API_URL}/api/listings`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}
