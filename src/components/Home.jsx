import React from "react";
import { useContext  , useState} from "react";
import Nav from "./Nav.jsx";
import {Pencil, PencilLine, Trash} from "lucide-react";

function Home() {
    const name = localStorage.getItem("name");
    const[notes, setNotes] = useState([]);
    const[titleSave,settitleSave] = useState(null)
    const addNotes = () => {
        const newNotes = () => {
            id:Date.now()
            title : ""
        }
        setNotes([...notes,newNotes])
    }

    const deleteNotes = (index) =>{
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    }

    const editNotes = (index) =>{
        const updatedNotes = [...notes];
        updatedNotes[index].title = e.target.value
        
        setNotes(updatedNotes)
    }
    return (
        <>
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-purple-100">
            <div className=" mt-6 font-bold space- h-[95vh] w-[100vw] md:w-[98vw] border rounded-lg shadow-md relative bg-white">
                <div className= "m-8">
                    <div  className="border border-gray-200 w-3/4 mt-12 flex items-center pl-7 lg:h-24">
                        <h1 className="text-3xl md:text-5xl"> Welcome back {name}</h1>
                    </div>
                    <button className="w-14 h-14 px-4 py-2 absolute bottom-6 right-5 rounded-full bg-blue-500 text-white hover:bg-blue-600 text-3xl" onClick={addNotes}>+</button>
                    <div className="grid md:grid-cols-3 md:h-32 md:
                    gap-3 " onDoubleClick={{}}>
                        {notes.map((note,index)=> (
                            <div key={note.id} className="relative group p-4 mt-6 rounded shadow-md bg-white" autoFocus>
                                {titleSave === index ? (<input className="rounded-md text-xl font-semibold w-full h-8 border-b-2 p-2 " placeholder="title" value={note.title} 

                                onChange={(e) => {
                                    const updatedNotes = [...notes];
                                    updatedNotes[index].title = e.target.value
                                    setNotes(updatedNotes)
                                    console.log(setNotes)
                                    }}
                                
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        settitleSave(null)
                                    }
                                }}/>) : (<p className="text-xl font-semibold w-full cursor-pointer" onClick={() => settitleSave(index)}>{note.title || "untitled"}</p>)}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 hidden group-hover:flex flex-row gap-2 bg-white border rounded shadow p-2 z-10">
                                    <div className="flex flex-col">
                                        <button className="text-sm text-blue-600 hover:underline items-center flex justify-center hover:shadow-md"><Pencil size={16}/></button>
                                        <span>edit</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <button className="text-sm text-yellow-600 hover:underline items-center flex justify-center hover:shadow-md" onClick={editNotes}><PencilLine size={18}/></button>
                                        <span>rename</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <button className="text-sm text-red-600 hover:underline items-center flex justify-center hover:shadow-md" onClick={deleteNotes}><Trash size={18}/></button>
                                        <span>delete</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>    
            </div>
        </div>
        </> 
    );
}
export default Home