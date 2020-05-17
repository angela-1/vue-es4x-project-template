set MONGODB=D:\usr\mongodb-win32-x86_64-2012plus-4.2.2
set DBPATH=D:\tmp\mongodb\test_data

start /MIN %MONGODB%\bin\mongod ^
--dbpath %DBPATH%

start /D app /MIN yarn dev
start /D server /MIN yarn start

