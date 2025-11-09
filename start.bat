@echo off
chcp 65001 >nul
echo Установка зависимостей...
call npm install
if %errorlevel% neq 0 (
    echo Ошибка при установке зависимостей
    pause
    exit /b 1
)
echo Запуск dev сервера...
call npm run dev

