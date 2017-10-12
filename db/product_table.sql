CREATE TABLE IF NOT EXISTS knives (
   id SERIAL PRIMARY KEY,
   knife_name VARCHAR(180) NOT NULL,
   description VARCHAR(600) NOT NULL,
   blade_length INTEGER,
   overall_length INTEGER,
   price DECIMAL(7, 2),
   handle_material VARCHAR(180),
   steel_type VARCHAR(180),
   img TEXT
)