import React, { ReactElement } from 'react';
import Header from '../components/Header';

interface IHomeProps {
  title: string;
}

const Home = ({title}: IHomeProps): ReactElement => {
  return (
    <div>
      <Header title={title}/>
      <p>This is the home page content.</p>
    </div>
  );
};

export default Home;