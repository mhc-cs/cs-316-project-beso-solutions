import Image from "next/image";
import styles from "./page.module.css";

function MenuButton({}) {
  return (
    <button>
      <img src=
"https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb2%2FHamburger_icon.svg%2F1024px-Hamburger_icon.svg.png&tbnid=vH-BsLYODxqF2M&vet=12ahUKEwiM4pu308-EAxWLGGIAHS4nBrUQMygAegQIARBN..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AHamburger_icon.svg&docid=zP5Xch5ecAH00M&w=1024&h=1024&q=menu%20symbol&hl=en&ved=2ahUKEwiM4pu308-EAxWLGGIAHS4nBrUQMygAegQIARBN"/>
    </button>
  );
}

function CartButton({}) {
  return (
    <button>
      <img src=
"data:image/png;base64,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"/>
    </button>
  );
}

export default function Page() {
  return (
    <div>
      <h1>Welcome to Our Webpage</h1>

      <nav class="navbar background">
                <ul class="nav-list">
                    <ul class="navbar-nav">
                        <a> <MenuButton/> </a>
                        <a class="logo">
                        <img src=
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.https://www.https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.housebeautiful.com%2Flifestyle%2Fgardening%2Fg44004499%2Fprettiest-flowers-in-the-world%2F&psig=AOvVaw2G5He_zTkZHP0bcpqQ3Z51&ust=1709264681804000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICN4orVz4QDFQAAAAAdAAAAABAs.com/url?sa=i&url=https%3A%2F%2Fwww.elledecor.com%2Flife-culture%2Ffun-at-home%2Fg42575811%2Fspring-flowers%2F&psig=AOvVaw2G5He_zTkZHP0bcpqQ3Z51&ust=1709264681804000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICN4orVz4QDFQAAAAAdAAAAABAO.com%2Fbest-sellers%2Fcat6970021&psig=AOvVaw2G5He_zTkZHP0bcpqQ3Z51&ust=1709264681804000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICN4orVz4QDFQAAAAAdAAAAABAJ"/>
                        </a>
                        <a class="nav-link" href="#AboutUs">About Us   </a>
                        <a class="nav-link" href="#Products">    Products    </a>
                        <a class="nav-link" href="#Shipping">    Shipping    </a>
                        <a class="nav-link" href="#Sign In">    Sign In    </a>
                        <a> <CartButton/> </a>
                    </ul>
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>
 
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Products New In
                        </h1>
                        <p class="text-small">
                            We will add images here.
                        </p>
                    </div>
                </div>
            </section>
            
            <footer className="footer">
                <ul>
                <a className="text-footer">
                    Copyright ©-All rights are reserved   |
                </a>
                <a>     Social Media Here</a>
                </ul>
            </footer>
    </div>
  );
}
/*export default function Page() {
  return
}*/