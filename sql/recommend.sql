CREATE TABLE `test_projectboard`.`recommendtable` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `post_no` INT NOT NULL,
  `id` VARCHAR(20) NOT NULL,
  `recommend_time` DATETIME NOT NULL,
  `recommend_delete_time` DATETIME NULL,
  PRIMARY KEY (`no`),
  UNIQUE INDEX `no_UNIQUE` (`no` ASC) VISIBLE);