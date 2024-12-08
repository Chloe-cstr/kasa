import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './collapse.scss';
import PropTypes from 'prop-types';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse__titleContent">
        <h3 className="collapse__title">{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse__titleContent__arrowUp ${isOpen ? 'collapse__titleContent__arrowUp--active' : ''}`}
          onClick={clickCollapse}
        />
      </div>
      {isOpen && (
        <div className="collapse__textContent">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;
