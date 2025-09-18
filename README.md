# News Maker Admin (Vue 3 + Vite)

Отдельный фронтенд-проект админки для сервиса генерации и публикации новостей.

## Требования
- Node.js 18+
- npm или pnpm/yarn (ниже команды под npm)

## Быстрый старт
```bash
# установка зависимостей
npm i

# локальный запуск (http://localhost:5173)
npm run dev

# сборка продакшн-версии (в папку dist)
npm run build

# предпросмотр сборки
npm run preview
```

## Переменные окружения
Создайте файл `.env` в корне проекта и задайте адрес бэкенда:
```bash
VITE_API_URL=http://localhost:3000
```
На продакшне используйте реальный домен:
```bash
VITE_API_URL=https://your-backend-domain
```

## Конфигурация API и CORS
- Бэкенд ожидает Bearer-токен в заголовке `Authorization: Bearer <token>`
- CORS: на бэкенде должен быть разрешён домен фронта через переменную `CORS_ORIGINS`
  - Пример: `CORS_ORIGINS="http://localhost:5173 https://admin.example.com"`

## Основные экраны
- Вход/Регистрация: получает `api_token` и сохраняет в `localStorage`
- Каналы: список/создание, поля — `name`, `theme`, `telegram_chat_id`
- Посты: список, действие "Опубликовать" (блокируется, если нет активной подписки у владельца канала)

## Эндпоинты бэкенда
- POST `/api/v1/auth/register` — { email, password, password_confirmation }
- POST `/api/v1/auth/login` — { email, password }
- GET `/api/v1/channels`
- POST `/api/v1/channels` — { channel: { name, theme, telegram_chat_id } }
- GET `/api/v1/posts`
- POST `/api/v1/posts/:id/publish`

## Деплой (варианты)
- Vercel / Netlify: укажите команду сборки `npm run build` и директорию публикации `dist`
- Любой статический хостинг / Nginx: соберите проект (`npm run build`) и раздавайте содержимое `dist/`

## Локальная разработка с бэкендом
- Запустите Rails API: `bin/rails s` (порт 3000)
- Запустите Redis и Sidekiq (для фоновых задач):
  - `REDIS_URL=redis://localhost:6379/0 bundle exec sidekiq -q default`
- Запустите фронт: `npm run dev` (порт 5173)

## Перенос в отдельный репозиторий
1. Создайте пустой репозиторий (например, `news-maker-admin`)
2. Скопируйте содержимое папки `frontend` в корень нового репозитория
3. Инициализируйте git и сделайте первый коммит
```bash
git init
git add .
git commit -m "init: news maker admin"
```
4. Установите переменные окружения и задеплойте 