

const Shimmer = () => {
    return (
        <>
            <div className="grid grid-cols-6">
                <div className="col-start-4 col-span-2">
                    <div className="w-full h-7 bg-slate-200 rounded-lg"></div>
                </div>
                <div className="col-start-2 col-span-4" >
                    <div className="grid grid-cols-4">
                        {
                            Array(12).fill("").map((e, index) => {
                                return (
                                    <div className="p-2 m-2 rounded-lg shadow-lg w-full h-64" key={index}>
                                        <div className="w-full h-40 bg-slate-200 my-3  rounded-lg"></div>
                                        <h1 className="px-2 bg-slate-200 w-36 h-3 my-1"></h1>
                                        <h1 className="px-2 bg-slate-200 w-20 h-3"></h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shimmer;