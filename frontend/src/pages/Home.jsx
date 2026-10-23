import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import {
  heroImage,
  ctaImage,
  regions,
  popularSearches,
  inSeason,
  categories,
  featuredFarmers,
  supplyExample,
} from "../data/sampleData";
import "./Home.css";

// If a photo fails to load, hide it so the colored background shows instead
const hideBrokenImage = (event) => {
  event.currentTarget.style.display = "none";
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

const steps = [
  {
    title: "Search what you need",
    text: "Look up a product and region, or browse what is in season right now.",
  },
  {
    title: "Compare farmers",
    text: "See each farmer's main products, quantities, harvest dates and ratings.",
  },
  {
    title: "Contact them directly",
    text: "Reach farmers on WhatsApp or by phone and agree on the deal. No middlemen.",
  },
];

function Home() {
  useReveal();

  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const goToMarketplace = (searchText, selectedRegion) => {
    const params = new URLSearchParams();
    if (searchText) params.set("q", searchText);
    if (selectedRegion) params.set("region", selectedRegion);
    const queryString = params.toString();
    navigate(queryString ? `/marketplace?${queryString}` : "/marketplace");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    goToMarketplace(query.trim(), region);
  };

  const totalSupply = supplyExample.farmers.reduce(
    (sum, farmer) => sum + farmer.amount,
    0
  );

  return (
    <div className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-eyebrow hero-anim" style={{ "--d": "0.05s" }}>
              Cameroon's farm-to-buyer marketplace
            </span>

            <h1 className="hero-title hero-anim" style={{ "--d": "0.15s" }}>
              Fresh from Cameroonian farms,{" "}
              <span className="hero-highlight">
                <em>straight to you.</em>
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 15 C 80 5, 180 3, 297 11" pathLength="100" />
                </svg>
              </span>
            </h1>

            <p className="hero-text hero-anim" style={{ "--d": "0.3s" }}>
              Find crops, cash crops, poultry and livestock directly from the
              farmers who produce them. See what is in season, compare farmers,
              and combine supply when one farm is not enough.
            </p>

            <form
              className="hero-search hero-anim"
              style={{ "--d": "0.45s" }}
              onSubmit={handleSearch}
            >
              <div className="search-field">
                <label htmlFor="search-product">What do you need?</label>
                <input
                  id="search-product"
                  type="text"
                  placeholder="Cassava, eggs, cocoa..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>

              <div className="search-field">
                <label htmlFor="search-region">Region</label>
                <select
                  id="search-region"
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
                >
                  <option value="">All regions</option>
                  {regions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary search-btn">
                Search
              </button>
            </form>

            <div className="hero-popular hero-anim" style={{ "--d": "0.6s" }}>
              <span>Popular:</span>
              {popularSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => goToMarketplace(item, "")}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="hero-visual hero-anim" style={{ "--d": "0.25s" }}>
            <div className="hero-image">
              <img src={heroImage} alt="Green farmland" onError={hideBrokenImage} />
            </div>

            <div className="hero-float hero-float-top">
              <span className="dot dot-now"></span>
              <div>
                <strong>Cocoa is in peak season</strong>
                <small>South-West region</small>
              </div>
            </div>

            <div className="hero-float hero-float-bottom">
              <strong>55 of 50 bags covered</strong>
              <small>3 farmers combined</small>
              <div className="mini-bar">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IN SEASON ================= */}
      <section className="season">
                <div className="container">
          <div className="section-head section-head-row reveal">
            <div>
              <span className="section-eyebrow">In season now</span>
              <h2>What farmers are harvesting</h2>
            </div>
            <Link to="/in-season" className="link-arrow">
              See the full calendar <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="season-marquee reveal">
          <div className="season-track">
            {[...inSeason, ...inSeason].map((item, index) => (
              <div
                className="season-card"
                key={index}
                aria-hidden={index >= inSeason.length}
              >
                <span className={`season-status status-${item.type}`}>
                  {item.status}
                </span>
                <h3>{item.product}</h3>
                <p>{item.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="container categories">
        <div className="section-head reveal">
          <span className="section-eyebrow">Browse by category</span>
          <h2>Everything the farm produces</h2>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              to={`/marketplace?category=${category.slug}`}
              className="category-card reveal"
              style={{ "--delay": `${index * 0.1}s` }}
              key={category.slug}
            >
              <img src={category.image} alt={category.name} onError={hideBrokenImage} />
              <div className="category-overlay">
                <h3>{category.name}</h3>
                <p>{category.examples}</p>
                <span className="category-link">
                  Explore <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= COMBINED SUPPLY ================= */}
      <section className="combine">
        <div className="container combine-inner">
          <div className="combine-text reveal">
            <span className="section-eyebrow">Built for big orders</span>
            <h2>
              One farm too small? <em>Combine several.</em>
            </h2>
            <p>
              Most Cameroonian farmers work on a small scale. When you need more
              than one farm can supply, AgriMboa shows you which farmers in the
              same region can fill your order together, and lets you contact
              all of them at once.
            </p>
            <ul className="combine-points">
              <li>See the available quantity on every listing</li>
              <li>Get matched with farmers in the same region</li>
              <li>Small farmers get a share of big orders</li>
            </ul>
          </div>

          <div className="supply-card reveal" style={{ "--delay": "0.15s" }}>
            <div className="supply-head">
              <div>
                <small>Your request</small>
                <strong>
                  {supplyExample.needed} {supplyExample.unit} of {supplyExample.product}
                </strong>
                <span className="supply-region">{supplyExample.region} region</span>
              </div>
              <span className="supply-badge">Covered</span>
            </div>

            {supplyExample.farmers.map((farmer, index) => (
              <div className="supply-row" key={farmer.name}>
                <div className="supply-row-top">
                  <span>{farmer.name}</span>
                  <span>
                    {farmer.amount} {supplyExample.unit}
                  </span>
                </div>
                <div className="bar">
                  <span
                    className="bar-fill"
                    style={{
                      "--w": `${(farmer.amount / supplyExample.needed) * 100}%`,
                      "--bar-delay": `${0.4 + index * 0.25}s`,
                    }}
                  ></span>
                </div>
              </div>
            ))}

            <div className="supply-total">
              <span>Combined supply</span>
              <strong>
                {totalSupply} / {supplyExample.needed} {supplyExample.unit}
              </strong>
            </div>
            <div className="bar bar-total">
              <span
                className="bar-fill"
                style={{ "--w": "100%", "--bar-delay": "1.3s" }}
              ></span>
            </div>

            <Link to="/marketplace" className="btn btn-primary supply-btn">
              Contact all 3 farmers
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED FARMERS ================= */}
      <section className="container farmers">
        <div className="section-head section-head-row reveal">
          <div>
            <span className="section-eyebrow">Featured farmers</span>
            <h2>Meet the people behind the produce</h2>
          </div>
          <Link to="/marketplace" className="link-arrow">
            View all farmers <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="farmer-grid">
          {featuredFarmers.map((farmer, index) => (
            <article
              className="farmer-card reveal"
              style={{ "--delay": `${index * 0.1}s` }}
              key={farmer.id}
            >
              <div className="farmer-cover">
                <img src={farmer.cover} alt={`${farmer.name}'s farm`} onError={hideBrokenImage} />
                <span className={`farmer-tag status-${farmer.statusType}`}>
                  {farmer.status}
                </span>
              </div>

              <div className="farmer-body">
                <div className="farmer-avatar">{getInitials(farmer.name)}</div>
                <h3>{farmer.name}</h3>
                <p className="farmer-location">
                  {farmer.town}, {farmer.region}
                </p>

                <div className="farmer-products">
                  <span className="products-label">Main products</span>
                  {farmer.main.map((product) => (
                    <span className="chip chip-main" key={product}>
                      {product}
                    </span>
                  ))}
                </div>

                <div className="farmer-products">
                  <span className="products-label">Also sells</span>
                  {farmer.side.map((product) => (
                    <span className="chip chip-side" key={product}>
                      {product}
                    </span>
                  ))}
                </div>

                <div className="farmer-footer">
                  <span className="farmer-rating">
                    <span aria-hidden="true">&#9733;</span> {farmer.rating}
                  </span>
                  <Link to="/marketplace" className="link-arrow">
                    View profile <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="container steps">
        <div className="section-head reveal">
          <span className="section-eyebrow">How it works</span>
          <h2>From the farm to you in three steps</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              className="step-card reveal"
              style={{ "--delay": `${index * 0.12}s` }}
              key={step.title}
            >
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FARMER CTA ================= */}
      <section className="container cta">
        <div className="cta-box reveal">
          <img src={ctaImage} alt="" onError={hideBrokenImage} />
          <div className="cta-content">
            <h2>
              Are you a farmer? <em>Show Cameroon what you grow.</em>
            </h2>
            <p>
              Create your free profile, list your main and side products, and
              let buyers find you before your harvest is even ready.
            </p>
            <div className="cta-actions">
              <Link to="/signup" className="btn btn-gold">
                Join as a farmer
              </Link>
              <Link to="/about" className="btn btn-ghost-light">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;