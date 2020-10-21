# workoutLog
All happy paths are working.
Still working on error paths.

- Route:  /user/register  Status: 200 Includes: jwt and bcrypt (Passed)
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/PostmanRegister.png)

- Route:  /user/register  database view Status: 200 Includes: jwt and bcrypt (Passed)
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/userTable.png)

- Route /user/register Status: 500 (missing required information) (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/PostmanRegister_Status500.png)

- Route /user/login Status: 200 (user exists in database) (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/PostmanLogin_Status200.png)

- Route /user/login Status: 500 (user does NOT exist in database) (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/Postman_login_Status500_UserDoesNotExist.png)

- Route /user/login Status: 500 (user exists in database, incorrect username) (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/Postman_login_Status500_IncorrectUsername.png)

 - Route /user/login Status: 502 (user exists in database, incorrect password) (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/PostmanLogin_Status502_IncorrectPassword.png)

 - Route /log/Onelog/:id Status: 200 (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/Postman_Onelog_id_Status200.png)

- Route /log/logcreate Status: 200 (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/Postman_logcreate_Status200.png)

-Route /log/logcreate database view Status: 200 (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/logTable.png)

- Route /log/delete/:id Status: 200 (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/Postman_logdelete_id_Status200.png)

- Route /log/delete/:id database view Status: 200 (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/logTable_id8_deleted.png)

- Route /log/logsall Status: 200 (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/Postman_logsall_Status200.png)

- Route /log/logupdate/:id Status: 200 (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/Postman_logupdate_id_Status200.png)

- Route /log/logupdate/:id databse view Status: 200 (Passed) 
![image](https://github.com/tinabeattysmith/workoutLog/blob/main/assets/logTable_id9_updated.png)