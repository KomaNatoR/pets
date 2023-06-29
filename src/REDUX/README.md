# Використання REDUX!

1.  В `index.js` імпортуємо `import { store } from './store/store';` та
    обгортаємо App провайдером `<Provider store={store}><App/></Provider>`.
2.  Для зчитування стору використовуємо
    `useSelector`:`const reduxStore = useSelector((state)=>state);`.
3.  Для записування `useDispatch`! Викликаємо: `const dispatch = useDispatch();`
    і заганяємо потрібні дані через потрібний "action":
    `dispatch(createTodo(data));`.
4.  Для асинхронного редекса треба створювати `operation`-запити які прокидувати
    в діспатч!
