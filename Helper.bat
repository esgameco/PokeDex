@echo off

if "%1" == "run" (
    call DocsHelper.bat build
    call FrontendHelper.bat build
    call BackendHelper.bat run
) else if "%1" == "debug" (
    call DocsHelper.bat run
    call FrontendHelper.bat run
    call BackendHelper.bat debug
) else if "%1" == "build" (
    call DocsHelper.bat build
    call FrontendHelper.bat build
) else if "%1" == "install" (
    call DocsHelper.bat install
    call FrontendHelper.bat install
    call BackendHelper.bat install
) else (
    echo Invalid argument. Usage: %0 [run^|debug^|build^|install]
)