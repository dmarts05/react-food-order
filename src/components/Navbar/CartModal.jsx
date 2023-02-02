import { createPortal } from 'react-dom';
import Card from '../UI/Card';

const Backdrop = () => {
  return (
    <div className='fixed inset-0 z-10 h-full w-full bg-zinc-800 opacity-90'></div>
  );
};

const ModalOverlay = () => {
  return (
    <Card className='fixed inset-1/4 z-20 text-black'>
      {/* Meals go here */}
    </Card>
  );
};

export default function CartModal() {
  return (
    <>
      {createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
      {createPortal(<ModalOverlay />, document.getElementById('overlay-root'))}
    </>
  );
}
