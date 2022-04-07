import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../store/actions/contactActions";

export default function Pagination () {

    const dispatch = useDispatch();

    const pagination = useSelector(state => state.contacts.pagination);
    const totalPage = Math.ceil(pagination.total/pagination.per_page);
 
    const onPageChange = (newpage) => {

        dispatch(getContacts(newpage));
    }
    return(
   <>
        <div className="flex justify-center">
        <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
            <li className="page-item"><button disabled={pagination.current_page <= 1} onClick={() => onPageChange(pagination.current_page - 1)} className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none" >Previous</button></li>
 
            <li className="page-item"><button disabled={pagination.current_page >= totalPage} onClick={() => onPageChange(pagination.current_page + 1)} className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">Next</button></li>
            </ul>             
        </nav>
        </div>
    </>
    );
}