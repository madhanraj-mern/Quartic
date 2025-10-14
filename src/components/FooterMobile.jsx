import React from 'react';
import footerLogo from '../assets/images/footer-logo.svg';
import linkedinIcon from '../assets/images/icons/linkedin-icon.svg';
import youtubeIcon from '../assets/images/icons/youtube-icon.svg';
import xIcon from '../assets/images/icons/x-icon.svg';
import mapMarkerIcon from '../assets/images/icons/map-marker.svg';
import mailIcon from '../assets/images/icons/mail.svg';
import useFooterData from '../hooks/useFooterData';

const FooterMobile = () => {
  const { footerData, loading, error } = useFooterData();

  // Use Strapi data if available, otherwise use default values
  const companyLogo = footerData?.companyLogo || footerLogo;
  const description = footerData?.description || 'Empowering industrial intelligence by integrating MES, LIMS, automation, and enterprise data with AI-driven insights through Quartic DataOps.';
  const moreAboutUs = footerData?.moreAboutUs || { title: 'More about us', url: 'https://www.quartic.ai/about-us/' };
  const newsletterTitle = footerData?.newsletterTitle || 'Subscribe to Newsletter';
  const newsletterDescription = footerData?.newsletterDescription || 'Get the latest news, updates and special offers straight to your inbox';
  const copyrightText = footerData?.copyrightText || '© 2025 — Copyright All Rights reserved';
  const officeLocations = footerData?.officeLocations || [];
  const menus = footerData?.menus || [];
  const quicklinks = footerData?.quicklinks || [];
  const socialLinks = footerData?.socialLinks || [];

  return (
    <>
      {/* CTA Section */}
      <section className="comn-footer-before-sec">
        <div className="container">
          <div className="comn-footer-cta-holder">
            <div className="comn-footer-cta-box d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
              <h4 className="cta_heading_text">
                Get a personalized demo and see how Quartic.ai can revolutionize
                your manufacturing processes.
              </h4>
              <div className="btn-holder">
                <a href="#" className="btn btn_orange" aria-label="Request a Demo">
                  <span>Request a Demo</span>
                  <span className="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="comn-footer-sec">
        <div className="container">
          <div className="comn-footer-main">
            <div className="row gy-0 gy-lg-0">
              {/* Left Column - Logo and Description */}
              <div className="col-12 col-md-12 col-lg-3">
                <div className="comn-footer-left-content">
                  <div className="footer-logo-holder">
                    <img src={companyLogo} alt="" loading="lazy" width="174" height="36" />
                  </div>
                  <div className="logo_bottom_dsc_text">
                    <p>
                      {description}
                    </p>
                  </div>
                  <div className="fooer_more_link_holder">
                    <a className="fooer_more_link" href={moreAboutUs.url} aria-label={moreAboutUs.title}>
                      {moreAboutUs.title} <span className="dot d-inline-block ms-1"></span>
                    </a>
                  </div>
                  <div className="footer-content-block mt-auto">
                    <div className="social-link-holder">
                      <h3 className="headingText">Get connect with us</h3>
                      <ul>
                        {socialLinks.map((social, index) => {
                          let iconSrc = linkedinIcon; // default
                          if (social.platform === 'youtube') iconSrc = youtubeIcon;
                          if (social.platform === 'x') iconSrc = xIcon;
                          if (social.platform === 'linkedin') iconSrc = linkedinIcon;
                          
                          return (
                            <li key={index}>
                              <a href={social.url} target="_blank" rel="noopener noreferrer">
                                <span className="icon-holder">
                                  <img src={iconSrc} alt={social.platform} />
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Menus and Content */}
              <div className="col-12 col-md-12 col-lg-9">
                <div className="footer-main-menu-content match__height__sec">
                  <div className="row gx-0">
                    {/* Middle Column - Menus and Quick Links */}
                    <div className="col-12 col-lg-6 footer_middle_col px-0">
                      <div className="footer_middle_top_block" data-match-height>
                        <div className="row">
                          {menus.map((menu, menuIndex) => (
                            <div key={menuIndex} className="col-12 col-md-4">
                              <div className="footer-content-block">
                                <h3 className="headingText">{menu.name}</h3>
                                <ul>
                                  {menu.menuItems.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <a 
                                        href={item.url} 
                                        className={item.title === 'iLuminator' ? 'text-orange' : ''}
                                        target={item.isExternal ? '_blank' : '_self'}
                                        rel={item.isExternal ? 'noopener noreferrer' : ''}
                                      >
                                        {item.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="footer_middle_bottom_block">
                        <div className="row">
                          <div className="col-12 col-12-6">
                            <div className="footer-content-block column2-menu-block">
                              <h3 className="headingText">Quick Links</h3>
                              <div className="row">
                                <div className="col-6">
                                  <ul>
                                    {quicklinks.slice(0, Math.ceil(quicklinks.length / 2)).map((link, index) => (
                                      <li key={index}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                          {link.Label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="col-6">
                                  <ul>
                                    {quicklinks.slice(Math.ceil(quicklinks.length / 2)).map((link, index) => (
                                      <li key={index}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                          {link.Label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Office Location and Newsletter */}
                    <div className="col-12 col-lg-6 footer_right_col px-0">
                      <div className="footer_right_top_block" data-match-height>
                        <div className="row">
                          <div className="col-12 col-md-12">
                            <div className="footer-content-block vertical-menu-block">
                              <h3 className="headingText hasIcon">
                                <img src={mapMarkerIcon} width="24" height="24" alt="icon" />
                                <span>Office Location</span>
                              </h3>
                              <ul>
                                {officeLocations.map((location, index) => (
                                  <li key={index}>
                                    <h6><strong>{location.country}:</strong></h6>
                                    <p>{location.address}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer_right_bottom_block">
                        <div className="footer-content-block">
                          <div className="subscribe_form_content">
                            <div className="sec_heading_wrap">
                              <h3 className="headingText hasIcon">
                                <img src={mailIcon} width="24" height="24" alt="icon" />
                                <span>{newsletterTitle}</span>
                              </h3>
                              <p>{newsletterDescription}</p>
                            </div>

                            <div className="subscribe_form_block">
                              <form method="post" className="wpcf7-form">
                                <span className="wpcf7-form-control-wrap" data-name="email-address">
                                  <input
                                    size="40"
                                    className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email stay_tuned"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Enter your email address..."
                                    defaultValue=""
                                    type="email"
                                    name="email-address"
                                  />
                                </span>
                                <button type="submit" className="btn btn_orange flex-shrink-0" aria-label="Subscribe">
                                  <span>Subscribe</span>
                                  <span className="arrow"></span>
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comn-footer-bottom">
            <div className="row gx-2 gx-lg-4 flex-row-reverse">
              <div className="col-auto footer-bottom-list-col flex-grow-1">
                <div className="footer-bottom-list text-center text-md-end">
                  <ul>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Acceptable Use Policy</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Cookie Preferences</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-3">
                <div className="footer-copyRight-text">
                  <p className="d-inline-block">
                    {copyrightText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMobile;

