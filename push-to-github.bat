@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo ========================================
echo Отправка файлов на GitHub
echo ========================================
echo.

echo Проверка статуса репозитория...
git status
echo.

echo Добавление всех измененных файлов...
git add .
if errorlevel 1 (
    echo ОШИБКА: Не удалось добавить файлы
    pause
    exit /b 1
)
echo Файлы добавлены успешно!
echo.

echo Проверка наличия изменений для коммита...
git status --short
if errorlevel 1 (
    echo Нет изменений для коммита
    pause
    exit /b 0
)
echo.

set /p commit_message="Введите сообщение коммита (или нажмите Enter для стандартного): "
if "%commit_message%"=="" set commit_message=Обновление проекта

echo Создание коммита: %commit_message%
git commit -m "%commit_message%"
if errorlevel 1 (
    echo ОШИБКА: Не удалось создать коммит
    pause
    exit /b 1
)
echo Коммит создан успешно!
echo.

echo Проверка наличия удаленного репозитория...
git remote -v >nul 2>&1
if errorlevel 1 (
    echo Удаленный репозиторий не настроен!
    echo.
    set /p remote_url="Введите URL вашего GitHub репозитория (например: https://github.com/7290903/repo.git): "
    if "%remote_url%"=="" (
        echo URL не введен. Настройте remote вручную командой:
        echo git remote add origin YOUR_REPO_URL
        pause
        exit /b 1
    )
    git remote add origin "%remote_url%"
    if errorlevel 1 (
        echo ОШИБКА: Не удалось добавить remote
        pause
        exit /b 1
    )
    echo Remote добавлен успешно!
    echo.
)

echo Отправка изменений на GitHub...
git push -u origin main
if errorlevel 1 (
    echo Попытка отправить на master вместо main...
    git push -u origin master
    if errorlevel 1 (
        echo ОШИБКА: Не удалось отправить изменения
        echo Проверьте настройки remote и права доступа
        pause
        exit /b 1
    )
)
echo.
echo ========================================
echo Изменения успешно отправлены на GitHub!
echo ========================================
pause


