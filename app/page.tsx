import Collections from "./collections";

import Navbar from "./navbar";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className="desc">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Best in class with Wide Range of Cloths for GenZ</p>
        </div>
          <main>
            <Collections/>
          </main>
      
    </div>
  );
}
