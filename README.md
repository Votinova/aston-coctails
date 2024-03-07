Сервис по поиску коктелей. Реализована форма регистрации и входа. Возможность добавлять в избранное и сохранять историю
Уровень 1

[+]Реализованы Требования к функциональности.

[+]Для хранения  Избранного и Истории поиска используем LocalStorage.

[+]Пишем функциональные компоненты c хуками в приоритете над классовыми.

[+]Нет намеренного разделения на умные и глупые компоненты

[+] Есть рендеринг списков: [Main](src/pages/main/Main.tsx), [Search](src/pages/search/Search.tsx)

[+] Реализована хотя бы одна форма [formLogIn](src/components/Auto/forms/FormLogIn.tsx) [formSignUp](src/components/Auto/forms/FormSignUp.tsx)

[+] Есть применение Контекст API [Context](src/context/context.tsx)

[+] Есть применение предохранителя [errorBoundary](src/errorBoundary/errorBoundary.tsx)

[+] Есть хотя бы один кастомный хук [useLocalStorage](src/hooks/useLocalStorage.tsx)

[+] Хотя бы несколько компонентов используют PropTypes [Coctail](src/components/Coctail.tsx), [Ingridient](src/components/Ingridient.tsx)

[+]Поиск не должен триггерить много запросов к серверу: поиск только по клику

[+]Есть применение lazy + Suspense [App] (src/App.tsx)

Redux

[+] Используем Modern Redux with Redux Toolkit 

[+] Используем слайсы [userSlice](src/store/slices/userSlice.ts), [searchSlice](src/store/slices/searchSlise.ts), [elementSlice](src/store/slices/elementSlice.ts)

[+] Есть хотя бы одна кастомная мидлвара [SaveToLocalMiddlware](src/store/middlware/SaveToLocalMiddlware.ts)

[+] Используется RTK Query [data](src/store/servise/data.ts)

[+] Используется Transforming Responses [data](src/store/servise/data.ts)

Необязательные требования

[+]Использование TypeScript 

[+] Использование Firebase для учетных записей пользователей. История и избранное храниться в LS

[+] Реализована виртуализация списков [hisotory](src/pages/Profile/history/History.tsx)

[+] Связь UI и бизнес-логики построена не через команды, а через события. [formLogIn](src/components/forms/FormLogIn.tsx) [formSignUp](src/components/forms/FormSignUp.tsx)



Api https://www.thecocktaildb.com/api.php
использован scss, Formik
