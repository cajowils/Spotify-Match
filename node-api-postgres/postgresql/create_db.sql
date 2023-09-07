DROP SCHEMA spotify_match CASCADE;
CREATE SCHEMA spotify_match;

GRANT USAGE ON schema spotify_match TO public;

GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA spotify_match TO public;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO public;


CREATE TABLE profilequestions (
    questionid INT PRIMARY KEY,
    questiontext VARCHAR(100)
);

CREATE TABLE users (
    id VARCHAR(28) PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR(255) NOT NULL,
    gender CHAR(1) NOT NULL,
    orientation CHAR(1) NOT NULL,
    location VARCHAR(64) NOT NULL,
    pronouns VARCHAR(20),
    bio VARCHAR(500),
    questionid1 INT REFERENCES profilequestions(questionid),
    questionid2 INT REFERENCES profilequestions(questionid),
    questionid3 INT REFERENCES profilequestions(questionid),
    answer1 VARCHAR(255),
    answer2 VARCHAR(255),
    answer3 VARCHAR(255),
    instagram VARCHAR(32)
);

CREATE TABLE profilepictures (
    id VARCHAR(28) PRIMARY KEY REFERENCES users,
    picture1 BYTEA,
    picture2 BYTEA,
    picture3 BYTEA,
    picture4 BYTEA
);

CREATE TABLE userpreferences (
    id VARCHAR(28) PRIMARY KEY REFERENCES users,
    darkmode BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE interest (
    swiperid VARCHAR(28) REFERENCES users(id),
    swipeeid VARCHAR(28) REFERENCES users(id),
    liked BOOLEAN,
    PRIMARY KEY (swiperid, swipeeid)
);

CREATE TABLE topartists (
    userid VARCHAR(28) REFERENCES users(id),
    artistid CHAR(22),
    artistname VARCHAR(64),
    rank INT,
    PRIMARY KEY (userid, artistid)
);

CREATE TABLE toptracks (
    userid VARCHAR(28) REFERENCES users(id),
    trackid CHAR(22),
    trackname VARCHAR(64),
    rank INT,
    PRIMARY KEY (userid, trackid)
);

CREATE TABLE topgenres (
    userid VARCHAR(28) REFERENCES users(id),
    genre VARCHAR(64),
    rank INT,
    PRIMARY KEY (userid, genre)
);

CREATE TABLE spotifydata (
    id VARCHAR(28) PRIMARY KEY REFERENCES users(id),
    acousticness DECIMAL(5, 4),
    danceability DECIMAL(5,4),
    energy DECIMAL(5,4),
    instrumentalness DECIMAL(5,4),
    liveness DECIMAL(5,4),
    speechiness DECIMAL(5,4),
    valence DECIMAL(5,4)
);