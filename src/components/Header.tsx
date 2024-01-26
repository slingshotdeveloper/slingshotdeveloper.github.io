import React, { ReactElement } from 'react';

interface IHeaderProps {
  title: string;
}

const Header = ({title}: IHeaderProps): ReactElement => {
  return <header>{title}</header>;
};

export default Header;