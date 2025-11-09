# Установка зависимостей и запуск dev сервера
Write-Host "Установка зависимостей..." -ForegroundColor Cyan
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "Ошибка при установке зависимостей" -ForegroundColor Red
    exit 1
}

Write-Host "Запуск dev сервера..." -ForegroundColor Green
npm run dev



