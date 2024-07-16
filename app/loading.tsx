import { Spinner } from 'flowbite-react';

export default function Loading() {
    return(
    <div className="text-center">
        <Spinner size="xl" aria-label="Center-aligned spinner example" />
      </div>
    );
}