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
      <header className="header">
        <img src="data:images/png-clipart-bird-logo-bird-animals-logo-thumbnail.jpeg"/>
      </header>

      <div className="topnav">
        <a className="container">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </a>

        <Link className="active" href="Home">
          <img src="images/png-clipart-bird-logo-bird-animals-logo-thumbnail.jpeg"/>
        </Link>
        <Link href="AboutUs">About Us</Link>
        <Link href="Products">Products</Link>
        <Link href="Shipping">Shipping</Link>

        <Link href="Cart" className="split">Cart</Link>
        <Link href="Sign In" className="split">Sign In</Link>

      </div>

      <div className="bg"></div>

      <section>
        <h1>Products New In</h1>
        <div className="row">
          <div className="column3">
            <div className="card">
              <img src="images/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg" alt="Denim Jeans"></img>
              <h1>Tailored Jeans 1</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="column3">
            <div className="card">
              <img src="images/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg" alt="Denim Jeans"></img>
              <h1>Tailored Jeans 2</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
          </div>
          <div className="column3">
            <div className="card">
              <img src="images/sticker-design-with-blue-t-shirt-isolated_1308-79625.jpg" alt="Denim Jeans"></img>
              <h1>Tailored Jeans 3</h1>
              <p className="price">$19.99</p>
              <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
              <p><button>Add to Cart</button></p>
            </div>
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