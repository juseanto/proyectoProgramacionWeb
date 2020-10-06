insert into company
    (id, name)
values
    (-1, 'company1');
insert into company
    (id, name)
values
    (-2, 'company2');
insert into company
    (id, name)
values
    (-3, 'company3');
insert into company
    (id, name)
values
    (-4, 'company4');

insert into employee
    (id, name, age, salary, employer_id)
values
    (-1, 'employee1', 40, 1000, -1);
insert into employee
    (id, name, age, salary, employer_id)
values
    (-2, 'employee2', 20, 2000, -1);
insert into employee
    (id, name, age, salary, employer_id)
values
    (-3, 'employee3', 30, 1500, -1);
insert into employee
    (id, name, age, salary, employer_id)
values
    (-4, 'employee4', 40, 1200, -1);
insert into employee
    (id, name, age, salary, employer_id)
values
    (-5, 'employee6', 50, 1500, -2);
insert into employee
    (id, name, age, salary, employer_id)
values
    (-6, 'employee7', 30, 1800, -2);
insert into employee
    (id, name, age, salary, employer_id)
values
    (-7, 'employee8', 20, 3000, -2);
insert into employee
    (id, name, age, salary, employer_id)
values
    (-8, 'employee9', 20, 2500, -2);

insert into foro
    (id, name, descripcion)
values
    (-1, 'Foro1', 'DescricionForo1');
insert into foro
    (id, name, descripcion)
values
    (-2, 'Foro2', 'DescricionForo2');
insert into foro
    (id, name, descripcion)
values
    (-3, 'Foro3', 'DescricionForo3');
insert into foro
    (id, name, descripcion)
values
    (-4, 'Foro4', 'DescricionForo4');
insert into foro
    (id, name, descripcion)
values
    (-5, 'Foro5', 'DescricionForo5');

insert into tema
    (id, titulo, contenido, foro_id)
values
    (-1, 'Tema1', 'CotenidoTema1', -1);
insert into tema
    (id, titulo, contenido, foro_id)
values
    (-2, 'Tema2', 'CotenidoTema2', -1);
insert into tema
    (id, titulo, contenido, foro_id)
values
    (-3, 'Tema3', 'CotenidoTema3', -1);
insert into tema
    (id, titulo, contenido, foro_id)
values
    (-4, 'Tema4', 'CotenidoTema4', -2);
insert into tema
    (id, titulo, contenido, foro_id)
values
    (-5, 'Tema5', 'CotenidoTema5', -2);
insert into tema
    (id, titulo, contenido, foro_id)
values
    (-6, 'Tema6', 'CotenidoTema6', -4);

insert into comentario
    (id, contenido, tema_id, creador)
values
    (-1, 'Comentario1', -1, 'user');

insert into comentario
    (id, contenido, tema_id, creador)
values
    (-2, 'Comentario2', -1, 'user');

insert into comentario
    (id, contenido, tema_id, creador)
values
    (-3, 'Comentario3', -1, 'user');

insert into comentario
    (id, contenido, tema_id, creador)
values
    (-4, 'Comentario4', -1, 'user');

insert into comentario
    (id, contenido, tema_id, creador)
values
    (-5, 'Comentario5', -1, 'user');
