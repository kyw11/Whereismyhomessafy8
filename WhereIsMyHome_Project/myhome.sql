use ssafymyhome;

CREATE TABLE IF NOT EXISTS `noticeboard` (
  `textNumber` Int NOT NULL,
  `noticetitle` VARCHAR(100) NOT NULL,
  `writer` VARCHAR(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  `see` int NOT NULL,
  PRIMARY KEY (`textNumber`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `userinfo` (
  `id` VARCHAR(20) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `name` VARCHAR(10) NOT NULL,
  `address` varchar(50) NOT NULL,
  `phonenumber` varchar(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

select *
from noticeboard;

select *
from userinfo;

