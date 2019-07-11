CREATE TABLE printer
(
    id SERIAL PRIMARY KEY,
    name CHARACTER(64),
    api_key CHARACTER(64),
    check_type CHARACTER(16),
    point_id INTEGER
);