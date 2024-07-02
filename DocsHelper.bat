@echo off

if "%1" == "build" (
    call mkdocs build -d .\backend\build\docs
) else if "%1" == "run" (
    start cmd /k "python -m mkdocs serve"
) else if "%1" == "install" (
    call pip install mkdocs
    call pip install mkdocs-material
) else (
    echo Invalid argument. Usage: %0 [build^|run^|install]
)