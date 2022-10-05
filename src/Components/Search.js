// const [categoryList, setCategoryList] = useState([])
// const categoryFetchedRef = useRef(false);


// // fetches the list of genres or categories
// const fetchAPICategories = () => {
//     fetch(`https://api.spotify.com/v1/browse/categories/`, {
//         method: "GET",
//         headers: {
//             'Authorization': 'Bearer ' + authToken,
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         setCategoryList(data.categories)
//     });
// }
// useEffect(() => {
//     if (categoryFetchedRef.current) return;
//     categoryFetchedRef.current = true;
//     fetchAPICategories();
// }, [])