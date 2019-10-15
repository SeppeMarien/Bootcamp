import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const UsersTable = ({ persons }) => {
  const keys = persons[0] && Object.keys(persons[0]);

  const _renderRows = () => {
    return (
      persons[0] &&
      persons.map((person, indx) => (
        <tr key={`${person.name}__${indx}`}>
          {keys.map((key, indx) => {
            if (person[key] === true) {
              return (
                <td key={`${person[key]}__${indx}`}>
                  <span className="glyphicon glyphicon-check"></span>
                </td>
              );
            } else if (person[key] === false) {
              return (
                <td key={`${person[key]}__${indx}`}>
                  <span className="glyphicon glyphicon-unchecked"></span>
                </td>
              );
            } else {
              return <td key={`${person[key]}__${indx}`}>{person[key]}</td>;
            }
          })}
        </tr>
      ))
    );
  };

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            {keys &&
              keys.map((key, indx) => (
                <th key={`${key}__${indx}`} style={{ textTransform: 'capitalize' }}>
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>{_renderRows()}</tbody>
      </table>
    </Fragment>
  );
};

UsersTable.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      birthday: PropTypes.string.isRequired,
      married: PropTypes.bool.isRequired,
    }),
  ),
};

export default UsersTable;
