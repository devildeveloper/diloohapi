/*unique keys*/
alter table social_auth add constraint social_auth_token unique(token);
alter table person add constraint person_email_unique unique(email);
alter table user_data add constraint user_data_phone_unique unique(phone);
alter table plan add constraint plan_name_unique unique(name);
alter table company add constraint company_name_unique unique(name);
alter table company add constraint company_ruc_unique unique(ruc);
alter table company add constraint company_image_unique unique(image); 

/*primary keys*/
alter table social_auth add primary key(id);
alter table plan add primary key(id);
alter table reg_info add primary key(id);
alter table ticket add primary key(id);
alter table tmp_user add primary key(id);
alter table user_data add primary key(id);
alter table area add primary key(id);
alter table category add primary key(id);
alter table company add primary key(id);
alter table employee add primary key(id);
alter table employee_type add primary key(id);
alter table favorite add primary key(id);
alter table media add primary key(id);
alter table media_type add primary key(id);
alter table message add primary key(id);
alter table message_type add primary key(id);
alter table person add primary key(id);