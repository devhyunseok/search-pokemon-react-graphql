import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: JSX.Element[] | JSX.Element
}

const ListWrapper: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Ul>
      {children}
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
`;

export default ListWrapper;
