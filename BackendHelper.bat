@echo off

if "%1" == "run" (
    start cmd /k "python -m flask --app .\backend\main run"
) else if "%1" == "debug" (
    start cmd /k "python -m flask --debug --app .\backend\main run"
) else if "%1" == "install" (
    call pip install flask[async]
    call pip install httpx
) else (
    echo Invalid argument. Usage: %0 [run^|install]
)