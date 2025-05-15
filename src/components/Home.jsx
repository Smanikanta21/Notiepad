import { useContext  , useState, useEffect, useRef } from "react";
import Nav from "./Nav.jsx";
import {Pencil, PencilLine, Trash, MoreVertical, Logs, LayoutGrid} from "lucide-react";
import { db } from "../firebase.js";
import { collection, addDoc, getDoc, onSnapshot } from "firebase/firestore";

function Home() {
    const inputRefs = useRef([]);
    const name = localStorage.getItem("name");
    const[notes, setNotes] = useState([]);
    const[titleSave,settitleSave] = useState(null)
    const [showOptions, setShowOptions] = useState(null);

    const handleLogsClick = () => {
      console.log("Logs icon clicked");

    };

    const handleGridClick = () => {
      console.log("Grid icon clicked");
    };

    const handleRename = (index) => {
      settitleSave(index);
      setTimeout(() => {
        const input = inputRefs.current[index];
        if (input) {
          input.focus();
          input.select();
        }
      }, 0);
    };

    const addNotes = async () => {
      try {
        const newNote = {
          createdat: Date.now(),
          title: ""
        };
        const collectionRef = collection(db, "notes");
        const docRef = await addDoc(collectionRef, newNote);
        console.log("Document added with ID:", docRef.id);
        setNotes(prev => [...prev, { id: docRef.id, ...newNote }]);
      } catch (error) {
        console.error("Error adding note:", error);
      }
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "notes"), (snapshot) => {
            const fetchedNotes = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
            }));
            setNotes(fetchedNotes);
        });

        return () => unsubscribe();
    }, []);

    const deleteNotes = (index) => {
        const confirmed = window.confirm("Are you sure you want to delete this note?");
        if (!confirmed) return;
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    }

    return (
        <>
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-purple-100">
            <div className=" mt-6 font-bold space- h-[95vh] w-[100vw] md:w-[98vw] border rounded-lg shadow-md relative bg-white">
                <div className= "m-8">
                    <div className="flex md:pt-5 md:flex-row gap-4 items-center justify-between mt-9">
                        <div  className="border border-gray-200 w-3/4 mt-12 flex items-center pl-7 lg:h-24">
                            <h1 className="text-3xl md:text-5xl"> Welcome back {name}</h1>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center border border-gray-300 p-2">
                            <Logs size={25} onClick={handleLogsClick} className="pointer"/>
                            <LayoutGrid size={25} onClick={handleGridClick} className="pointer"/>
                        </div>
                    </div>
                    <button className="w-14 h-14 px-4 py-2 absolute bottom-6 right-5 rounded-full bg-blue-500 text-white hover:bg-blue-600 text-3xl" onClick={addNotes}>+</button>
                    <div className="grid md:grid-cols-3 md:h-32 md:
                    gap-3 " onDoubleClick={{}}>
                        {notes.map((note,index)=> (
                            <div key={note.id} className="relative group p-4 mt-6 rounded shadow-md bg-white" autoFocus>
                                <MoreVertical
                                  size={20}
                                  onClick={() => setShowOptions(showOptions === index ? null : index)}
                                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 md:hidden cursor-pointer"
                                />
                                {titleSave === index ? (<input 
                                  ref={(el) => inputRefs.current[index] = el} 
                                  className="rounded-md text-xl font-semibold w-full h-8 border-b-2 p-2 transition-all duration-150 ease-in-out" placeholder="title" value={note.title} 

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
                                {showOptions === index && (
                                  <div className="absolute right-2 top-10 flex flex-col gap-2 bg-white border rounded shadow p-2 z-10 md:hidden">
                                    <div className="flex flex-col justify-center items-center">
                                        <button className="text-blue-600"><Pencil size={16} /></button></div>
                                        <span>edit</span>
                                    <div className="flex flex-col justify-center items-center">
                                        <button className="text-yellow-600" onClick={() => handleRename(index)}><PencilLine size={18} /></button></div>
                                        <span>rename</span>
                                    <div className="flex flex-col justify-center items-center">
                                        <button className="text-red-600" onClick={() => deleteNotes(index)}><Trash size={18} /></button></div>
                                        <span>delete</span>
                                  </div>
                                )}
                                <div className="absolute hidden flex-row md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-3 md:hidden md:group-hover:flex md:flex-row md:gap-2 bg-white border rounded shadow p-2 z-10">
                                    <div className="flex flex-col">
                                        <button className="text-sm text-blue-600 hover:underline items-center flex justify-center hover:shadow-md"><Pencil size={16}/></button>
                                        <span>edit</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <button className="text-sm text-yellow-600 hover:underline items-center flex justify-center hover:shadow-md" onClick={() => handleRename(index)}><PencilLine size={18}/></button>
                                        <span>rename</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <button className="text-sm text-red-600 hover:underline items-center flex justify-center hover:shadow-md" onClick={() => deleteNotes(index)}><Trash size={18}/></button>
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