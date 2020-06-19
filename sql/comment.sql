CREATE TABLE `commentTable` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `post_no` INT NOT NULL,
  `id` VARCHAR(20) NOT NULL,
  `comment_create_time` DATETIME NOT NULL,
  `comment_revision_time` DATETIME NOT NULL,
  `commnet_delete_time` DATETIME NULL,
  `comment_body` VARCHAR(100) NULL,
  `comment_answer` INT NOT NULL,
  PRIMARY KEY (`no`),
  UNIQUE INDEX `no_UNIQUE` (`no` ASC) VISIBLE);