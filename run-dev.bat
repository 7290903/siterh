@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo Запуск dev сервера RunHouse
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

echo Проверка порта 5173...
netstat -ano | findstr :5173 >nul
if not errorlevel 1 (
    echo ВНИМАНИЕ: Порт 5173 уже занят!
    echo Сервер попытается использовать другой порт.
    echo.
)

echo Запуск dev сервера...
echo Сервер будет доступен по адресу: http://localhost:5173
echo (или на другом порту, если 5173 занят)
echo.
echo Для остановки нажмите Ctrl+C
echo ========================================
echo.

call npm run dev

