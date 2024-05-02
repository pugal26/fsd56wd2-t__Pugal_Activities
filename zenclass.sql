-- Users

CREATE TABLE users (
    userid INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    useremail VARCHAR(100),
    batchid INTEGER
);

INSERT INTO users(username, useremail, batchid) VALUES
    ("Pugal","pugal@gmail.com",56),
    ("Sasi","sasi@gmail.com",56),
    ("Kanthi","kanthi@gmail.com",56),
    ("Mathi","mathi@gmail.com",56),



-- Codekata

CREATE TABLE codekata (
    userid INTEGER,
    number_of_problems_solved INTEGER,
    FOREIGN KEY (userid) REFERENCES users(userid)
);

INSERT INTO codekata(userid, number_of_problems_solved) VALUES
    (1, 9.4),
    (2, 9.9),
    (3, 9.7),
    (4, 9.6);



-- Requirements

    CREATE TABLE requirements (
    reqid INTEGER AUTO_INCREMENT PRIMARY KEY,
    userid INTEGER,
    req_date DATE,
    company VARCHAR(100),
    FOREIGN KEY (userid) REFERENCES users(userid)
);

INSERT INTO requirements(userid, req_date, company) VALUES
    (1, "2024-04-05", "Amazon"),
    (2, "2024-05-18", "Zoho"),
    (3, "2024-03-15", "Zomato"),
    (4, "2024-04-30", "TCS");



-- Mentors

CREATE TABLE mentors (
    mentorid INTEGER AUTO_INCREMENT PRIMARY KEY,
    mentorname VARCHAR(100),
    mentorat VARCHAR(100)
);

INSERT INTO mentors(mentorname, mentorat) VALUES
    ("Ram", "TCS"),
    ("Ramu", "Wipro"),
    ("Ramesh", "Zoho"),
    ("Rajesh", "Amazon");



-- Topics

CREATE TABLE topics (
    topicid INTEGER AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(200),
    topic_date DATE,
    mentorid INTEGER,
    batchid INTEGER,
    FOREIGN KEY (mentorid) REFERENCES mentors(mentorid)
);

INSERT INTO topics(topic, topic_date, mentorid, batchid) VALUES
    ("HTML&CSS - Basics", "2024-04-01", 1, 56),
    ("NodeJS - Basics", "2024-04-03", 2, 56),
    ("JavaScript - Basics", "2024-04-05", 3, 56),
    ("ReactJS - Basics", "2024-04-06", 4, 56);



-- Tasks

CREATE TABLE tasks (
    taskid INTEGER AUTO_INCREMENT PRIMARY KEY,
    topicid INTEGER,
    task VARCHAR(1000),
    batchid INTEGER,
    FOREIGN KEY (topicid) REFERENCES topics(topicid)
);

INSERT INTO tasks(topicid, task, batchid) VALUES
    (1, "HTML&CSS Task", 56),
    (2, "Javascript Task", 56),
    (3, "ReactJS Task", 56),
    (4, "NodeJs Task", 56);



-- Queries
    
CREATE TABLE queries (
    queryid INTEGER AUTO_INCREMENT PRIMARY KEY,
    userid INTEGER,
    querybody VARCHAR(1000),
    mentorid INTEGER,
    FOREIGN KEY (userid) REFERENCES users(userid),
    FOREIGN KEY (mentorid) REFERENCES mentors(mentorid)
);

INSERT INTO queries(userid, querybody, mentorid) VALUES
    (1, "query about HTML&CSS", 1),
    (3, "query about Javascript",3),
    (2, "query about ReactJS", 4),
    (4, "query about NodeJs", 2);
