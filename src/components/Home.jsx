import React from "react";
import { useContext  , useState} from "react";
import Nav from "./Nav.jsx";

function Home() {
    const name = localStorage.getItem("name");
    const[notes, setNotes] = useState([]);
    const[tittleSave,setTittleSave] = useState(null)
    const addNotes = () => {
        const newNotes = () => {
            id:Date.now()
            tittle : ""
        }
        setNotes([...notes,newNotes])
    }


    return (
        <>
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-purple-100">
            <div className=" mt-6 border-[#00000017] h-[85vh] w-[98vw] border rounded-lg border-black shadow-md relative bg-white">
                <div className= "m-8">
                    <div  className="border border-[#00000017] h-20 w-3/4 flex items-center pl-7">
                        <h1 className="text-3xl md:text-5xl"> Welcome back {name}</h1>
                    </div>
                    <button className="w-14 h-14 px-4 py-2 absolute bottom-6 right-5 rounded-full bg-blue-500 text-white hover:bg-blue-600 text-3xl" onClick={addNotes}>+</button>
                    <div className="grid grid-cols-3 h-32 gap-3" onDoubleClick={{}}>
                        {notes.map((note,index)=> (
                            <div key={note.id} className="p-4 mt-6 rounded shadow-md bg-gray-100" autoFocus>
                                {tittleSave === index ? (<input className="rounded-md text-xl font-semibold w-full h-8 border-b-2 p-2 " placeholder="Tittle" value={note.tittle} 

                                onChange={(e) => {
                                    const updatedNotes = [...notes];
                                    updatedNotes[index].tittle = e.target.value
                                    setNotes(updatedNotes)
                                    console.log(setNotes)
                                    }}
                                
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        setTittleSave(null)
                                    }
                                }}/>) : (<p className="text-xl font-semibold w-full cursor-pointer" onClick={() => setTittleSave(index)}>{note.tittle || "untitled"}</p>)}
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