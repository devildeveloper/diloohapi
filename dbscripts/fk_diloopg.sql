/*User_data Fk*/
alter table user_data add column fk_user_social_auth int not null;
alter table user_data add column fk_user_person int not null;
alter table user_data add column fk_user_tmp_user int not null;
alter table user_data add column fk_user_reg_info int not null;
/*setting up user_data fk*/
alter table user_data add foreign key(fk_user_social_auth) references social_auth(id);
alter table user_data add foreign key(fk_user_person) references person(id);
alter table user_data add foreign key(fk_user_tmp_user) references tmp_user(id);
alter table user_data add foreign key(fk_user_reg_info) references reg_info(id);
/*Media Fk*/
alter table media add column fk_media_type int not null;
alter table media add column fk_media_message int not null;
/*setting up media fk*/
alter table media add foreign key(fk_media_type) references media_type(id);
alter table media add foreign key(fk_media_message) references message(id)
/*Message fk*/
alter table message add column fk_message_type int not null;
alter table message add column fk_message_ticket int not null;
/*setting up message fk*/
alter table message add foreign key(fk_message_type) references message_type(id);
alter table message add foreign key(fk_message_ticket) references ticket(id);
/*Ticket fk*/
alter table ticket add column fk_ticket_user_data int not null;
alter table ticket add column fk_ticket_employee int null;
alter table ticket add column fk_ticket_area int not null;
/*Setting up ticket fk*/
alter table ticket add foreign key(fk_ticket_user_data) references user_data(id);
alter table ticket add foreign key(fk_ticket_employee) references employee(id);
alter table ticket add foreign key(fk_ticket_area) references area(id);
/*Employee fk*/
alter table employee add column fk_employee_person int not null;
alter table employee add column fk_employee_employee_type int not null;
alter table employee add column fk_employee_company int not null;
/*setting up employee fk*/
alter table employee add foreign key(fk_employee_person) references person(id);
alter table employee add foreign key(fk_employee_employee_type) references employee_type(id);
alter table employee add foreign key(fk_employee_company) references company(id);
/*Area fk*/
alter table area add column fk_area_company int not null;
/*setting up area fk*/
alter table area add foreign key(fk_area_company) references area(id);
/*Company fk*/
alter table company add column fk_company_category int not null;
alter table company add column fk_company_plan int not null;
/*setting up company fk*/
alter table company add foreign key(fk_company_category) references category(id);
alter table company add foreign key(fk_company_plan) references plan(id);
/*Favorite fk*/
alter table favorite add column fk_favorite_company int not null;
alter table favorite add column fk_favorite_user_data int not null;
/*setting up favorite fk*/
alter table favorite add foreign key(fk_favorite_company) references company(id);
alter table favorite add foreign key(fk_favorite_user_data) references user_data(id);
