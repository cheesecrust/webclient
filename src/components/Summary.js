import React, { useState } from 'react';
import TextArea from '../ui/TextArea';

const Summary = (articles) => {
  const article_Num = articles.articles.length;
  const totalArticles = articles.articles || [];
  const seq = 1;
  const headLine = totalArticles.map((a) => a.title) || [];
  const finalHead = headLine.reduce(
    (pre, cur, index) => pre + '(' + (index + 1) + ')' + cur + '\n',
    '',
  );
  console.log(finalHead);
  return (
    <>
      뉴스개수 : {article_Num}
      <br></br>
      <TextArea value={finalHead}></TextArea>
    </>
  );
};

export default Summary;
