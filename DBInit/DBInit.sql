--Create Address Table
CREATE TABLE Address(AddressID SERIAL PRIMARY KEY, HouseNumber INTEGER, StreetName VARCHAR(50), City VARCHAR(15), State VARCHAR(10), Zip INTEGER); 

--Create Author Table
CREATE TABLE Author(AuthorID SERIAL PRIMARY KEY, Fname VARCHAR(30) NOT NULL, MidInit CHAR NOT NULL, Lname VARCHAR(30) NOT NULL, Affiliation VARCHAR(20) NOT NULL, Department VARCHAR(30) NOT NULL, 
AddressID SERIAL REFERENCES Address, PhoneNumber INTEGER NOT NULL, Email VARCHAR(50) NOT NULL, Username VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL); 

--Create Genre Table
CREATE TABLE Genre(GenreID SERIAL PRIMARY KEY, AnalofAlgo BIT, Applications BIT, Architecture BIT, AI BIT, CE BIT, Curriculum BIT, DataStructures BIT, Databases BIT, DL BIT, DistributedSystems BIT, 
EthicalSocietalIssues BIT, FirstYearComputing BIT, GenderIssues BIT, GrantWriting BIT, GIP BIT, HCI BIT, LabEnv BIT, Literacy BIT, MathinComp BIT, Multimedia BIT, NetDataComm BIT, NonMajor BIT, OOI BIT, 
OS BIT, ParallelProcessing BIT, Pedagogy BIT, ProgLang BIT, Research BIT, Security BIT, SE BIT, SysAnalDesign BIT, TechinClass BIT, WebInternetProg BIT, Other VARCHAR(20)); 

--Create Reviewer Table
CREATE TABLE Reviewer(AuthorID SERIAL PRIMARY KEY, Fname VARCHAR(30) NOT NULL, MidInit CHAR NOT NULL, Lname VARCHAR(30) NOT NULL, Affiliation VARCHAR(20) NOT NULL, Department VARCHAR(30) NOT NULL, 
AddressID SERIAL REFERENCES Address, PhoneNumber INTEGER NOT NULL, Email VARCHAR(50) NOT NULL, Username VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL, GenreID SERIAL REFERENCES Genre); 

--Create Paper Table
CREATE TABLE Paper(PaperID SERIAL PRIMARY KEY, AuthorID SERIAL REFERENCES Author, GenreID SERIAL REFERENCES Genre, Title VARCHAR(50), FileName VARCHAR(200) NOT NULL); 

--Create Scoring Table
CREATE TABLE Scoring(ScoringID SERIAL PRIMARY KEY, PaperID SERIAL REFERENCES Paper, ReviewerID SERIAL REFERENCES Reviewer, Appropriate INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), 
Timeliness INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), SuppEvidence INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), TechQuality INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), 
ScopeofCoverage INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), CitationofWork INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), Originality INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), 
CommentsonContent INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), PaperOrg INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), PaperClarity INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), 
MessageClarity INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), Mechanics INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), DocumentComments INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), 
Sustainability INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), PotentialInterest INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), CommentsonPotential INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), 
OverallRating INTEGER NOT NULL CHECK(Rating BETWEEN 1 AND 5), OverallComments VARCHAR(400), WeightedScore INTEGER); 