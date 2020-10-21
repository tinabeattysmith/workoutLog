# workoutLog
- Route:  /user/register  (Passed)  Includes: jwt and bcrypt
![image](https://user-images.githubusercontent.com/70583147/96536455-1e564f80-1262-11eb-9349-2dc8c6fa5bc5.png)
![image](https://user-images.githubusercontent.com/70583147/96536484-329a4c80-1262-11eb-8f5e-44083e990903.png)

- Route /user/login (user exists in database) (Passed) 

![image](https://user-images.githubusercontent.com/70583147/96536515-404fd200-1262-11eb-8221-21b3ccdb5ea6.png)

- Route /user/login (user does NOT exist in database) (Passed) 

![image](https://user-images.githubusercontent.com/70583147/96536542-4f368480-1262-11eb-8fe0-cd126586b46e.png)

- Route /user/login with authentication and user exists in the database.  Status = 200 (Passed) 
![image](https://user-images.githubusercontent.com/70583147/96536586-65444500-1262-11eb-8e65-601fd6e4fe4e.png)

- Route /user/login with authentication and user does NOT exist  in the database.  Status = 500 (Passed) 
![image](https://user-images.githubusercontent.com/70583147/96536607-755c2480-1262-11eb-8cb4-c9aefe94af0c.png)

- Route /user/login with authentication and user exists in the database, but password is incorrect.  Status = 502  (Passed) 

![image](https://user-images.githubusercontent.com/70583147/96536636-80af5000-1262-11eb-97f6-abb431e182c2.png)

- Route /log POST:  Create log.  (FAILED)  Receiving error:  Class constructor model cannot be invoked without new.  While, trouble shooting, I successfully created three tables logs, userlogs, and logmodels with the required attributes (see db screenshot below).  However, I have not been able to add to the table.
![image](https://user-images.githubusercontent.com/70583147/96536664-90c72f80-1262-11eb-8e3d-f2f3b5605d12.png)
![image](https://user-images.githubusercontent.com/70583147/96536677-99b80100-1262-11eb-89fe-0cf588b0593d.png)




