/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "./Navbar";

function Landing() {
  return (
    <>
      <Navbar />
      <section id="banner">
        <div className="inner">
          <h2>Use My Tech Stuff</h2>
          <p>
            Tired of paying ridiculous fees for camera and other equipment
            <br />
            rentals? Bypass the middleman and rent from a real person.
          </p>
          <ul className="actions special">
            <li>
              <a href="/items" className="button primary">
                Explore Items
              </a>
            </li>
          </ul>
        </div>
        <a href="#one" className="more scrolly">
          Learn More
        </a>
      </section>

      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>Try the latest inventions today</h2>
            <p>
              Discover great products. Rent directly from owners.
              <br />
              Or add your own product, make money and get some feedback.
            </p>
          </header>
          <ul className="icons major">
            <li>
              <span className="icon fa-gem major style1">
                <span className="label">Lorem</span>
              </span>
            </li>
            <li>
              <span className="icon fa-heart major style2">
                <span className="label">Ipsum</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-code major style3">
                <span className="label">Dolor</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section id="two" className="wrapper alt style2">
        <section className="spotlight">
          <div className="image">
            <img src="images/pic01.jpg" alt="" />
          </div>
          <div className="content">
            <h2>Stay In The Know</h2>
            <p>
              Learn about the latest trends in the world of science and
              technology. Less talk, more hands-on practical experience. Most
              useful and revolutionary products at the touch of a button.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src="images/pic02.jpg" alt="" />
          </div>
          <div className="content">
            <h2>Go Green</h2>
            <p>
              Ownership is overrated. Save money and help <br /> the
              environment. With Wonder you can get the <br /> latest products
              while owning less and experiencing more. <br /> All our packaging
              is reusable and made from recycled materials.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src="images/pic03.jpg" alt="" />
          </div>
          <div className="content">
            <h2>Improve Your Life</h2>
            <p>
              Discover new opportunities for yourself. With latest inventions,
              there are many new ways to be creative, more productive and solve
              day-to-day issues. There's an invention for every kind of problem.
            </p>
          </div>
        </section>
      </section>
      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>Explore, make your choice and book it</h2>
            <p>
              We are striving to bring the latest and hottest Tech innovations.
              Explore our list for inspiration, experiments or just for fun.
              Make your pick, and book it to try for a few days.
            </p>
          </header>
          <ul className="features">
            <li className="icon fa-paper-plane">
              <h3>We will deliver your item</h3>
              <p>
                We deliver every day Monday to Sunday including bank holidays.
                You'll have tracking information so you know what time to expect
                deliveries.
              </p>
            </li>
            <li className="icon solid fa-laptop">
              <h3>Ready to go, out of the box</h3>
              <p>
                We know that feeling of unpacking something new. That's why
                we're keeping the excitement of discovery at the heart of every
                order, while taking care of any boring setup or cabling that may
                be necessary. Just plug it in and you're good to go. Trying
                something new has never been easier.
              </p>
            </li>
            <li className="icon solid fa-code">
              <h3>We have it covered</h3>
              <p>
                We know that accidents sometimes happen. All products rented
                from us are covered from accidental damage, including damage
                caused by liquids (just in case you spill a drink over it). The
                only thing we ask is that you treat the rented product as if it
                was your own. They are rare finds, and makers put their hearts
                and souls into bringing them to life.
              </p>
            </li>
            <li className="icon solid fa-headphones-alt">
              <h3>When finished, our courier picks it up</h3>
              <p>
                When time comes, just put it back in the box and give it to our
                courier. If you feel like buying the product, inventors usually
                include offers to purchase a brand new one and make it your own.
              </p>
            </li>
            <li className="icon fa-heart">
              <h3>Try before you buy</h3>
              <p>
                It's always better to experience a product. Show stores are
                great, but they're never as comfortable as home. With Wonder,
                customers can try your product exactly how they would if they
                purchased it.
              </p>
            </li>
            <li className="icon fa-flag">
              <h3>Have fun</h3>
              <p>
                Trying new things with Us is beautifully easy, simple and
                inspirational. Every product comes pre-configured and ready to
                try - just plug and play. We are completely transparent, so you
                know exactly what you’re paying for.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Anyone can be an inventor.</h2>
            <p>
              We're a community of makers and enthusiasts, pushing the
              boundaries of what's possible. We believe humans are amazing
              beings and can solve any problems when working together.
            </p>
          </header>
          <ul className="actions stacked">
            <li>
              <a href="/signup" className="button fit primary">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="button fit">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Use My Tech Stuff</li>
          <li>Design: The Best Track Team</li>
        </ul>
      </footer>
    </>
  );
}

export default Landing;
