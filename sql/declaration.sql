CREATE TABLE `test_projectboard`.`declarationtable` (
  `no` INT NOT NULL,
  `post_no` INT NOT NULL,
  `id` VARCHAR(20) NOT NULL,
  `declaration_body` VARCHAR(100) NOT NULL,
  `declaration_time` DATETIME NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE INDEX `no_UNIQUE` (`no` ASC) VISIBLE);