insert into orders
(order_total)
values
($1)
returning *;


-- different file (create_suborder.sql) below

insert into suborders 
(user_id, knife_id, order_id, quantity)
values
($1, $2, $3, $4);
-- returning *;

select * from orders
join suborders
on orders.id = suborders.order_id 
where id = $1;