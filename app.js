let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = 0;
    
    this.info = function() {
        return this.title + " is by " + this.author + " it is " + this.pages + " and you  " + this.returnTextIfRead();
    };

    this.getTitle = function() {
        return this.title;
    }
    
    this.setIndex = function(number) {
        this.index = number;
    };
    
    this.getIndex = function() {
        return this.index;
    };

    this.getRead = function() {
        return this.read;
    }
    
    this.toggleReadStatus = function() {
        this.read = !this.read;
        return this.read;

    };
    
    this.getPages = function() {
        return this.pages;
    };
    
    this.returnTextIfRead = function() {
        if(this.read) {
            return "have read it!";
        }
        else {
            return "have not read it!";
        }
    };

    this.getAuthor = function() {
        return this.author;
    };
}

function getLibrarySize() {
    return myLibrary.length;
}

function addBookToLibrary(book) {
    book.setIndex(getLibrarySize());
    myLibrary.push(book);
}

function updateIndex() {
    for(i = 0; i < myLibrary.length; i++) {
        myLibrary[i].setIndex = i;
    }
}

function addNewBookToLibrary(title, author, pages, read) {
    addBookToLibrary(new Book(title, author, pages, read));
    updateLibrary();
}

function removeBookFromLibrary(index) {
    myLibrary = myLibrary.filter(book => book.getIndex() != index);
    updateIndex();
    updateLibrary();
}

function viewCurrentLibrary() {
    myLibrary.forEach(book => {
        addBookToPage(book);
    });
   
}

function updateLibrary() {
    const row = document.querySelector('.row');
    while(row.firstElementChild!= row.lastElementChild) {
        row.removeChild(row.lastChild);
    }
    viewCurrentLibrary();
   
}

function addBookToPage(book) {
    const row = document.querySelector('.row');
    bookDiv = document.createElement('div');
    cardDiv = document.createElement('div');
    svgDiv = document.createElementNS('http://www.w3.org/2000/svg','svg');
    textSvg = document.createElementNS('http://www.w3.org/2000/svg','text');
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
    textSvg.setAttribute("x", "30%");
    textSvg.setAttribute("y", "50%");
    textSvg.setAttribute("fill", "#eceeef");
    textSvg.setAttribute("dy", ".3em");

    textSvg.textContent = book.getTitle();

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = book.getRead();
    checkbox.addEventListener('click', e=> {
        book.toggleReadStatus();
        e.target.checked = book.getRead();
        checkboxLabel.textContent = "You " + book.returnTextIfRead();
        
    });
    bookDiv.setAttribute('data-index', `${book.getIndex()}`);
    checkboxLabel.textContent = "You " + book.returnTextIfRead();

    bookInfo.textContent = "Written by: " + book.getAuthor();
    // buttonAdd.textContent = "Add";
    buttonRemove.textContent = "Del";
    buttonRemove.setAttribute('data-index', `${book.getIndex()}`);
    buttonRemove.addEventListener('click', e => {
        removeBookFromLibrary(parseInt(e.target.dataset.index));

    })
    smallText.textContent = "Pages: " + book.getPages();

    formCheck.append(checkbox, checkboxLabel);
    buttonGroup.append(buttonRemove);
    buttonsFlex.append(buttonGroup, formCheck, smallText);
    cardBodyDiv.append(bookInfo, buttonsFlex);
    svgDiv.append(rectSvg, textSvg);
    cardDiv.append(svgDiv, cardBodyDiv);
    bookDiv.append(cardDiv);
    row.append(bookDiv);
}

const addBook = document.querySelector('#add');
addBook.addEventListener('click', e=> {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    if(title && author && pages){
        addNewBookToLibrary(title, author, pages, true);
    }
    else {
        alert("Please fill out the entry boxes before adding");
    }
    console.log(myLibrary);
});
const testBook = new Book("Lord of the Things", "Some Guy", "many", true);
addBookToLibrary(testBook);
viewCurrentLibrary();
console.log(myLibrary);