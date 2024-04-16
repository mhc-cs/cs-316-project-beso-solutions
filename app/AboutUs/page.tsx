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

        <Link href="Home">Home</Link>
        <Link className="active" href="AboutUs">About Us</Link>
        <Link href="Products">Products</Link>
        <Link href="Shipping">Shipping</Link>

        <Link className="logo-image" href="Home"></Link>

        <Link href="Cart" className="split">Cart</Link>
        <Link href="Sign In" className="split">Sign In</Link>

      </div>

      <section>
        <h1>About Us</h1>
        <div className="row">
          <div className="column2">
            <p>In a whimsical land where polka-dotted elephants traded marshmallow umbrellas for rainbow-colored spaghetti, 
              the moon giggled uncontrollably while juggling intergalactic pickles. Jellybean-shaped clouds performed synchronized 
              cartwheels across the cotton candy sky, leaving trails of bubblegum laughter in their wake. Meanwhile, talking rubber 
              chickens engaged in heated debates about the most fashionable sock patterns for disco-dancing giraffes. The 
              rivers flowed with liquid sunshine, and trees whispered secrets in a language only understood by invisible unicorns 
              with invisibility cloaks. It was a place where logic took a vacation and imagination rode a rollercoaster made of bubble wrap.
            </p>
          </div>
          <div className="column2">
            <img src="app/images/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg"></img>
          </div>
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