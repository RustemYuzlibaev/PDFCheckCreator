CREATE TABLE printer
(
    id SERIAL PRIMARY KEY,
    name CHARACTER(32),
    api_key CHARACTER(32),
    check_type CHARACTER(16),
    point_id INTEGER
);