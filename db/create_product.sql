INSERT INTO knives
(knife_name, description, blade_length, overall_length, price, handle_material, steel_type, img)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;