CREATE TABLE contacts
(
  id INT NOT NULL AUTO_INCREMENT,
  last_name VARCHAR(50) NOT NULL,
  first_name VARCHAR(50),
  birthday DATE,
  CONSTRAINT contacts_pk PRIMARY KEY (id)
);

INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');

// SET fk to other table
ALTER TABLE students ADD adress_id int;
ALTER TABLE students ADD CONSTRAINT fk_adress_id FOREIGN KEY (adress_id) REFERENCES adresses(id);