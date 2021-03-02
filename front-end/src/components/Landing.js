import React from "react";
import Nav from "../components/Navbar";

function Landing() {
  return (
    <>
      <Nav />
      <section id="banner">
        <div class="inner">
          <h2>Use My Tech Stuff</h2>
          <p>
            Tired of paying ridiculous fees for camera and other equipment
            <br />
            rentals? Bypass the middleman and rent from a real person.
          </p>
          <ul class="actions special">
            <li>
              <a href="/items" class="button primary">
                Explore Items
              </a>
            </li>
          </ul>
        </div>
        <a href="#one" class="more scrolly">
          Learn More
        </a>
      </section>

      <section id="one" class="wrapper style1 special">
        <div class="inner">
          <header class="major">
            <h2>Try the latest inventions today</h2>
            <p>
              Discover great products. Rent directly from owners.
              <br />
              Or add your own product, make money and get some feedback.
            </p>
          </header>
          <ul class="icons major">
            <li>
              <span class="icon fa-gem major style1">
                <span class="label">Lorem</span>
              </span>
            </li>
            <li>
              <span class="icon fa-heart major style2">
                <span class="label">Ipsum</span>
              </span>
            </li>
            <li>
              <span class="icon solid fa-code major style3">
                <span class="label">Dolor</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section id="two" class="wrapper alt style2">
        <section class="spotlight">
          <div class="image">
            <img src="images/pic01.jpg" alt="" />
          </div>
          <div class="content">
            <h2>Stay In The Know</h2>
            <p>
              Learn about the latest trends in the world of science and
              technology. Less talk, more hands-on practical experience. Most
              useful and revolutionary products at the touch of a button.
            </p>
          </div>
        </section>
        <section class="spotlight">
          <div class="image">
            <img src="images/pic02.jpg" alt="" />
          </div>
          <div class="content">
            <h2>Go Green</h2>
            <p>
              Ownership is overrated. Save money and help <br /> the
              environment. With Wonder you can get the <br /> latest products
              while owning less and experiencing more. <br /> All our packaging
              is reusable and made from recycled materials.
            </p>
          </div>
        </section>
        <section class="spotlight">
          <div class="image">
            <img src="images/pic03.jpg" alt="" />
          </div>
          <div class="content">
            <h2>Improve Your Life</h2>
            <p>
              Discover new opportunities for yourself. With latest inventions,
              there are many new ways to be creative, more productive and solve
              day-to-day issues. There's an invention for every kind of problem.
            </p>
          </div>
        </section>
      </section>
      <section id="three" class="wrapper style3 special">
        <div class="inner">
          <header class="major">
            <h2>Explore, make your choice and book it</h2>
            <p>
              We are striving to bring the latest and hottest Tech innovations.
              Explore our list for inspiration, experiments or just for fun.
              Make your pick, and book it to try for a few days.
            </p>
          </header>
          <ul class="features">
            <li class="icon fa-paper-plane">
              <h3>We will deliver your item</h3>
              <p>
                We deliver every day Monday to Sunday including bank holidays.
                You'll have tracking information so you know what time to expect
                deliveries.
              </p>
            </li>
            <li class="icon solid fa-laptop">
              <h3>Ready to go, out of the box</h3>
              <p>
                We know that feeling of unpacking something new. That's why
                we're keeping the excitement of discovery at the heart of every
                order, while taking care of any boring setup or cabling that may
                be necessary. Just plug it in and you're good to go. Trying
                something new has never been easier.
              </p>
            </li>
            <li class="icon solid fa-code">
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
            <li class="icon solid fa-headphones-alt">
              <h3>When finished, our courier picks it up</h3>
              <p>
                When time comes, just put it back in the box and give it to our
                courier. If you feel like buying the product, inventors usually
                include offers to purchase a brand new one and make it your own.
              </p>
            </li>
            <li class="icon fa-heart">
              <h3>Try before you buy</h3>
              <p>
                It's always better to experience a product. Show stores are
                great, but they're never as comfortable as home. With Wonder,
                customers can try your product exactly how they would if they
                purchased it.
              </p>
            </li>
            <li class="icon fa-flag">
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

      <section id="cta" class="wrapper style4">
        <div class="inner">
          <header>
            <h2>Anyone can be an inventor.</h2>
            <p>
              We're a community of makers and enthusiasts, pushing the
              boundaries of what's possible. We believe humans are amazing
              beings and can solve any problems when working together.
            </p>
          </header>
          <ul class="actions stacked">
            <li>
              <a href="/signup" class="button fit primary">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" class="button fit">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer id="footer">
        <ul class="icons">
          <li>
            <a href="#" class="icon brands fa-twitter">
              <span class="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-facebook-f">
              <span class="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-instagram">
              <span class="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon brands fa-dribbble">
              <span class="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" class="icon solid fa-envelope">
              <span class="label">Email</span>
            </a>
          </li>
        </ul>
        <ul class="copyright">
          <li>&copy; Use My Tech Stuff</li>
          <li>Design: The Best Track Team</li>
        </ul>
      </footer>
    </>
  );
}

export default Landing;
