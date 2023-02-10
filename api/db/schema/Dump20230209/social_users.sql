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
  `coverPic` varchar(100) DEFAULT NULL,
  `profilePic` varchar(100) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test@gmail.com','$2b$10$f2a5EOFI9F5ONRIRyIr7xesEVliW1dtGpATlAhZqj4MK8X9lIsuhm','John Doe',NULL,NULL,NULL,NULL),(2,'bf','test@test.com','$2b$10$/59iako2Mq9O9Lz8sVywE.AjOr81g.NPi9Yf//8WRhiGgKW7vclWi','b',NULL,NULL,NULL,NULL),(3,'bf2','test1@test.com','$2b$10$oXWrnsGL4a35aeIdq1TEG.2K5d4lHRETufuYWnywW.0qrYnMo0n42','b2',NULL,NULL,NULL,NULL),(4,'lebron','lbj@lbj.com','$2b$10$VguO68T07ucYTNKRzUunSuIgvJow2TLLxzgQbvH/C0g/nz870LKle','lbj',NULL,NULL,NULL,NULL),(5,'destiney47','delpha94@example.net','22c6f1e949e63e4297e9b14faaf743274c666ab3','autem',NULL,NULL,NULL,NULL),(6,'strosin.kelsi','myrtle62@example.net','4a6db7bafe92dc2db09ed11da618f2509cb1770c','quia',NULL,NULL,NULL,NULL),(7,'hills.jazmyn','wuckert.rodger@example.org','d3ec99a0b57c4c8c135cdc898236c6338d6c588b','id',NULL,NULL,NULL,NULL),(8,'elenor.kilback','madilyn82@example.com','eba5594b567bb7cd2becf51576e2894db7efe287','ea',NULL,NULL,NULL,NULL),(9,'lula74','easter.yundt@example.com','b19a429a48a08c70f1208dc2d9c97d3a1de858ad','minima',NULL,NULL,NULL,NULL),(10,'eldred.reinger','eli.frami@example.net','111e8e8234d4d5aeb29db791621bea0bfbf1c1c2','cumque',NULL,NULL,NULL,NULL),(11,'Integer','mollis.lectus@outlook.couk','GOE64ANN7BF','Zia Mcmillan',NULL,NULL,NULL,NULL),(12,'urna.','dictum.sapien@hotmail.couk','BSR06XPB5EC','Kamal Butler',NULL,NULL,NULL,NULL),(13,'a','tellus.suspendisse@outlook.org','NTX32WWC3OS','Charity Henry',NULL,NULL,NULL,NULL),(14,'odio','mauris.sapien@aol.net','LZY27TQE4TW','Kim Ware',NULL,NULL,NULL,NULL),(15,'scelerisque','velit@protonmail.edu','PHL28MMX3EU','Ethan Cain',NULL,NULL,NULL,NULL),(16,'felis','lorem@outlook.org','DXB57CHS5UC','George Rush',NULL,NULL,NULL,NULL),(17,'mollis','neque.et@hotmail.net','TJV63LNR4QR','Armand Fulton',NULL,NULL,NULL,NULL),(18,'ultrices','id.risus.quis@hotmail.net','RKG05SFU6WG','Otto Vargas',NULL,NULL,NULL,NULL),(19,'enim.','sed.id@protonmail.org','OKL10JWA6XL','Charles Avila',NULL,NULL,NULL,NULL),(20,'nec','odio.semper@google.edu','JFS33TTX7QO','Petra Guy',NULL,NULL,NULL,NULL),(21,'hi','hi@gmail.com','$2b$10$aVBqoVQwistXb4XTBbFzyOeP7CQDeYxlOajQOJHo8.JDZ6e.953my','hello',NULL,NULL,NULL,NULL),(22,'bfarah','bfarah@a.com','$2b$10$m0KuEPXMjl7sIbsecAHCseQ2t6IDTInja9voXd5Oqhj.vCnp1QjTa','bfarah',NULL,NULL,NULL,NULL),(23,'borer.melyssa','bell38@example.com','229776e92c24df39f3497271e44d1f219737ef38','ut',NULL,NULL,NULL,NULL),(24,'dessie79','rippin.adah@example.net','036e8ab4601924b6a7ab452fdd9c341be92c815d','minima',NULL,NULL,NULL,NULL),(25,'justine.sipes','frami.amanda@example.com','b3925d8477ed496213bfa484c4e7c94d248cba15','delectus',NULL,NULL,NULL,NULL),(26,'lea.stokes','adolph.frami@example.com','d94f690ff0f969794b1e72e80c239c45160f3978','dolorem',NULL,NULL,NULL,NULL),(27,'wolff.daron','johan.jerde@example.org','25e31cb8b22cf8421f383e37ed0207bff3a9cdac','accusantium',NULL,NULL,NULL,NULL),(28,'jlebsack','wreilly@example.com','7ab502e99d3a637cd33a49a5d942a4e851f605d7','ducimus',NULL,NULL,NULL,NULL),(29,'dfarrell','brady87@example.org','bb25123e5280a8c02596e6f598a586082ed32bcf','sunt',NULL,NULL,NULL,NULL),(30,'scummerata','christop41@example.net','8bc2ba7f80303c634e07c81e671f89bb6799b0c6','ut',NULL,'img1.png',NULL,NULL),(31,'jennyfer61','jermey46@example.com','8450cbf0b38134f87fe36c3700010ac095275472','ipsum',NULL,'img2.jpeg',NULL,NULL),(32,'dion.stokes','dominic.muller@example.org','8fb008132c8bae3eb45af51c49d9dc3e7921ef4f','consectetur',NULL,'img3.jpeg',NULL,NULL),(33,'broderick.rempel','josianne80@example.net','691a86eb32c1f5f6e420bcd29138216ca903fc75','repellat',NULL,'img4.jpeg',NULL,NULL),(34,'wmonahan','cklein@example.org','8593088fc6477939c173269300bfe59ea2c7c879','corporis',NULL,'img5.jpeg',NULL,NULL),(35,'teresa00','linda18@example.org','a3104553b1df9ba00ba53ee567fdcf5d9b1cb280','tempora',NULL,NULL,NULL,NULL),(36,'jerod61','cprosacco@example.org','08001ea4d467b917759659a9ff56dfcb41f3a4c2','quia',NULL,NULL,NULL,NULL),(37,'treutel.timothy','napoleon38@example.com','43134b68d034d48285fb2f19ff1800e614452db5','molestiae',NULL,NULL,NULL,NULL),(38,'syble.glover','ricardo.block@example.net','a4fc451b3dfcd6fd7a17f4ccc0b8bc82d942e425','quo',NULL,NULL,NULL,NULL),(39,'amya.rau','ualtenwerth@example.com','cd1da4984ef926bda621cf5f6c8c507f276816e7','provident',NULL,NULL,NULL,NULL),(40,'tquitzon','vtremblay@example.org','435fccd2639497a9b1b567e58ac540f19b0cd9d3','hic',NULL,NULL,NULL,NULL),(41,'keeling.jaydon','aufderhar.duncan@example.org','6d3b7bac77979a15a73c7e9c9d039a3761bf7b5c','in',NULL,NULL,NULL,NULL),(42,'jessica62','gkoss@example.net','48808f6e131ea26264ca24f723323cde741724ea','tenetur',NULL,NULL,NULL,NULL),(43,'farrell.vernie','zprice@example.org','27626dcfd70341bd5311c7303c546c058bc22ddc','voluptatibus',NULL,NULL,NULL,NULL),(44,'king.monroe','jaden05@example.com','0273ae0c13a2fb1ce644adbc84fbe3b392eb81ba','iure',NULL,NULL,NULL,NULL),(45,'hilll.kayleigh','oruecker@example.org','5effc93bcf3a64b6be0cd38ec9d3e8060e3b6108','cumque',NULL,NULL,NULL,NULL),(46,'bbradtke','lebsack.clifton@example.com','7761e6bb3a4f92eab0343619c80eb604fdc807b1','maxime',NULL,NULL,NULL,NULL),(47,'conn.marcellus','gaylord.eleanora@example.com','22d0bfb00483264272b145774a29dece7065405c','nisi',NULL,NULL,NULL,NULL),(48,'mcdermott.westley','theresia.koepp@example.org','06d2fe44122b7ed3b84560e19b30e721eb3ffb09','et',NULL,NULL,NULL,NULL),(49,'qbashirian','russel.enrique@example.com','cc2e9c46eb398994f350c0e26db6e5bf53645677','omnis',NULL,NULL,NULL,NULL),(50,'fiona63','ztreutel@example.com','9ebbdcd7bf7d4935172057030b80fc1fd2fd72d3','voluptates',NULL,NULL,NULL,NULL);
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

-- Dump completed on 2023-02-09 16:33:53
