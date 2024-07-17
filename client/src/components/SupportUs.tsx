import { Button } from './ui/button'

function SupportUs() {
  return (
    <div className='bg-black px-32 py-12'>
      <div className='flex flex-col justify-center space-y-12 items-center'>
        <h1 className='text-center text-5xl text-white font-bold'>SUPPORT US</h1>
        <p className='text-center text-2xl text-white'>
          If you <span style={{ color: 'yellow' }}>liked</span> our hard work and tool, then you can show us support by <span style={{ color: 'yellow' }}>donating</span> us. It will help us to <span style={{ color: 'yellow' }}>maintain this website</span> and scale it to global level
        </p>
        <Button className='underline bg-yellow-500 text-white px-8 py-4 text-xl' variant={'outline'}>
          BUY US A COFFEE
        </Button>
      </div>
    </div>
  )
}

export default SupportUs
