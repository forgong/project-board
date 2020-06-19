CREATE TABLE `userTable` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `posts` INT NOT NULL,
  `comments` INT NOT NULL,
  `user_create_time` DATETIME NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `no_UNIQUE` (`no` ASC) VISIBLE);