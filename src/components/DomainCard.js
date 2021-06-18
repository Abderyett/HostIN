import React from 'react';
import { extensions } from '../tldExtensions';
import { useGlobalContext } from '../context';

export function DomainCard() {
  const { searchTerm } = useGlobalContext();
  return (
    <>
      <div className="domain-card-container">
        <div className="card-wrapper">
          <div className="domain-card">
            <div className="domain-status">Domain is avaiable!</div>
            <div className="card-content">
              <div className="domain-info">
                <h2>{searchTerm}</h2>
              </div>
              <div className="domain-price">
                <button type="button" className="save-btn">
                  SAVE 18%
                </button>
                <div className="yearly-price">
                  <div className="old-price">
                    <span>$10.99</span>
                  </div>
                  <div className="current-price">
                    <span className="dollar-sign">$ </span>1.39 <span>/Month</span>
                  </div>
                </div>
              </div>
              <div>
                <button type="button" className="cart-btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="option-text">More options</h1>
        {extensions.map((el, index) => (
          <div className="card-wrapper">
            <div className="domain-card-options">
              <div className="card-content">
                <div className="domain-info">
                  <h2>
                    {searchTerm}
                    {el}
                  </h2>
                </div>
                <div className="domain-price">
                  <button type="button" className="save-btn">
                    SAVE {Math.floor(Math.random() * (98 - 61) + 61)}%
                  </button>
                  <div className="yearly-price">
                    <div className="old-price">
                      <span>$10.99</span>
                    </div>
                    <div className="current-price">
                      <span className="domain-dollar-sign">$ </span>1.39 <span>/Month</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" className="cart-btn">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
