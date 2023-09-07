INSERT INTO profilequestions (questionid, questiontext)
  VALUES (0, 'Something interesting about me that no one expects is...'),
  (1, 'Are there any causes you are really passionate about?'),
  (2, 'Do you have a favorite quote?'),
  (3, 'If you could choose to relive one day, what would it be and why?'),
  (4, 'My love language is...'),
  (5, 'What''s something you''ve always wanted to learn how to do?'),
  (6, 'Do you play any instruments?'),
  (7, 'What was the best concert you''ve been to?'),
  (8, 'If you could jam with any artist, who would it be?');

INSERT INTO users (id, name, birthdate, email, gender, orientation, location, pronouns, bio, questionid1,  questionid2, questionid3, answer1, answer2, answer3, instagram)
  VALUES ('0', 'Jerry', DATE'10-14-2000', 'jerry@example.com', 'M', 'S', 'New York, NY', 'he/him', 'What''s the deal with airplane food?', 0, 1, 2, 'I love long walks on the beach', 'Comedy', 'Newman...', 'jerry'),
  ('1', 'George', DATE'03-13-1977', 'george@example.com', 'M', 'G', 'Grass Valley, CA', 'he/him', 'Big pretzel guy', 2, 1, 3, 'no', 'no', 'yankees opening day, 1994', 'gEoRgE'),
  ('2', 'Elaine', DATE'03-01-2003', 'elaine@example.com', 'F', 'S', 'Seattle', 'she/her', 'I would put an exclamation at the end of all of these sentences!', 1, 2, 3, 'Making fun of George', 'You’re bald! I don’t like this thing! And here’s what I’m doing with it!', 'New Years, 1999', 'lainey'),
  -- ('3', 'Jay Quellin', DATE'11-14-2002', 'jacqueline@example.com', 'F', 'L', 'San Francisco,CA', 'she/her', 'Neighbourhood Friendly Vegan', 1, 3, 0, 'Animal welfare and rights.', 'The day I took a road trip with my closest friends because it was filled with laughter and good memories', 'I used to be a competitive swimmer', 'jaqUeLine'),
  -- ('4', 'Balakay', DATE'05-23-1997', 'blake@example.com', 'M', 'B', 'Chicago', 'He/Him', 'Drake is Mid.', 6, 0, 8, 'Guitar, been playing for years. ', 'I have a collection of over 200 vinyl records.', 'J. Cole', 'blakEEE'),
  -- ('5', 'Dee-Nice', DATE'12-09-1991', 'denise@example.com', 'F', 'B', 'Texas', 'She/Her', 'Coffee Fanatic.',5, 3, 2, 'Write a book ', 'The day I graduated from college.', 'Everything you can imagine is real.- Picasso', 'deniceeee32'),
  -- ('6', 'Ay-Ay-Ron', DATE'01-01-2000', 'aaronofthesky@example.com', 'M', 'S', 'Miami', 'He/Him', 'Absolute Rizzler',0, 4, 7, 'I was born on the first day of the century.', 'Pokemon Cards.', 'K Dot', 'deniceeee32'),
  -- ('7', 'Tymothee', DATE'08-31-1991', 'timoothee@example.com', 'F', 'S', 'Chicago', 'She/Her', 'Bulls for the win.', 5, 0, 8, 'Ride a Bicycle.', 'I know morse code.', 'Uncle Snoop', 'blakEEE'),
  -- ('8', 'Callum Garcia', DATE'1998-10-05', 'callumg@gmail.com', 'M', 'G', 'Santa Cruz', 'they/them', 'Just looking for something super casual, like marriage and children. Nothing serious!', 0, 3, 5, 'I have a pet snake that I call Mr.Noodle', 'The day I adopted Mr.Noodle he''s so cute', 'I gotta learn how to salsa', 'callumthegreat'),
  -- ('9', 'Maggie', DATE'05-02-1994', 'maggie@example.com', 'F', 'S', 'Los Angeles', 'she/her', 'I love spending time with my cat.', 0, 1, 2, 'I speak three languages fluently.', 'Equal rights for everyone.', '"Be the change you want to see in the world." - Gandhi', 'maggiecatlover'),
  -- ('10', 'Chris', DATE'08-17-1988', 'chris@example.com', 'M', 'S', 'San Diego', 'he/him', 'I enjoy hiking and exploring new trails.', 1, 2, 3, 'I am passionate about environmental conservation.', 'The day I completed my first marathon.', 'Music is the soundtrack of your life.', 'chrishiker'),
  -- ('11', 'Nina', DATE'02-14-1995', 'nina@example.com', 'F', 'B', 'Atlanta', 'she/her', 'Im a big fan of all things art and design.', 2, 3, 4, 'The most courageous act is still to think for yourself. Aloud. - Coco Chanel', 'I would relive the day I got my first job offer.', 'Quality time and physical touch', 'nina_artdesign'),
  -- ('12', 'Alex', DATE'12-22-1990', 'alex@example.com', 'M', 'G', 'Boston', 'he/him', 'I love trying new foods and restaurants.', 3, 4, 5, 'The best way to predict the future is to create it. - Abraham Lincoln', 'I have always wanted to learn how to cook Indian cuisine.', 'Playing guitar and drums.', 'alexfoodie'),
  -- ('13', 'Kara', DATE'06-08-1997', 'kara@example.com', 'F', 'L', 'Austin', 'she/her', 'Im a big fan of stand-up comedy.', 4, 5, 6, 'Acts of service', 'The day I met my best friend.', 'Ive been playing piano since I was 7 years old.', 'karastandup'),
  -- ('14', 'Sam', DATE'09-28-1983', 'sam@example.com', 'M', 'S', 'New Orleans', 'he/him', 'Im an avid book reader and collector.', 5, 6, 7, 'I always wanted to learn how to speak French fluently.', 'The best concert Ive been to was a Foo Fighters show.', 'I play the saxophone.', 'samreader'),
  -- ('15', 'Taylor', DATE'11-11-1999', 'taylor@example.com', 'F', 'B', 'Houston', 'she/her', 'I love playing soccer and watching football games.', 6, 7, 8, 'Words of affirmation', 'The day I graduated from high school.', 'I played the clarinet in the school band.', 'taylorsoccerfan'),
  ('16', 'Gary R. Pritchett', DATE'1997-09-10', 'garypritch@gmail.com', 'N', 'B', 'Santa Cruz', 'they/them', 'I love to collect vintage tables!', 0, 2, 7, '...I love to dance', 'She sells sea shells by the sea shore', 'Harry Styles, Love on Tour', 'garyPrick'),
  ('17', 'Julia Nguyen', DATE'2001-02-13', 'julian@gmail.com', 'F', 'P', 'Boston', 'she/them', 'Extreme web fanatic. Internet aficionado. Baconaholic.', 6, 8, 4, 'I’ve been playing the guitar for about 12 years', 'Kali Uchis', 'words of affirmation', 'iloveducks');


-- INSERT INTO profilepictures (id, picture1) VALUES ('0', bytea_import('s3://spotify-match/profilepictures/jerry_1.jpg'));

-- INSERT INTO profilepictures (id, picture1) VALUES ('0', pg_read_binary_file('s3://spotify-match/profilepictures/jerry_1.jpg'));

-- INSERT INTO interest (swiperid, swipeeid, liked)
--     VALUES ('0','1', TRUE),
--     ('1', '0', TRUE),
--     ('0', '2', TRUE),
--     ('0', '3', TRUE),
--     ('3', '0', TRUE),
--     ('2', '0', TRUE);

