import { AxiosRequestConfig } from 'axios';

import { IAPI } from './interfaces';
import settings from './endpoints/settings';
import user from './endpoints/user';
import { axiosInstance } from './axios-instance';

// кофигурации запросов на сервер для разных end-points
// все методы запросов должны присутствовать в `domains`
const domains = {
  settings,
  user,
};

/**
 * возвращаем метод для запроса, в него принимаем параметры запроса
 * создаем окончательную конфигурацию запроса вместе с переданными параметрами
 * @param requestConfigurator
 * @param isMock?
 */
function createRequest(requestConfigurator: any, isMock?: boolean) {
  return (...params: IAnyValues[]) => {
    const config: AxiosRequestConfig = requestConfigurator(...params);
    return axiosInstance(config);
  };
}

// создание методов запросов из конфига
const createMethods = (config: any, isMock?: boolean) =>
  // проходим по каждому полю конфига и создаем из них методы запросов
  Object.keys(config).reduce((methods, configRequestName: string) => {
    // конфигуратор одного конкретного запроса (функция которая возвращает конфиг)
    const requestConfigurator = config[configRequestName];
    methods[configRequestName] = createRequest(requestConfigurator, isMock); // создаем запрос

    return methods;
  }, {});

// проходимся по конфигам и создаем из них енд поинты запросов на сервер
const wrapAllByCreateMethods = (obj: IAnyValues): IAPI =>
  Object.keys(obj).reduce((endPoints: Partial<IAPI>, configName: string) => {
    // по очереди передаем каждый конфиг для создания методов запросов на его основе
    endPoints[configName] = createMethods(obj[configName]);

    return endPoints;
  }, {}) as IAPI;

export const createMethodsForBackendCall = wrapAllByCreateMethods(domains);
