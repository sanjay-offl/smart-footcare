'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fdf9] via-[#f1f8f4] to-[#eef7f1] flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-medical-dark mb-2">
            Something went wrong
          </h1>
          <p className="text-medical-light text-lg">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={reset}
            variant="primary"
            size="md"
            className="w-full"
          >
            Try again
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="secondary"
            size="md"
            className="w-full"
          >
            Go to home
          </Button>
        </div>
      </Card>
    </div>
  );
}
