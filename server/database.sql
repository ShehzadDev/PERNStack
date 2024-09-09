CREATE DATABASE todoapp;

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  descp VARCHAR(255),
  status VARCHAR(50)
);
