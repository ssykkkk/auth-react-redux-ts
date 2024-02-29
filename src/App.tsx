import React from 'react';
import { withLayout } from './components/Layout/Layout';


function App(): JSX.Element {
 
  return (
    <div className='container home'>
      <h1>Home page</h1>
    </div>
  );
}

export default withLayout(App);
