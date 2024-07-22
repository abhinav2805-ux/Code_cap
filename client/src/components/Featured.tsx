import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import FeaturedCard from './FeaturedCard'
import { Button } from './ui/button'

function Featured() {
    const cardsData = [
        {
          imageUrl: '/public/hacks/hack1.jpg',
          name: 'Event 1',
          host: 'Host 1',
          date: '2024-07-22',
          teamSize: '4',
          registrationPrice: '$50',
        },
        {
          imageUrl: '/public/hacks/hack2.jpg',
          name: 'Event 2',
          host: 'Host 2',
          date: '2024-08-15',
          teamSize: '6',
          registrationPrice: '$75',
        },
        {
            imageUrl: '/public/hacks/hack3.jpg',
            name: 'Event 3',
            host: 'Host 3',
            date: '2024-08-15',
            teamSize: '6',
            registrationPrice: '$75',
          },
          {
            imageUrl: '/public/hacks/hack4.jpg',
            name: 'Event 4',
            host: 'Host 4',
            date: '2024-08-15',
            teamSize: '6',
            registrationPrice: '$75',
          },
          {
            imageUrl: '/public/hacks/hack5.jpg',
            name: 'Event 5',
            host: 'Host 5',
            date: '2024-08-15',
            teamSize: '6',
            registrationPrice: '$75',
          },
        
      ];
    
  return (
    <div className='bg-black px-8 py-8 flex-col flex justify-center items-center '>
        <h1 className='text-center text-white text-6xl font-bold'>FEATURED HACKATHON</h1>
        <div className='px-40 py-10  '>
            <Carousel>
                <CarouselContent>
                    {cardsData.map((card, index) => (
                        <CarouselItem>
                            <FeaturedCard
                                key={index}
                                imageUrl={card.imageUrl}
                                name={card.name}
                                host={card.host}
                                date={card.date}
                                teamSize={card.teamSize}
                                registrationPrice={card.registrationPrice}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        <a href="/hackathons"><Button className='w-fit bg-yellow-500 border-black text-lg rounded-xl text-white font-semibold' variant={'outline'}>See More</Button></a>
    </div>
  )
}

export default Featured