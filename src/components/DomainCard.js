import React, { useEffect } from 'react';
import { extensions } from '../tldExtensions';
import { useGlobalContext } from '../context';

import { Loader } from './Loader';

export function DomainCard() {
  const { searchTerm, loading, domain } = useGlobalContext();
  const { domainAvailability, domainName } = domain;

  const subStr = searchTerm.indexOf('.');

  const termCheck = () => {
    if (
      !searchTerm.includes(
        '.com' ||
          '.online' ||
          '.xyz' ||
          '.link' ||
          '.live' ||
          '.digital' ||
          '.me' ||
          '.net' ||
          '.tech' ||
          '.email' ||
          '.help' ||
          '.click' ||
          '.site' ||
          '.store' ||
          '.space' ||
          '.website' ||
          '.in' ||
          '.uno' ||
          '.host' ||
          '.fun' ||
          '.press' ||
          '.asia' ||
          '.biz' ||
          '.ca' ||
          '.co.in' ||
          '.co.uk' ||
          '.com.ru' ||
          '.es' ||
          '.eu' ||
          '.firm.in' ||
          '.gen.in' ||
          '.ind.in' ||
          '.info' ||
          '.mobi' ||
          '.name' ||
          '.net.in' ||
          '.net.ru' ||
          '.org' ||
          '.org.in' ||
          '.org.ru' ||
          '.org.uk' ||
          '.pw' ||
          '.ru' ||
          '.ws' ||
          '.be' ||
          '.ch' ||
          '.co' ||
          '.com.co' ||
          '.com.es' ||
          '.cz' ||
          '.de' ||
          '.fr' ||
          '.gr' ||
          '.ist' ||
          '.istanbul' ||
          '.it' ||
          '.me.uk' ||
          '.nl' ||
          '.nom.es' ||
          '.nu' ||
          '.org.es' ||
          '.pl' ||
          '.se' ||
          '.xyz' ||
          '.cat' ||
          '.ae.org' ||
          '.ag' ||
          '.am' ||
          '.at' ||
          '.biz.pl' ||
          '.bz' ||
          '.cc' ||
          '.cl' ||
          '.cn.com' ||
          '.com.de' ||
          '.com.mx' ||
          '.com.pl' ||
          '.com.pt' ||
          '.com.se' ||
          '.cx' ||
          '.dk' ||
          '.fm' ||
          '.frl' ||
          '.gr.com' ||
          '.in.net' ||
          '.info.pl' ||
          '.jp.net' ||
          '.la' ||
          '.lc' ||
          '.li' ||
          '.lt' ||
          '.lu' ||
          '.lv' ||
          '.mn' ||
          '.mx' ||
          '.net.pl' ||
          '.pm' ||
          '.pt' ||
          '.re' ||
          '.sc' ||
          '.tf' ||
          '.tv' ||
          '.vc' ||
          '.wf' ||
          '.xxx' ||
          '.yt' ||
          '.us' ||
          '.uk' ||
          '.shop' ||
          '.club' ||
          '.icu' ||
          '.agency' ||
          '.company' ||
          '.group' ||
          '.guru' ||
          '.life' ||
          '.ltd' ||
          '.network' ||
          '.news' ||
          '.rocks' ||
          '.services' ||
          '.solutions' ||
          '.today' ||
          '.world' ||
          '.top' ||
          '.com.au' ||
          '.cloud' ||
          '.properties' ||
          '.business'
      )
    ) {
      return searchTerm;
    }
    return searchTerm.slice(0, subStr);
  };
  useEffect(() => {
    termCheck();
  }, [searchTerm]);

  return (
    <>
      <div className="domain-card-container">
        <div className="card-wrapper">
          <div className="domain-card">
            <div className="domain-status">Domain is avaiable!</div>
            <div className="card-content">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <div className="domain-info">
                    <h2>{domainName}</h2>
                  </div>
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
                </>
              )}
            </div>
          </div>
        </div>
        {loading ? (
          <Loader style={{ margin: '10rem' }} />
        ) : (
          <>
            <h1 className="option-text">More options</h1>
            {extensions.map((el, index) => (
              <div className="card-wrapper" key={index}>
                <div className="domain-card-options">
                  <div className="card-content">
                    <div className="domain-info">
                      <h2>
                        {searchTerm}
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
          </>
        )}
      </div>
    </>
  );
}
