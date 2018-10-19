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

alter table houses add column image_url text default 'https://img.freepik.com/free-vector/pack-of-colorful-houses_23-2147776364.jpg?size=338&ext=jpg';
alter table houses add column monthly_mortgage integer default 0;
alter table houses add column desired_rent integer DEFAULT 0;