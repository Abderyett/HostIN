import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IoArrowUpCircle } from 'react-icons/io5';
import { extensions } from '../tldExtensions';
import { useGlobalContext } from '../context';
import { Loader } from './Loader';

export function DomainCard() {
  const { searchTerm, loading, domain } = useGlobalContext();
  const { domainAvailability, domainName } = domain;

  const subStr = searchTerm.indexOf('.');

  const termCheck = () => {
    if (!searchTerm.includes('.')) {
      return searchTerm;
    }
    return searchTerm.slice(0, subStr);
  };
  useEffect(() => {
    const position = () => {
      const arrow = document.querySelector('#arrow');
      const { scrollY, innerHeight } = window;

      if (innerHeight - scrollY <= 100) {
        arrow.style.opacity = 1;
      } else {
        arrow.style.opacity = 0;
      }
    };
    document.addEventListener('scroll', position);
    return () => {
      document.removeEventListener('scroll', position);
    };
  }, []);

  return (
    <>
      {Object.keys(domain).length !== 0 && (
        <div className="domain-card-container">
          <div id="card" className="card-wrapper first">
            <div className="domain-card">
              <div
                className={`${domainAvailability === 'UNAVAILABLE' ? 'domain-status unavailable' : 'domain-status'}`}
              >
                Domain is {domainAvailability === 'AVAILABLE' ? 'available' : 'taken'}
              </div>
              <div className="card-content">
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    <div className="domain-info">
                      <h2>{domainName}</h2>
                    </div>
                    {domainAvailability === 'UNAVAILABLE' ? (
                      <h2>Sorry, this domain is already taken</h2>
                    ) : (
                      <div className="price-wrapper">
                        <div className="domain-price">
                          <button type="button" className="save-btn-first">
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
                          <button type="button" className="cart-btn-first">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          {loading ? (
            ''
          ) : (
            <div className="options-wrapper">
              <h1 className={`${domainAvailability === 'UNAVAILABLE' ? 'option-text hidden' : 'option-text'}`}>
                More options
              </h1>

              {extensions.map((el, index) => (
                <div
                  className={`${domainAvailability === 'UNAVAILABLE' ? 'card-wrapper hidden' : 'card-wrapper'}`}
                  key={index}
                >
                  <div className="domain-card-options">
                    <div className="card-content">
                      <div className="domain-info">
                        <h2>
                          {termCheck()}
                          {el}
                        </h2>
                      </div>
                      <div className="price-wrapper">
                        <div className="domain-price">
                          <button type="button" className="save-btn">
                            SAVE {Math.floor(Math.random() * (98 - 61) + 61)}%
                          </button>
                          <div className="yearly-price">
                            <div className="old-price">
                              <span>${Math.round(Math.random() * (67 - 10.99) + 10.99).toFixed(2)}</span>
                            </div>
                            <div className="current-price">
                              <span className="domain-dollar-sign">$ </span>
                              {(Math.random() * (9 - 0.99) + 0.99).toFixed(2)}
                              <span>/Month</span>
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
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <IoArrowUpCircle id="arrow" onClick={() => scroll.scrollToTop()} />
    </>
  );
}
