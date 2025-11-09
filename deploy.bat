@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo Деплой проекта на GitHub Pages
echo ========================================
echo.

echo Проверка зависимостей...
if not exist "node_modules" (
    echo Установка зависимостей...
    call npm install
    if errorlevel 1 (
        echo ОШИБКА: Не удалось установить зависимости
        pause
        exit /b 1
    )
    echo Зависимости установлены успешно!
    echo.
)

echo Сборка проекта для production...
call npm run build
if errorlevel 1 (
    echo ОШИБКА: Не удалось собрать проект
    pause
    exit /b 1
)
echo Сборка завершена успешно!
echo.

echo Проверка установки gh-pages...
call npm list gh-pages >nul 2>&1
if errorlevel 1 (
    echo Установка gh-pages...
    call npm install --save-dev gh-pages
    if errorlevel 1 (
        echo ОШИБКА: Не удалось установить gh-pages
        pause
        exit /b 1
    )
)

echo Отправка на GitHub Pages...
call npm run deploy
if errorlevel 1 (
    echo ОШИБКА: Не удалось задеплоить проект
    echo Убедитесь, что:
    echo 1. Репозиторий настроен правильно
    echo 2. У вас есть права на запись в репозиторий
    echo 3. GitHub Pages включен в настройках репозитория
    pause
    exit /b 1
)

echo.
echo ========================================
echo Проект успешно задеплоен на GitHub Pages!
echo Сайт будет доступен по адресу:
echo https://7290903.github.io/siterh/
echo ========================================
echo.
echo Примечание: Изменения могут появиться через несколько минут
pause

