class Book{
	constructor(title,author,publicationYear){
		this.title=title;
		this.author=author;
		this.publicationYear=publicationYear;
	}
	display(){
		console.log(`title ${title}`)
		console.log(`price ${price}`)
		console.log(`publicationYear ${year}`)
	}
}

class Ebook extends Book{
	constructor(title,author,publicationYear,price){
		super(title,author,publicationYear)
		this.price=price;
	}
	display(){
		document.write(`Title of Book is ${this.title} Author is ${this.author} and Released year is ${this.publicationYear} and Price is ${this.price}`)
	}
}

let res=new Ebook("Life","Shashi Tharoor",2000,2120)
res.display()