import React, { useState } from "react";
import styled from "styled-components";

import { Row, Col, AutoComplete, Space } from "antd";
import {
  FilterWrapper,
  Filters,
  FLink,
  BlackPanel,
  BlackRow,
  LabelRow,
  CloseBtnCol,
} from "./styles";
import { Text24, Wrap24, Wrap16 } from "../common/text";

const AutoCompleteSearch = styled(AutoComplete)`
  width: 100%;

  &&& .ant-select-selector {
    background-color: black;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 0px;
    border-left: 0px;
    border-top: 0px;
    border-right: 0px;
  }

  &&& .ant-select-selection-search {
    display: flex;
    align-items: center;
  }
`;

const AutoCompleteWrapper = styled(Wrap24)`
  width: 100%;
`;

/* * Фильтр "Направления"*/
const DirsTags = [
  "Все",
  "Жилые объекты",
  "Офисно-административные объекты",
  "Торговые объекты",
  "Объекты культуры",
  "Объекты инфраструктуры и транспорта",
  "Смешанная функция",
  "Градостроительные концепции",
  "Текущие объекты",
  "Конкурсные проекты",
  "Арт-объекты и дизайн",
];

const DirectionsFilter = ({ setFilterType }) => {
  const [DirItems, selDirItems] = useState([0]);

  const updateDir = (item) => {
    if (item === 0) {
      selDirItems([0]);
      return true;
    }

    if (!DirItems.includes(item)) {
      let _DirItems = DirItems[0] === 0 ? [] : [...DirItems];
      _DirItems.push(item);

      selDirItems(_DirItems);
    }
  };

  return (
    <BlackPanel>
      <Col>
        <LabelRow justify="space-between">
          <Col>
            <Wrap16 data-font="wremena">
              Вы можете выбрать несколько категорий одновременнно
            </Wrap16>
          </Col>
          <CloseBtnCol onClick={() => setFilterType(null)}>
            <Wrap16 data-font="ibm">Свернуть</Wrap16>
          </CloseBtnCol>
        </LabelRow>
        <BlackRow>
          {DirsTags.map((key, i) => (
            <FLink
              data-theme="black"
              key={`FilterDir${i}`}
              onClick={() => updateDir(i)}
              data-status={DirItems.includes(i) && "active"}
            >
              <Text24>{key}</Text24>
            </FLink>
          ))}
        </BlackRow>
      </Col>
    </BlackPanel>
  );
};

let YearsTags = ["Все"];

for (let i = 2021; i >= 2000; i--) {
  YearsTags.push(i);
}

const YearsFilter = ({ setFilterType }) => {
  const [YearItems, selYearItems] = useState([0]);

  const updateYear = (item) => {
    if (item === 0) {
      selYearItems([0]);
      return true;
    }

    if (!YearItems.includes(item)) {
      let _YearItems = YearItems[0] === 0 ? [] : [...YearItems];
      _YearItems.push(item);

      selYearItems(_YearItems);
    }
  };

  return (
    <BlackPanel>
      <Col>
        <LabelRow justify="space-between">
          <Col>
            <Wrap16 data-font="wremena">
              Вы можете выбрать несколько категорий одновременнно
            </Wrap16>
          </Col>
          <CloseBtnCol onClick={() => setFilterType(null)}>
            <Wrap16 data-font="ibm">Свернуть</Wrap16>
          </CloseBtnCol>
        </LabelRow>
        <BlackRow>
          {YearsTags.map((key, i) => (
            <FLink
              data-theme="black"
              key={`filterYear${i}`}
              onClick={() => updateYear(i)}
              data-status={YearItems.includes(i) && "active"}
            >
              <Text24>{key}</Text24>
            </FLink>
          ))}
        </BlackRow>
      </Col>
    </BlackPanel>
  );
};

/**
 * Компонент "Поиск"
 */

const options = [];

const SearchFilter = ({ setFilterType }) => {
  return (
    <BlackPanel>
      <Col>
        <LabelRow justify="space-between">
          <Col>
            <Wrap16 data-font="wremena">
              Вы можете выбрать несколько категорий одновременнно
            </Wrap16>
          </Col>
          <CloseBtnCol onClick={() => setFilterType(null)}>
            <Wrap16 data-font="ibm">Свернуть</Wrap16>
          </CloseBtnCol>
        </LabelRow>
        <BlackRow>
          <AutoCompleteWrapper>
            <AutoCompleteSearch
              options={options}
              placeholder="Попробуйте ввести ключевое слово"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </AutoCompleteWrapper>
        </BlackRow>
      </Col>
    </BlackPanel>
  );
};

export { DirectionsFilter, YearsFilter, SearchFilter };
