import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import Summary from './components/Summary';

const App = () => {
  const [state, setState] = useState({
    category: 'all',
    country: 'kr',
    topic: '',
    show: false,
  });
  const [articles, setArticles] = useState('');
  const onSelect = (state) => setState(state);
  const onArticles = (articles) => setArticles(articles);
  return (
    <>
      <Categories state={state} onSelect={onSelect} />
      <Summary articles={articles} />
      <NewsList state={state} onArticles={onArticles} />
    </>
  );
};

export default App;
