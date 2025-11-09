@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo Быстрая отправка на GitHub
echo Репозиторий: https://github.com/7290903/siterh.git
echo ========================================
echo.

echo Добавление всех файлов...
git add .
echo.

echo Создание коммита...
git commit -m "Обновление проекта: добавлена конфигурация Vite и скрипты запуска"
echo.

echo Отправка на GitHub...
git push -u origin main
echo.

if errorlevel 1 (
    echo ОШИБКА при отправке. Возможные причины:
    echo 1. Нет прав доступа к репозиторию
    echo 2. Требуется аутентификация (Personal Access Token)
    echo 3. Репозиторий на GitHub не пустой
    echo.
    echo Для первого push в пустой репозиторий попробуйте:
    echo git push -u origin main --force
    echo.
) else (
    echo ========================================
    echo Успешно отправлено на GitHub!
    echo ========================================
)
pause

