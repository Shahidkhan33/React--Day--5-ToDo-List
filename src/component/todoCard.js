function TodoCard({ data, handleEdit, handleDelete }) {

    return (
        <div className="col-4">
            <div className="todo-content p-3 border" style={{ backgroundColor: "rgb(204, 245, 211)" }}>
                <h6>Name : {data.todoName}</h6>
                <h6>Description : {data.todoDescription}</h6>

                <h6>Status : <span className='border bg-danger p-1'>{data.status}</span></h6>
                <div className="d-flex justify-content-end mt-5">
                    <button onClick={() => handleEdit(data)} type="button" className="btn-sm btn-success me-3">Edit</button>
                    <button onClick={() => handleDelete(data)} type="button" className="btn-sm btn-warning">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TodoCard;