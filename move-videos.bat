@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Перемещение видео файлов в папку public...
if exist "movies.mp4" (
    move "movies.mp4" "public\movies.mp4"
    echo movies.mp4 перемещен в public
) else (
    echo movies.mp4 не найден в корне проекта
)
if exist "mobile.mp4" (
    move "mobile.mp4" "public\mobile.mp4"
    echo mobile.mp4 перемещен в public
) else (
    echo mobile.mp4 не найден в корне проекта
)
echo Готово!
pause

