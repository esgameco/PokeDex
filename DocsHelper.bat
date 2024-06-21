@echo off

if "%1" == "build" (
    call mkdocs build -d .\backend\build\docs
) else if "%1" == "run" (
    start cmd /k "mkdocs serve"
) else (
    echo Invalid argument. Usage: %0 [build^|run]
)