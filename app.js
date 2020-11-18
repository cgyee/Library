let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = 0;
    
    this.info = function() {
        return title + " is by " + author + " it is " + pages + " and you  " + this.returnTextIfRead();
    };
    
    this.setIndex = function(number) {
        index = number;
    };
    
    this.getIndex = function() {
        return index;
    };

    this.getRead = function() {
        return read;
    }
    
    this.toggleReadStatus = function() {
        read = !read;
        return read;

    };
    
    this.getPages = function() {
        return pages;
    };
    
    this.returnTextIfRead = function() {
        if(read) {
            return "have read it!";
        }
        else {
            return "have not read!";
        }
    };

    this.getAuthor = function() {
        return author;
    };
}

function getLibrarySize() {
    return myLibrary.length;
}

function addBookToLibrary(book) {
    book.setIndex(getLibrarySize());
    myLibrary.push(book);
}

function addNewBookToLibrary(title, author, pages, read) {
    const newBook = Book(title, author, pages, read);
    addBookToLibrary(newBook);
}

function removeBookFromLibrary(index) {
    myLibrary = myLibrary.filter(book => book.getIndex() == index);
}

function viewCurrentLibrary() {
    const row = document.querySelector('.row');
    /* while(row.firstChild) {
        row.removeChild(row.firstChild);
    } */
    myLibrary.forEach(book => {
        addBookToPage(book);
    });
   
}

function addBookToPage(book) {
    const row = document.querySelector('.row');
    bookDiv = document.createElement('div');
    cardDiv = document.createElement('div');
    svgDiv = document.createElementNS('http://www.w3.org/2000/svg','svg');
    textSvg = document.createElement('text');
    rectSvg = document.createElementNS('http://www.w3.org/2000/svg','rect');
    cardBodyDiv = document.createElement('div');
    bookInfo = document.createElement('p');
    buttonsFlex = document.createElement('div');
    smallText = document.createElement('small');
    buttonGroup = document.createElement('div');
    // buttonAdd = document.createElement('button');
    buttonRemove = document.createElement('button');
    formCheck =  document.createElement('div');
    checkbox = document.createElement('input');
    checkboxLabel = document.createElement('label');
    
    bookDiv.className = "col-md-4";
    cardDiv.className = "card mb-4 shadow-sm";
    svgDiv.className = "bd-placeholder-img card-svg-img";
    cardBodyDiv.className = "card-body";
    bookInfo.className = "card-text";
    buttonsFlex.className = "d-flex justify-content-between align-items-center";
    buttonGroup.className = "btn-group";
    // buttonAdd.className = "btn btn-sm btn-outline-secondary";
    buttonRemove.className = "btn btn-sm btn-outline-secondary";
    formCheck.className = "form-check";
    checkbox.className = "form-check-input";
    checkboxLabel.className = "form-check-label";

    //svgDiv.setAttribute("src", "css/open-book.png")
    svgDiv.setAttribute("width", "100%");
    svgDiv.setAttribute("height", "255");
    // svgDiv.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    rectSvg.setAttribute("width", "100%");
    rectSvg.setAttribute("height", "100%");
    rectSvg.setAttribute("fill", "#55595c");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = book.getRead();
    checkboxLabel.textContent = "You " + book.returnTextIfRead();

    bookInfo.textContent = "Written by: " + book.getAuthor();
    // buttonAdd.textContent = "Add";
    buttonRemove.textContent = "Del";
    smallText.textContent = "Pages: " + book.getPages();

    formCheck.append(checkbox, checkboxLabel);
    buttonGroup.append(buttonRemove);
    buttonsFlex.append(buttonGroup, formCheck, smallText);
    cardBodyDiv.append(bookInfo, buttonsFlex);
    rectSvg.append(textSvg);
    svgDiv.append(rectSvg);
    cardDiv.append(svgDiv, cardBodyDiv);
    bookDiv.append(cardDiv);
    row.append(bookDiv);
}

function toggleReadTextButton() {

}

const testBook = new Book("Lord of the Things", "Some Guy", "many", true);
addBookToLibrary(testBook);
viewCurrentLibrary();
console.log(myLibrary);