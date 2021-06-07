import React from 'react';
import { FaCheck } from 'react-icons/fa';

export function Pricing() {
  return (
    <section className="price-container">
      <article className="price-text">
        <h2>PRICING</h2>
        <h1>The right price for your web hosting</h1>
      </article>
      <artice className="cards-container">
        <div className="card card1">
          <div className="card-text">
            <h3>Single Shared Hosting</h3>
            <p>Ideal solution for beginners</p>
          </div>
          <div className="price">
            <div className="price-save">
              <span>$9.49</span>
              <button type="button" className="price-btn">
                SAVE 85%
              </button>
            </div>
            <div className="price-month">
              <span className="dollar-sign">$ </span>1.39 <span>/Month</span>
            </div>

            <button type="button" className="select-btn">
              Select
            </button>
            <p className="renew-text">$2.99/mo when you renew</p>
          </div>
          <div>
            <span className="feature-text">What's include</span>
            <hr />
            <div className="feature-list">
              <ul>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">30 GB</span> SSD Storage
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">~10000</span> Visits Monthly
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">~100 GB</span> Bandwidth
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">2</span> Databases
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Free</span> SSL ($11.95 value)
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">GIT</span> Access
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card card2">
          <div className="card-text">
            <h3>Premium Shared Hosting</h3>
            <p>Perfect package for personal websites</p>
          </div>
          <div className="price">
            <div className="price-save">
              <span>$10.29</span>
              <button type="button" className="price-btn popular">
                SAVE 75%
              </button>
            </div>
            <div className="price-month">
              <span className="dollar-sign">$ </span>2.59 <span>/Month</span>
            </div>

            <button type="button" className="select-btn popular">
              Select
            </button>
            <p className="renew-text">$5.99/mo when you renew</p>
          </div>
          <div>
            <span className="feature-text popular">What's include</span>
            <hr />
            <div className="feature-list popular">
              <ul>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">100 GB</span> SSD Storage
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">~25000</span> Visits Monthly
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Free</span> SSL ($11.95 value)
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Free </span> Domain ($8.99 value)
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text"> Google </span> Ads Credit
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">SSH </span> Access
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Unlimited</span> Bandwidth
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Unlimited</span> Databases
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Free</span> SSL ($11.95 value)
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">GIT</span> Access
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card card3">
          <div className="card-text">
            <h3>Business Shared Hosting </h3>
            <p>Optimized for small businesses</p>
          </div>
          <div className="price">
            <div className="price-save">
              <span>$15.99</span>
              <button type="button" className="price-btn">
                SAVE 75%
              </button>
            </div>
            <div className="price-month">
              <span className="dollar-sign">$ </span>3.39 <span>/Month</span>
            </div>

            <button type="button" className="select-btn">
              Select
            </button>
            <p className="renew-text">$8.99/mo when you renew</p>
          </div>
          <div>
            <span className="feature-text">What's include</span>
            <hr />
            <div className="feature-list">
              <ul>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">200 GB</span> SSD Storage
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">~100000</span> Visits Monthly
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text"> Free</span> CDN ($9.95 value)
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Daily</span> Backups ($11.40 value)
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Unlimited</span> Databases
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Unlimited</span> Bandwidth
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">Free</span> SSL ($11.95 value)
                </li>
                <li>
                  <span className="check">
                    <FaCheck /> &nbsp;
                  </span>
                  <span className="bold-text">GIT</span> Access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </artice>
    </section>
  );
}
