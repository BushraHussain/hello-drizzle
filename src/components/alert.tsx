
export default function Alert(props:any){
    return(
        <div
            className="mb-4 w-96 border border-green-300 rounded-lg bg-green-100 px-6 py-5 text-base text-success-700">
            {props.msg}
        </div>
    )
}




