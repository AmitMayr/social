'use client'
import { useRouter,useSearchParams } from 'next/navigation';

export default function Welcome() {
   const  name  = useSearchParams().get('inputVal') || 'Amit'; // Retrieve the 'name' query parameter
  return (
    <div>
      <h1>Welcome, {name}!</h1>
    </div>
  );
}
