import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'rsg-components/Markdown';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';

export function StyleGuideRenderer({
  classes,
  title,
  homepageUrl,
  children,
  toc,
  hasSidebar
}) {
  return (
    <div className="bea-sg-content bea-sg-utility--relative">
      <div className='bea-sg-sidebar'>
        <div className='bea-sg-logo'>
          <a className="bea-sg-link" href="/">{title}</a>
          <img src='img/logo.png' alt='' />
        </div>
        <div className="bea-sg-sidebar__scroll">
          {toc}
        </div>
      </div>
      <div className="bea-sg-wrap">
        <main className="bea-sg-main">
          <div className="bea-sg-main__content content is-medium">
            <Heading level={2}>Bea UI
              <span className="bea-sg-utility--right">
                <a className="bea-sg-link" href="https://github.com/craigharvi3/bea-ui" target="_blank">
                  <Button colour='success'>View project on GitHub</Button>
                </a>
              </span>
            </Heading>
            <p>An extensive collection of common React components built on top of <a href="https://bulma.io" target="_blank">Bulma</a> - The open source CSS framework.</p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

StyleGuideRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node
};

export default StyleGuideRenderer;
