CREATE TABLE users (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    access_type VARCHAR(50) NOT NULL
);

CREATE TABLE events (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    event_location VARCHAR(255),
    creator_id INT NOT NULL,
    event_description TEXT,
    confirmation VARCHAR(50),
    event_type VARCHAR(50),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    FOREIGN KEY (creator_id) REFERENCES users(id)
);

CREATE TABLE event_participants (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    event_id INT NOT NULL,
    participant_id INT NOT NULL,
    FOREIGN KEY (event_id) REFERENCES events(id),
    FOREIGN KEY (participant_id) REFERENCES users(id)
);