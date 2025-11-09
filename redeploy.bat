@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo Перезапуск деплоя на GitHub Pages
echo ========================================
echo.

echo Создание пустого коммита для запуска workflow...
git commit --allow-empty -m "Перезапуск деплоя: $(date /t)"
if errorlevel 1 (
    echo ОШИБКА: Не удалось создать коммит
    echo Убедитесь, что вы находитесь в правильной директории
    pause
    exit /b 1
)

echo Отправка изменений на GitHub...
git push origin main
if errorlevel 1 (
    echo ОШИБКА: Не удалось отправить изменения
    echo Проверьте настройки remote и права доступа
    pause
    exit /b 1
)

echo.
echo ========================================
echo Коммит отправлен! Workflow запустится автоматически.
echo Проверьте статус деплоя в разделе Actions на GitHub:
echo https://github.com/7290903/siterh/actions
echo ========================================
pause

