import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import Icon from '../Icon/Icon';
import Space from '../../utilities/Space/Space';
import Button from '../../form/Button';
import SROnly from '../../utilities/SROnly';
import classnames from '../../classnames';

export default function Card({
  onClick,
  id,
  title,
  url,
  tags,
  favorite,
  person
}) {
  return (
    <div className="card">
      {~url.indexOf('youtube.com') ? (
        <Icon
          path={[
            'M12 12l10 7-10 7v-14z',
            'M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.122 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z'
          ]}
        />
      ) : (
        <Icon
          path={[
            'M28.681 7.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-15.5c-1.378 0-2.5 1.121-2.5 2.5v27c0 1.378 1.122 2.5 2.5 2.5h23c1.378 0 2.5-1.122 2.5-2.5v-19.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 5.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-23c-0.271 0-0.5-0.229-0.5-0.5v-27c0-0.271 0.229-0.5 0.5-0.5 0 0 15.499-0 15.5 0v7c0 0.552 0.448 1 1 1h7v19.5z',
            'M23 26h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z',
            'M23 22h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z',
            'M23 18h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1h14c0.552 0 1 0.448 1 1s-0.448 1-1 1z'
          ]}
        />
      )}

      <h2 className="card__title">
        {url && (
          <Space right small>
            <a target="_blank" rel="noopener noreferrer" href={url}>
              {title}
            </a>
          </Space>
        )}
        <small className="card__person">{person}</small>
      </h2>

      {tags && (
        <ul className="card__tags">
          {tags.map(tag => (
            <li key={tag} className={classnames('card__tags__element', tag)}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      <Button
        manner="action icon-only"
        value={id}
        active={favorite}
        onClick={onClick}
      >
        <SROnly>{favorite && 'un'}mark as favorite</SROnly>
        <Icon
          path={
            'M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z'
          }
        />
      </Button>
      {url && (
        <a
          className="card__link"
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          <SROnly>open in new tab</SROnly>
          <Icon
            path={[
              'M6 2v24h24v-24h-24zM28 24h-20v-20h20v20zM4 28v-21l-2-2v25h25l-2-2h-21z',
              'M11 8l5 5-6 6 3 3 6-6 5 5v-13z'
            ]}
          />
        </a>
      )}
    </div>
  );
}
Card.propTypes = {
  children: PropTypes.any
};
