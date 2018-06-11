import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';
import Icon from '../Icon/Icon';
import Space from '../../utilities/Space/Space';
import Toggle from '../../form/Toggle/Toggle';
import Spread from '../../utilities/Spread/Spread';

export default function Card({ onChange, id, title, url, tags, favorite }) {
  return (
    <div className={'card ' + tags.join(' ')}>
      <h2 className="card__title">{title}</h2>

      <Spread>
        <Toggle
          name={'markAsFav_' + id}
          value={id}
          label="favorite"
          checked={!!favorite}
          onChange={onChange}
        />
        {url && (
          <a
            className="card__link"
            target="_blank"
            rel="noopener noreferrer"
            href={url}
          >
            to the video
            <Space left small>
              <Icon manner="outbound" />
            </Space>
          </a>
        )}
      </Spread>
    </div>
  );
}
Card.propTypes = {
  children: PropTypes.any
};
