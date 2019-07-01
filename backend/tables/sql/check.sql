CREATE TABLE check 
(   
    id SERIAL PRIMARY KEY,
    type CHARACTER(16),
    order JSON,
    status CHARACTER(16), 
    pdf_file CHARACTER(64),
    FOREIGN KEY printer_id REFERENCES printer(id)
)