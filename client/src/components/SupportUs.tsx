import { Button } from './ui/button';

function SupportUs() {
  return (
    <div className='bg-black px-4 py-12 md:px-32'>
      <div className='flex flex-col justify-center space-y-6 md:space-y-12 items-center'>
        <h1 className='text-center text-3xl md:text-5xl text-white font-bold'>
          SUPPORT US
        </h1>
        <p className='text-center text-lg md:text-2xl text-white'>
          If you <span className='text-yellow-500'>liked</span> our hard work and tool, then you can show us support by <span className='text-yellow-500'>donating</span> us. It will help us to <span className='text-yellow-500'>maintain this website</span> and scale it to global level.
        </p>
        <Button className='underline bg-yellow-500 text-white px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl' variant={'outline'}>
          BUY US A COFFEE
        </Button>
      </div>
    </div>
  );
}

export default SupportUs;
