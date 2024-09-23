INSERT INTO users (email, name, access_type)
VALUES
('profx@gmail.com', 'Prof. X', 'Professor'),
('studenta@gmail.com', 'Student A', 'Student'),
('visitinglecturer@gmail.com', 'Visiting Lecturer', 'Professor'),
('trombonestudio@gmail.com', 'Trombone Studio', 'Professor');

INSERT INTO events (title, event_location, creator_id, event_description, confirmation, event_type, start_time, end_time)
VALUES
('Prof. X Lesson', 'Room 101', 1, 'This is a lesson with Prof. X', 'Confirmed', 'lesson', '2024-09-24 17:00', '2024-09-24 18:00'),
('Student Recital', 'Room 101', 2, 'This is a recital with Student A', 'Confirmed', 'recital', '2024-09-25 17:00', '2024-09-25 18:00'),
('Prof. X Lesson', 'Room 101', 1, 'This is a lesson with Prof. X', 'Confirmed', 'lesson', '2024-09-24 17:00', '2024-09-24 18:00'),
('Masterclass', 'Room 101', 3, 'This is a masterclass with Visiting Lecturer', 'Unconfirmed', 'masterclass', '2024-03-23 17:00', '2024-03-23 18:00'),
('Studio Class', 'Room 101', 4, 'This is a studio class with Trombone Studio', 'Confirmed', 'studio class', '2024-09-24 17:00', '2024-09-24 18:20'),
('Studio Class', 'Room 101', 4, 'This is a studio class with Trombone Studio', 'Confirmed', 'studio class', '2024-09-24 17:00', '2024-09-24 18:20'),
('Studio Class', 'Room 101', 4, 'This is a studio class with Trombone Studio', 'Confirmed', 'studio class', '2024-09-24 17:00', '2024-09-24 18:20');

INSERT INTO event_participants (event_id, participant_id)
VALUES
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2);