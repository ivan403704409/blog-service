-- demo
-- create table c_user_info(
-- uid varchar(30) not null,
-- edu varchar(50),
-- political varchar(50),
-- birth timestamp,
-- jtime timestamp,
-- ctime timestamp default now(),
-- primary key(uid)
-- );
-- comment on table c_user_info is '账户信息表';
-- comment on column  c_user_info.uid is '账户';
-- comment on column c_user_info.edu is '学历';
-- comment on column c_user_info.political is '政治面貌';
-- comment on column c_user_info.birth is '生日';
-- comment on column c_user_info.jtime is '入职时间';


-- 用户表
create table b_user(
	id varchar(30) not null,
	name varchar(30) not null,
	password varchar(255) not null,
	type int not null, -- enum { USER: 1, MANAGER: 2, }
	stat int not null, -- enum { NORMAL: 1, CLOSED: 2 }
	ctime timestamp default now(),
	primary key(id)
);
comment on table b_user is '账户表';
comment on column b_user.id is 'id';
comment on column b_user.name is '账户名';
comment on column b_user.passwd is '密码';
comment on column b_user.type is '账户类型';
comment on column b_user.stat is '账户状态';


-- 标签表
create table b_tag(
	id serial,
	name varchar(30) not null,
	ctime timestamp not null default now(),
	utime timestamp not null,
	primary key(id)
);
comment on table b_tag is '标签表';
comment on column b_tag.id is 'id';
comment on column b_tag.name is '标签名';


-- 文章表


-- 评论表


