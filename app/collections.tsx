'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from './main.module.css';
import Footer from './foot';
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  
}


function Collections() {
  const [data, setData] = useState<Product[]>([]);

  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);


  const handleResize = () => {
    setShowSidebar(window.innerWidth > 768);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=15');
      const json = await response.json();
      setData(json);
      setLoading(false);
    };

    fetchData();
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleSection = (section: string | null) => {
    setOpenSection(prev => (prev === section ? null : section));
  };
  
const toggleSidebar = () => {
  setShowSidebar(!showSidebar);
};

  return (
    <>
      <Head>
        <title>Product Collections | Your Store</title>
        <meta name="description" content="Browse a selection of products from various categories including men, women, and kids." />
        <meta name="keywords" content="products, eCommerce, collections, filters" />
      
      </Head>

      <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1>Product Collections</h1>
        <div className={styles.main}>
          <div className={styles['main-filters']}>
            <div className={styles['main-filter']}>
              <h2>{data.length} items</h2>
              <h1>&lt;</h1>
              {showSidebar ? (
                <h1 style={{ color: "gray", cursor: "pointer" }} onClick={toggleSidebar}>Hide filters</h1>
              ) : (
                <h1 style={{ color: "gray", cursor: "pointer" }} onClick={toggleSidebar}>Show filters</h1>
              )}
              
            </div>
            <div className={styles['main-filter2']}>
              {showSidebar ? (
                <h1 style={{ color: "gray", cursor: "pointer" }} onClick={toggleSidebar}>Hide filters</h1>
              ) : (
                <h1 style={{ color: "gray", cursor: "pointer" }} onClick={toggleSidebar}>Filters</h1>
              )}
            </div>
            <div className={styles['main-selection']}>
              <select>
                <option>Recommended</option>
                <option>Newest First</option>
                <option>Low-High</option>
                <option>High-Low</option>
                <option>Popularity</option>
              </select>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            {loading ? (
              <h1>Loading......</h1>
            ) : (
              <>
                {showSidebar && (
                  <div className={styles['main-sidebar']}>
                    <div style={{ display: "flex", borderBottom: "2px solid whitesmoke" }}>
                      <input type="checkbox" />
                      <p>Customize</p>
                    </div>

                    <div style={{ borderBottom: "2px solid whitesmoke",cursor:"pointer" }} >
                      <p onClick={() => toggleSection('idealFor')}>Ideal For &gt;</p>
                      <p>All</p>
                      {openSection === 'idealFor' && (
                        <>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>Men</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>Women</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>Baby & Kids</p>
                          </div>
                        </>
                      )}
                    </div>

                    <div style={{ borderBottom: '2px solid whitesmoke',cursor:"pointer" }} >
                      <p onClick={() => toggleSection('occasion')}>Occasion &gt;</p>
                      <p>All</p>
                      {openSection === 'occasion' && (
                        <>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>Casual</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>Party</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>Wedding</p>
                          </div>
                        </>
                      )}
                    </div>

                    <div style={{ borderBottom: '2px solid whitesmoke',cursor:"pointer" }} >
                      <p onClick={() => toggleSection('suitableFor')}>Suitable For Age&gt;</p>
                      <p>All</p>
                      {openSection === 'suitableFor' && (
                        <>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>5-12</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>15-21</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <input type="checkbox" />
                            <p>21-35</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

<div className={styles['main-items']}>
  {data.map((item, index) => (
    <div className={styles['main-item']} key={index}>
      {item.image && (
        <img 
          src={item.image} 
          alt={item.title} 
          className={styles["collection-img"]} 
          loading="lazy" 
          width={150} 
          height={150} 
        />
      )}
      <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "120px" }}>{item.title}</p>
      <p>${item.price}</p>
    </div>
  ))}
</div>

              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Collections;
