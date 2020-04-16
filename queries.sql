create database codeshop;
show databases;
create table users (userid int auto_increment, email varchar(100), password varchar(500), role varchar(20), active bool, primary key(userid));
describe users;
create table sessions (sessionid int auto_increment, tokenid varchar(2000), userid int, ttl datetime, primary key(sessionid), foreign key(userid) references users(userid) on delete cascade);
create table categories (categoryid int auto_increment, category_name varchar(100), primary key(categoryid));
describe categories;
create table items (itemid int auto_increment, sellerid int, categoryid int, title varchar(200), description varchar(1000), display_image varchar(1000), code_path varchar(1000), price float, primary key(itemid), foreign key(sellerid) references users(userid) on delete cascade, foreign key(categoryid) references categories(categoryid) on delete cascade);
describe items;
