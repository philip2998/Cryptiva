import { CheckLg } from 'react-bootstrap-icons';

const ListItem = ({ content }) => {
  return (
    <li className="pb-2">
      <span className="py-2 pe-2">
        <CheckLg className="check-icon fs-4 fw-bolder" />
      </span>
      <span className="list-content">{content}</span>
    </li>
  );
};

export default ListItem;
