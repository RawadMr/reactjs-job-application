CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    date_of_birth TEXT,
    job_title TEXT,
    department TEXT,
    salary REAL,
    start_date TEXT,
    end_date TEXT,
    photo_path TEXT, 
    cv_path TEXT, 
    id_path TEXT
);
CREATE TABLE timesheets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER NOT NULL,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,
    summary TEXT, 
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);