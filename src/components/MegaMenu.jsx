import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      title: 'Products',
      hasSubmenu: true,
      submenu: {
        title: 'Decision Intelligence for Manufacturing',
        description: 'Turn plant data into real-time intelligence. Quartic empowers manufacturers with AI-driven insights to boost yield, cut variability, and scale performance.',
        columns: [
          {
            title: 'Platform',
            links: [
              { name: 'Overview', href: '#' },
              { name: 'Why Intelligent MOM', href: '#' }
            ]
          },
          {
            title: 'Industrial DataOps',
            links: [
              { name: 'iLuminator', href: '#' }
            ]
          },
          {
            title: 'Industrial Intelligence',
            links: [
              { name: 'eXponence', href: '#' }
            ]
          },
          {
            title: 'Applications',
            links: [
              { name: 'Process Optimizer', href: '#' },
              { name: 'Reliability', href: '#' },
              { name: 'Batch MVDA', href: '#' },
              { name: 'PD Optimizer', href: '#' },
              { name: 'Automated PAT', href: '#' }
            ]
          }
        ]
      }
    },
    {
      title: 'Solutions',
      hasSubmenu: true,
      submenu: {
        title: 'Smarter, Faster Manufacturing Decisions',
        description: 'Deliver connected, responsive, and agile operations by linking data, AI, and teams for confident, real-time decisions across plants.',
        columns: [
          {
            title: 'By Industries',
            links: [
              { name: 'Life Sciences', href: '#' },
              { name: 'Chemicals', href: '#' },
              { name: 'Consumer Packaged Goods', href: '#' },
              { name: 'Food & Beverage', href: '#' }
            ]
          },
          {
            title: 'By Roles',
            links: [
              { name: 'Process Engineers', href: '#' },
              { name: 'Data Analyst', href: '#' },
              { name: 'Quality & Compliance', href: '#' },
              { name: 'Reliability & Maintenance', href: '#' },
              { name: 'Digital Transformation', href: '#' }
            ]
          }
        ]
      }
    },
    {
      title: 'Customers',
      hasSubmenu: true,
      submenu: {
        title: 'Industrial Success Stories That Deliver',
        description: 'Discover how manufacturers in life sciences, chemicals, CPG, and more use Quartic to optimize processes and drive measurable gains.',
        columns: [
          {
            title: 'Customer Stories',
            links: [
              { name: 'Life Sciences', href: '#' },
              { name: 'Consumer Packaged Goods', href: '#' }
            ]
          },
          {
            title: 'The Business Value',
            links: [
              { name: 'Read All Customer Stories', href: '#' }
            ]
          }
        ]
      }
    },
    {
      title: 'Resource Hub',
      hasSubmenu: true,
      submenu: {
        title: 'Our Curated Library of Industrial Insights',
        description: 'Access technical guides, case studies, and best practices to make faster, more confident manufacturing decisions.',
        columns: [
          {
            title: 'Content Types',
            links: [
              { name: 'Blog', href: '#' },
              { name: 'Videos', href: '#' },
              { name: 'Customer Success Stories', href: '#' },
              { name: 'All Resources', href: '#' }
            ]
          }
        ]
      }
    },
    {
      title: 'About',
      hasSubmenu: true,
      submenu: {
        title: 'Decision Intelligence for manufacturing Operations',
        description: 'Smarter manufacturing, one decision at a time.',
        columns: [
          {
            title: 'About',
            links: [
              { name: 'News', href: '#' },
              { name: 'Partners', href: '#' },
              { name: 'Careers', href: '#' },
              { name: 'About Us', href: '/about' }
            ]
          }
        ]
      }
    }
  ];

  return (
    <nav className="mega-menu">
      <ul className="mega-menu-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="mega-menu-item"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link to="#" className="mega-menu-link">
              {item.title}
              {item.hasSubmenu && <span className="submenu-indicator">▼</span>}
            </Link>

            <AnimatePresence>
              {activeMenu === index && item.hasSubmenu && (
                <motion.div
                  className="mega-menu-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mega-menu-content">
                    <div className="mega-menu-header">
                      <h3 className="mega-menu-title">{item.submenu.title}</h3>
                      <p className="mega-menu-description">{item.submenu.description}</p>
                    </div>
                    
                    <div className="mega-menu-columns">
                      {item.submenu.columns.map((column, colIndex) => (
                        <div key={colIndex} className="mega-menu-column">
                          <h4 className="mega-menu-column-title">{column.title}</h4>
                          <ul className="mega-menu-column-links">
                            {column.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <Link to={link.href} className="mega-menu-column-link">
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;
