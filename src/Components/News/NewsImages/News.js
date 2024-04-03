import React from 'react';
import Img1 from '..//components/News/NewsImages/Img1.jpg';
import Img2 from '..//components/News/NewsImages/Img2.jpg';
import Img3 from '..//components/News/NewsImages/Img3.jpg';
import Img4 from '..//components/News/NewsImages/Img4.jpg';
import "../components/News/News.css";
import AOSInitializer from "./AOS/AOSInitializer";
const NewsPage = () => {
    return (
      
        <div className='MainNewsContainer'>
   
            <h1 className='news1'>Latest Real Estate News in Wilmington, NC</h1>
            <AOSInitializer />
            <section className="article">
            <AOSInitializer />
                <img src={Img1} alt="Downtown Development" className="article-image" />
                <AOSInitializer />
                <div className="article-content">
                    <h2 className='news2'>New Developments in Downtown Wilmington</h2>
                    <p className='p1'>Downtown Wilmington sees a resurgence with new developments, bringing modern architecture and cultural spaces to contribute to the city's urban vibrancy.</p>
               
                </div>
            </section>

            <section className="article">
                <img src={Img2} alt="Rising Home Prices" className="article-image" />
                <div className="article-content">
                    <h2 className='news2'>Home Prices on the Rise</h2>
                    <p className='p1'>Home prices in Wilmington, North Carolina, are on the rise, reflecting the increasing demand for housing in the region.</p>
                 
                </div>
            </section>

            <section className="article">
                <img src={Img3} alt="New Suburban Communities" className="article-image" />
                <div className="article-content">
                    <h2 className='news2'>Emerging Suburban Communities</h2>
                    <p className='p1'>Emerging suburban communities in Wilmington, North Carolina, are experiencing notable growth and transformation in 2023. 
</p>
                
                </div>
            </section>

            <section className="article">
                <img src={Img4} alt="Luxury Real Estate Market" className="article-image" />
                <div className="article-content">
                    <h2 className='news2'>Luxury Real Estate Market Booming</h2>
                    <p className='p1'>Wilmington's luxury real estate market is currently booming, witnessing a surge in demand and heightened interest in high-end properties.</p>
             
                </div>
            </section>
        </div>
    );
}

export default NewsPage;
