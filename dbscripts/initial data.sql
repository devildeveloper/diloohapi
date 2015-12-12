insert into category(id,name,status) values (1,'Bancos',true);
insert into plan(id,name,pricing,duration) values(1,'free',0.0,'forever');
insert into company(fk_company_category,fk_company_plan,id,name,image,ruc) 
		values ( 1,1,2, 'BBVA', 'http://www.dilooapp.com/images/bbva.png','10473680888');
insert into company(fk_company_category,fk_company_plan,id,name,image,ruc) 
		values ( 1,1,3, 'BCP', 'http://www.dilooapp.com/images/bcp.png','10473680889');


insert into employee_type(id,name) values (1,'supervisor');
insert into person(id,email,password,firstname,lastname,image) 
		values(1,'maliaga.pantoja@gmail.com','12345678','miguel','aliaga','image');
insert into employee(id,fk_employee_person,fk_employee_employee_type,fk_employee_company)
		values(1,1,1,1)

/*get categories for create company*/
create view get_categories as 
	select id,name from category as c where c.status = true;
/*get plans for create company*/
create view get_plan_01 as 
	select p.id,p.name from plan as p where p.status = true;