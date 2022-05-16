import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../ui/Button';
import Form from '../ui/Form';
import Text from '../ui/Text';
import InlineList from '../ui/InlineList';
import Input from '../ui/Input';
import Radio from '../ui/Radio';
import CheckBox from '../ui/CheckBox';
import Select, { Option } from '../ui/Select';
import TextArea from '../ui/TextArea';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, state }) => {
  return (
    <div>
      <CategoriesBlock>
        {categories.map((c) => (
          <Category
            key={c.name}
            active={state.category === c.name}
            onClick={() =>
              onSelect({
                ...state,
                category: c.name,
              })
            }
          >
            {c.text}
          </Category>
        ))}
        <Button
          type="button"
          onPress={() => onSelect({ ...state, show: !state.show })}
          primary
        >
          상세검색
        </Button>
      </CategoriesBlock>
      {state.show && (
        <Form
          onSubmit={(values) => onSelect(values)}
          initValues={{
            category: 'all',
            country: 'kr',
            topic: '',
            show: true,
          }}
        >
          <Form.Consumer>
            {({ onChange, values }) => (
              <InlineList>
                <Text xlarge bold>
                  검색
                </Text>
                <Select
                  name="category"
                  label="카테고리"
                  onChange={onChange}
                  value={values['category']}
                >
                  <Option label="전체보기" value="all" />
                  <Option label="비즈니스" value="business" />
                  <Option label="엔터테인먼트" value="entertainment" />
                  <Option label="건강" value="health" />
                  <Option label="과학" value="science" />
                  <Option label="스포츠" value="sports" />
                  <Option label="기술" value="technology" />
                </Select>
                <Radio
                  name="country"
                  label="한국"
                  cur={values.country}
                  value="kr"
                  onChange={onChange}
                />
                <Radio
                  name="country"
                  label="미국"
                  cur={values.country}
                  value="us"
                  onChange={onChange}
                />
                <Input
                  name="topic"
                  label="키워드"
                  onChange={onChange}
                  value={values['topic']}
                />
                <Button type="submit" primary>
                  검색
                </Button>
              </InlineList>
            )}
          </Form.Consumer>
        </Form>
      )}
    </div>
  );
};

export default Categories;
