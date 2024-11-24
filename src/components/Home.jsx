import "../css/home.css";
import hero_img0 from "../assets/home/hero_img0.webp";
import hero_img1 from "../assets/home/hero_img1.png";
import hero_img2 from "../assets/home/hero_img2.webp";
import logo_mini from "../assets/home/logo mini.png";
import homeabout0 from "../assets/home/homeabout0.webp";
import homeabout1 from "../assets/home/homeabout1.webp";
import cell_image0 from "../assets/home/cell_image0.svg";
import cell_image1 from "../assets/home/cell_image1.svg";
import cell_image2 from "../assets/home/cell_image2.svg";
import cell_image3 from "../assets/home/cell_image3.svg";
import consult_img from "../assets/home/consult_img.webp";
import home_services0 from "../assets/home/home_services0.webp";
import home_services1 from "../assets/home/home_services1.webp";
import home_services2 from "../assets/home/home_services2.webp";
import home_services3 from "../assets/home/home_services3.webp";
import home_services4 from "../assets/home/home_services4.webp";
import home_services5 from "../assets/home/home_services5.webp";

function Home() {
  function Hero() {
    return (
      <div className="hero">
        <div className="left">
          <div className="top">
            <h1>State of the Art Dentistry</h1>
            <p>
              We are proud to serve our community and are committed to making a
              positive impact on the oral health of our patients.
            </p>
            <div className="scheduling">
              <button>Schedule Appointment</button>
              <span></span>
              <div className="message">
                <span>Emergency? Need to come ASAP?</span>
                <a className="redirect" href="">
                  Click Here<i className="bx bx-down-arrow-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="bottom">
            <img src={hero_img0} alt="" />
            <img src={hero_img1} alt="" />
          </div>
        </div>
        <div className="right">
          <img src={hero_img2} alt="" />
          <div className="call_box">
            <span>PRIORITIZE YOUR DENTAL HEALTH</span>
            <span>
              Call Us:{" "}
              <a className="phone" href="tel:6309737897">
                +91 63097 37897
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }

  function HomeAbout() {
    return (
      <div className="homeabout">
        <div className="left">
          <p>The best way to maintain a healthy smile is to be proactive!</p>
        </div>
        <div className="right">
          <p>
            By partnering with our office for checkups, professional cleanings,
            routine care, and any necessary dental treatment, we can help you
            keep your smile in tip-top shape.
          </p>
          <img className="logo_mini" src={logo_mini} alt="" />
          <div className="images">
            <img src={homeabout0} alt="" />
            <img src={homeabout1} alt="" />
          </div>
          <p>
            Welcome to our office! Our dentists and team are looking forward to
            caring for you and your smile. We understand just how closely
            connected oral health is to your overall health, confidence, and
            appearance, and we pride ourselves on cultivating a friendly, upbeat
            dental environment where you can always feel comfortable in our
            care.
          </p>
          <span>
            More About Us<i className="bx bx-down-arrow-alt"></i>
          </span>
        </div>
      </div>
    );
  }

  function WhyChooseUs() {
    return (
      <div className="whychoose">
        <div className="background"></div>
        <h1>WHY CHOOSE OUR DENTAL CLINIC</h1>
        <div className="cells">
          <div className="cell">
            <h2>Modern equipment</h2>
            <p>
              We have all the necessary advanced equipment for diagnosis &
              treatment: CT machine Orthophos SL, CJ-Optic microscope, CEREC
              system that allows you to make dental crowns in 1 day.
            </p>
            <img src={cell_image0} alt="" />
          </div>
          <div className="cell">
            <h2>Pain-free treatment</h2>
            <p>
              Know-how and professionalism of our doctors allow you to
              painlessly perform dental manipulations.
            </p>
            <img src={cell_image1} alt="" />
          </div>
          <div className="cell">
            <h2>Transparent prices</h2>
            <p>
              No hidden fees. The prices on our website correspond to reality.
              You will not have “unpleasant surprises” during final calculations
              for the treatment.
            </p>
            <img src={cell_image2} alt="" />
          </div>
          <div className="cell">
            <h2>Highly-qualified staff</h2>
            <p>
              Our doctors are constantly improving their skills by participating
              in international medical conferences and quality improvement
              courses.
            </p>
            <img src={cell_image3} alt="" />
          </div>
        </div>
      </div>
    );
  }

  function Consultation() {
    return (
      <div className="consult">
        <div className="left">
          <img src={consult_img} alt="" />
          <div className="message">
            <span>Request Free Consultation</span>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="right">
          <h1>Everything you need for a healthy smile</h1>
          <span>We’re putting your comfort first</span>
          <ul>
            <li>
              <i class="bx bx-check"></i>Modern technology
            </li>
            <li>
              <i class="bx bx-check"></i>Friendly team you can call friends
            </li>
            <li>
              <i class="bx bx-check"></i>Sedation dentistry to help you relax
            </li>
            <li>
              <i class="bx bx-check"></i>We accept many insurance plans and
              offer discounts
            </li>
            <li>
              <i class="bx bx-check"></i>We use energy-saving and waste-reducing
              methods
            </li>
          </ul>
          <span>…and much more!</span>
        </div>
      </div>
    );
  }

  function OurServices() {
    return (
      <div className="ourservices">
        <div className="background"></div>
        <h1>Our Services</h1>
        <div className="cells">
          <div className="cell">
            <span>SPECIALIZED CARE</span>
            <h2>Oral Surgery</h2>
            <button>View Details</button>
            <img src={home_services0} alt="" />
          </div>
          <div className="cell">
            <span>SPECIALIZED CARE</span>
            <h2>Pediatric Dentistry</h2>
            <button>View Details</button>
            <img src={home_services1} alt="" />
          </div>
          <div className="cell">
            <span>COSMETIC DENTISTRY</span>
            <h2>Whitening Boost</h2>
            <button>View Details</button>
            <img src={home_services2} alt="" />
          </div>
          <div className="cell">
            <span>SPECIALIZED CARE</span>
            <h2>Wisdom Tooth Extraction</h2>
            <button>View Details</button>
            <img src={home_services3} alt="" />
          </div>
          <div className="cell">
            <span>PREVENTIVE DENTISTRY</span>
            <h2>Gum Care</h2>
            <button>View Details</button>
            <img src={home_services4} alt="" />
          </div>
          <div className="cell">
            <span>SPECIALIZED CARE</span>
            <h2>Emergency Dentistry</h2>
            <button>View Details</button>
            <img src={home_services5} alt="" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <Hero />
      <HomeAbout />
      <WhyChooseUs />
      <Consultation />
      <OurServices />
    </div>
  );
}

export default Home;
