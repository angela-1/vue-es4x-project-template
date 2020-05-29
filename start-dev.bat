REM set MONGODB=D:\usr\mongodb-win32-x86_64-2012plus-4.2.2
REM set DBPATH=D:\tmp\mongodb\test_data

REM start /MIN %MONGODB%\bin\mongod ^
REM --dbpath %DBPATH%

start /D app /MIN yarn dev
start /D server /MIN yarn watchts
start /D server /MIN yarn dev

