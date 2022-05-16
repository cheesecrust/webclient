import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ state, onArticles }) => {
  const [loading, response, error] = usePromise(() => {
    const query = state.category === 'all' ? '' : `${state.category}`;
    const q = state.topic === undefined ? '' : `${state.topic}`;
    // console.log(state.topic);
    // const q = state.topic == '' ? '' : `&q=${state.topic}`;
    // if (state.topic == undefined) {
    //   q = '&q=';
    // }
    // // console.log(q);

    const country = state.country == 'kr' ? 'kr' : 'us';
    console.log(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${query}&q=${q}&apiKey=9ba1702d524c433fb208e3e3b9ba5d21`,
    );
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${query}&q=${q}&apiKey=9ba1702d524c433fb208e3e3b9ba5d21`,
      //        `/news/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`,
    );
  }, [state.category]);

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  onArticles(articles);
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
