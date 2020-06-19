CREATE TABLE `categoryTable` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE INDEX `no_UNIQUE` (`no` ASC) VISIBLE,
  UNIQUE INDEX `category_UNIQUE` (`category` ASC) VISIBLE);