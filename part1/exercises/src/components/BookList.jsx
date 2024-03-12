export default function BookList() {
   let pageTitle = "Book List:";
   let book1 = "https://yesterdaysmuse.cdn.bibliopolis.com/pictures/2312512.jpg?auto=webp&v=1706726301";
   let book2 = "https://m.media-amazon.com/images/I/81GjCVSEDAL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Chronicle of a Death Foretold" />
         <img src={book2} alt="The Stranger" />
         <img src={book3} alt="Algorithms" />
      </div>      
   );
}
