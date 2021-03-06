# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення бази даних

```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema mcas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mcas` ;
USE `mcas` ;

-- -----------------------------------------------------
-- Table `mcas`.`Service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Service` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(100) NULL,
  `uri` VARCHAR(45) NULL,
  `Service_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Service_Service1_idx` (`Service_id` ASC) VISIBLE,
  CONSTRAINT `fk_Service_Service1`
    FOREIGN KEY (`Service_id`)
    REFERENCES `mcas`.`Service` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mcas`.`DataStreams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`DataStreams` (
  `id` INT NOT NULL,
  `entryPoint` INT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(100) NULL,
  `Service_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_DataStream_Service1_idx` (`Service_id` ASC) VISIBLE,
  CONSTRAINT `fk_DataStream_Service1`
    FOREIGN KEY (`Service_id`)
    REFERENCES `mcas`.`Service` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Sources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Sources` (
  `id` INT NOT NULL,
  `uri` VARCHAR(255) NULL,
  `api_key` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`BeatTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`BeatTypes` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `repo` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Beats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Beats` (
  `id` INT NOT NULL,
  `uri` VARCHAR(255) NULL,
  `source_id` INT NOT NULL,
  `beatType_id` INT NOT NULL,
  `dataStream_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Beat_Source1_idx` (`source_id` ASC) VISIBLE,
  INDEX `fk_Beat_BeatType1_idx` (`beatType_id` ASC) VISIBLE,
  INDEX `fk_Beat_DataStream1_idx` (`dataStream_id` ASC) VISIBLE,
  CONSTRAINT `fk_Beat_Source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `mcas`.`Sources` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Beat_BeatType1`
    FOREIGN KEY (`beatType_id`)
    REFERENCES `mcas`.`BeatTypes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Beat_DataStream1`
    FOREIGN KEY (`dataStream_id`)
    REFERENCES `mcas`.`DataStreams` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Account` (
  `id` INT NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Report`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Report` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(100) NULL,
  `DataStream_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Report_DataStream1_idx` (`DataStream_id` ASC) VISIBLE,
  CONSTRAINT `fk_Report_DataStream1`
    FOREIGN KEY (`DataStream_id`)
    REFERENCES `mcas`.`DataStreams` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`Access`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mcas`.`Access` (
  `id` INT NOT NULL,
  `role` VARCHAR(45) NULL,
  `Account_id` INT NOT NULL,
  `Report_id` INT NOT NULL,
  `Beat_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Access_Account_idx` (`Account_id` ASC) VISIBLE,
  INDEX `fk_Access_Report1_idx` (`Report_id` ASC) VISIBLE,
  INDEX `fk_Access_Beat1_idx` (`Beat_id` ASC) VISIBLE,
  CONSTRAINT `fk_Access_Account`
    FOREIGN KEY (`Account_id`)
    REFERENCES `mcas`.`Account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Report1`
    FOREIGN KEY (`Report_id`)
    REFERENCES `mcas`.`Report` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Access_Beat1`
    FOREIGN KEY (`Beat_id`)
    REFERENCES `mcas`.`Beats` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## SQL-скрипт для початкового наповнення бази даних

```sql
DELETE FROM Sources;
insert into Sources (id, uri, api_key) values (1, 'https://plala.or.jp/interdum.jsp', '2d5598b4-a5fe-438d-9ff6-a86cc1e7e0f3');
insert into Sources (id, uri, api_key) values (2, 'http://businessinsider.com/felis/sed.html', '0e9934f2-fa29-4e0f-b4cb-91534d4305da');
insert into Sources (id, uri, api_key) values (3, 'https://statcounter.com/blandit/nam/nulla/integer.html', '9f8c98e3-aab3-44a5-94f1-01ee71f957af');
insert into Sources (id, uri, api_key) values (4, 'http://wix.com/nisl/duis/ac/nibh/fusce/lacus/purus.aspx', '1204ef7c-b61e-4f0f-aa38-271919ce73df');
insert into Sources (id, uri, api_key) values (5, 'http://delicious.com/lectus/suspendisse/potenti/in/eleifend/quam/a.json', '2a86196b-6740-49f1-9500-480ce16e346e');
insert into Sources (id, uri, api_key) values (6, 'http://un.org/orci/eget.jpg', 'b6c687aa-e3ad-40e7-99a2-3889f214c8f1');
insert into Sources (id, uri, api_key) values (7, 'http://nyu.edu/tincidunt/nulla.js', '36e9ab92-5198-4396-8192-017c6e98efb6');
insert into Sources (id, uri, api_key) values (8, 'http://tinypic.com/ipsum/primis/in/faucibus/orci/luctus/et.html', 'b6d545cc-74ec-4a82-a111-35a4ceea9d92');
insert into Sources (id, uri, api_key) values (9, 'https://ucoz.com/porttitor/pede/justo/eu/massa/donec/dapibus.png', 'c6f4e23d-9c09-41c6-a4c5-aaf443876f1a');
insert into Sources (id, uri, api_key) values (10, 'http://bbc.co.uk/consectetuer/eget/rutrum/at/lorem/integer/tincidunt.png', 'e45a3b1a-6fc2-42a9-a960-3db63585bc3c');

DELETE FROM BeatTypes;
insert into BeatTypes (id, name, description, repo) values (1, 'Silver-backed jackal', 'Asphyx due to being trap in a (discarded) refrig, acc, sqla', 'rymabznqefnghsahsms');
insert into BeatTypes (id, name, description, repo) values (2, 'Dog, raccoon', 'Nondisp transverse fx shaft of r rad, 7thG', 'iuqvdjfufryqgwydmeo');
insert into BeatTypes (id, name, description, repo) values (3, 'Greater flamingo', 'Adverse effect of intravenous anesthetics, initial encounter', 'aifbphamnygeqdemdhd');
insert into BeatTypes (id, name, description, repo) values (4, 'Tiger snake', 'Laceration w foreign body of r mid finger w/o damage to nail', 'cemzwrjyzrragnfxtnu');
insert into BeatTypes (id, name, description, repo) values (5, 'Common nighthawk', 'Complete physeal arrest, left distal femur', 'tpzsvrathifjlxsagnx');
insert into BeatTypes (id, name, description, repo) values (6, 'Western patch-nosed snake', 'Burn 3rd deg mu sites of right shldr/up lmb, except wrs/hnd', 'rbyajqlnhlmfjftsnyh');
insert into BeatTypes (id, name, description, repo) values (7, 'Manatee', 'Disp fx of med phalanx of r less toe(s), 7thD', 'rhykzgkpsihxehexjty');
insert into BeatTypes (id, name, description, repo) values (8, 'Nutcracker, clark''s', 'Unspecified injury of plantar artery of unspecified foot', 'ithwsoyyvfyhyzmwwas');
insert into BeatTypes (id, name, description, repo) values (9, 'North American porcupine', 'Limited mandibular range of motion', 'pezktdjichyktuzzmws');
insert into BeatTypes (id, name, description, repo) values (10, 'Bird, black-throated butcher', 'Conn tiss and disc stenos of intvrt foramin of pelvic region', 'xqjjjfxtmforpyonmiu');

DELETE FROM DataStreams;
insert into DataStreams (id, entryPoint, name, description) values (1, '1', 'Plegadis falcinellus', 'Bypass Left Common Iliac Artery to B Renal A, Open Approach');
insert into DataStreams (id, entryPoint, name, description) values (2, '2', 'Lamprotornis nitens', 'Bypass Ileum to Desc Colon with Autol Sub, Open Approach');
insert into DataStreams (id, entryPoint, name, description) values (3, '6', 'Eolophus roseicapillus', 'Destruction of Bilateral Spermatic Cords, Open Approach');
insert into DataStreams (id, entryPoint, name, description) values (4, '7', 'Choriotis kori', 'Packing of Right Upper Extremity using Packing Material');
insert into DataStreams (id, entryPoint, name, description) values (5, '3', 'Ardea cinerea', 'Revision of Infusion Device in Urethra, External Approach');
insert into DataStreams (id, entryPoint, name, description) values (6, '8', 'Eudyptula minor', 'Revision of Autol Sub in Nose, Perc Approach');
insert into DataStreams (id, entryPoint, name, description) values (7, '4', 'Loris tardigratus', 'Occlusion of R Int Carotid with Intralum Dev, Perc Approach');
insert into DataStreams (id, entryPoint, name, description) values (8, '3', 'Spermophilus tridecemlineatus', 'Drainage of Basal Ganglia with Drain Dev, Perc Approach');
insert into DataStreams (id, entryPoint, name, description) values (9, '3', 'Ovis canadensis', 'Removal of Nonaut Sub from Testis, Via Opening');
insert into DataStreams (id, entryPoint, name, description) values (10, '0', 'Tiliqua scincoides', 'Destruction of Soft Palate, Percutaneous Approach');

DELETE FROM Beats;
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (1, 'https://gravatar.com/ultrices/posuere/cubilia.json', 1, 2, 3);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (2, 'http://paypal.com/pellentesque/eget/nunc/donec/quis.jpg', 2, 3, 4);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (3, 'http://goo.gl/ultrices/libero.png', 3, 4, 5);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (4, 'http://huffingtonpost.com/sollicitudin.jpg', 4, 5, 6);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (5, 'http://youtube.com/leo.jsp', 5, 6, 7);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (6, 'https://flickr.com/vulputate/nonummy/maecenas/tincidunt.jsp', 6, 7, 8);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (7, 'https://examiner.com/aliquam.jsp', 7, 8, 9);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (8, 'https://canalblog.com/gravida.html', 8, 9, 10);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (9, 'https://domainmarket.com/vestibulum/ante/ipsum/primis.html', 9, 10, 1);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (10, 'http://webs.com/nullam/varius.js', 4, 3, 7);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (11, 'http://chron.com/aliquet/maecenas/leo/odio/condimentum/id.xml', 2, 2, 2);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (12, 'http://netvibes.com/nullam/porttitor/lacus/at.jsp', 6, 6, 4);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (13, 'http://bravesites.com/dis/parturient/montes/nascetur/ridiculus/mus/vivamus.jpg', 1, 9, 3);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (14, 'http://dell.com/nisi/venenatis/tristique/fusce/congue.json', 10, 2, 8);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (15, 'https://technorati.com/in/congue/etiam/justo.jsp', 3, 6, 6);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (16, 'http://elegantthemes.com/vel/ipsum/praesent/blandit/lacinia/erat.xml', 7, 2, 9);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (17, 'http://usatoday.com/mattis.jpg', 1, 2, 3);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (18, 'https://dailymail.co.uk/donec/posuere/metus/vitae.js', 6, 7, 2);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (19, 'http://seesaa.net/posuere/felis.png', 9, 1, 5);
insert into Beats (id, url, source_id, beatType_id, dataStream_id) values (20, 'http://mediafire.com/maecenas/pulvinar/lobortis/est/phasellus/sit.json', 5, 7, 9);
```

## RESTfull сервіс для управління даними
[https://github.com/YaroslavEls/media-content-analysis-system/tree/master/src/js](https://github.com/YaroslavEls/media-content-analysis-system/tree/master/src/js)