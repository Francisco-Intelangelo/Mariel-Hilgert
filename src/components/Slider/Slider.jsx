
import { useState, useEffect } from "react"
import styled from "styled-components";


export default function Slider (props_img){
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props_img.images[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if(props_img.autoPlay){
      const interval = setInterval(()=>{
        selectNewImage(selectedIndex, props_img.images);
      }, 3000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next = true)=>{
    setLoaded(false);
    setTimeout(()=>{
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ?  selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length   - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    },500)
    
  };
  return ( 
    <CarouselContainer>
      <CarouselImg src={selectedImage} alt="foto" className={loaded ? "loaded" : ""} onLoad={() => setLoaded(true)}/>
    </CarouselContainer>
  )
}

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 20px;
  @media(max-width: 811px){
    padding: 50px 80px;
  }
`;
const CarouselImg = styled.img`
  max-width: 350px;
  width: 100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;