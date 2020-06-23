CREATE TABLE `commenttable` (
  `no` int NOT NULL AUTO_INCREMENT,
  `post_no` int NOT NULL,
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_body` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comment_answer` int NOT NULL,
  `comment_create_time` datetime NOT NULL,
  `comment_revision_time` datetime NOT NULL,
  `commnet_delete_time` datetime DEFAULT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `no_UNIQUE` (`no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci