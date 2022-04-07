import { useSelector } from "react-redux";

export default function ViewModal () {
    const viewlist = useSelector(state => state.contacts.viewlist);
    return(
        <div>
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="ViewModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="text-xl font-medium leading-normal text-gray-800" id="ViewModalLabel">View Contacts</h5>
                <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body relative p-4">
                    name: {viewlist.name}
                </div>
                <div className="modal-body relative p-4">
                    email: {viewlist.email}
                </div>
                <div className="modal-body relative p-4">
                    phone: {viewlist.phone}
                </div>
                <div className="modal-body relative p-4">
                    title: {viewlist.title}
                </div>
                <div className="modal-body relative p-4">
                    created: {viewlist.created_at}
                </div>
                <div className="modal-body relative p-4">
                    updated: {viewlist.updated_at}
                </div>
                 <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button" class="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Close</button>
      </div>
            </div>
            </div>
        </div>
        </div>

    );
}