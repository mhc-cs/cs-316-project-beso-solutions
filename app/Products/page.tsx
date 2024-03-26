import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";

import Link from 'next/link';

function CartButton({}) {
  return (
    <button>
      <img src="data:images/png-clipart-bird-logo-bird-animals-logo-thumbnail.jpeg"/>
    </button>
  );
}

export default function Page() {

  return (
  <div>
    <body>
      <div className="topnav">
        <a className="container">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </a>

        <Link className="active" href="Home">Home</Link>
        <Link href="AboutUs">About Us</Link>
        <Link href="Products">Products</Link>
        <Link href="Shipping">Shipping</Link>

        <div className="logo-image"></div>

        <Link href="Cart" className="split">Cart</Link>
        <Link href="Sign In" className="split">Sign In</Link>

      </div>

      <section>
        <h1>Products</h1>
        <div className="row">
          <div className="column2">
            <img src="app/images/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg"></img>
          </div>
          <div className="column2">
            <p>In a whimsical land where polka-dotted elephants traded marshmallow umbrellas for rainbow-colored spaghetti, 
              the moon giggled uncontrollably while juggling intergalactic pickles. Jellybean-shaped clouds performed synchronized 
              cartwheels across the cotton candy sky, leaving trails of bubblegum laughter in their wake. Meanwhile, talking rubber 
              chickens engaged in heated debates about the most fashionable sock patterns for disco-dancing giraffes. The 
              rivers flowed with liquid sunshine, and trees whispered secrets in a language only understood by invisible unicorns 
              with invisibility cloaks. It was a place where logic took a vacation and imagination rode a rollercoaster made of bubble wrap.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a className="active" href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </section>
      
      <footer className="footer">
        <ul>
          <a className="text-footer">Copyright ©-All rights are reserved|</a>
          <a>Social Media Here</a>
        </ul>
      </footer>

    </body>

  </div>
  );
}