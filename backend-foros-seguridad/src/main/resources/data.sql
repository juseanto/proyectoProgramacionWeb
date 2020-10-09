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
    (id, name, descripcion, moderado)
values
    (-1, 'Foro1', 'DescricionForo1', true);
insert into foro
    (id, name, descripcion, moderado)
values
    (-2, 'Foro2', 'DescricionForo2', true);
insert into foro
    (id, name, descripcion, moderado)
values
    (-3, 'Foro3', 'DescricionForo3', false);
insert into foro
    (id, name, descripcion, moderado)
values
    (-4, 'Foro4', 'DescricionForo4', false);
insert into foro
    (id, name, descripcion, moderado)
values
    (-5, 'Foro5', 'DescricionForo5', false);

insert into tema
    (id, titulo, contenido, fecha, aprobado, foro_id)
values
    (-1, 'Tema1', 'CotenidoTema1', '06/10/2020', false, -1);
insert into tema
    (id, titulo, contenido, fecha, aprobado, foro_id)
values
    (-2, 'Tema2', 'CotenidoTema2', '06/10/2020', false, -1);
insert into tema
    (id, titulo, contenido, fecha, aprobado, foro_id)
values
    (-3, 'Tema3', 'CotenidoTema3', '06/10/2020', true, -1);
insert into tema
    (id, titulo, contenido, fecha, aprobado, foro_id)
values
    (-4, 'Tema4', 'CotenidoTema4', '06/10/2020', true, -2);
insert into tema
    (id, titulo, contenido, fecha, aprobado, foro_id)
values
    (-5, 'Tema5', 'CotenidoTema5', '06/10/2020', true, -2);
insert into tema
    (id, titulo, contenido, fecha, aprobado, foro_id)
values
    (-6, 'Tema6', 'CotenidoTema6', '06/10/2020', true, -4);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado)
values
    (-1, 'Comentario1', -1, 'mario', 'pepito', '06/10/2020', true);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado)
values
    (-2, 'Comentario2', -1, 'pedro', 'juan', '06/10/2020', false);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado)
values
    (-3, 'Comentario3', -1, 'navaja', 'chicle', '06/10/2020', true);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado)
values
    (-4, 'Comentario4', -1, 'maria', 'monica', '06/10/2020', true);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado)
values
    (-5, 'Comentario5', -1, 'ortegon', 'tiba', '06/10/2020', false);
