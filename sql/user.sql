CREATE TABLE `usertable` (
  `no` int NOT NULL AUTO_INCREMENT,
  `id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `posts` int NOT NULL,
  `comments` int NOT NULL,
  `user_create_time` datetime NOT NULL,
  `user_revision_time` datetime NOT NULL,
  `user_delete_time` datetime DEFAULT NULL,
  PRIMARY KEY (`no`),
  UNIQUE KEY `email_UNIQUE` (`id`),
  UNIQUE KEY `no_UNIQUE` (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci