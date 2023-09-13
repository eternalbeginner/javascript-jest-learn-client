import { Button } from '@/components/ui/button';
import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Button>Hello There</Button>
      <div>
        <Outlet />
      </div>
    </>
  );
}
