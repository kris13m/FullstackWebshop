-- block
CREATE TABLE items(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    imageLink TEXT,
    price DECIMAL(10, 2),
    reviewScore DECIMAL(2, 1),
    reviewcount MEDIUMINT UNSIGNED,
    amountInStock MEDIUMINT UNSIGNED
)

-- @block
INSERT INTO items (name, description, imageLink, price, reviewScore, reviewcount, amountInStock) VALUES
('fly swatter', 'a fly swatter to swat flies', 'https://danishagroshoppen.dk/Admin/Public/GetImage.ashx?width=400&height=400&crop=0&Compression=75&DoNotUpscale=true&image=/Files/Images/Ecom/Products/932701010-fluesm%C3%A6kker%20plast.jpg', 12.99, 4.6, 519, 5)