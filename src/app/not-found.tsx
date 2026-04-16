import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7fdf9] via-[#f1f8f4] to-[#eef7f1] flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-bold text-medical-dark mb-2">
            Not Found
          </h1>
          <p className="text-medical-light text-lg">
            The page you're looking for doesn't exist.
          </p>
        </div>

        <Link href="/">
          <Button variant="primary" size="md" className="w-full">
            Back to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
}
