--Create Address Table
--CREATE TABLE Addresses(AddressID SERIAL PRIMARY KEY, HouseNumber INTEGER, StreetName VARCHAR(50), City VARCHAR(15), State VARCHAR(10), Zip INTEGER); 

--Create Admin Table
CREATE TABLE Admin(AdminID SERIAL PRIMARY KEY, Fname VARCHAR(30) NOT NULL, Lname VARCHAR(30) NOT NULL, Username VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL); 

--Create Author Table
CREATE TABLE Authors(AuthorID SERIAL PRIMARY KEY, Fname VARCHAR(30) NOT NULL, MidInit CHAR NOT NULL, Lname VARCHAR(30) NOT NULL, Affiliation VARCHAR(20) NOT NULL, Department VARCHAR(30) NOT NULL, 
PhoneNumber INTEGER(10) NOT NULL, Email VARCHAR(50) NOT NULL, Username VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL); 

--Create Genre Table
CREATE TABLE Genres(GenreID SERIAL PRIMARY KEY, GenreDescription VARCHAR(50)); 

--Create Reviewer Table
CREATE TABLE Reviewers(ReviewerID SERIAL PRIMARY KEY, Fname VARCHAR(30) NOT NULL, MidInit CHAR NOT NULL, Lname VARCHAR(30) NOT NULL, Affiliation VARCHAR(20) NOT NULL, Department VARCHAR(30) NOT NULL, 
PhoneNumber INTEGER(10) NOT NULL, Email VARCHAR(50) NOT NULL, Username VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL, Genre SERIAL REFERENCES Genres); 

--Create Paper Table (NOTE: Later implement a check to where Reviewer.count can only have the same reviewer 3 times for all of papers)
--CREATE TABLE Papers(PaperID SERIAL PRIMARY KEY, Author INTEGER REFERENCES Authors, Genre INTEGER REFERENCES Genres, Title VARCHAR(100), URI VARCHAR(2000) NOT NULL); 
CREATE TABLE Papers(PaperID SERIAL PRIMARY KEY, Author INTEGER REFERENCES Authors, Title VARCHAR(100), URI VARCHAR(10485760), Reviewer INTEGER REFERENCES Reviewers); 

--Create Scoring Table
CREATE TABLE Scoring(ScoringID SERIAL PRIMARY KEY, Paper INTEGER REFERENCES Papers, Reviewer INTEGER REFERENCES Reviewers, Appropriate INTEGER NOT NULL CHECK(Appropriate BETWEEN 1 AND 5), 
Timeliness INTEGER NOT NULL CHECK(Timeliness BETWEEN 1 AND 5), SuppEvidence INTEGER NOT NULL CHECK(SuppEvidence BETWEEN 1 AND 5), TechQuality INTEGER NOT NULL CHECK(TechQuality BETWEEN 1 AND 5), 
ScopeofCoverage INTEGER NOT NULL CHECK(ScopeofCoverage BETWEEN 1 AND 5), CitationofWork INTEGER NOT NULL CHECK(CitationofWork BETWEEN 1 AND 5), Originality INTEGER NOT NULL CHECK(Originality BETWEEN 1 AND 5), 
CommentsonContent INTEGER NOT NULL CHECK(CommentsonContent BETWEEN 1 AND 5), PaperOrg INTEGER NOT NULL CHECK(PaperOrg BETWEEN 1 AND 5), PaperClarity INTEGER NOT NULL CHECK(PaperClarity BETWEEN 1 AND 5), 
MessageClarity INTEGER NOT NULL CHECK(MessageClarity BETWEEN 1 AND 5), Mechanics INTEGER NOT NULL CHECK(Mechanics BETWEEN 1 AND 5), DocumentComments INTEGER NOT NULL CHECK(DocumentComments BETWEEN 1 AND 5), 
Sustainability INTEGER NOT NULL CHECK(Sustainability BETWEEN 1 AND 5), PotentialInterest INTEGER NOT NULL CHECK(PotentialInterest BETWEEN 1 AND 5), CommentsonPotential INTEGER NOT NULL CHECK(CommentsonPotential BETWEEN 1 AND 5), 
OverallRating INTEGER NOT NULL CHECK(OverallRating BETWEEN 1 AND 5), OverallComments VARCHAR(400), WeightedScore INTEGER); 

--Insert Values into Genre Table
INSERT INTO Genres(GenreDescription) VALUES ('Analysis of Algorithms'); 
INSERT INTO Genres(GenreDescription) VALUES ('Applications'); 
INSERT INTO Genres(GenreDescription) VALUES ('Architecture'); 
INSERT INTO Genres(GenreDescription) VALUES ('Artificial Intelligence'); 
INSERT INTO Genres(GenreDescription) VALUES ('Computer Engineering'); 
INSERT INTO Genres(GenreDescription) VALUES ('Curriculum'); 
INSERT INTO Genres(GenreDescription) VALUES ('Data Structures'); 
INSERT INTO Genres(GenreDescription) VALUES ('Distance Learning'); 
INSERT INTO Genres(GenreDescription) VALUES ('Distributed Systems'); 
INSERT INTO Genres(GenreDescription) VALUES ('Ethical Societal Issues'); 
INSERT INTO Genres(GenreDescription) VALUES ('First Year Computing'); 
INSERT INTO Genres(GenreDescription) VALUES ('Gender Issues'); 
INSERT INTO Genres(GenreDescription) VALUES ('Grant Writing'); 
INSERT INTO Genres(GenreDescription) VALUES ('Graphics Image Processing'); 
INSERT INTO Genres(GenreDescription) VALUES ('Human Computer Interaction'); 
INSERT INTO Genres(GenreDescription) VALUES ('Laboratory Environments'); 
INSERT INTO Genres(GenreDescription) VALUES ('Literacy'); 
INSERT INTO Genres(GenreDescription) VALUES ('Mathematics in Computing'); 
INSERT INTO Genres(GenreDescription) VALUES ('Multimedia'); 
INSERT INTO Genres(GenreDescription) VALUES ('Networking/Data Communication'); 
INSERT INTO Genres(GenreDescription) VALUES ('Non-Major Courses'); 
INSERT INTO Genres(GenreDescription) VALUES ('Object Oriented Issues'); 
INSERT INTO Genres(GenreDescription) VALUES ('Operating Systems'); 
INSERT INTO Genres(GenreDescription) VALUES ('Parallel Processing'); 
INSERT INTO Genres(GenreDescription) VALUES ('Pedagogy'); 
INSERT INTO Genres(GenreDescription) VALUES ('Programming Languages'); 
INSERT INTO Genres(GenreDescription) VALUES ('Research'); 
INSERT INTO Genres(GenreDescription) VALUES ('Security'); 
INSERT INTO Genres(GenreDescription) VALUES ('Software Engineering'); 
INSERT INTO Genres(GenreDescription) VALUES ('Systems Analysis and Design'); 
INSERT INTO Genres(GenreDescription) VALUES ('Using Technology in the Classroom'); 
INSERT INTO Genres(GenreDescription) VALUES ('Web and Internet Programming'); 

