CREATE TABLE `t_people` (
  `id_people` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `birth_year` varchar(250) DEFAULT NULL,
  `eye_color` varchar(250) DEFAULT NULL,
  `gender` varchar(250) DEFAULT NULL,
  `hair_color` varchar(250) DEFAULT NULL,
  `height` varchar(250) DEFAULT NULL,
  `skin_color` varchar(250) DEFAULT NULL,
  `homeworld` varchar(250) DEFAULT NULL,
  `films` json DEFAULT NULL,
  `species` json DEFAULT NULL,
  `starships` json DEFAULT NULL,
  `vehicles` json DEFAULT NULL,
  `url` varchar(250) DEFAULT NULL,
  `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `edited` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id_people`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;