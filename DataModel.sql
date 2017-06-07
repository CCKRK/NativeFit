
DROP PROCEDURE IF EXISTS spCreateUser;
DELIMITER $$
CREATE PROCEDURE `spCreateUser` (
IN p_Username VARCHAR(55),
IN p_Password VARCHAR(55)
)
BEGIN
if ( select exists (select 1 from users where email = p_username) ) THEN
    select 'Username Exists !!';
ELSE
insert into users
(
    email,
    password
)
values
(
    p_Username,
    p_Password
);
END IF;
END$$
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_AuthenticateUser;
DELIMITER $$
CREATE PROCEDURE `sp_AuthenticateUser` (
IN p_username VARCHAR(55)
)
BEGIN
     select * from users where email = p_username;
END$$
DELIMITER ;
DROP PROCEDURE sp_AddItems;
DELIMITER $$
CREATE PROCEDURE `sp_AddItems`(
IN p_routineID INT,    
IN p_exerciseName VARCHAR(55),
IN p_dayID INT,
IN p_exerciseType INT
)
BEGIN
    insert into exercises(
        routineID,
        exerciseName,
        dayID,
        exerciseType
    )
    values(
        p_routineID,
        p_exerciseName,
        p_dayID,
        p_exerciseType
    );
END$$
DELIMITER ;
DROP PROCEDURE sp_RemoveItems;
DELIMITER $$
CREATE PROCEDURE `sp_RemoveItems`(
in p_exerciseID VARCHAR(55)
)
BEGIN
DELETE FROM exercises WHERE exerciseID = p_exerciseID;
END$$
DELIMITER ;
DROP PROCEDURE IF EXISTS sp_GetAllItems;
DELIMITER $$
CREATE PROCEDURE `sp_GetAllItems` (
in p_routineID INT,
in p_dayID INT
)
BEGIN
    select routineName,exerciseName,exerciseID,exerciseType from exercises JOIN (select * from routines where routineID= p_routineID ) AS E on exercises.routineID = E.routineID 
    WHERE dayID = p_dayID;
END$$
DELIMITER ;


DROP PROCEDURE sp_AddProgress;
DELIMITER $$
CREATE PROCEDURE sp_AddProgress(
IN p_userID INT,    
IN p_exerciseID VARCHAR(55),
IN p_recordDate DATE,
IN p_weight INT
)
BEGIN
INSERT INTO progress(
userID,
exerciseID,
recordDate,
weight
)
VALUES(
p_userID,
p_exerciseID,
p_recordDate,
p_weight
);
END$$
DELIMITER ;


### TEST TABLES
create table exercises (exerciseID INT NOT NULL AUTO_INCREMENT,
routineID INT NOT NULL,
exerciseName VARCHAR(55) NOT NULL,
PRIMARY KEY(exerciseID));


insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Flat Barbell Bench Press",1,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Standing Barbell Shoulder Press",1,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Incline Barbell Bench Press",1,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Dumbbell Side Lateral Raise",1,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Rope Pushdowns",1,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Overhead Dumbbell Extension",1,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Shrugs",1,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Barbell Rows",2,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Lat Pulldowns",2,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Face-pulls",2,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Barbell Bicep Curls",2,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Hammer Curls",2,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Squats",3,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Leg Extensions",3,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Hamstring Curls",3,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Standing Calf Raises",3,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Flat Barbell Bench Press",4,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Standing Barbell Shoulder Press",4,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Incline Barbell Bench Press",4,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Dumbbell Side Lateral Raise",4,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Rope Pushdowns",4,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Overhead Dumbbell Extension",4,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Shrugs",4,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Barbell Rows",5,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Lat Pulldowns",5,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Face-pulls",5,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Barbell Bicep Curls",5,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Hammer Curls",5,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Squats",6,1);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Leg Extensions",6,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Hamstring Curls",6,2);
insert into exercises (routineID,exerciseName,dayID,exerciseType) VALUES (1,"Standing Calf Raises",6,2);
create table routines (routineID INT NOT NULL AUTO_INCREMENT,
userID INT NOT NULL,
routineName VARCHAR(55) NOT NULL,
PRIMARY KEY (routineID));

insert into routines (routineName,userID) VALUES ("Coolcicada's PPL",1);
insert into routines (routineName,userID) VALUES ("Bro Split",2);
