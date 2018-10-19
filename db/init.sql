drop table if exists houses;
create table if not exists houses (
house_id serial primary key not null,
name text, 
address text, 
city text, 
state TEXT,
zip INTEGER
);
insert into houses (name,address,city,state,zip) 
values ('TownHouse', '1608 85th ave', 'Oakland', 'CA', 94600);
select * from houses