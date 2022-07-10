--Create Address Table
CREATE TABLE Addresses(AddressID SERIAL PRIMARY KEY, HouseNumber INTEGER, StreetName VARCHAR(50), City VARCHAR(15), State VARCHAR(10), Zip INTEGER); 

--Create Author Table
CREATE TABLE Authors(AuthorID SERIAL PRIMARY KEY, Fname VARCHAR(30) NOT NULL, MidInit CHAR NOT NULL, Lname VARCHAR(30) NOT NULL, Affiliation VARCHAR(20) NOT NULL, Department VARCHAR(30) NOT NULL, 
Address SERIAL REFERENCES Addresses, PhoneNumber INTEGER NOT NULL, Email VARCHAR(50) NOT NULL, Username VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL); 

--Create Genre Table
CREATE TABLE Genres(GenreID SERIAL PRIMARY KEY, AnalofAlgo BIT, Applications BIT, Architecture BIT, AI BIT, CE BIT, Curriculum BIT, DataStructures BIT, Databases BIT, DL BIT, DistributedSystems BIT, 
EthicalSocietalIssues BIT, FirstYearComputing BIT, GenderIssues BIT, GrantWriting BIT, GIP BIT, HCI BIT, LabEnv BIT, Literacy BIT, MathinComp BIT, Multimedia BIT, NetDataComm BIT, NonMajor BIT, OOI BIT, 
OS BIT, ParallelProcessing BIT, Pedagogy BIT, ProgLang BIT, Research BIT, Security BIT, SE BIT, SysAnalDesign BIT, TechinClass BIT, WebInternetProg BIT, Other VARCHAR(20)); 

--Create Reviewer Table
CREATE TABLE Reviewers(ReviewerID SERIAL PRIMARY KEY, Fname VARCHAR(30) NOT NULL, MidInit CHAR NOT NULL, Lname VARCHAR(30) NOT NULL, Affiliation VARCHAR(20) NOT NULL, Department VARCHAR(30) NOT NULL, 
Address SERIAL REFERENCES Addresses, PhoneNumber INTEGER NOT NULL, Email VARCHAR(50) NOT NULL, Username VARCHAR(20) NOT NULL, Password VARCHAR(20) NOT NULL, Genre SERIAL REFERENCES Genres); 

--Create Paper Table
CREATE TABLE Papers(PaperID SERIAL PRIMARY KEY, Author SERIAL REFERENCES Authors, Genre SERIAL REFERENCES Genres, Title VARCHAR(50), FileName VARCHAR(200) NOT NULL); 

--Create Scoring Table
CREATE TABLE Scoring(ScoringID SERIAL PRIMARY KEY, Paper SERIAL REFERENCES Papers, Reviewer SERIAL REFERENCES Reviewers, Appropriate INTEGER NOT NULL CHECK(Appropriate BETWEEN 1 AND 5), 
Timeliness INTEGER NOT NULL CHECK(Timeliness BETWEEN 1 AND 5), SuppEvidence INTEGER NOT NULL CHECK(SuppEvidence BETWEEN 1 AND 5), TechQuality INTEGER NOT NULL CHECK(TechQuality BETWEEN 1 AND 5), 
ScopeofCoverage INTEGER NOT NULL CHECK(ScopeofCoverage BETWEEN 1 AND 5), CitationofWork INTEGER NOT NULL CHECK(CitationofWork BETWEEN 1 AND 5), Originality INTEGER NOT NULL CHECK(Originality BETWEEN 1 AND 5), 
CommentsonContent INTEGER NOT NULL CHECK(CommentsonContent BETWEEN 1 AND 5), PaperOrg INTEGER NOT NULL CHECK(PaperOrg BETWEEN 1 AND 5), PaperClarity INTEGER NOT NULL CHECK(PaperClarity BETWEEN 1 AND 5), 
MessageClarity INTEGER NOT NULL CHECK(MessageClarity BETWEEN 1 AND 5), Mechanics INTEGER NOT NULL CHECK(Mechanics BETWEEN 1 AND 5), DocumentComments INTEGER NOT NULL CHECK(DocumentComments BETWEEN 1 AND 5), 
Sustainability INTEGER NOT NULL CHECK(Sustainability BETWEEN 1 AND 5), PotentialInterest INTEGER NOT NULL CHECK(PotentialInterest BETWEEN 1 AND 5), CommentsonPotential INTEGER NOT NULL CHECK(CommentsonPotential BETWEEN 1 AND 5), 
OverallRating INTEGER NOT NULL CHECK(OverallRating BETWEEN 1 AND 5), OverallComments VARCHAR(400), WeightedScore INTEGER); 