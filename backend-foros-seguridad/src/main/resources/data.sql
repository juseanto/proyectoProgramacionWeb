
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
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-1, 'Tema1', 'CotenidoTema1', '06/10/2020', false, 0, -1);
insert into tema
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-2, 'Tema2', 'CotenidoTema2', '06/10/2020', false, 0, -1);
insert into tema
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-3, 'Tema3', 'CotenidoTema3', '06/10/2020', true, 0, -1);
insert into tema
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-4, 'Tema4', 'CotenidoTema4', '06/10/2020', true, 0, -2);
insert into tema
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-5, 'Tema5', 'CotenidoTema5', '06/10/2020', true, 0, -2);
insert into tema
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-6, 'Tema6', 'CotenidoTema6', '06/10/2020', true, 0, -4);
insert into tema
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-7, 'Tema7', 'CotenidoTema7', '06/10/2020', true, 0, -1);
insert into tema
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-8, 'Tema8', 'CotenidoTema8', '06/10/2020', true, 0, -1);
insert into tema
    (id, titulo, contenido, fecha, aprobado, votos, foro_id)
values
    (-9, 'Tema9', 'CotenidoTema9', '06/10/2020', true, 0, -1);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado, votos)
values
    (-1, 'Comentario1', -1, 'mario', 'pepito', '06/10/2020', true, 0);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado, votos)
values
    (-2, 'Comentario2', -1, 'pedro', 'juan', '06/10/2020', false, 0);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado, votos)
values
    (-3, 'Comentario3', -1, 'navaja', 'chicle', '06/10/2020', true, 0);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado, votos)
values
    (-4, 'Comentario4', -1, 'maria', 'monica', '06/10/2020', true, 0);

insert into comentario
    (id, contenido, tema_id, creador, respuesta, fecha, aprobado, votos)
values
    (-5, 'Comentario5', -1, 'ortegon', 'tiba', '06/10/2020', false, 0);
