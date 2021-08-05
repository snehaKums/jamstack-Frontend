import React, { useState } from 'react';
import Image from 'next/image';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators} from 'reactstrap';

const CarouselComponent = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    let items= data.img
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.formats.medium.url}
        >
          <div className="carouselItem">
          <Image
            src={item.formats.medium.url}
            alt={item.name}
            width={100}
            height={20}
            layout='responsive'
          />
          </div>
        </CarouselItem>
      );
    });
  
    return (
          <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        );
  }
  export default CarouselComponent;
