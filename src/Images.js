// import React, { useState, useEffect } from "react";
// import Pagination from "react-paginate";
// import axios from "axios";
// // import { useState, useEffect } from "react";
// // import ReactPaginate from 'react-paginate';

// // export default function Images (props) {
// //     const {data} = props
// // const itemsPerPage = 6

// //   const [itemOffset, setItemOffset] = useState(0);

// //   useEffect(() => {
// //     const endOffset = itemOffset + itemsPerPage;
// //   const currentItems = data.slice(itemOffset, endOffset);
// //   const pageCount = Math.ceil(data.length / itemsPerPage);

// //   }, [itemOffset, setItemOffset, data])

// //   const handlePageClick = (event) => {
// //     const newOffset = (event.selected * itemsPerPage) % data.length;

// //     setItemOffset(newOffset);
// //   };

// //   return (
// //     <>

// //       <ReactPaginate
// //         breakLabel="..."
// //         nextLabel="next >"
// //         onPageChange={handlePageClick}
// //         pageRangeDisplayed={5}
// //         pageCount={pageCount}
// //         previousLabel="< previous"
// //         renderOnZeroPageCount={null}
// //       />
// //     </>
// //   );
// // }

// const Images = () => {
//   const [page, setPage] = useState(1);
//   const [perPage] = useState(10);
//   const [data, setData] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         `https://api.example.com/endpoint?page=${page}&per_page=${perPage}`
//       );
//       setData(response.data.results);
//       setTotalPages(response.data.total_pages);
//     };
//     fetchData();
//   }, [page, perPage]);

//   const handlePageChange = (page) => {
//     setPage(page.selected + 1);
//   };

//   return (
//     <div>
//       {data.map((item) => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//       <Pagination
//         pageCount={totalPages}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageChange}
//         containerClassName={"pagination"}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// };

// export default Images;

// <div className="contents">
// <ui>
//   {/* <UserDetails data={name} /> */}
//   {isLoading ? (
//     <div className="loader"></div>
//   ) : (
//     nameList.map((name, index) => name)
//   )}

//   {names?.map((name) => (
//     <div class="card">
//       <div class="card_background_img"></div>
//       <div class="card_profile_img"></div>
//       <div class="user_details">
//         <h3>Gordon Ramsay</h3>
//         <p>Master Chef</p>
//       </div>
//       <div class="card_count">
//         <div class="count">
//           <div class="fans">
//             <h3>2.4M</h3>
//             <p>Fans</p>
//           </div>
//           <div class="following">
//             <h3>202</h3>
//             <p>Followings</p>
//           </div>
//           <div class="post">
//             <h3>552</h3>
//             <p>Posts</p>
//           </div>
//         </div>
//         <div class="btn">Follow</div>
//       </div>
//     </div>
//   ))}
// </ui>
// </div>
