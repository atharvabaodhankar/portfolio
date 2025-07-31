'use client';

import Image from 'next/image';

export default function Created() {
  return (
    <section id="created">
      <div className="created">
        <h1>
          I WAS <br /> 
          <span>CODED</span>
          <div className="created-img-1 created-img">
            <Image 
              src="/imgs/created-img-1.jpg" 
              alt="created" 
              width={250}
              height={100}
            />
          </div>
          <br />
          <div className="created-img-2 created-img">
            <Image 
              src="/imgs/created-img-2.png" 
              alt="created" 
              width={250}
              height={100}
            />
          </div>
          TO <span>DESIGN</span>
        </h1>
      </div>
    </section>
  );
}