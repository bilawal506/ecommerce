/* eslint-disable @next/next/no-img-element */
"use client"
import Card from "./cards"
import React,{useEffect, useRef,useState} from 'react';
import Image from "next/image";
import Footer from "./footer";
import Link from "next/link";
const PhotoSlider = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [
    'https://fastly.picsum.photos/id/983/400/400.jpg?hmac=jodhwpLVwTS-eP9BbNG9JGVYimkYDjh52Gi1z_MKznA',

    'https://fastly.picsum.photos/id/998/400/400.jpg?hmac=WetZ0aq7zNlX1LHIsGSzZwV5MdHfytypy_ji8IU5ocE',

    'https://fastly.picsum.photos/id/966/400/400.jpg?hmac=vTfdl7XUAXbnfiOQraT_4rOs-cUPhso7ZM6TihvkFhk',

    'https://fastly.picsum.photos/id/444/400/400.jpg?hmac=f2rSUPeVxSw12QU0uWwrZTFUWNo9DXtOXXQoTFefoKU',

    'https://fastly.picsum.photos/id/1018/400/400.jpg?hmac=MwHJoMaVXsBbqg-LFoDVL6P8TCDkSEikExptCkkHESQ'
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleNextClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.src = images[currentImageIndex];
          imageRef.current.alt = `Image ${currentImageIndex + 1}`;
          imageRef.current.style.opacity = '1';
        }
      }, 300); // Adjust the transition duration as needed
    }
  }, [currentImageIndex, images]);

  const arrowsContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Auto-translate images every 5 seconds
    const autoTranslate = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 5000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(autoTranslate);
    };
  }, [currentImageIndex, images]);

  return (
    <div className="photo-slider" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        ref={imageRef}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ transition: 'opacity 0.3s', width: '600px', height: '500px' }}
      />
      <div
        className="arrows"
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
        }}
        onMouseEnter={() => {
          if (arrowsContainer.current) {
            arrowsContainer.current.style.display = 'block';
          }
        }}
        onMouseLeave={() => {
          if (arrowsContainer.current) {
            arrowsContainer.current.style.display = 'none';
          }
        }}
      >
        <span
          className="arrow next"
          onClick={handlePrevClick}
          style={{
            cursor: 'pointer',
            marginRight: '250px',
            fontSize: '100px', // Adjust arrow size
            color: 'white',
            position: 'absolute',
            right: '0',
            display: 'block',
          }}
        >
          &#8249;
        </span>
        <span
          className="arrow prev"
          onClick={handleNextClick}
          style={{
            cursor: 'pointer',
            marginLeft: '250px',
            fontSize: '100px', // Adjust arrow size
            color: 'white',
            position: 'absolute',
            left: '0',
            display: 'block',
          }}
        >
          &#8250;
        </span>
      </div>
      <div className="pagination-dots" style={{ textAlign: 'center', position: 'absolute', bottom: '10px', width: '100%' }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            style={{
              cursor: 'pointer',
              display: 'inline-block',
              width: '10px',
              height: '10px',
              backgroundColor: index === currentImageIndex ? 'black' : 'gray',
              borderRadius: '50%',
              margin: '5px',
            }}
          />
        ))}
      </div>
    </div>
  );
}
const menu_btn = document.querySelector('.hamburger')
if (menu_btn) {
  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
  })
}
export const Navbar: React.FC = () => {
  return (<>
    <nav className="mobile-nav">
      {/* <Image src="/logo.png" width={150} height={55.5} className="NavImg" alt="Company Logo" />   */}
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">FAQs</a>
      <a href="#">Contact Us</a>
    </nav>
    <div>
      <nav className="navbar">
        <Image src="/logo.png" width={240} height={100} className="NavImg" alt="Company Logo" />  
        <a className="NavLinks" ><Link href="http://localhost:3000/">Home</Link></a>
        <a className="NavLinks" ><Link href="/about">About Us</Link></a>
        <a className="NavLinks" ><Link href="/faqs">FAQs</Link></a>
        <a className="NavLinks" ><Link href="/contact">Contact Us</Link></a>
      </nav>
      <button className="hamburger">
        <div className="bar"></div> 
      </button>
    </div>
  </>
  );

};

export default function Home() {
  return (<><title>Home | My Website</title><Navbar /><br /><div className="heading"><h1 style={{ 'textAlign':'center', 'color':'white','paddingTop':'50px' }} className="text-4xl font-bold text-gray-800">This one of my assignment website !</h1></div><br /><Card/><PhotoSlider/><Footer/></>)
}
