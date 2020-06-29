import {
  describe, expect,
} from '@jest/globals';
import sortIdUp, { sortIdDown } from '../components/Sort';
import movies from '../app';

describe('Сортировка таблицы', () => {
  test('Сортировка таблица по убыванию', () => {
    const received = movies.sort(sortIdDown('id'));
    expect(received)
      .toEqual([
        {
          id: 1047,
          title: 'Тёмный рыцарь',
          imdb: 9.00,
          year: 2008,
        },
        {
          id: 223,
          title: 'Криминальное чтиво',
          imdb: 8.90,
          year: 1994,
        },
        {
          id: 27,
          title: 'Крёстный отец 2',
          imdb: 9.00,
          year: 1974,
        },
        {
          id: 26,
          title: 'Побег из Шоушенка',
          imdb: 9.30,
          year: 1994,
        },
        {
          id: 25,
          title: 'Крёстный отец',
          imdb: 9.20,
          year: 1972,
        }]);
  });
  test('Сортировка таблица по возрастанию', () => {
    const received = movies.sort(sortIdUp('id'));
    expect(received)
      .toEqual([
        {
          id: 25,
          title: 'Крёстный отец',
          imdb: 9.20,
          year: 1972,
        },
        {
          id: 26,
          title: 'Побег из Шоушенка',
          imdb: 9.30,
          year: 1994,
        },
        {
          id: 27,
          title: 'Крёстный отец 2',
          imdb: 9.00,
          year: 1974,
        },
        {
          id: 223,
          title: 'Криминальное чтиво',
          imdb: 8.90,
          year: 1994,
        },
        {
          id: 1047,
          title: 'Тёмный рыцарь',
          imdb: 9.00,
          year: 2008,
        }]);
  });
});
