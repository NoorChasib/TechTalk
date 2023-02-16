CREATE DATABASE  IF NOT EXISTS `social` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `social`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: social
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `postId_idx` (`postId`),
  KEY `commentUserId_idx` (`userId`),
  CONSTRAINT `commentUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `postId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'fdh','2023-02-06 21:26:28',53,54),(6,'rett','2023-02-07 09:32:19',51,68),(7,'erttert','2023-02-07 09:35:38',51,69),(8,'tert','2023-02-07 09:35:50',51,70),(9,'rytry','2023-02-07 09:40:36',51,69),(10,'','2023-02-07 09:40:37',51,69),(11,'rtyrty','2023-02-07 09:40:38',51,69),(12,'rtyrty','2023-02-07 09:40:43',51,69),(13,'rtyt','2023-02-07 09:40:46',51,70),(14,'','2023-02-07 09:40:47',51,70),(15,'','2023-02-07 09:40:47',51,70),(16,'rtytrytry','2023-02-07 09:40:48',51,70),(17,'rtyrty','2023-02-07 09:40:54',51,71),(18,'rtyrty','2023-02-07 09:40:55',51,71),(19,'rty','2023-02-07 09:40:58',51,69),(20,'yyyy','2023-02-07 09:41:02',51,71),(21,'yyy','2023-02-07 09:41:10',51,68),(22,'yyy','2023-02-07 09:41:12',51,69),(23,'tttt','2023-02-07 09:41:17',51,71),(24,'sdfds','2023-02-07 12:54:39',54,78),(25,'sdfdsf','2023-02-07 12:54:40',54,78),(26,'sdfdsf','2023-02-07 12:54:41',54,78),(27,'fghjfgh','2023-02-07 12:56:08',54,77),(28,'fghfgh','2023-02-07 12:56:11',54,77),(29,'dsfgsdg','2023-02-07 14:33:27',53,79),(30,'tryrt','2023-02-07 14:53:39',53,79),(31,'rtyrt','2023-02-07 14:53:40',53,79),(32,'wee','2023-02-07 14:53:42',53,79),(33,'rrrr','2023-02-07 14:53:46',53,62),(34,'rrrrr','2023-02-07 14:53:48',53,62),(35,'bbcvb','2023-02-07 14:57:12',53,59),(36,'bvcbcvb','2023-02-07 14:57:16',53,56),(37,'cvbcvbcv','2023-02-07 14:57:20',53,55),(38,'cvbcvbcv','2023-02-07 14:57:27',53,57),(39,'sdffs','2023-02-07 15:26:50',53,80),(40,'sdfsdf','2023-02-07 15:26:53',53,80),(41,'sdfsdf','2023-02-07 15:26:56',53,80),(42,'sdff','2023-02-07 15:27:04',53,62),(43,'sdf','2023-02-07 15:27:11',53,79),(44,'','2023-02-07 15:27:15',53,57),(45,'sdfsdf','2023-02-07 15:27:16',53,57),(46,'sdf','2023-02-07 15:27:20',53,56),(47,'sdf','2023-02-07 15:27:22',53,55),(48,'sdfsdf','2023-02-07 16:50:46',53,60),(49,'gdfg','2023-02-07 23:50:47',53,80),(50,'dfgdgdfgdfgdfgdgdgdfgdfgdgdgdfgdfgdfgdfgdgdfgdfgdfgdfgdfgd','2023-02-08 00:07:39',53,61),(51,'dfgdgdgdfgdgdfgdfgdfgdfgdfgdfgdfgdfg','2023-02-08 00:11:03',53,79),(52,'ssdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf','2023-02-08 00:11:56',53,79),(53,'g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g','2023-02-08 00:13:08',53,61),(54,'g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g g','2023-02-08 00:18:37',53,61),(55,'fdfdgfd','2023-02-08 15:16:45',55,81),(56,'dfgdfg','2023-02-08 15:16:47',55,81),(57,'hdfhrf','2023-02-08 15:17:19',55,81),(58,'fhfgh','2023-02-08 15:17:21',55,81),(59,'fgfgh','2023-02-08 15:17:59',55,81),(60,'gfdg','2023-02-08 15:23:29',55,81),(61,'gbcvb','2023-02-08 15:47:24',55,81),(62,'ghfg','2023-02-08 15:52:17',55,81),(63,'cbcvb','2023-02-08 16:03:26',55,81),(64,'cvb','2023-02-08 16:03:28',55,81),(65,'bcvb','2023-02-08 16:07:39',55,81),(66,'cvb','2023-02-08 16:07:41',55,81),(67,'fghfgh','2023-02-10 13:02:48',71,104),(68,'ddfgdfg','2023-02-10 16:09:40',72,109),(69,'ghgh','2023-02-11 21:32:12',69,111),(70,'cvb','2023-02-11 21:32:37',69,104),(71,'df','2023-02-11 21:36:05',69,104),(72,'f','2023-02-11 21:36:13',69,104),(73,'f','2023-02-11 21:36:18',69,111),(74,'d','2023-02-11 21:47:30',69,111),(75,'d','2023-02-11 21:47:32',69,111),(76,'d','2023-02-11 21:47:39',69,111),(77,'d','2023-02-11 21:50:27',69,111),(78,'ddd','2023-02-11 21:50:30',69,111),(79,'f','2023-02-11 22:31:30',69,114),(80,'f','2023-02-11 22:31:31',69,114),(81,'cx','2023-02-12 00:14:49',69,113),(82,'xc','2023-02-12 00:14:51',69,113),(83,'ggg','2023-02-12 15:20:00',69,114),(84,'ff','2023-02-12 15:20:05',69,113),(85,'fff','2023-02-12 22:08:13',71,104),(86,'fff','2023-02-12 22:08:17',71,103),(87,'fff','2023-02-12 22:08:20',71,103),(88,'','2023-02-12 22:08:20',71,103),(89,'','2023-02-12 22:08:20',71,103),(90,'fff','2023-02-12 22:08:23',71,102),(91,'r','2023-02-12 22:08:29',71,102),(92,'r','2023-02-12 22:08:33',71,101),(93,'hi','2023-02-12 22:26:16',71,115),(94,'fdghh','2023-02-13 13:11:47',71,115),(95,'hh','2023-02-13 13:11:51',71,115),(96,'fgdfgfgd','2023-02-13 21:37:37',69,117),(97,'dfg','2023-02-13 21:37:41',69,117),(98,'fghhf','2023-02-13 21:40:45',83,118),(99,'hi there','2023-02-14 13:24:03',69,129),(100,'gggg','2023-02-14 16:21:19',69,140),(101,'dffddrf','2023-02-14 16:30:07',69,142),(102,'ggg','2023-02-14 16:34:31',69,143),(103,'ffdg','2023-02-14 17:01:58',69,146),(104,'werfwer','2023-02-14 22:28:03',69,69),(105,'werwer','2023-02-14 22:28:13',69,69),(106,'rr','2023-02-14 22:28:16',69,69),(107,'sdd','2023-02-15 01:26:11',69,193),(108,'fdgfgf','2023-02-15 01:28:11',69,190),(109,'fgfg','2023-02-15 01:28:25',69,123),(110,'ffff','2023-02-15 01:57:44',69,203),(113,'google is done??','2023-02-15 10:44:19',86,217),(114,'we\'ll see but it looks crazy right?','2023-02-15 10:52:15',84,217),(115,'so cool!','2023-02-15 11:09:48',84,217),(116,'hey there!','2023-02-16 11:27:01',84,217),(117,'wow so cool','2023-02-16 12:32:05',84,217);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conversations`
--

DROP TABLE IF EXISTS `conversations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `senderId` int NOT NULL,
  `receiverId` int NOT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `receiverUser_idx` (`receiverId`),
  KEY `senderUser_idx` (`senderId`),
  CONSTRAINT `receiverUser` FOREIGN KEY (`receiverId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `senderUser` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversations`
--

LOCK TABLES `conversations` WRITE;
/*!40000 ALTER TABLE `conversations` DISABLE KEYS */;
INSERT INTO `conversations` VALUES (1,69,70,'2023-02-12 01:49:58','2023-02-12 03:29:48'),(2,69,71,'2023-02-12 01:55:47','2023-02-12 03:29:48'),(5,69,75,'2023-02-13 12:53:46',NULL),(6,69,76,'2023-02-13 13:02:15',NULL),(20,69,77,'2023-02-14 21:48:01',NULL),(24,84,85,'2023-02-15 10:10:59',NULL),(28,84,86,'2023-02-16 12:34:58',NULL);
/*!40000 ALTER TABLE `conversations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `likeUserId_idx` (`userId`),
  KEY `likePostId_idx` (`postId`),
  CONSTRAINT `likePostId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likeUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (27,53,61),(30,71,104),(32,69,104),(34,69,111),(36,71,102),(37,71,102),(38,71,102),(39,71,115),(40,69,114),(46,69,117),(48,69,129),(49,69,131),(50,69,140),(51,69,142),(52,69,143),(53,69,145),(54,69,146),(56,69,68),(57,69,69),(58,69,180),(60,69,191),(61,69,191),(62,69,191),(63,69,191),(64,69,191),(67,69,190),(68,69,123),(70,69,97),(71,69,97),(73,69,195),(74,69,195),(79,69,103),(85,86,217),(88,84,216),(90,84,217);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `conversationId` int NOT NULL,
  `sender` int DEFAULT NULL,
  `text` text,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_conversation_id` (`conversationId`),
  CONSTRAINT `fk_conversation_id` FOREIGN KEY (`conversationId`) REFERENCES `conversations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=489 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (445,24,84,'hi bilal','2023-02-15 09:58:01',NULL),(461,24,84,'hi!','2023-02-15 10:19:33',NULL),(462,24,85,'hey there','2023-02-15 10:19:50',NULL),(463,24,85,'hi there','2023-02-15 10:20:32',NULL),(464,24,84,'hi','2023-02-15 10:20:39',NULL),(465,24,84,'hi','2023-02-15 10:22:17',NULL),(466,24,84,'hi there','2023-02-15 10:25:58',NULL),(467,24,85,'hey there','2023-02-15 10:26:10',NULL),(468,24,85,'sup','2023-02-15 10:27:05',NULL),(469,24,84,'sup','2023-02-15 10:27:13',NULL),(473,24,84,'how do you feel about this project?','2023-02-15 10:45:18',NULL),(474,24,85,'I think its going pretty well, what do you think?','2023-02-15 10:45:56',NULL),(475,24,84,'I agree, im excited to share it!','2023-02-15 10:49:04',NULL),(476,24,85,'same!','2023-02-15 10:51:18',NULL),(482,24,84,'are you excited to share it?','2023-02-15 11:03:15',NULL),(483,24,84,'hi how are you','2023-02-15 11:13:17',NULL),(484,24,84,'hey','2023-02-15 12:20:03',NULL),(485,24,84,'hi there','2023-02-16 11:29:56',NULL),(486,24,85,'whats new?','2023-02-16 11:57:03',NULL),(487,24,84,'nothing much you!','2023-02-16 11:57:18',NULL),(488,24,84,'hi there','2023-02-16 12:35:13',NULL);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=221 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (52,'Modi impedit quia ex.',NULL,52,NULL),(53,'dfhdfh','',53,'2023-02-06 21:26:22'),(54,'dfhdfh','',53,'2023-02-06 21:26:24'),(55,'',NULL,53,'2023-02-06 21:29:12'),(56,'cvbcvb','',53,'2023-02-06 21:29:25'),(57,'dfgfdg',NULL,53,'2023-02-06 21:30:03'),(58,'',NULL,53,'2023-02-06 21:30:19'),(59,'',NULL,53,'2023-02-06 21:38:02'),(60,'','',53,'2023-02-06 22:31:00'),(61,'fghgfhfg','',53,'2023-02-06 22:38:20'),(62,'fghfgh','',53,'2023-02-06 22:38:23'),(68,'dfgdfgd','',51,'2023-02-07 09:31:12'),(69,'ertere','',51,'2023-02-07 09:35:34'),(70,'ertertert','',51,'2023-02-07 09:35:43'),(71,'rtyrt','',51,'2023-02-07 09:40:50'),(73,'gdfgdfg','',54,'2023-02-07 12:44:15'),(74,'dfgfdg','',54,'2023-02-07 12:44:17'),(75,'dfgdfg','',54,'2023-02-07 12:44:19'),(76,'sdfsdf','',54,'2023-02-07 12:54:22'),(77,'sdfsdf','',54,'2023-02-07 12:54:25'),(78,'sdfsddsf','',54,'2023-02-07 12:54:29'),(79,'dfgdfg','',53,'2023-02-07 14:31:56'),(80,'dfgfdg','',53,'2023-02-07 15:25:45'),(81,'gdf','',55,'2023-02-08 15:14:00'),(82,'hi','',56,'2023-02-08 21:28:56'),(83,'','1675920542298default-cover-6.jpg',56,'2023-02-08 21:29:02'),(84,'','1675920551301user(1).png',56,'2023-02-08 21:29:11'),(85,'','1675936404664user(1).png',60,'2023-02-09 01:53:24'),(86,'','1675936539846user(1).png',60,'2023-02-09 01:55:39'),(87,'','1675936593472628298_anonym_avatar_default_head_person_icon.png',60,'2023-02-09 01:56:33'),(88,'','1675936601470default-cover-6.jpg',60,'2023-02-09 01:56:41'),(89,'','1675938017018628298_anonym_avatar_default_head_person_icon.png',60,'2023-02-09 02:20:17'),(90,'fghh','',63,'2023-02-09 11:08:33'),(91,'hi there','',64,'2023-02-09 12:48:06'),(92,'hows it going','',64,'2023-02-09 12:48:13'),(93,'','',64,'2023-02-09 12:48:13'),(94,'hi','',65,'2023-02-09 16:48:06'),(95,'hello','',65,'2023-02-09 16:48:09'),(96,'hows it going','',65,'2023-02-09 16:48:16'),(97,'dfghfdg','',69,'2023-02-10 11:17:15'),(98,'fghghf','',69,'2023-02-10 11:17:17'),(99,'fghfgh','',69,'2023-02-10 11:17:18'),(100,'fghgfh','',69,'2023-02-10 11:17:19'),(101,'hfghfgh','',71,'2023-02-10 13:02:31'),(102,'fhgfh','',71,'2023-02-10 13:02:33'),(103,'fgh','',71,'2023-02-10 13:02:36'),(104,'','1676062961816default-banner-background-desktop.jpg',71,'2023-02-10 13:02:41'),(105,'gfhfgh','',72,'2023-02-10 13:32:46'),(106,'fghfgh','',72,'2023-02-10 13:32:47'),(107,'fghfgh','',72,'2023-02-10 13:32:50'),(108,'fghgfh','',72,'2023-02-10 13:32:51'),(109,'fhfgh','',72,'2023-02-10 13:32:53'),(110,'hfgh','',69,'2023-02-11 21:32:06'),(111,'hhhh','',69,'2023-02-11 21:32:08'),(112,'','1676183469255logo.png',69,'2023-02-11 22:31:09'),(113,'df','',69,'2023-02-11 22:31:25'),(114,'g','',69,'2023-02-11 22:31:27'),(115,'yo yo','',71,'2023-02-12 22:26:11'),(116,'fff','',69,'2023-02-13 00:37:05'),(117,'dfgfgdg','',69,'2023-02-13 21:37:31'),(118,'','1676353175907logo.png',83,'2023-02-13 21:39:35'),(119,'vvv','',69,'2023-02-13 23:30:52'),(120,'','1676359860220default-cover-6.jpg',69,'2023-02-13 23:31:00'),(121,'','1676360088515default-banner-background-desktop.jpg',69,'2023-02-13 23:34:48'),(122,'','1676360458847default-cover-6.jpg',71,'2023-02-13 23:40:58'),(123,'','1676360466843logo.png',71,'2023-02-13 23:41:06'),(124,'','1676360476076output-onlinepngtools.png',69,'2023-02-13 23:41:16'),(125,'','1676360942079default-cover-6.jpg',69,'2023-02-13 23:49:02'),(126,'','1676360949117default-banner-background-desktop.jpg',71,'2023-02-13 23:49:09'),(127,'','1676360961707default-cover-6.jpg',69,'2023-02-13 23:49:21'),(128,'','1676361001367output-onlinepngtools.png',69,'2023-02-13 23:50:01'),(129,'','1676361520922logo.png',69,'2023-02-13 23:58:40'),(130,'','1676361527506default-banner-background-desktop.jpg',69,'2023-02-13 23:58:47'),(131,'','1676361561969default-banner-background-desktop.jpg',69,'2023-02-13 23:59:21'),(132,'','1676361577360default-cover-6.jpg',69,'2023-02-13 23:59:37'),(133,'','1676362227288logo.png',69,'2023-02-14 00:10:27'),(134,'ffg','',69,'2023-02-14 16:16:06'),(135,'',NULL,69,'2023-02-14 16:16:13'),(136,'',NULL,69,'2023-02-14 16:16:28'),(137,'',NULL,69,'2023-02-14 16:16:34'),(138,'',NULL,69,'2023-02-14 16:16:57'),(139,'',NULL,69,'2023-02-14 16:18:36'),(140,'fdggfdgf','',69,'2023-02-14 16:21:14'),(141,'',NULL,69,'2023-02-14 16:24:41'),(142,'','1676421000750default-banner-background-desktop.jpg',69,'2023-02-14 16:30:00'),(143,'','1676421266739icon--todo.jpeg',69,'2023-02-14 16:34:26'),(144,'','1676421400494default-cover-6.jpg',69,'2023-02-14 16:36:40'),(145,'','1676422448753default-cover-6.jpg',69,'2023-02-14 16:54:08'),(146,'',NULL,69,'2023-02-14 17:01:25'),(147,'','1676422965989default-cover-6.jpg',69,'2023-02-14 17:02:46'),(148,'','1676433177102default-cover-6.jpg',69,'2023-02-14 19:52:57'),(149,'',NULL,69,'2023-02-14 21:44:00'),(150,'',NULL,69,'2023-02-14 21:44:44'),(151,'','1676439951851logo.png',69,'2023-02-14 21:45:51'),(152,'','1676440414439output-onlinepngtools.png',69,'2023-02-14 21:53:34'),(153,'','1676440422670default-banner-background-desktop.jpg',69,'2023-02-14 21:53:42'),(154,'sdfsdfsdf','',69,'2023-02-14 22:47:15'),(155,'sdfsdfsdf','',69,'2023-02-14 22:47:18'),(156,'sfsd','',69,'2023-02-14 22:47:39'),(157,'sdfsdf','',69,'2023-02-14 22:48:10'),(158,'sdfsdf','',69,'2023-02-14 22:48:13'),(159,'sdfsfffff','',69,'2023-02-14 22:48:16'),(160,'tr5tutyutu','',69,'2023-02-14 22:48:20'),(161,'tyutyu','',69,'2023-02-14 22:48:34'),(162,'tyutu','',69,'2023-02-14 22:48:37'),(163,'ddsdsdsds','',69,'2023-02-14 22:50:16'),(164,'dddd','',69,'2023-02-14 22:50:20'),(165,'sdff','',69,'2023-02-14 22:51:02'),(166,'fffffff','',69,'2023-02-14 22:51:04'),(167,'ffffff','',69,'2023-02-14 22:51:06'),(168,'ssasaa','',69,'2023-02-14 22:51:25'),(169,'fsdfsd','',69,'2023-02-14 23:01:53'),(170,'dssdd','',69,'2023-02-14 23:02:56'),(171,'dddd','',69,'2023-02-14 23:02:58'),(172,'sdsssss','',69,'2023-02-14 23:03:03'),(173,'sddssd','',69,'2023-02-14 23:03:43'),(174,'dddd','',69,'2023-02-14 23:03:46'),(175,'dsdsdssd','',69,'2023-02-14 23:04:04'),(176,'wetwetewt','',69,'2023-02-14 23:04:11'),(177,'ddd','',69,'2023-02-14 23:04:34'),(178,'ssss','',69,'2023-02-14 23:04:37'),(179,'sdsdsd','',69,'2023-02-14 23:06:40'),(180,'ddd','',69,'2023-02-14 23:06:43'),(181,'assasa','',69,'2023-02-14 23:08:25'),(182,'assas','',69,'2023-02-14 23:08:28'),(183,'asasas','',69,'2023-02-14 23:08:31'),(184,'gfgfh','',69,'2023-02-14 23:28:47'),(185,'hey there','',84,'2023-02-15 01:02:24'),(186,'ssasa','',69,'2023-02-15 01:03:53'),(187,'ffdfd','',69,'2023-02-15 01:10:36'),(188,'dsd','',69,'2023-02-15 01:10:54'),(189,'ddd','',69,'2023-02-15 01:11:01'),(190,'hhggh','',69,'2023-02-15 01:12:44'),(191,'ewrwer','',69,'2023-02-15 01:13:54'),(192,'dddd','',69,'2023-02-15 01:25:51'),(193,'sssdsdsdsds','',69,'2023-02-15 01:25:55'),(194,'dddd','',69,'2023-02-15 01:34:58'),(195,'ssss','',69,'2023-02-15 01:37:24'),(196,'fesfdsdf','',69,'2023-02-15 01:38:06'),(197,'zzxxz','',69,'2023-02-15 01:38:43'),(198,'cccc','',69,'2023-02-15 01:55:24'),(199,'xxxcxc','',69,'2023-02-15 01:55:27'),(200,'wewewewe','',69,'2023-02-15 01:55:35'),(201,'eeee','',69,'2023-02-15 01:55:47'),(202,'qw','',69,'2023-02-15 01:56:01'),(203,'fdfdf','',69,'2023-02-15 01:56:45'),(210,'fg','',69,'2023-02-15 02:01:23'),(211,'hi  there','',69,'2023-02-15 09:27:08'),(214,'I love lighthouse labs!','',85,'2023-02-15 10:35:35'),(215,'this is a cool site','',86,'2023-02-15 10:36:00'),(216,'','1676486181118istockphoto-1211068847-612x612.jpg',86,'2023-02-15 10:36:21'),(217,'Bing Chat though?','',85,'2023-02-15 10:42:33'),(220,'hi there!','',84,'2023-02-16 12:31:57');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relationships`
--

DROP TABLE IF EXISTS `relationships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relationships` (
  `id` int NOT NULL AUTO_INCREMENT,
  `followerUserId` int NOT NULL,
  `followedUserId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `followerUser_idx` (`followerUserId`),
  KEY `followedUser_idx` (`followedUserId`),
  CONSTRAINT `followedUser` FOREIGN KEY (`followedUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `followerUser` FOREIGN KEY (`followerUserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relationships`
--

LOCK TABLES `relationships` WRITE;
/*!40000 ALTER TABLE `relationships` DISABLE KEYS */;
INSERT INTO `relationships` VALUES (5,70,69),(27,69,71),(29,71,69),(30,69,70),(37,69,65),(40,69,52),(41,72,59),(42,69,75),(43,69,74),(44,69,51),(45,69,54),(46,69,55),(47,69,61),(48,69,56),(49,75,69),(50,69,76),(51,76,69),(52,77,69),(53,69,77),(54,69,78),(55,78,69),(56,69,79),(57,79,69),(58,80,69),(59,69,80),(60,69,67),(61,69,67),(62,69,67),(63,84,86),(64,84,85),(65,85,84),(66,86,84),(67,69,83),(68,86,85),(69,85,86),(70,84,51),(71,84,54),(72,84,52);
/*!40000 ALTER TABLE `relationships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` varchar(200) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `storyUserId_idx` (`userId`),
  CONSTRAINT `storyUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
INSERT INTO `stories` VALUES (13,'1676482903541photo-1579567761406-4684ee0c75b6.jpg',84),(14,'1676482910258scoring-tech-talent-2022-report-hero-488x636.jpg',84),(15,'16764829210241440x810_cmsv2_da0a19a5-499e-59dc-b662-0fdf628e38f1-7254642.jpg',84),(18,'16765795016041440x810_cmsv2_9db98c7a-d2bc-5b02-90c2-5c29cfa05095-7291036.jpg',84);
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(45) NOT NULL,
  `coverPic` varchar(100) DEFAULT 'default-cover-6.jpg',
  `profilePic` varchar(100) DEFAULT '628298_anonym_avatar_default_head_person_icon.png',
  `city` varchar(45) DEFAULT 'Canada',
  `website` varchar(45) DEFAULT 'compass.com',
  `github` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (51,'test1','test1@email.com','$2b$10$WSQ6.e3CjjtO6EOvhsJAGeGHJEdDLBGUEskQ4.tOVvE9R0SKRv6jW','test1','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Victoria','compass.com',''),(52,'test2','test2@email.com','$2b$10$a9dFvAJSFFmffhtplcEIX.xV.Py61wF7NYTRweJ5x1Fzpk4XRG1lG','test2','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Victoria','compass.com',''),(53,'name1','','$2a$10$q8LGhEw1BTqYU6GAiQ0BpOcMPQYTO0V6Qz0cYFGxN6Yruw5LuqW2C','anme2','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','','',''),(54,'test10','test10@email.com','$2a$10$qrXsxGS65HzmVnkIrpPnQOgsxDbZxB6.Jsz5jsvuFXzzftpffyQcS','test10','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(55,'test6','test6@test6.com','$2a$10$VchcwHdY4mwt98YU0np9X.rPHlbwonpAYkHtQBd2eFINB5eg1snK6','anme3','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','','',''),(56,'test7','test7@test7.com','$2a$10$NcqRjCaBqYbvp/hbqHPKEeTAEfIMcOK0p.S1Gl3cXPityv/qmlXbq','test7','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(57,'test8','test8@test8.com','$2a$10$bjbXpXRFWt0rJwLbMaxlBuHQ5Q/WStfN3FBiILcMYdmaES2ooEGXG','test8','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(58,'test9','test9@test9.com','$2a$10$eJ2g.Twl6UYr1o/.JeNveOSEaFJ/I46q3FzpL3bHXgnEYfn87gCwK','test9','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(59,'1test','1test@1test.com','$2a$10$o8M1Je9GJU2Waoggkqm9iujb08S4H5NFrh/u71k39UowHNzt5Xq7C','1test','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(60,'2test','2test@email.com','$2a$10$nUAzBMo70YczB5zmv.jNZ./XTAVy70idvbszo/VFLcrXsP1Rvrroq','2tester','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(61,'g','','$2a$10$1fxc3teS2Y/tDUQf5/RI7O8sZWmm5dptPiBSbynIgOJnjZyMU.64i','g','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(62,'5test','5test@email.com','$2a$10$1HVs3LH3xqpShbQg5LmHGehjv6iwlaNSW5QSY6HT1TCBEuXImUSd.','5test','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(63,'8test','8test@email.com','$2a$10$8xpzfLPViJLsrnzvcxFGV.UqJ44UPcUaN43UsI2KPJWGB6vq9YU9q','8test','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Victoria','noorchasib.com',''),(64,'10test','10test@10test.com','$2a$10$PDr6neY0lb79REziKBw1w.DrlW3uwZppy3fzcuUQzgRaEEbjiU/YW','10test','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(65,'11test','11test@11test.com','$2a$10$Z5rnJPKuaVyFL68st0Zo2ecJ7jCl1ddLx0X2UNgwh8UxZ57ONQvTO','11test','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(66,'12test','12test@gmail.com','$2a$10$qtfFWoA8Qiz47ptVnzCjs.dIeCzno.DzJdayW27Sz/fDGuYnnEPIK','12test','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(67,'13test','13test@email.com','$2a$10$x4JODeLHJl2VfJ9PR1koRewJ5GsQlSS3lc.ROTiMM117384z8kiQS','13test','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(68,'14test','14test@email.com','$2a$10$/G8ODboxU.SylLHuiOH7EO442tgB5Tx/pQLPfriGyF/TV08uLsSDC','14test','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(69,'John','t1@email.com','$2a$10$CZs2UC.7BitGflwTuoZmj.qZibnKs3D/T6wfd3HKaJ76tRrdfl85.','t1','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Victoria','noorchasib.com',''),(70,'Jane','t2@email.com','$2a$10$Wba3HdMbVOZYLRg1UKgNheQevQq8weu/kOEJSYoalPHKCzJ1Zqr9S','Jane Doe','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(71,'Jimmy','2t@email.com','$2a$10$j0.zWqeEmTFm4oVZkmlRO.0C.eviRpXAnqMkrqSuA.3PTQCMcDyvC','Jimmy Doe','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Victoria','noorchasib.com',''),(72,'1t','1t@1t.com','$2a$10$9eda36Y03Jg2mMgu.7Jqc.rYWjlMeBOIRO2tVciZyPee7VBzjpEqe','1t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Victoria','compass.com',''),(73,'10t','10t@10t.com','$2a$10$/W/E4joeWmHxdBqYJCziiu0C8OCjvevQQ/279XA4gcGw/X63yHSWK','10t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(74,'11t','11t@11t.com','$2a$10$oKIlwVax1LfQBguHyfkljOxtwttFUc5pLfXaEe8QsSz95PWHutbI6','11t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,''),(75,'12t','12t@12t.com','$2a$10$8kef314h5RQ0L6MyIVhpoOvdzO3bcZPu3AXLJ6XfDTPdaa/DennSS','12t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png',NULL,NULL,'noorchasib'),(76,'15t','15t@15t.com','$2a$10$BPzyTcm568wa./dUkhIfUuGJRHXhZNuUtcceC7RNSWT.OpB42BjZm','15t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','noorchasib'),(77,'16t','16t@16t.com','$2a$10$SsjlRSSX129JT58U91JBYuU7B64d4WyOVnplFjwmUmHElGiLPZVYG','16t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','noorchasib'),(78,'18t','18t@18t.com','$2a$10$yvHaQl1D5OTkQUhLuUXvOuXpZKtznSsGjgmS0ZzUllMG81oKe4XUK','18t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','18t'),(79,'19t','19t@email.com','$2a$10$Kb2rjc6F.y9jY/Vs8/pJ4.lzLVLKPQNQ8/qVkIud7T6f.TwaprFnq','19t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','19t'),(80,'20t','20t@email.com','$2a$10$h/yjQoF9Y26lHRwIg2kicu..hUIXveSSr9GWifaTYMRt3gegu3dem','20t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','20t'),(81,'21t','21t@email.com','$2a$10$d1ToOTuRkb3MPcUX8ZcZZ.44VmE/xECECSVCIijIrhmgVm29lqQMq','21t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','21t'),(82,'22t','22t@email.com','$2a$10$SC6j2g0YnS4Zf5Ah5.63Gu/8kteyW//68vMfUmkB2kQN6gYQtovU.','22t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','22t'),(83,'25t','25t@25t.com','$2a$10$SvWSavAUA3cZNADAeqBSnesgBpctW5cNT7C0RUYQtX0fa9F37Dwlm','25t','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','noorchasib'),(84,'Noor','noor@email.com','$2a$10$s5ceMr7v.59duGA8ljWb8.D/TDchChKcCo3zTs0goaptWB1kQmoPq','Noor Chasib','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','noorchasib'),(85,'Bilal','Bilal@email.com','$2a$10$8oabZ0uzZx9QFxzaxUEDnetv7MvS76ilLbPQRNfYkVoFDxZ87esPu','Bilal Farah','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','bilal-of'),(86,'Awo','Awo@email.com','$2a$10$Z87JiVaLaWMUrX.tLLeRHuS5C3t/ZBmyQxEHlwSalCMCU2sbsz7Aq','Awo Moussa','default-cover-6.jpg','628298_anonym_avatar_default_head_person_icon.png','Canada','compass.com','awomoussa ');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-16 13:16:31
